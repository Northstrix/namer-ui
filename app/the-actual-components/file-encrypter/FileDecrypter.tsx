'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { createSHA3, createHMAC, whirlpool, argon2id, sha512 } from 'hash-wasm';
import { ChaCha20 } from 'mipher';
import { decryptSerpent256ECB } from '@/app/cryptographicPrimitives/serpent';
import { useTranslation } from 'react-i18next';
import DecryptModal from './DecryptModal';

interface FileDecrypterProps {
  encryptedFileContent: Uint8Array | null;
  masterKey: Uint8Array | null;
  numberOfIterationsForArgon2: number;
  randomlyGeneratedFileKey: Uint8Array | null;
  fileSalt: Uint8Array | null;
  metadataSalt: Uint8Array | null;
  encryptedFilename: Uint8Array | null;
  encryptedDescription: Uint8Array | null;
  encryptedMetadataTag: Uint8Array | null;
  encryptedRecordIntegrityTag: Uint8Array | null;
  onClose: (result: {
    decryptedFilename: Uint8Array | null;
    filenameIntegrity: Boolean | null;
    filenamePaddingValid: Boolean | null;
  
    decryptedDescription: Uint8Array | null;
    descriptionIntegrity: Boolean | null;
    descriptionPaddingValid: Boolean | null;
  
    metadataIntegrity: Boolean | null;
    metadataStatus: Message[];
  
    decryptedFileContent: Uint8Array | null;
    fileIntegrityCompromised: boolean;
    fileHasInvalidPadding: boolean;
    fileStatus: Message[];
  
    recordIntegrity: Boolean | null;
    recordStatus: Message[];
  
    isThereAnError: boolean;
    errorMessage: string;
  }) => void;
}

interface Message {
  text: string;
  success: boolean;
}

class SingletonEffect {
  private static instance: SingletonEffect | null = null;
  private initialized: boolean = false;

  private constructor() {}

  public static getInstance(): SingletonEffect {
    if (this.instance === null) {
      this.instance = new SingletonEffect();
    }
    return this.instance;
  }

  public runEffect(effect: () => void) {
    if (!this.initialized) {
      effect();
      this.initialized = true;
    }
  }

  // New method to reset the singleton instance
  public static resetInstance() {
    this.instance = null;
  }
}

const FileDecrypter: React.FC<FileDecrypterProps> = ({
  encryptedFileContent,
  masterKey,
  numberOfIterationsForArgon2,
  randomlyGeneratedFileKey,
  fileSalt,
  metadataSalt,
  encryptedFilename,
  encryptedDescription,
  encryptedMetadataTag,
  encryptedRecordIntegrityTag,
  onClose,
}) => {
  const [showPopup, setShowPopup] = useState(true);
  const [processingStep, setProcessingStep] = useState('');
  const [processingStepDescription, setProcessingStepDescription] = useState('');
  const progressContainerRef = useRef<HTMLDivElement>(null);

  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'he';
  const [currentFileName, setCurrentFileName] = useState<string>('');
  const [processingProgress, setProcessingProgress] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [headline, setHeadline] = useState('');
  const [filename, setFilename] = useState('');
  const [description, setDescription] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const [firstButtonText, setFirstButtonText] = useState('');
  const [secondButtonText, setSecondButtonText] = useState('');
  const [displayFirstButton, setDisplayFirstButton] = useState(true);
  const [messagesListHeader, setMessagesListHeader] = useState('');
  const [inscriptionAboveButtons, setInscriptionAboveButtons] = useState('');

  const [decryptionAvailable, setDecryptionAvailable] = useState(false);

  const [currentFilenameIntegrity, setCurrentFilenameIntegrity] = useState<boolean | null>(null);
  const [currentDescriptionIntegrity, setCurrentDescriptionIntegrity] = useState<boolean | null>(null);
  const [currentMetadataIntegrity, setCurrentMetadataIntegrity] = useState<boolean | null>(null);
  const [currentFilenamePaddingValid, setCurrentFilenamePaddingValid] = useState<boolean | null>(null);
  const [currentDescriptionPaddingValid, setCurrentDescriptionPaddingValid] = useState<boolean | null>(null);
  const [currentDecryptedFilename, setCurrentDecryptedFilename] = useState<Uint8Array | null>(null);
  const [currentDecryptedDescription, setCurrentDecryptedDescription] = useState<Uint8Array | null>(null);  
  const [encodedDecryptedFilename, setEncodedDecryptedFilename] = useState<Uint8Array | null>(null);
  const [encodedDecryptedDescription, setEncodedDecryptedDescription] = useState<Uint8Array | null>(null);

  useEffect(() => {
    const singleton = SingletonEffect.getInstance();
    singleton.runEffect(async () => {
      resetValues();
      if (!masterKey && !randomlyGeneratedFileKey) {
        returnError("Both the master key and the file key are missing. Please ensure both are provided to proceed with decryption.");
      } else if (!masterKey) {
        returnError("The master key is missing. Please ensure it is provided to proceed with decryption.");
      } else if (!randomlyGeneratedFileKey) {
        returnError("The file key is missing. Please ensure it is provided to proceed with decryption.");
      }
      setHeadline(t('decrypt-file'));
      setMessagesListHeader(t('metadata-status'));
      if (metadataSalt){
        setShowPopup(true);
        decryptMetadata();
      } else { // Metadata salt is missing
        setMessages([{ text: t('missing-metadata-salt-error'), success: false }]);
        setShowModal(true);
        setShowPopup(false);
        setCurrentFileName(t('no-filename'));
      }
      setFirstButtonText(t('decrypt-button-inscription'));
      if (encryptedFileContent && fileSalt) {
        setDecryptionAvailable(true);
        setDisplayFirstButton(true);
        setSecondButtonText(t('cancel-button-inscription'));
        const encryptedFileSize = encryptedFileContent.length;
        const fileSizeString = generateFileSizeString(encryptedFileSize);
        setInscriptionAboveButtons(t('encrypted-file-size', { fileSize: fileSizeString }));
      } else {
        if (!encryptedFileContent && !fileSalt) {
          setDecryptionAvailable(false);
          setDisplayFirstButton(false);
          setSecondButtonText(t('close-button-inscription'));
          setInscriptionAboveButtons(t('missing-both-file-content-and-salt'));
        } else if (!encryptedFileContent) {
          setDecryptionAvailable(false);
          setDisplayFirstButton(false);
          setSecondButtonText(t('close-button-inscription'));
          setInscriptionAboveButtons(t('missing-file-content'));
        } else {
          setDecryptionAvailable(false);
          setDisplayFirstButton(false);
          setSecondButtonText(t('close-button-inscription'));
          setInscriptionAboveButtons(t('missing-file-salt'));
        }
      }      
    });
  }, [
    masterKey,
    randomlyGeneratedFileKey,
    metadataSalt,
    encryptedFileContent,
    encryptedFilename,
    encryptedDescription,
    encryptedMetadataTag,
    encryptedRecordIntegrityTag,
  ]);

  const generateFileSizeString = (sizeInBytes: number): string => {
    if (sizeInBytes >= 1024 * 1024 * 1024) {
      return `${(sizeInBytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    } else if (sizeInBytes >= 1024 * 1024) {
      return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
    } else if (sizeInBytes >= 1024) {
      return `${(sizeInBytes / 1024).toFixed(2)} KB`;
    } else if (sizeInBytes === 1) {
      return `1 byte`;
    } else {
      return `${sizeInBytes.toFixed(0)} bytes`;
    }
  };

  const decryptMetadata = async () => {
    if (masterKey && randomlyGeneratedFileKey && metadataSalt) {
      if (!encryptedFilename && !encryptedDescription){ // No metadata to decrypt
        setMessages([{ text: t('missing-metadata'), success: false }]);
        setShowModal(true);
        setShowPopup(false);
        setCurrentFileName(t('no-filename'));
      } else {
        try {
          setCurrentFileName(t('no-filename'));
          setProcessingStep(t('decrypting-metadata'));
          setProcessingStepDescription(t('please_wait'));
          await new Promise(resolve => setTimeout(resolve, 50));
      
          const remainingMasterKeyPart = masterKey.slice(192); // 80 bytes
          const randomPartForRemainingKeys = randomlyGeneratedFileKey.slice(272); // Use the remaining random bytes
    
          const mergedRemainingKey = new Uint8Array(randomPartForRemainingKeys.length + remainingMasterKeyPart.length);
          mergedRemainingKey.set(randomPartForRemainingKeys);
          mergedRemainingKey.set(remainingMasterKeyPart, randomPartForRemainingKeys.length);
    
          const metadataKey = await deriveBytesUsingArgon2id(
            mergedRemainingKey,
            metadataSalt,
            numberOfIterationsForArgon2,
            672
          );
    
          // Split the derived remaining keys into three equal parts
          const FileNameKey = metadataKey.slice(0, 224);
          const DescriptionKey = metadataKey.slice(224, 448);
          const MetadataIntegrityKey = metadataKey.slice(448);
          
          let filenameIntegrity: boolean | null = null;
          let descriptionIntegrity: boolean | null = null;
          let metadataIntegrity: boolean | null = null;
          let filenamePaddingValidity: boolean | null = null;
          let descriptionPaddingValidity: boolean | null = null;
          let decryptedFilename: Uint8Array | null = null;
          let decryptedDescription: Uint8Array | null = null;
          
          if (!encryptedFilename && !encryptedDescription) {
            // Both filename and description are missing, this is an error
            filenameIntegrity = false;
            descriptionIntegrity = false;
            metadataIntegrity = false;
          } else if (!encryptedFilename && encryptedDescription) {
            // Filename is missing, description is present, this is an error
            filenameIntegrity = false;
            const [decryptedDescriptionArray, descriptionIntegrityTemp, descriptionPaddingValidityTemp] = await decryptStringWithTwoCiphersCBC(encryptedDescription, DescriptionKey);
            descriptionIntegrity = descriptionIntegrityTemp;
            descriptionPaddingValidity = descriptionPaddingValidityTemp;
            decryptedDescription = decryptedDescriptionArray;
            metadataIntegrity = false; // Metadata integrity is compromised because filename is missing
          } else if (encryptedFilename && !encryptedDescription && !encryptedMetadataTag) {
            // Filename is present, description and metadata tag are absent
            const [decryptedFileNameArray, filenameIntegrityTemp, filenamePaddingValidityTemp] = await decryptStringWithTwoCiphersCBC(encryptedFilename, FileNameKey);
            filenameIntegrity = filenameIntegrityTemp;
            filenamePaddingValidity = filenamePaddingValidityTemp;
            decryptedFilename = decryptedFileNameArray;
            descriptionIntegrity = null; // Description is not required, so it's not an error if it's missing
            descriptionPaddingValidity = null;
            metadataIntegrity = null; // No metadata tag is expected if no description
          } else if (encryptedFilename && !encryptedDescription && encryptedMetadataTag) {
            // Filename is present, description is missing, metadata tag is present
            const [decryptedFileNameArray, filenameIntegrityTemp, filenamePaddingValidityTemp] = await decryptStringWithTwoCiphersCBC(encryptedFilename, FileNameKey);
            filenameIntegrity = filenameIntegrityTemp;
            filenamePaddingValidity = filenamePaddingValidityTemp;
            decryptedFilename = decryptedFileNameArray;
            descriptionIntegrity = null; // Description is not required, but metadata tag is present without description, which is an error
            descriptionPaddingValidity = null;
            metadataIntegrity = false; // Metadata tag is present but description is missing, which is an error
          } else if (encryptedFilename && encryptedDescription && !encryptedMetadataTag) {
            // Filename and description are present, metadata tag is missing
            const [decryptedFileNameArray, filenameIntegrityTemp, filenamePaddingValidityTemp] = await decryptStringWithTwoCiphersCBC(encryptedFilename, FileNameKey);
            filenameIntegrity = filenameIntegrityTemp;
            filenamePaddingValidity = filenamePaddingValidityTemp;
            decryptedFilename = decryptedFileNameArray;
            const [decryptedDescriptionArray, descriptionIntegrityTemp, descriptionPaddingValidityTemp] = await decryptStringWithTwoCiphersCBC(encryptedDescription, DescriptionKey);
            descriptionIntegrity = descriptionIntegrityTemp;
            descriptionPaddingValidity = descriptionPaddingValidityTemp;
            decryptedDescription = decryptedDescriptionArray;
            metadataIntegrity = false; // Metadata tag is missing, which is an error if description is present
          } else if (encryptedFilename && encryptedDescription && encryptedMetadataTag) {
            // All are present
            const [decryptedFileNameArray, filenameIntegrityTemp, filenamePaddingValidityTemp] = await decryptStringWithTwoCiphersCBC(encryptedFilename, FileNameKey);
            filenameIntegrity = filenameIntegrityTemp;
            filenamePaddingValidity = filenamePaddingValidityTemp;
            decryptedFilename = decryptedFileNameArray;
            const [decryptedDescriptionArray, descriptionIntegrityTemp, descriptionPaddingValidityTemp] = await decryptStringWithTwoCiphersCBC(encryptedDescription, DescriptionKey);
            descriptionIntegrity = descriptionIntegrityTemp;
            descriptionPaddingValidity = descriptionPaddingValidityTemp;
            decryptedDescription = decryptedDescriptionArray;
            const combinedDecryptedData = new Uint8Array(decryptedFilename.length + decryptedDescriptionArray.length);
            combinedDecryptedData.set(decryptedFilename, 0);
            combinedDecryptedData.set(decryptedDescriptionArray, decryptedFilename.length);
            metadataIntegrity = await CheckRecordIntegrity(encryptedMetadataTag, MetadataIntegrityKey, combinedDecryptedData);
          }

          //if (decryptedFilename)
            //console.log(new TextDecoder().decode(decryptedFilename));
          //if (decryptedDescription)
            //console.log(new TextDecoder().decode(decryptedDescription));
          //console.log(metadataIntegrity);
          
          const metadataStatus = [];

          // Check filename properties
          if (filenameIntegrity !== null && !filenameIntegrity) {
            metadataStatus.push({ text: t('filename-integrity-error'), success: false });
          }
          if (filenamePaddingValidity !== null && !filenamePaddingValidity) {
            metadataStatus.push({ text: t('filename-padding-invalid'), success: false });
          }
          
          // Check if filename is missing
          if (!encryptedFilename) {
            metadataStatus.push({ text: t('missing-filename-error'), success: false });
          }
          
          // Check description properties
          if (descriptionIntegrity !== null && !descriptionIntegrity) {
            metadataStatus.push({ text: t('description-integrity-error'), success: false });
          }
          if (descriptionPaddingValidity !== null && !descriptionPaddingValidity) {
            metadataStatus.push({ text: t('description-padding-invalid'), success: false });
          }
          
          // Check if description is missing
          if (encryptedMetadataTag && !encryptedDescription) {
            metadataStatus.push({ text: t('missing-description-error'), success: false });
          }
          
          // Check metadata properties
          if (metadataIntegrity !== null && !metadataIntegrity) {
            metadataStatus.push({ text: t('metadata-integrity-error'), success: false });
          }
          
          // Check if metadata tag is missing
          if (encryptedDescription && !encryptedMetadataTag) {
            metadataStatus.push({ text: t('missing-metadata-tag-error'), success: false });
          }
          
          // Special case: Only filename is present, and both description and metadata are null
          if (decryptedFilename && !decryptedDescription && metadataIntegrity === null) {
            if (filenameIntegrity && filenamePaddingValidity) {
              metadataStatus.push({ text: t('metadata-integrity-success'), success: true });
            }
          } else if (filenameIntegrity && descriptionIntegrity && metadataIntegrity) {
            metadataStatus.push({ text: t('metadata-integrity-success'), success: true });
          }          
  
          setCurrentFilenameIntegrity(filenameIntegrity);
          setCurrentDescriptionIntegrity(descriptionIntegrity);
          setCurrentMetadataIntegrity(metadataIntegrity);
          setCurrentFilenamePaddingValid(filenamePaddingValidity);
          setCurrentDescriptionPaddingValid(descriptionPaddingValidity);
          setCurrentDecryptedFilename(decryptedFilename);
          setCurrentDecryptedDescription(decryptedDescription);
          setEncodedDecryptedFilename(decryptedFilename);
          setEncodedDecryptedDescription(decryptedDescription);   

          setFilename(decryptedFilename ? new TextDecoder().decode(decryptedFilename) : '');
          setDescription(decryptedDescription ? new TextDecoder().decode(decryptedDescription) : '');
          setMessages(metadataStatus);
          await new Promise(resolve => setTimeout(resolve, 50));
          setShowModal(true);
          setShowPopup(false);
          setCurrentFileName(decryptedFilename ? new TextDecoder().decode(decryptedFilename) : t('no-filename'));

        } catch (error) {
          returnError(`${error}`);
        }
      }
    }
  };

  const CheckRecordIntegrity = async (
    bytes: Uint8Array, 
    derivedKey: Uint8Array, 
    plaintextToVerify: Uint8Array
  ): Promise<boolean> => {
    const chunkSize = 16;
    let chacha20key = new Uint8Array(derivedKey.slice(0, 64));
    const blockCipherKey = derivedKey.slice(64, 96);
    const hmacKey = derivedKey.slice(96);
  
    const extractedIV = bytes.slice(0, 16);
    const decryptedIV = await decryptSerpent256ECB(extractedIV, blockCipherKey);
    let previousCiphertext = decryptedIV;
  
    const decryptedData: number[] = [];
    const dataLength = bytes.length;
    for (let i = 16; i < dataLength; i += chunkSize) {
      const chunk = bytes.slice(i, i + chunkSize);
      const decryptedChunk = await decryptSerpent256ECB(chunk, blockCipherKey);
      const xorChunk = decryptedChunk.map((byte, index) => byte ^ previousCiphertext[index]);
      for (let j = 0; j < xorChunk.length; j++) {
        decryptedData.push(xorChunk[j]);
      }
      previousCiphertext = chunk;
    }
  
    const decryptedDataUint8Array = new Uint8Array(decryptedData);
  
    const chunkSizeForStreamCipher = 256 * 1024; // 256 KB chunks
    let streamCipherOffset = 0;
    const decryptedChunks = new Uint8Array(decryptedDataUint8Array);
    let decryptedOffset = 0;
    
    while (streamCipherOffset < decryptedDataUint8Array.length) {
      const input = Array.from(chacha20key).map(byte => byte.toString(16).padStart(2, '0')).join('');
      const sha512_output = await sha512(input);
      const sha512Array = hexStringToArray(sha512_output);
      const byteArray = new Uint8Array(sha512Array);
      const generatedHash = await whirlpool(byteArray);
      chacha20key = new Uint8Array(hexStringToArray(generatedHash));
    
      const chunk = decryptedDataUint8Array.slice(streamCipherOffset, Math.min(streamCipherOffset + chunkSizeForStreamCipher, decryptedDataUint8Array.length));
      const nonce = chacha20key.slice(32, 40);
      const chacha20 = new ChaCha20();
      const decryptedChunk = chacha20.decrypt(chacha20key.slice(0, 32), chunk, nonce);
      decryptedChunks.set(decryptedChunk, decryptedOffset);
      decryptedOffset += decryptedChunk.length;
    
      streamCipherOffset += chunk.length;
    }
  
    const computedTag = await computeTagForRecordUsingHMACSHA512(hmacKey, plaintextToVerify);
    console.log('Decrypted Chunks:', decryptedChunks);
console.log('Computed Tag:', computedTag);

    return compareUint8Arrays(decryptedChunks, computedTag);
  };

  function compareUint8Arrays(array1: Uint8Array, array2: Uint8Array): boolean {
    // Check if the lengths are equal
    if (array1.length !== array2.length) {
      return false;
    }
  
    // Compare each element in the arrays
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false; // Return false if any element is different
      }
    }
  
    return true; // Return true if all elements are equal
  }

  const returnError = (errorMessage: string) => {
    SingletonEffect.resetInstance();
    resetValues();
    onClose({
      decryptedFilename: null,
      filenameIntegrity: null,
      filenamePaddingValid: null,
      decryptedDescription: null,
      descriptionIntegrity: null,
      descriptionPaddingValid: null,
      metadataIntegrity: null,
      metadataStatus: [],
      decryptedFileContent: null,
      fileIntegrityCompromised: false,
      fileHasInvalidPadding: false,
      fileStatus: [],
      recordIntegrity: null,
      recordStatus: [],
      isThereAnError: true,
      errorMessage,
    });
  };
  
  const startFileDecryption = async () => {
    await new Promise(resolve => setTimeout(resolve, 50));
    if (encryptedFileContent && fileSalt && masterKey && randomlyGeneratedFileKey) {
      const fileMasterKeyPart = masterKey.slice(0, 192);
      const mergedFileKey = new Uint8Array(randomlyGeneratedFileKey.slice(0, 302).length + fileMasterKeyPart.length);
      mergedFileKey.set(randomlyGeneratedFileKey.slice(0, 302));
      mergedFileKey.set(fileMasterKeyPart, 302);

      const fileKey = await deriveBytesUsingArgon2id(
        mergedFileKey,
        fileSalt,
        numberOfIterationsForArgon2,
        416 // Derive 416 bytes for the file key
      );

      //console.log("fileKey: ", fileKey);
      //console.log('mergedFileKey:', mergedFileKey);
      //console.log('fileKeySalt:', fileSalt);
      //console.log('numberOfIterationsForArgon2:', numberOfIterationsForArgon2);
      decryptFileWithTwoCiphersCBC(encryptedFileContent, fileKey);
    }
  };

  const decryptFileWithTwoCiphersCBC = async (
    bytes: Uint8Array,
    derivedKey: Uint8Array,
  ): Promise<void> => {

    const updateProgressWithDelay = async (progress: number) => {
      setProcessingProgress(progress);
      await new Promise(resolve => setTimeout(resolve, 10));
    };
  
    toggleProgressAnimation(true);
    setProcessingStep(t('preparing-for-file-decryption'));
    const chunkSize = 16;
    let chacha20key = new Uint8Array(derivedKey.slice(0, 64));
    const blockCipherKey = derivedKey.slice(64, 96);
    const hmacKey = derivedKey.slice(96, 224);
  
    const extractedIV = bytes.slice(0, 16);
    const decryptedIV = await decryptSerpent256ECB(extractedIV, blockCipherKey);
    await new Promise(resolve => setTimeout(resolve, 50));
    updateProgressWithDelay(0);
    toggleProgressAnimation(false);
    setProcessingStep(t('decryption-step1'));

    let previousCiphertext = decryptedIV;

    const decryptedData: number[] = [];
    const dataLengthNoLC = bytes.length - chunkSize;
    for (let i = 16; i < dataLengthNoLC; i += chunkSize) {
      const chunk = bytes.slice(i, i + chunkSize);
      const decryptedChunk = await decryptSerpent256ECB(chunk, blockCipherKey);
      const xorChunk = decryptedChunk.map((byte, index) => byte ^ previousCiphertext[index]);
      xorChunk.forEach(byte => decryptedData.push(byte));
      previousCiphertext = chunk;
  
      if ((i - 16) % 16000 === 0) {
        await updateProgressWithDelay(((i - 16) / (dataLengthNoLC - 16)) * 100);
      }
    }
  
    // Handle padding in the last block
    const encryptedLastBlock = bytes.slice(bytes.length - chunkSize);
    const decryptedLastBlock = await decryptSerpent256ECB(encryptedLastBlock, blockCipherKey);
    const decryptedLastBlockXORed = decryptedLastBlock.map((byte, index) => byte ^ previousCiphertext[index]);
    const paddingLength = pkcs7PaddingConsumed(decryptedLastBlockXORed);
    await updateProgressWithDelay(100);
    let invalidPadding = false;
    if (paddingLength === 0) {
      invalidPadding = true;
    } else if (paddingLength === 16) {
      // Do nothing
    } else {
      const unpaddedLastBlock = decryptedLastBlockXORed.slice(0, 16 - paddingLength);
      unpaddedLastBlock.forEach(byte => decryptedData.push(byte));
    }
  
    const decryptedDataUint8Array = new Uint8Array(decryptedData);

    setProcessingStep(t('decryption-step2'));
    updateProgressWithDelay(0);
    const chunkSizeForStreamCipher = 256 * 1024; // 256 KB chunks
    let streamCipherOffset = 0;
    const decryptedTag = new Uint8Array(64);
    const decryptedChunks = new Uint8Array(decryptedDataUint8Array.length - 64);
    let decryptedOffset = 0;
    
    let isFirstChunk = true;
    
    while (streamCipherOffset < decryptedDataUint8Array.length) {
      const input = Array.from(chacha20key).map(byte => byte.toString(16).padStart(2, '0')).join('');
      const sha512_output = await sha512(input);
      const sha512Array = hexStringToArray(sha512_output);
      const byteArray = new Uint8Array(sha512Array);
      const generatedHash = await whirlpool(byteArray);
      chacha20key = new Uint8Array(hexStringToArray(generatedHash));
    
      const chunk = decryptedDataUint8Array.slice(streamCipherOffset, Math.min(streamCipherOffset + chunkSizeForStreamCipher, decryptedDataUint8Array.length));
      const nonce = chacha20key.slice(32, 40);
      const chacha20 = new ChaCha20();
      const decryptedChunk = chacha20.decrypt(chacha20key.slice(0, 32), chunk, nonce);
    
      if (isFirstChunk) {
        decryptedTag.set(decryptedChunk.slice(0, 64));
        decryptedChunks.set(decryptedChunk.slice(64), 0);
        decryptedOffset = decryptedChunk.length - 64;
        isFirstChunk = false;
      } else {
        decryptedChunks.set(decryptedChunk, decryptedOffset);
        decryptedOffset += decryptedChunk.length;
      }
    
      streamCipherOffset += chunk.length;
      const progress = (streamCipherOffset / decryptedDataUint8Array.length) * 100;
      await updateProgressWithDelay(progress);
    }
    const decryptedWithStreamCipher = decryptedChunks.slice(0, decryptedOffset);
    //setProcessingStep('Verifying file integrity');
    const newTag = await computeTagForFileUsingHMACSHA512(hmacKey, decryptedWithStreamCipher);
    let integrityFailed = false;
    for (let i = 0; i < 64; i++) {
      if (decryptedTag[i] !== newTag[i]) {
        integrityFailed = true;
        break;
      }
    }
    
    // File status
    let fileStatus = [];
    if (integrityFailed) {
      fileStatus.push({ text: t('file-integrity-error'), success: false });
    }
    if (invalidPadding) {
      fileStatus.push({ text: t('file-padding-invalid'), success: false });
    }
    if (fileStatus.length === 0) {
      fileStatus.push({ text: t('file-integrity-success'), success: true });
    }
    
    // Record status
    const recordVerificationKey = derivedKey.slice(224);

    let recordIntegrity = false;
    if (!encryptedRecordIntegrityTag)
      return;
    
    if (encodedDecryptedFilename) {
    
      if (encodedDecryptedDescription && decryptedTag) {
        const combinedData = new Uint8Array(encodedDecryptedFilename.length + encodedDecryptedDescription.length + decryptedTag.length);
        combinedData.set(encodedDecryptedFilename, 0);
        combinedData.set(encodedDecryptedDescription, encodedDecryptedFilename.length);
        combinedData.set(decryptedTag, encodedDecryptedFilename.length + encodedDecryptedDescription.length);
        
        recordIntegrity = await CheckRecordIntegrity(encryptedRecordIntegrityTag, recordVerificationKey, combinedData);
      } else if (!encodedDecryptedDescription && decryptedTag) {        
        const combinedData = new Uint8Array(encodedDecryptedFilename.length + decryptedTag.length);
        combinedData.set(encodedDecryptedFilename, 0);
        combinedData.set(decryptedTag, encodedDecryptedFilename.length);

        recordIntegrity = await CheckRecordIntegrity(encryptedRecordIntegrityTag, recordVerificationKey, combinedData);
        recordIntegrity = false; // Integrity is compromised if description is missing
      } else if (encodedDecryptedDescription && !decryptedTag) {
        recordIntegrity = false; // Integrity is compromised if record integrity tag is missing
      } else {
        recordIntegrity = false; // Integrity is compromised if both description and record integrity tag are missing
      }
    } else {
      recordIntegrity = false; // Integrity is compromised if filename is missing
    }    
    
    let recordStatus = [];
    if (!recordIntegrity) {
      recordStatus.push({ text: t('record-integrity-error'), success: false });
    } else {
      recordStatus.push({ text: t('record-integrity-success'), success: true });
    }
    
    SingletonEffect.resetInstance();
    resetValues();
    onClose({
      decryptedFilename: currentDecryptedFilename,
      filenameIntegrity: currentFilenameIntegrity,
      filenamePaddingValid: currentFilenamePaddingValid,
      decryptedDescription: currentDecryptedDescription,
      descriptionIntegrity: currentDescriptionIntegrity,
      descriptionPaddingValid: currentDescriptionPaddingValid,
      metadataIntegrity: currentMetadataIntegrity,
      metadataStatus: messages,
      decryptedFileContent: decryptedWithStreamCipher,
      fileIntegrityCompromised: integrityFailed,
      fileHasInvalidPadding: invalidPadding,
      fileStatus: fileStatus,
      recordIntegrity: recordIntegrity,
      recordStatus: recordStatus,
      isThereAnError: false,
      errorMessage: "",
    });

  };

  const handleButtonClicked = async (buttonType: 'first' | 'second') => {
    if (buttonType === 'first') {
      setShowModal(false);
      setShowPopup(true);
      startFileDecryption();
    } else if (buttonType === 'second') {
      SingletonEffect.resetInstance();
      setShowModal(false);
      if (decryptionAvailable === true) { // Cancelled by user
        resetValues();
        onClose({
          decryptedFilename: null,
          filenameIntegrity: null,
          filenamePaddingValid: null,
          decryptedDescription: null,
          descriptionIntegrity: null,
          descriptionPaddingValid: null,
          metadataIntegrity: null,
          metadataStatus: [],
          decryptedFileContent: null,
          fileIntegrityCompromised: false,
          fileHasInvalidPadding: false,
          fileStatus: [],
          recordIntegrity: null,
          recordStatus: [],
          isThereAnError: false,
          errorMessage: "",
        });
      } else {
        if (!encryptedFileContent && !fileSalt) {
          returnError("Both file content and file salt are missing.");
        } else if (!encryptedFileContent) {
          returnError("File content is missing.");
        } else {
          returnError("File salt is missing.");
        }
      }    
    }
  };  

  const resetValues = () => {
    setShowPopup(false);
    setProcessingStep('');
    setProcessingStepDescription('');
    setCurrentFileName('');
    setShowModal(false);
    setHeadline('');
    setFilename('');
    setDescription('');
    setMessages([]);
    setFirstButtonText('');
    setSecondButtonText('');
    setDisplayFirstButton(true);
    setMessagesListHeader('');
    setInscriptionAboveButtons('');
    setDecryptionAvailable(false);
  };

  const decryptStringWithTwoCiphersCBC = async (
    bytes: Uint8Array,
    derivedKey: Uint8Array,
  ): Promise<[Uint8Array, boolean, boolean]> => {
    const chunkSize = 16;
    let chacha20key = new Uint8Array(derivedKey.slice(0, 64));
    const blockCipherKey = derivedKey.slice(64, 96);
    const hmacKey = derivedKey.slice(96);
  
    const extractedIV = bytes.slice(0, 16);
    const decryptedIV = await decryptSerpent256ECB(extractedIV, blockCipherKey);
    let previousCiphertext = decryptedIV;
  
    const decryptedData: number[] = [];
    const dataLengthNoLC = bytes.length - chunkSize;
    for (let i = 16; i < dataLengthNoLC; i += chunkSize) {
      const chunk = bytes.slice(i, i + chunkSize);
      const decryptedChunk = await decryptSerpent256ECB(chunk, blockCipherKey);
      const xorChunk = decryptedChunk.map((byte, index) => byte ^ previousCiphertext[index]);
      for (let j = 0; j < xorChunk.length; j++) {
        decryptedData.push(xorChunk[j]);
      }
      previousCiphertext = chunk;
    }
  
    // Handle padding in the last block
    const encryptedLastBlock = bytes.slice(bytes.length - chunkSize);
    const decryptedLastBlock = await decryptSerpent256ECB(encryptedLastBlock, blockCipherKey);
    const decryptedLastBlockXORed = decryptedLastBlock.map((byte, index) => byte ^ previousCiphertext[index]);
    const paddingLength = pkcs7PaddingConsumed(decryptedLastBlockXORed);
    let paddingValid = true;
    if (paddingLength === 0) {
      paddingValid = false;
    } else if (paddingLength === 16) {
      // Do nothing
    } else {
      const unpaddedLastBlock = decryptedLastBlockXORed.slice(0, 16 - paddingLength);
      for (let j = 0; j < unpaddedLastBlock .length; j++) {
        decryptedData.push(unpaddedLastBlock[j]);
      }
    }
  
    const decryptedDataUint8Array = new Uint8Array(decryptedData);
  
    const chunkSizeForStreamCipher = 256 * 1024; // 256 KB chunks
    let streamCipherOffset = 0;
    const decryptedTag = new Uint8Array(64);
    const decryptedChunks = new Uint8Array(decryptedDataUint8Array.length - 64);
    let decryptedOffset = 0;
    
    let isFirstChunk = true;
    
    while (streamCipherOffset < decryptedDataUint8Array.length) {
      const input = Array.from(chacha20key).map(byte => byte.toString(16).padStart(2, '0')).join('');
      const sha512_output = await sha512(input);
      const sha512Array = hexStringToArray(sha512_output);
      const byteArray = new Uint8Array(sha512Array);
      const generatedHash = await whirlpool(byteArray);
      chacha20key = new Uint8Array(hexStringToArray(generatedHash));
    
      const chunk = decryptedDataUint8Array.slice(streamCipherOffset, Math.min(streamCipherOffset + chunkSizeForStreamCipher, decryptedDataUint8Array.length));
      const nonce = chacha20key.slice(32, 40);
      const chacha20 = new ChaCha20();
      const decryptedChunk = chacha20.decrypt(chacha20key.slice(0, 32), chunk, nonce);
    
      if (isFirstChunk) {
        decryptedTag.set(decryptedChunk.slice(0, 64));
        decryptedChunks.set(decryptedChunk.slice(64), 0);
        decryptedOffset = decryptedChunk.length - 64;
        isFirstChunk = false;
      } else {
        decryptedChunks.set(decryptedChunk, decryptedOffset);
        decryptedOffset += decryptedChunk.length;
      }
    
      streamCipherOffset += chunk.length;
    }
    
    const decryptedWithStreamCipher = decryptedChunks.slice(0, decryptedOffset);
    const newTag = await computeTagForRecordUsingHMACSHA512(hmacKey, decryptedWithStreamCipher);
    let integrityPassed = true;
    for (let i = 0; i < 64; i++) {
      if (decryptedTag[i] !== newTag[i]) {
        integrityPassed = false;
        break;
      }
    }
    
    return [decryptedWithStreamCipher, integrityPassed, paddingValid];
  };

  function pkcs7PaddingConsumed(data: Uint8Array) {
    let allTen = true;
    for (let i = 0; i < 16; i++) {
      if (data[i] !== 0x10) {
        allTen = false;
        break;
      }
    }
    if (allTen) {
      return 16;
    }
    const paddingValue = data[15];
    if (paddingValue < 1 || paddingValue > 16) {
      return 0;
    }
    for (let i = 1; i <= paddingValue; i++) {
      if (data[16 - i] !== paddingValue) {
        return 0;
      }
    }
    return paddingValue;
  }

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

    useEffect(() => {
      if (!showPopup) return;
      const container = progressContainerRef.current;
      if (!container) return;
      const progressDoneElement = container.querySelector('.file-processing-popup-progress-done') as HTMLElement;
      if (progressDoneElement) {
        progressDoneElement.style.width = `${processingProgress}%`;
        progressDoneElement.textContent = `${processingProgress.toFixed(2)}%`;
      }
    }, [processingProgress, showPopup]);

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

  return (
    <>
      {showModal && (
        <DecryptModal
          headline={headline}
          filename={filename}
          description={description}
          messages={messages}
          firstButtonText={firstButtonText}
          secondButtonText={secondButtonText}
          firstButtonGradient="linear-gradient(135deg, #4776cb, #a19fe5, #6cc606)"
          secondButtonGradient="linear-gradient(135deg, #ff0000, #ff4c00, #ff9900)"
          displayFirstButton={displayFirstButton}
          messagesListHeader={messagesListHeader}
          inscriptionAboveButtons={inscriptionAboveButtons}
          onButtonClicked={handleButtonClicked}
        />
      )}
            
      {showPopup && (
        <div className="file-processing-popup">
          <div className="file-processing-popup-main">
            <GlowingEffect spread={64} glow={true} disabled={false} proximity={192} inactiveZone={0.01} />
            <div className="file-processing-popup-content">
              <p className="file-processing-popup-message-text">
                <span className="filename-span" dir="auto">{currentFileName}</span>
              </p>
              <p className="file-processing-popup-message-text" dir={isRTL ? 'rtl' : 'ltr'}>
                {processingStep}
              </p>
              <p className="file-processing-popup-message-text" dir={isRTL ? 'rtl' : 'ltr'}>
                {processingStepDescription}
              </p>
              <div ref={progressContainerRef} className="file-processing-popup-progress"
                style={{ transform: i18n.language === 'he' ? 'scaleX(-1)' : 'none' }}>
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

export default FileDecrypter;