"use client"
import React, { useState, useEffect, useCallback, useRef } from 'react';
import DreamyInput from "@/app/the-actual-components/dreamy-input/DreamyInput";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import RNG from '@/app/the-actual-components/random-number-generator/RandomNumberGenerator'
import { createSHA3, createHMAC, whirlpool, argon2id, sha512 } from 'hash-wasm';
import { ChaCha20 } from 'mipher';
import { encryptSerpent256ECB } from '@/app/cryptographicPrimitives/serpent';
import { useTranslation } from 'react-i18next';

interface FileEncrypterProps {
  file: File | null;
  masterKey: Uint8Array;
  numberOfIterationsForArgon2: number;
  onClose: (result: {
    randomlyGeneratedFileKey: Uint8Array | null;
    fileSalt: Uint8Array | null;
    metadataSalt: Uint8Array | null;
    encryptedFileContent: Uint8Array | null;
    encryptedFilename: Uint8Array | null;
    encryptedDescription: Uint8Array | null;
    encryptedMetadataTag: Uint8Array | null;
    encryptedRecordIntegrityTag: Uint8Array | null;
    isThereAnError: boolean;
    errorMessage: string;
  }) => void;
  isOpen: boolean;
}

const FileEncrypter: React.FC<FileEncrypterProps> = ({ file, masterKey, numberOfIterationsForArgon2, onClose, isOpen }) => {
  const [filename, setFilename] = React.useState(file?.name || "");
  const [description, setDescription] = React.useState("");
  const filenameEntry = useRef<HTMLInputElement>(null);
  const descriptionEntry = useRef<HTMLInputElement>(null);
  const [showRNG, setShowRNG] = useState(false);
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'he';
  const [showProcessingPopup, setShowProcessingPopup] = useState(false);
  const [currentFileName, setCurrentFileName] = useState('');
  const [processingStep, setProcessingStep] = useState('');
  const [processingStepDescription, setProcessingStepDescription] = useState('');
  const [processingProgress, setProcessingProgress] = useState(0);
  const progressContainerRef = useRef<HTMLDivElement>(null);

  const handleContinue = () => {
    if (filenameEntry.current) {
      const filenameValue = filenameEntry.current.value;
      const descriptionValue = descriptionEntry.current ? descriptionEntry.current.value : '';
  
      setFilename(filenameValue);
      setDescription(descriptionValue);
  
      if (filenameValue.trim() !== '') {
        setShowRNG(true);
      } else {
        alert(t('filename-cannot-be-empty'));
        return;
      }
    }
  };  

  const handleCancel = () => {
    onClose({
      randomlyGeneratedFileKey: null,
      fileSalt: null,
      metadataSalt: null,
      encryptedFileContent: null,
      encryptedFilename: null,
      encryptedDescription: null,
      encryptedMetadataTag: null,
      encryptedRecordIntegrityTag: null,
      isThereAnError: false,
      errorMessage: ""
    });
  };  

  const handleRNGClose = async (randomData: Uint8Array) => {
    if (file){
      setShowRNG(false);
      setShowProcessingPopup(true);
      setCurrentFileName(filename);
      toggleProgressAnimation(true);
      setProcessingStep(t('generating-keys'));
      setProcessingStepDescription(t('please_wait'));
      await new Promise(resolve => setTimeout(resolve, 50));
      //console.log('Random Data:', randomData);
      const foldedRandomValue = xorHalvesRepeatedly(randomData, 3);
      const randomArrayLength = foldedRandomValue.length;
      //console.log('Random Data:', foldedRandomValue);
      const newRandomValues = new Uint8Array(randomArrayLength);
      window.crypto.getRandomValues(newRandomValues);
      //console.log('New Random Data:', newRandomValues);
      for (let i = 0; i < randomArrayLength ; i++) {
        foldedRandomValue[i] ^= newRandomValues[i];
      }
      //console.log('XORed Random Data:', foldedRandomValue);
      const randomlyGeneratedFileKeyAndSalt = await deriveBytesUsingArgon2id(
        foldedRandomValue.slice(48), 
          foldedRandomValue.slice(0, 48), 
        140, 
        752
      );
      const randomlyGeneratedFileKey = randomlyGeneratedFileKeyAndSalt.slice(0, 656);
      //console.log('Random File Key:', randomlyGeneratedFileKey);
      //console.log('Random File Key (base64):', btoa(String.fromCharCode(...randomlyGeneratedFileKey)));
      //console.log('Random File Key (decoded):', base64ToUint8Array(btoa(String.fromCharCode(...randomlyGeneratedFileKey))));
      // Generate salts
      const bytesForSalts1 = randomlyGeneratedFileKeyAndSalt.slice(656, 704);
      const bytesForSalts2 = randomlyGeneratedFileKeyAndSalt.slice(704, 752);      

      const newFileKeySalt = new Uint8Array(48);
      window.crypto.getRandomValues(newFileKeySalt);
      
      const newMetadataSalt = new Uint8Array(48);
      window.crypto.getRandomValues(newMetadataSalt);
      
      const fileKeySalt = new Uint8Array(48);
      const metadataSalt = new Uint8Array(48);
      
      for (let i = 0; i < 48; i++) {
        fileKeySalt[i] = bytesForSalts1[i] ^ newFileKeySalt[i];
      }
      
      for (let i = 0; i < 48; i++) {
        metadataSalt[i] = bytesForSalts2[i] ^ newMetadataSalt[i];
      }
      // Assuming randomlyGeneratedFileKey is already generated

      // Derive file key
      const fileMasterKeyPart = masterKey.slice(0, 192);
      const mergedFileKey = new Uint8Array(randomlyGeneratedFileKey.slice(0, 302).length + fileMasterKeyPart.length);
      mergedFileKey.set(randomlyGeneratedFileKey.slice(0, 302));
      mergedFileKey.set(fileMasterKeyPart, 302);

      const fileKey = await deriveBytesUsingArgon2id(
        mergedFileKey,
        fileKeySalt,
        numberOfIterationsForArgon2,
        416 // Derive 416 bytes for the file key
      );

      //console.log("fileKey: ", fileKey);
      //console.log('mergedFileKey:', mergedFileKey);
      //console.log('fileKeySalt:', fileKeySalt);
      //console.log('numberOfIterationsForArgon2:', numberOfIterationsForArgon2);

      // Derive remaining keys
      const remainingMasterKeyPart = masterKey.slice(192); // 80 bytes
      const randomPartForRemainingKeys = randomlyGeneratedFileKey.slice(272); // Use the remaining random bytes

      const mergedRemainingKey = new Uint8Array(randomPartForRemainingKeys.length + remainingMasterKeyPart.length);
      mergedRemainingKey.set(randomPartForRemainingKeys);
      mergedRemainingKey.set(remainingMasterKeyPart, randomPartForRemainingKeys.length);

      const metadataKey = await deriveBytesUsingArgon2id(
        mergedRemainingKey,
        metadataSalt,
        numberOfIterationsForArgon2,
        672 // Derive 672 bytes for the remaining keys
      );

      // Split the derived remaining keys into three equal parts
      const FileNameKey = metadataKey.slice(0, 224);
      const DescriptionKey = metadataKey.slice(224, 448);
      const MetadataIntegrityKey = metadataKey.slice(448);
      toggleProgressAnimation(false);
      setProcessingProgress(0);
      setProcessingStep(t('reading-file'));
      setProcessingStepDescription(t('please_wait'));
      await new Promise(resolve => setTimeout(resolve, 50));
      try {
        const fileBytes = await readFileByChunks(file);

        
        const [encryptedData, tag] = await encryptFileWithTwoCiphersCBC(fileBytes, fileKey);
        
        const filenameBytes = new TextEncoder().encode(filename);
        const descriptionPresent = description.trim() !== "";
        const encodedDescription = descriptionPresent ? new TextEncoder().encode(description.trim()) : new Uint8Array(0);
        
        toggleProgressAnimation(true);
        setProcessingStep(t('encrypting-filename'));
        setProcessingStepDescription(t('please_wait'));
        const encryptedFilename = await encryptDataWithTwoCiphersCBC(filenameBytes, FileNameKey);
        
        let encryptedMetadataTag: Uint8Array | null = null;
        let encryptedDescription: Uint8Array | null = null;
        
        if (descriptionPresent) {
          toggleProgressAnimation(true);
          setProcessingStep(t('encrypting-description'));
          setProcessingStepDescription(t('please_wait'));
          encryptedDescription = await encryptDataWithTwoCiphersCBC(encodedDescription, DescriptionKey);
        
          setProcessingStep(t('computing-metadata'));
          setProcessingStepDescription(t('please_wait'));
          const combinedData = new Uint8Array(filenameBytes.length + encodedDescription.length);
          combinedData.set(filenameBytes, 0);
          combinedData.set(encodedDescription, filenameBytes.length);
          encryptedMetadataTag = await encryptRecordTagWithTwoCiphersCBC(combinedData, MetadataIntegrityKey);
        }
        
        const recordKey = fileKey.slice(224);
        let metadataBytes: Uint8Array;
        let encryptedRecordIntegrityTag: Uint8Array;
        setProcessingStep(t('computing-metadata-tag'));
        setProcessingStepDescription(t('please_wait'));
        if (descriptionPresent) {
          metadataBytes = new Uint8Array(filenameBytes.length + encodedDescription.length + tag.length);
          metadataBytes.set(filenameBytes, 0);
          metadataBytes.set(encodedDescription, filenameBytes.length);
          metadataBytes.set(tag, filenameBytes.length + encodedDescription.length);
          encryptedRecordIntegrityTag = await encryptRecordTagWithTwoCiphersCBC(metadataBytes, recordKey);
        } else {
          metadataBytes = new Uint8Array(filenameBytes.length + tag.length);
          metadataBytes.set(filenameBytes, 0);
          metadataBytes.set(tag, filenameBytes.length);
          encryptedRecordIntegrityTag = await encryptRecordTagWithTwoCiphersCBC(metadataBytes, recordKey);
        }
        console.log('Filename Bytes:', filenameBytes);
        console.log('Description Bytes:', encodedDescription);
        console.log('Tag:', tag);
        console.log("Encrypted Tag:", encryptedRecordIntegrityTag);

        onClose({
          randomlyGeneratedFileKey,
          fileSalt: fileKeySalt,
          metadataSalt: metadataSalt,
          encryptedFileContent: encryptedData,
          encryptedFilename,
          encryptedDescription,
          encryptedMetadataTag,
          encryptedRecordIntegrityTag,
          isThereAnError: false,
          errorMessage: ""
        });          
      } catch (error) {
        //toast.error(`Error processing the "${file.name}" file. Check the console for more information.`);
        //console.error(`Error processing file ${file.name}:`, error);
        onClose({
          randomlyGeneratedFileKey: null,
          fileSalt: null,
          metadataSalt: null,
          encryptedFileContent: null,
          encryptedFilename: null,
          encryptedDescription: null,
          encryptedMetadataTag: null,
          encryptedRecordIntegrityTag: null,
          isThereAnError: true,
          errorMessage: `${error}`
        });
        /*
        const errorMessage = `
        <p style="margin-bottom: 10px;">Error processing the "${file.name}" file:</p>
        <p>${error instanceof Error ? error.message : 'Unknown error'}</p>`;
    
        // Show the Swal alert with the error message
        Swal.fire({
          icon: "error",
          title: t('error_inscription'), // Use the original translation key for the title
          html: errorMessage,
          width: 600,
          padding: "3em",
          color: "var(--foreground)",
          background: "var(--background)",
          confirmButtonText: t('ok_button'), // Use the original translation key for the button text
          confirmButtonColor: "var(--firstThemeColor)"
        });
        */
      }
    }
  };

  const encryptRecordTagWithTwoCiphersCBC = async (
    bytes: Uint8Array,
    derivedKey: Uint8Array
  ): Promise<Uint8Array> => {
    const chunkSize = 256 * 1024; // 256 KB chunks
    let offset = 0;
    const encryptedChunks: Uint8Array[] = [];
    let chacha20key = new Uint8Array(derivedKey.slice(0, 64));
    const blockCipherKey = derivedKey.slice(64, 96);
    const hmacKey = derivedKey.slice(96);
    const tag = await computeTagForRecordUsingHMACSHA512(hmacKey, bytes);
    
    const encryptedData = new Uint8Array(tag.length);
  
    const totalSize = tag.length;
    while (offset < totalSize) {
      const input = Array.from(chacha20key).map(byte => byte.toString(16).padStart(2, '0')).join('');
      const sha512_output = await sha512(input);
      const sha512Array = hexStringToArray(sha512_output);
      const byteArray = new Uint8Array(sha512Array);
      const generatedHash = await whirlpool(byteArray);
      chacha20key = new Uint8Array(hexStringToArray(generatedHash));
  
      const chunk = tag.slice(offset, Math.min(offset + chunkSize, totalSize));
      const nonce = chacha20key.slice(32, 40);
      const chacha20 = new ChaCha20();
      const encryptedChunk = chacha20.encrypt(chacha20key.slice(0, 32), chunk, nonce);
  
      for (let i = 0; i < encryptedChunk.length; i++) {
        encryptedData[offset + i] = encryptedChunk[i];
      }
      offset += chunk.length;
    }

    const blockcipher_chunk_size = 16;
    const iv = window.crypto.getRandomValues(new Uint8Array(16));
    const encryptedIV = await encryptSerpent256ECB(iv, blockCipherKey);
    encryptedChunks.push(encryptedIV);
    let previousCiphertext = iv;
    for (let i = 0; i < encryptedData.length; i += blockcipher_chunk_size) {
      let chunk = encryptedData.slice(i, i + blockcipher_chunk_size);
      if (chunk.length < blockcipher_chunk_size) {
        const padding = blockcipher_chunk_size - chunk.length;
        const paddedChunk = new Uint8Array(blockcipher_chunk_size);
        paddedChunk.set(chunk);
        paddedChunk.fill(padding, chunk.length);
        chunk = paddedChunk;
      }
      const xorChunk = chunk.map((byte, index) => byte ^ previousCiphertext[index]);
      const encryptedChunk = await encryptSerpent256ECB(xorChunk, blockCipherKey);
      encryptedChunks.push(encryptedChunk);
      previousCiphertext = encryptedChunk;
    }

    const totalLength = encryptedChunks.reduce((sum, chunk) => sum + chunk.length, 0);
    const result = new Uint8Array(totalLength);
    let soffset = 0;
    for (const chunk of encryptedChunks) {
      result.set(chunk, soffset);
      soffset += chunk.length;
    }
  
    return result;
  };

  const encryptDataWithTwoCiphersCBC = async (
    bytes: Uint8Array,
    derivedKey: Uint8Array,
  ): Promise<Uint8Array> => {
    const chunkSize = 256 * 1024; // 256 KB chunks
    let offset = 0;
    const encryptedChunks: Uint8Array[] = [];
    let chacha20key = new Uint8Array(derivedKey.slice(0, 64));
    const blockCipherKey = derivedKey.slice(64, 96);
    const hmacKey = derivedKey.slice(96);
    const tag = await computeTagForRecordUsingHMACSHA512(hmacKey, bytes);
    const tag_and_data = new Uint8Array(tag.length + bytes.length);
    tag_and_data.set(tag, 0);
    tag_and_data.set(bytes, tag.length);


    const encryptedData = new Uint8Array(tag_and_data.length);

    const totalSize = tag_and_data.length;
    while (offset < totalSize) {
      const input = Array.from(chacha20key).map(byte => byte.toString(16).padStart(2, '0')).join('');
      const sha512_output = await sha512(input);
      const sha512Array = hexStringToArray(sha512_output);
      const byteArray = new Uint8Array(sha512Array);
      const generatedHash = await whirlpool(byteArray);
      chacha20key = new Uint8Array(hexStringToArray(generatedHash));

      const chunk = tag_and_data.slice(offset, Math.min(offset + chunkSize, totalSize));
      const nonce = chacha20key.slice(32, 40);
      const chacha20 = new ChaCha20();
      const encryptedChunk = chacha20.encrypt(chacha20key.slice(0, 32), chunk, nonce);

      for (let i = 0; i < encryptedChunk.length; i++) {
        encryptedData[offset + i] = encryptedChunk[i];
      }
      offset += chunk.length;
    }

    const blockcipher_chunk_size = 16;
    const iv = window.crypto.getRandomValues(new Uint8Array(16));
    const encryptedIV = await encryptSerpent256ECB(iv, blockCipherKey);
    encryptedChunks.push(encryptedIV);
    let previousCiphertext = iv;
    for (let i = 0; i < encryptedData.length; i += blockcipher_chunk_size) {
      let chunk = encryptedData.slice(i, i + blockcipher_chunk_size);
      if (chunk.length < blockcipher_chunk_size) {
        const padding = blockcipher_chunk_size - chunk.length;
        const paddedChunk = new Uint8Array(blockcipher_chunk_size);
        paddedChunk.set(chunk);
        paddedChunk.fill(padding, chunk.length);
        chunk = paddedChunk;
      }
      const xorChunk = chunk.map((byte, index) => byte ^ previousCiphertext[index]);
      const encryptedChunk = await encryptSerpent256ECB(xorChunk, blockCipherKey);
      encryptedChunks.push(encryptedChunk);
      previousCiphertext = encryptedChunk;

    }

    const totalLength = encryptedChunks.reduce((sum, chunk) => sum + chunk.length, 0);
    const result = new Uint8Array(totalLength);
    let soffset = 0;
    for (const chunk of encryptedChunks) {
      result.set(chunk, soffset);
      soffset += chunk.length;
    }

    return result;
  };

  const encryptFileWithTwoCiphersCBC = async (
    bytes: Uint8Array, derivedKey: Uint8Array
  ): Promise<[Uint8Array, Uint8Array]> => {
    const encryptedChunks: Uint8Array[] = [];
    const chunkSize = 256 * 1024; // 256 KB chunks
    let offset = 0;
    let chacha20key = new Uint8Array(derivedKey.slice(0, 64));
    const blockCipherKey = derivedKey.slice(64, 96);
    const hmacKey = derivedKey.slice(96, 224);
    const tag = await computeTagForFileUsingHMACSHA512(hmacKey, bytes);
    toggleProgressAnimation(true);
    setProcessingStep(t('preparing-for-file-encryption'));
    await new Promise(resolve => setTimeout(resolve, 10));
    const tag_and_data = new Uint8Array(tag.length + bytes.length);
    tag_and_data.set(tag, 0);
    tag_and_data.set(bytes, tag.length);

    const encryptedData = new Uint8Array(tag_and_data.length);
    toggleProgressAnimation(false);
    setProcessingStep(t('encryption-step1'));
    const updateProgressWithDelay = async (progress: number) => {
      setProcessingProgress(progress);
      await new Promise(resolve => setTimeout(resolve, 10));
    };
  
    const totalSize = tag_and_data.length;
    while (offset < totalSize) {
      const input = Array.from(chacha20key).map(byte => byte.toString(16).padStart(2, '0')).join('');
      const sha512_output = await sha512(input);
      const sha512Array = hexStringToArray(sha512_output);
      const byteArray = new Uint8Array(sha512Array);
      const generatedHash = await whirlpool(byteArray);
      chacha20key = new Uint8Array(hexStringToArray(generatedHash));
  
      const chunk = tag_and_data.slice(offset, Math.min(offset + chunkSize, totalSize));
      const nonce = chacha20key.slice(32, 40);
      const chacha20 = new ChaCha20();
      const encryptedChunk = chacha20.encrypt(chacha20key.slice(0, 32), chunk, nonce);
  
      for (let i = 0; i < encryptedChunk.length; i++) {
        encryptedData[offset + i] = encryptedChunk[i];
      }
      offset += chunk.length;
      const progress = (offset / totalSize) * 100;
      await updateProgressWithDelay(progress);
    }

    const blockcipher_chunk_size = 16;
    const iv = window.crypto.getRandomValues(new Uint8Array(16));
    const encryptedIV = await encryptSerpent256ECB(iv, blockCipherKey);
    encryptedChunks.push(encryptedIV);
    toggleProgressAnimation(false);
    setProcessingStep(t('encryption-step2'));
    let previousCiphertext = iv;
    for (let i = 0; i < encryptedData.length; i += blockcipher_chunk_size) {
      let chunk = encryptedData.slice(i, i + blockcipher_chunk_size);
      if (chunk.length < blockcipher_chunk_size) {
        const padding = blockcipher_chunk_size - chunk.length;
        const paddedChunk = new Uint8Array(blockcipher_chunk_size);
        paddedChunk.set(chunk);
        paddedChunk.fill(padding, chunk.length);
        chunk = paddedChunk;
      }
      const xorChunk = chunk.map((byte, index) => byte ^ previousCiphertext[index]);
      const encryptedChunk = await encryptSerpent256ECB(xorChunk, blockCipherKey);
      encryptedChunks.push(encryptedChunk);
      previousCiphertext = encryptedChunk;
      if (i % 16000 === 0) {
        await updateProgressWithDelay((i / encryptedData.length) * 100);
      }
    }
  
    await updateProgressWithDelay(100);
    await new Promise(resolve => setTimeout(resolve, 50));
    setProcessingStepDescription('');
    const totalLength = encryptedChunks.reduce((sum, chunk) => sum + chunk.length, 0);
    const result = new Uint8Array(totalLength);
    let soffset = 0;
    for (const chunk of encryptedChunks) {
      result.set(chunk, soffset);
      soffset += chunk.length;
    }
  
    return [result, tag];
  };

  const computeTagForFileUsingHMACSHA512 = useCallback(async (key: Uint8Array, data: Uint8Array) => {
    toggleProgressAnimation(false);
    setProcessingStep(t('computing-tag-for-file-using-hmac-sha512'));
    setProcessingStepDescription(t('please_wait'));
    await new Promise(resolve => setTimeout(resolve, 10));
    const chunkSize = 256 * 1024; // 256 KB chunks
    let offset = 0;
    const hmac = await createHMAC(createSHA3(512), key);
    hmac.init();

    async function updateProgressWithDelay(progress: number) {
      setProcessingProgress(progress);
      await new Promise(resolve => setTimeout(resolve, 10));
    }

    while (offset < data.length) {
      const chunk = data.slice(offset, Math.min(offset + chunkSize, data.length));
      hmac.update(chunk);
      offset += chunk.length;

      const progress = (offset / data.length) * 100;
      await updateProgressWithDelay(progress);
    }
    await new Promise(resolve => setTimeout(resolve, 20));
    setProcessingProgress(100);
    setProcessingStep(t('finalizing-tag-computation'));
    await new Promise(resolve => setTimeout(resolve, 20));
    toggleProgressAnimation(true);
    await new Promise(resolve => setTimeout(resolve, 20));
    const signature = hmac.digest('binary');
    return new Uint8Array(signature);
  }, []);

  function xorHalvesRepeatedly(array: Uint8Array, repetitions: number): Uint8Array {
    let result = array;
    for (let i = 0; i < repetitions; i++) {
      result = xorHalves(result);
    }
    return result;
  }
  
  function xorHalves(array: Uint8Array): Uint8Array {
    const halfLength = Math.floor(array.length / 2);
    const result = new Uint8Array(halfLength);
    for (let i = 0; i < halfLength; i++) {
      result[i] = array[i] ^ array[i + halfLength];
    }
    return result;
  }

  const deriveBytesUsingArgon2id = useCallback(async (password: Uint8Array, salt: Uint8Array, iterations: number, number_of_bytes: number) => {
    const derivedKey = await argon2id({
      password,
      salt,
      parallelism: 1,
      iterations,
      memorySize: 512,
      hashLength: number_of_bytes,
      outputType: 'binary',
    });
    return new Uint8Array(derivedKey);
  }, []);
    
  if (!isOpen) return null;

  const computeTagForRecordUsingHMACSHA512 = useCallback(async (key: Uint8Array, data: Uint8Array) => {
    const chunkSize = 256 * 1024; // 256 KB chunks
    let offset = 0;
    const hmac = await createHMAC(createSHA3(512), key);
    hmac.init();
  
    while (offset < data.length) {
      const chunk = data.slice(offset, Math.min(offset + chunkSize, data.length));
      hmac.update(chunk);
      offset += chunk.length;
  
    }
  
    const signature = hmac.digest('binary');
    return new Uint8Array(signature);
  }, []);

  const hexStringToArray = (hexString: string): number[] => {
    // Check if the input is a valid hex string
    if (!/^[0-9A-Fa-f]+$/.test(hexString)) {
        throw new Error("Invalid hex string");
    }

    if (hexString.length % 2 !== 0) {
        throw new Error("Invalid hex string length");
    }

    const resultArray: number[] = [];
    for (let i = 0; i < hexString.length; i += 2) {
        const hexPair = hexString.substring(i, i + 2);
        resultArray.push(parseInt(hexPair, 16)); // Convert hex pair to integer
    }

    return resultArray;
  };

  const readFileByChunks = async (file: File): Promise<Uint8Array> => {
    const chunkSize = 1024 * 1024; // 1MB chunks
    const reader = new FileReader();
    let offset = 0;
    const totalSize = file.size;
    const fileBytes = new Uint8Array(totalSize);
  
    const readChunk = (blob: Blob): Promise<ArrayBuffer> => {
      return new Promise((resolve, reject) => {
        reader.onload = (e) => resolve(e.target?.result as ArrayBuffer);
        reader.onerror = (e) => reject(e.target?.error);
        reader.readAsArrayBuffer(blob);
      });
    };
  
    const updateProgressWithDelay = async (progress: number) => {
      setProcessingProgress(progress);
      await new Promise(resolve => setTimeout(resolve, 10));
    };
  
    while (offset < totalSize) {
      const chunk = file.slice(offset, offset + chunkSize);
      const arrayBuffer = await readChunk(chunk);
      const uint8Array = new Uint8Array(arrayBuffer);
      fileBytes.set(uint8Array, offset);
      offset += uint8Array.length;
      const progress = ((offset / totalSize) * 100).toFixed(2);
      await updateProgressWithDelay(parseFloat(progress));
    }
  
    return fileBytes;
  };

  const toggleProgressAnimation = (isAnimating: boolean) => {
    const container = progressContainerRef.current;
    if (!container) return;
  
    if (isAnimating) {
      container.innerHTML = `
        <style>
          @keyframes moveBar {
            0%, 100% { left: 0; }
            50% { left: 80%; }
          }
          @keyframes shiftColor {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animated-bar {
            width: 20%;
            height: 100%;
            background: linear-gradient(90deg, #9F4EFF, #00A6FB, #9F4EFF, #00A6FB);
            background-size: 300% 100%;
            box-shadow: 0 3px 3px -5px rgba(0, 166, 251, 0.7), 0 2px 5px rgba(159, 79, 255, 0.7);
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 15px;
            animation: moveBar 2s linear infinite, shiftColor 4s linear infinite;
          }
          .animated-bar-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 14px;
          }
        </style>
        <div class="animated-bar">
          <div class="animated-bar-text"></div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <style>
          .file-processing-popup-progress-done {
            background: linear-gradient(to left, ${isRTL ? '#00A6FB, #9F4EFF' : '#9F4EFF, #00A6FB'});
            box-shadow: 0 3px 3px -5px rgba(0, 166, 251, 0.7), 0 2px 5px rgba(159, 79, 255, 0.7);
            color: white; /* Assuming white as the text color */
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: ${processingProgress}%; /* Ensure width is based on progress */
            opacity: 1;
            border-radius: 15px;
          }
        </style>
        <div class="file-processing-popup-progress-done" style="transform: ${isRTL ? 'scaleX(-1)' : 'none'}">
          ${processingProgress.toFixed(2)}%
        </div>
      `;
    }
  };
  
  useEffect(() => {
    if (!showProcessingPopup) return;
    const container = progressContainerRef.current;
    if (!container) return;
    const progressDoneElement = container.querySelector('.file-processing-popup-progress-done') as HTMLElement;
    if (progressDoneElement) {
      progressDoneElement.style.width = `${processingProgress}%`;
      progressDoneElement.textContent = `${processingProgress.toFixed(2)}%`;
    }
  }, [processingProgress, showProcessingPopup]);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 520;

  return (
    <>
      {!showRNG && !showProcessingPopup && (
        <div
          className="file-processing-popup"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflowX: 'hidden',
          }}
        >
          <div
            className="modal-background"
            style={{
              width: isMobile ? '100%' : 'min(90vw, 640px)',
              height: isMobile ? '100%' : 'min(90vh, 560px)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              borderRadius: isMobile ? '0' : '12px',
              gap: '20px',
              overflow: isMobile ? 'hidden' : 'visible',
            }}
          >
            {!isMobile && <GlowingEffect spread={72} glow={true} disabled={false} proximity={192} inactiveZone={0.01} />}
            <h2 className="font-bold text-xl text-white mb-2">{t('encrypt-file')}</h2>
            <div style={{ width: '100%' }}>
              <div className={`flex ${isRTL ? 'justify-end' : ''}`} style={{ width: '100%' }}>
                <label className="text-white mb-" dir={isRTL ? 'rtl' : 'ltr'}>{t('filename')}:</label>
              </div>
              <div style={{ height: '6px' }}></div>
              <DreamyInput ref={filenameEntry} placeholder={t('filename-placeholder-inscription')} presetText={filename} backgroundColor="#1b1a21" />
            </div>
            <div style={{ width: '100%' }}>
              <div className={`flex ${isRTL ? 'justify-end' : ''}`} style={{ width: '100%' }}>
                <label className="text-white mb-" dir={isRTL ? 'rtl' : 'ltr'}>{t('description')}:</label>
              </div>
              <div style={{ height: '6px' }}></div>
              <DreamyInput ref={descriptionEntry} placeholder={t('description-placeholder-inscription')} multiLine={true} multiLineHeight={isMobile ? 3.2 : 4.18} backgroundColor="#1b1a21" />
            </div>
            <div className="flex flex-1" />
            <div className={isMobile ? 'flex flex-col gap-6 w-full' : 'flex gap-6 w-full'}>
              {isMobile ? (
                <>
                  <a
                    style={{
                      margin: 'auto',
                      padding: '1px',
                      alignItems: 'center',
                      textAlign: 'center',
                      background: 'none',
                      border: '0',
                      borderRadius: '6.4px',
                      color: '#fff',
                      fontWeight: 'bold',
                      display: 'flex',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'all .3s',
                      width: '100%',
                      backgroundImage: 'linear-gradient(135deg, #4776cb, #a19fe5, #6cc606)',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleContinue();
                    }}
                  >
                    <span
                      style={{
                        background: '#151419',
                        padding: '1rem 4rem',
                        border: '0',
                        borderRadius: '6px',
                        width: '100%',
                        height: '100%',
                        transition: '300ms',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'none';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#151419';
                      }}
                    >
                      {t('continue-button-inscription')}
                    </span>
                  </a>
                  <a
                    style={{
                      margin: 'auto',
                      padding: '1px',
                      alignItems: 'center',
                      textAlign: 'center',
                      background: 'none',
                      border: '0',
                      borderRadius: '6.4px',
                      color: '#fff',
                      fontWeight: 'bold',
                      display: 'flex',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'all .3s',
                      width: '100%',
                      backgroundImage: 'linear-gradient(135deg, #ff0000, #ff4c00, #ff9900)',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCancel();
                    }}
                  >
                    <span
                      style={{
                        background: '#151419',
                        padding: '1rem 4rem',
                        border: '0',
                        borderRadius: '6px',
                        width: '100%',
                        height: '100%',
                        transition: '300ms',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'none';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#151419';
                      }}
                    >
                      {t('cancel-button-inscription')}
                    </span>
                  </a>
                </>
              ) : (
                isRTL ? (
                  <>
                    <a
                      style={{
                        margin: 'auto',
                        padding: '1px',
                        alignItems: 'center',
                        textAlign: 'center',
                        background: 'none',
                        border: '0',
                        borderRadius: '6.4px',
                        color: '#fff',
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        whiteSpace: 'nowrap',
                        transition: 'all .3s',
                        width: '50%',
                        backgroundImage: 'linear-gradient(135deg, #ff0000, #ff4c00, #ff9900)',
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleCancel();
                      }}
                    >
                      <span
                        style={{
                          background: '#151419',
                          padding: '1rem 4rem',
                          border: '0',
                          borderRadius: '6px',
                          width: '100%',
                          height: '100%',
                          transition: '300ms',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'none';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#151419';
                        }}
                      >
                        {t('cancel-button-inscription')}
                      </span>
                    </a>
                    <a
                      style={{
                        margin: 'auto',
                        padding: '1px',
                        alignItems: 'center',
                        textAlign: 'center',
                        background: 'none',
                        border: '0',
                        borderRadius: '6.4px',
                        color: '#fff',
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        whiteSpace: 'nowrap',
                        transition: 'all .3s',
                        width: '50%',
                        backgroundImage: 'linear-gradient(135deg, #4776cb, #a19fe5, #6cc606)',
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleContinue();
                      }}
                    >
                      <span
                        style={{
                          background: '#151419',
                          padding: '1rem 4rem',
                          border: '0',
                          borderRadius: '6px',
                          width: '100%',
                          height: '100%',
                          transition: '300ms',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'none';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#151419';
                        }}
                      >
                        {t('continue-button-inscription')}
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      style={{
                        margin: 'auto',
                        padding: '1px',
                        alignItems: 'center',
                        textAlign: 'center',
                        background: 'none',
                        border: '0',
                        borderRadius: '6.4px',
                        color: '#fff',
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        whiteSpace: 'nowrap',
                        transition: 'all .3s',
                        width: '50%',
                        backgroundImage: 'linear-gradient(135deg, #4776cb, #a19fe5, #6cc606)',
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleContinue();
                      }}
                    >
                      <span
                        style={{
                          background: '#151419',
                          padding: '1rem 4rem',
                          border: '0',
                          borderRadius: '6px',
                          width: '100%',
                          height: '100%',
                          transition: '300ms',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'none';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#151419';
                        }}
                      >
                        {t('continue-button-inscription')}
                      </span>
                    </a>
                    <a
                      style={{
                        margin: 'auto',
                        padding: '1px',
                        alignItems: 'center',
                        textAlign: 'center',
                        background: 'none',
                        border: '0',
                        borderRadius: '6.4px',
                        color: '#fff',
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        whiteSpace: 'nowrap',
                        transition: 'all .3s',
                        width: '50%',
                        backgroundImage: 'linear-gradient(135deg, #ff0000, #ff4c00, #ff9900)',
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleCancel();
                      }}
                    >
                      <span
                        style={{
                          background: '#151419',
                          padding: '1rem 4rem',
                          border: '0',
                          borderRadius: '6px',
                          width: '100%',
                          height: '100%',
                          transition: '300ms',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'none';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#151419';
                        }}
                      >
                        {t('cancel-button-inscription')}
                      </span>
                    </a>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      )}
      {showRNG && (
        <RNG
          onClose={handleRNGClose}
          borderRadius="12px"
          title={t('rng-title')}
          inscription={t('rng-inscription')}
          buttonInscription={t('continue-button-inscription')}
          isRTL={isRTL}
        />
      )}
          {showProcessingPopup && (
            <div className="file-processing-popup">
              <div className="file-processing-popup-main">
              <GlowingEffect spread={64} glow={true} disabled={false} proximity={192} inactiveZone={0.01} />
                <div className="file-processing-popup-content">
                  <p className="file-processing-popup-message-text">
                    <span className="filename-span" dir="auto">{currentFileName}</span>
                  </p>
                  <p className="file-processing-popup-message-text"
                      dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    {processingStep}
                  </p>
                  <p 
                    className="file-processing-popup-message-text" 
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    {processingStepDescription}
                  </p>
                  <div 
                    ref={progressContainerRef} 
                    className="file-processing-popup-progress"
                    style={{ transform: i18n.language === 'he' ? 'scaleX(-1)' : 'none' }}
                  >
                    {/* Progress bar or animation will be inserted here */}
                  </div>
                </div>
              </div>
            </div>
          )}
          <style jsx>{`
            .file-processing-popup {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(21, 20, 25, 0.7);
              backdrop-filter: blur(10px) saturate(90%);
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 1000;
            }
            .modal-background {
              background: #060507;
              border: 1px solid #292730;
            }
            .file-processing-popup-main {
              max-width: 640px;
              width: 90%;
              padding: 20px;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              align-items: center;
              background: rgba(6, 5, 7, 1);
              border: 1px solid #292730;
              backdrop-filter: blur(10px) saturate(90%);
              border-radius: 12px;
            }

            .file-processing-popup-content {
              text-align: center;
              overflow-wrap: break-word; /* Prevent overflow beyond container */
              word-wrap: break-word;
              width: 90%;
            }

            .file-processing-popup-message-text {
              margin: 10px 0;
              font-size: 18px;
              color: #FFFFFF;
              word-wrap: break-word;
              overflow-wrap: break-word;
            }

            .filename-span {
              font-weight: bold;
              color: #F7F7FF;
              display: inline-block;
              overflow-wrap: break-word; /* Prevent overflow beyond container */
              width: 94%;
              max-width: 560px; /* Optional, to limit the maximum width */
              word-wrap: break-word;
            }

            .file-processing-popup-progress {
              background-color: #EEEEEE;
              border-radius: 20px;
              position: relative;
              margin: 15px 0;
              height: 30px;
              width: 100%; /* Ensure progress bar width is consistent */
              max-width: 560px; /* Optional, to limit the maximum width */
              overflow: hidden;
            }
          `}</style>
    </>
  );
};

export default FileEncrypter;