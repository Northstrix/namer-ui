'use client'

import React from 'react'

const metadata = {
  usage: `// Path to the "FileEncrypter.tsx" file
import FileEncrypter from '@/app/the-actual-components/file-encrypter/FileEncrypter'
/ Path to the "EncryptedFileAndKeyDownloaderHelper.tsx" helper file
mport EncryptedFileAndKeyDownloaderHelper from '@/app/the-actual-components/file-encrypter/EncryptedFileAndKeyDownloaderHelper'
// Path to the "FileDecrypter.tsx" file
import FileDecrypter from '@/app/the-actual-components/file-encrypter/FileDecrypter'
// Path to the "DecryptModal.tsx" file
import DecryptModal from '@/app/the-actual-components/file-encrypter/DecryptModal';

// Shared Hooks //

  const { i18n, t } = useTranslation(); // Localization
  const [masterKeyForFileEncrypter, setmasterKeyForFileEncrypter] = useState<Uint8Array>(new Uint8Array([1, 2]));
  const [argon2Iterations, setArgon2Iterations] = useState<number>(900);
  const [fileEncrypterResult, setFileEncrypterResult] = useState({
    randomlyGeneratedFileKey: null as Uint8Array | null,
    fileSalt: null as Uint8Array | null,
    metadataSalt: null as Uint8Array | null,
    encryptedFileContent: null as Uint8Array | null,
    encryptedFilename: null as Uint8Array | null,
    encryptedDescription: null as Uint8Array | null,
    encryptedMetadataTag: null as Uint8Array | null,
    encryptedRecordIntegrityTag: null as Uint8Array | null,
    isThereAnError: false,
    errorMessage: "",
  });     

// Shared Hooks //

// Encrypter Hooks //

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isEncrypterOpen, setIsEncrypterOpen] = useState(false);
  
  const [isEncryptedFileDownloaderVisible, setIsEncryptedFileDownloaderVisible] = useState(false);
  const [encryptedFileDownloaderType, setEncryptedFileDownloaderType] = useState<'fileDownload' | 'error' | 'operationCancelled'>('fileDownload');
  
// Encrypter Hooks //

// Decrypter Hooks //

  // Input for the component //

    const [encryptedFileContent, setEncryptedFileContent] = useState<Uint8Array | null>(new Uint8Array());
    const [randomlyGeneratedFileKey, setRandomlyGeneratedFileKey] = useState<Uint8Array | null>(null);
    const [fileSalt, setFileSalt] = useState<Uint8Array | null>(null);
    const [metadataSalt, setMetadataSalt] = useState<Uint8Array | null>(null);
    const [encryptedFilename, setEncryptedFilename] = useState<Uint8Array | null>(null);
    const [encryptedDescription, setEncryptedDescription] = useState<Uint8Array | null>(null);
    const [encryptedMetadataTag, setEncryptedMetadataTag] = useState<Uint8Array | null>(null);
    const [encryptedRecordIntegrityTag, setEncryptedRecordIntegrityTag] = useState<Uint8Array | null>(null);
    const [isDecrypterOpen, setIsDecrypterOpen] = useState(false);

  // Input for the component //

  // Output from the component //

    const [decryptedFilenameFromDecrypter, setDecryptedFilenameFromDecrypter] = useState<Uint8Array | null>(null);
    const [filenameIntegrityFromDecrypter, setFilenameIntegrityFromDecrypter] = useState<Boolean | null>(null);
    const [filenamePaddingValidFromDecrypter, setFilenamePaddingValidFromDecrypter] = useState<Boolean | null>(null);
    
    const [decryptedDescriptionFromDecrypter, setDecryptedDescriptionFromDecrypter] = useState<Uint8Array | null>(null);
    const [descriptionIntegrityFromDecrypter, setDescriptionIntegrityFromDecrypter] = useState<Boolean | null>(null);
    const [descriptionPaddingValidFromDecrypter, setDescriptionPaddingValidFromDecrypter] = useState<Boolean | null>(null);
    
    const [metadataIntegrityFromDecrypter, setMetadataIntegrityFromDecrypter] = useState<Boolean | null>(null);
    const [decryptedFileContentFromDecrypter, setDecryptedFileContentFromDecrypter] = useState<Uint8Array | null>(null);
    const [fileIntegrityCompromisedFromDecrypter, setFileIntegrityCompromisedFromDecrypter] = useState<boolean>(false);
    const [fileHasInvalidPaddingFromDecrypter, setFileHasInvalidPaddingFromDecrypter] = useState<boolean>(false);
    const [recordIntegrityFromDecrypter, setRecordIntegrityFromDecrypter] = useState<Boolean | null>(null);
    
    const [messagesFromDecrypter, setMessagesFromDecrypter] = useState<Message[]>([]);
    const [isThereAnErrorFromDecrypter, setIsThereAnErrorFromDecrypter] = useState<boolean>(false);
    const [errorMessageFromDecrypter, setErrorMessageFromDecrypter] = useState<string>('');        

  // Output from the component //

  const [showDecryptModal, setShowDecryptModal] = useState(false);

// Decrypter Hooks //

// Encrypter //

const handleCloseEncryptedFileDownloader = () => {
  setIsEncryptedFileDownloaderVisible(false);
};

const handleShowFileEncrypterPopUp = (type: "fileDownload" | "error" | "operationCancelled") => {
  setEncryptedFileDownloaderType(type);
};

const handleFileEncrypterClose = (result: {
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
}) => {
  setIsEncrypterOpen(false);
  setFileEncrypterResult(result);

  if (result.isThereAnError) {
    console.log('Error occurred:', result.errorMessage);
    handleShowFileEncrypterPopUp("error");
    setIsEncryptedFileDownloaderVisible(true);
    return;
  }

  if (
    !result.randomlyGeneratedFileKey &&
    !result.fileSalt &&
    !result.metadataSalt &&
    !result.encryptedFileContent &&
    !result.encryptedFilename &&
    !result.encryptedDescription &&
    !result.encryptedMetadataTag &&
    !result.encryptedRecordIntegrityTag
  ) {
    handleShowFileEncrypterPopUp("operationCancelled");
  } else {
    handleShowFileEncrypterPopUp("fileDownload");
  }
  setIsEncryptedFileDownloaderVisible(true);
};          

useEffect(() => {
  const randomKey = new Uint8Array(272);
  window.crypto.getRandomValues(randomKey);
  setmasterKeyForFileEncrypter(randomKey);

  // Generate random number of iterations for Argon2id
  const randomIterations = new Uint32Array(1);
  window.crypto.getRandomValues(randomIterations);
  const iterations = 800 + (randomIterations[0] % 301); // 301 is the range from 800 to 1100
  setArgon2Iterations(iterations);
}, []);    

const handleFilesFromEnglishDropzoneForFileEncrypter = (files: File[]) => {
  i18n.changeLanguage('en');
  const selectedFile = files[0];
  if (selectedFile.size > 0 && selectedFile.size < 300 * 1024 * 1024) {
    setSelectedFile(selectedFile);
    setIsEncrypterOpen(true);
  } else if (selectedFile.size === 0) {
    alert('Please select a valid file. The file you chose appears to be empty.');
  } else {
    alert('The selected file exceeds the maximum size limit of 300MB. Please choose a smaller file.');
  }
};

const handleFilesFromHebrewDropzoneForFileEncrypter = (files: File[]) => {
  i18n.changeLanguage('he');
  const selectedFile = files[0];
  if (selectedFile.size > 0 && selectedFile.size < 300 * 1024 * 1024) {
    setSelectedFile(selectedFile);
    setIsEncrypterOpen(true);
  } else if (selectedFile.size === 0) {
    alert('אנא בחר קובץ תקין. הקובץ שבחרת נראה ריק.');
  } else {
    alert('הקובץ שנבחר עולה על הגבול המקסימלי של 300MB. אנא בחר קובץ קטן יותר.');
  }
};

// Encrypter //

// Decrypter //

interface Message {
  text: string;
  success: boolean;
}

const onDecrypterClosed = (result: {
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
}) => {
  console.log('Decrypter closed with result:');

  if (result.isThereAnError) {
    console.error('Error occurred:', result.errorMessage);
    alert(result.errorMessage);
  } else if (
    result.decryptedFilename === null &&
    result.filenameIntegrity === null &&
    result.filenamePaddingValid === null &&
    result.decryptedDescription === null &&
    result.descriptionIntegrity === null &&
    result.descriptionPaddingValid === null &&
    result.metadataIntegrity === null &&
    result.metadataStatus.length === 0 &&
    result.decryptedFileContent === null &&
    result.fileIntegrityCompromised === false &&
    result.fileHasInvalidPadding === false &&
    result.fileStatus.length === 0 &&
    result.recordIntegrity === null &&
    result.recordStatus.length === 0
  ) {
    alert(t('decryption-cancelled'));
  } else {
    const messages = [...result.metadataStatus, ...result.fileStatus, ...result.recordStatus];
    
    console.log('Filename and Description:');
    console.log('Decrypted filename:', result.decryptedFilename);
    console.log('Filename integrity:', result.filenameIntegrity);
    console.log('Filename padding valid:', result.filenamePaddingValid);
    console.log('Decrypted description:', result.decryptedDescription);
    console.log('Description integrity:', result.descriptionIntegrity);
    console.log('Description padding valid:', result.descriptionPaddingValid);

    console.log('\\nMetadata:');
    console.log('Metadata integrity:', result.metadataIntegrity);

    console.log('\\nFile:');
    console.log('Decrypted file content:', result.decryptedFileContent);
    console.log('File integrity compromised:', result.fileIntegrityCompromised);
    console.log('File has invalid padding:', result.fileHasInvalidPadding);

    console.log('\\nRecord:');
    console.log('Record integrity:', result.recordIntegrity);
    
    console.log('\\nMessages:');
    messages.forEach((message) => {
      console.log(message);
    });
    
    // Set values into state hooks
    setDecryptedFilenameFromDecrypter(result.decryptedFilename);
    setFilenameIntegrityFromDecrypter(result.filenameIntegrity);
    setFilenamePaddingValidFromDecrypter(result.filenamePaddingValid);
    setDecryptedDescriptionFromDecrypter(result.decryptedDescription);
    setDescriptionIntegrityFromDecrypter(result.descriptionIntegrity);
    setDescriptionPaddingValidFromDecrypter(result.descriptionPaddingValid);

    setMetadataIntegrityFromDecrypter(result.metadataIntegrity);
    setDecryptedFileContentFromDecrypter(result.decryptedFileContent);
    setFileIntegrityCompromisedFromDecrypter(result.fileIntegrityCompromised);
    setFileHasInvalidPaddingFromDecrypter(result.fileHasInvalidPadding);
    setRecordIntegrityFromDecrypter(result.recordIntegrity);
    setMessagesFromDecrypter(messages);

    // Open DecryptModal
    setShowDecryptModal(true);
  }
};

const generateFileSizeString = (sizeInBytes: number): string => {
  if (sizeInBytes >= 1024 * 1024 * 1024) {
    return \`\${(sizeInBytes / (1024 * 1024 * 1024)).toFixed(2)} GB\`;
  } else if (sizeInBytes >= 1024 * 1024) {
    return \`\${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB\`;
  } else if (sizeInBytes >= 1024) {
    return \`\${(sizeInBytes / 1024).toFixed(2)} KB\`;
  } else if (sizeInBytes === 1) {
    return \`1 byte\`;
  } else {
    return \`\${sizeInBytes.toFixed(0)} bytes\`;
  }
};

const handleFilesFromEnglishDropzoneForFileDecrypter = async (files: File[]) => {
  i18n.changeLanguage('en');

  if (files.length !== 2) {
    alert('Please select two files: the encrypted data and the key.');
    return;
  }

  const encryptedFile = files.find(file => file.name.endsWith('.encrypted-data'));
  const keyFile = files.find(file => file.name.endsWith('.key'));

  if (!encryptedFile || !keyFile) {
    alert('Please ensure both files have the correct extensions: .encrypted-data and .key.');
    return;
  }

  const keyContent = await readFileAsText(keyFile);

  const keyParts = keyContent.split(',');
  const masterKeyBase64 = keyParts[0];
  const iterations = parseInt(keyParts[1]);
  const randomlyGeneratedFileKeyBase64 = keyParts[2];
  const fileSaltBase64 = keyParts[3];
  const metadataSaltBase64 = keyParts[4];
  const encryptedFilenameBase64 = keyParts[5];
  const encryptedDescriptionBase64 = keyParts[6];
  const encryptedMetadataTagBase64 = keyParts[7];
  const encryptedRecordIntegrityTagBase64 = keyParts[8];

  let masterKey: Uint8Array | null = masterKeyBase64 === "null" ? null : base64ToUint8Array(masterKeyBase64);
  let randomlyGeneratedFileKey: Uint8Array | null = randomlyGeneratedFileKeyBase64 === "null" ? null : base64ToUint8Array(randomlyGeneratedFileKeyBase64);
  let fileSalt: Uint8Array | null = fileSaltBase64 === "null" ? null : base64ToUint8Array(fileSaltBase64);
  let metadataSalt: Uint8Array | null = metadataSaltBase64 === "null" ? null : base64ToUint8Array(metadataSaltBase64);
  let encryptedFilename: Uint8Array | null = encryptedFilenameBase64 === "null" ? null : base64ToUint8Array(encryptedFilenameBase64);
  let encryptedDescription: Uint8Array | null = encryptedDescriptionBase64 === "null" ? null : base64ToUint8Array(encryptedDescriptionBase64);
  let encryptedMetadataTag: Uint8Array | null = encryptedMetadataTagBase64 === "null" ? null : base64ToUint8Array(encryptedMetadataTagBase64);
  let encryptedRecordIntegrityTag: Uint8Array | null = encryptedRecordIntegrityTagBase64 === "null" ? null : base64ToUint8Array(encryptedRecordIntegrityTagBase64);

  if (!masterKey) {
    alert('The master key is missing!');
    return;
  }

  const encryptedFileContent = await readFileAsUint8Array(encryptedFile);

  // Set any Uint8Array values to null if they are exactly 1 element long
  if (masterKey && masterKey.length === 1) masterKey = null;
  if (randomlyGeneratedFileKey && randomlyGeneratedFileKey.length === 1) randomlyGeneratedFileKey = null;
  if (fileSalt && fileSalt.length === 1) fileSalt = null;
  if (metadataSalt && metadataSalt.length === 1) metadataSalt = null;
  if (encryptedFilename && encryptedFilename.length === 1) encryptedFilename = null;
  if (encryptedDescription && encryptedDescription.length === 1) encryptedDescription = null;
  if (encryptedMetadataTag && encryptedMetadataTag.length === 1) encryptedMetadataTag = null;
  if (encryptedRecordIntegrityTag && encryptedRecordIntegrityTag.length === 1) encryptedRecordIntegrityTag = null;
  
  // Print all values to the console
  console.log('Encrypted File Content:', encryptedFileContent);
  console.log('Master Key:', masterKey);
  console.log('Iterations:', iterations);
  console.log('Randomly Generated File Key:', randomlyGeneratedFileKey);
  console.log('File Salt:', fileSalt);
  console.log('Metadata Salt:', metadataSalt);
  console.log('Encrypted Filename:', encryptedFilename);
  console.log('Encrypted Description:', encryptedDescription);
  console.log('Encrypted Metadata Tag:', encryptedMetadataTag);
  console.log('Encrypted Record Integrity Tag:', encryptedRecordIntegrityTag);
  
  setEncryptedFileContent(encryptedFileContent);
  setArgon2Iterations(iterations);
  setRandomlyGeneratedFileKey(randomlyGeneratedFileKey);
  setFileSalt(fileSalt);
  setMetadataSalt(metadataSalt);
  setEncryptedFilename(encryptedFilename);
  setEncryptedDescription(encryptedDescription);
  setEncryptedMetadataTag(encryptedMetadataTag);
  setEncryptedRecordIntegrityTag(encryptedRecordIntegrityTag);

  if (masterKey) {
    setmasterKeyForFileEncrypter(masterKey);
    setIsDecrypterOpen(true);
  }
};

const handleFilesFromHebrewDropzoneForFileDecrypter = async (files: File[]) => {
  i18n.changeLanguage('he');
  
  if (files.length !== 2) {
    alert('Please select two files: the encrypted data and the key.');
    return;
  }

  const encryptedFile = files.find(file => file.name.endsWith('.encrypted-data'));
  const keyFile = files.find(file => file.name.endsWith('.key'));

  if (!encryptedFile || !keyFile) {
    alert('Please ensure both files have the correct extensions: .encrypted-data and .key.');
    return;
  }

  const keyContent = await readFileAsText(keyFile);

  const keyParts = keyContent.split(',');
  const masterKeyBase64 = keyParts[0];
  const iterations = parseInt(keyParts[1]);
  const randomlyGeneratedFileKeyBase64 = keyParts[2];
  const fileSaltBase64 = keyParts[3];
  const metadataSaltBase64 = keyParts[4];
  const encryptedFilenameBase64 = keyParts[5];
  const encryptedDescriptionBase64 = keyParts[6];
  const encryptedMetadataTagBase64 = keyParts[7];
  const encryptedRecordIntegrityTagBase64 = keyParts[8];

  let masterKey: Uint8Array | null = masterKeyBase64 === "null" ? null : base64ToUint8Array(masterKeyBase64);
  let randomlyGeneratedFileKey: Uint8Array | null = randomlyGeneratedFileKeyBase64 === "null" ? null : base64ToUint8Array(randomlyGeneratedFileKeyBase64);
  let fileSalt: Uint8Array | null = fileSaltBase64 === "null" ? null : base64ToUint8Array(fileSaltBase64);
  let metadataSalt: Uint8Array | null = metadataSaltBase64 === "null" ? null : base64ToUint8Array(metadataSaltBase64);
  let encryptedFilename: Uint8Array | null = encryptedFilenameBase64 === "null" ? null : base64ToUint8Array(encryptedFilenameBase64);
  let encryptedDescription: Uint8Array | null = encryptedDescriptionBase64 === "null" ? null : base64ToUint8Array(encryptedDescriptionBase64);
  let encryptedMetadataTag: Uint8Array | null = encryptedMetadataTagBase64 === "null" ? null : base64ToUint8Array(encryptedMetadataTagBase64);
  let encryptedRecordIntegrityTag: Uint8Array | null = encryptedRecordIntegrityTagBase64 === "null" ? null : base64ToUint8Array(encryptedRecordIntegrityTagBase64);

  const encryptedFileContent = await readFileAsUint8Array(encryptedFile);

  // Set any Uint8Array values to null if they are exactly 1 element long
  if (masterKey && masterKey.length === 1) masterKey = null;
  if (randomlyGeneratedFileKey && randomlyGeneratedFileKey.length === 1) randomlyGeneratedFileKey = null;
  if (fileSalt && fileSalt.length === 1) fileSalt = null;
  if (metadataSalt && metadataSalt.length === 1) metadataSalt = null;
  if (encryptedFilename && encryptedFilename.length === 1) encryptedFilename = null;
  if (encryptedDescription && encryptedDescription.length === 1) encryptedDescription = null;
  if (encryptedMetadataTag && encryptedMetadataTag.length === 1) encryptedMetadataTag = null;
  if (encryptedRecordIntegrityTag && encryptedRecordIntegrityTag.length === 1) encryptedRecordIntegrityTag = null;
  
  // Print all values to the console
  console.log('Encrypted File Content:', encryptedFileContent);
  console.log('Master Key:', masterKey);
  console.log('Iterations:', iterations);
  console.log('Randomly Generated File Key:', randomlyGeneratedFileKey);
  console.log('File Salt:', fileSalt);
  console.log('Metadata Salt:', metadataSalt);
  console.log('Encrypted Filename:', encryptedFilename);
  console.log('Encrypted Description:', encryptedDescription);
  console.log('Encrypted Metadata Tag:', encryptedMetadataTag);
  console.log('Encrypted Record Integrity Tag:', encryptedRecordIntegrityTag);
  
  setEncryptedFileContent(encryptedFileContent);
  setArgon2Iterations(iterations);
  setRandomlyGeneratedFileKey(randomlyGeneratedFileKey);
  setFileSalt(fileSalt);
  setMetadataSalt(metadataSalt);
  setEncryptedFilename(encryptedFilename);
  setEncryptedDescription(encryptedDescription);
  setEncryptedMetadataTag(encryptedMetadataTag);
  setEncryptedRecordIntegrityTag(encryptedRecordIntegrityTag);

  if (masterKey) {
    setmasterKeyForFileEncrypter(masterKey);
    setIsDecrypterOpen(true);
  }
};

// Helper functions
const readFileAsUint8Array = async (file: File): Promise<Uint8Array> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
};

const readFileAsText = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsText(file);
  });
};      

const base64ToUint8Array = (base64: string): Uint8Array => {
  try {
    const binaryString = atob(base64);
    const uint8Array = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }
    return uint8Array;
  } catch (error) {
    console.warn(error);
    return new Uint8Array([1]);
  }
};

// Decrypter //

The FileEncrypter component encrypts a file using the "ChaCha20 + Serpent 256-CBC + HMAC-SHA3-512" authenticated encryption scheme. It takes a file object, a master key, and the number of iterations for Argon2id as inputs and returns the encrypted file content along with the data necessary for the file decryption.

// Note: The FileEncrypter component accepts the following props:
// - file: File | null - The file object to be encrypted.
// - masterKey: Uint8Array - The master key used for encryption.
// - numberOfIterationsForArgon2: number - Number of iterations for Argon2id.
// - onClose: (result: {
//     -- randomlyGeneratedFileKey: Uint8Array | null - A key generated during encryption.
//     -- fileSalt: Uint8Array | null - A salt used to prevent rainbow table attacks on the file.
//     -- metadataSalt: Uint8Array | null - A salt used for metadata encryption.
//     -- encryptedFileContent: Uint8Array | null - The encrypted content of the file.
//     -- encryptedFilename: Uint8Array | null - The encrypted filename.
//     -- encryptedDescription: Uint8Array | null - The encrypted description of the file.
//     -- encryptedMetadataTag: Uint8Array | null - An encrypted metadata tag.
//     -- encryptedRecordIntegrityTag: Uint8Array | null - An encrypted record integrity tag.
//     -- isThereAnError: boolean - Indicates if an error occurred during encryption.
//     -- errorMessage: string - The error message if an error occurred.
// }) => void (required) - Callback function called when the encryption process is completed or an error occurs.
// - isOpen: boolean (required) - Indicates whether the component is open.

// Values that can be safely exposed without compromising security:
//     -- encryptedFileContent
//     -- encryptedFilename
//     -- encryptedDescription
//     -- encryptedMetadataTag
//     -- encryptedRecordIntegrityTag

// Values that must be kept confidential. They should not be exposed, even to the most trusted cloud provider, and should not leave the user's machine:
//     -- masterKey
//     -- numberOfIterationsForArgon2
//     -- randomlyGeneratedFileKey

// Values that can be made public, but should be kept private whenever possible:
//     -- fileSalt
//     -- metadataSalt

The FileDecrypter component decrypts a file using the "ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512" authenticated decryption scheme. It takes the encrypted file content, a master key, the number of iterations for Argon2id, a randomly generated file key, file and metadata salts, encrypted filename, encrypted description, encrypted metadata tag, and encrypted record integrity tag as inputs and returns a decrypted file along with the accompanying information.

// Note: The FileDecrypter component accepts the following props:
// - encryptedFileContent: Uint8Array | null - The encrypted content of the file.
// - masterKey: Uint8Array | null - The master key used for decryption.
// - numberOfIterationsForArgon2: number - Number of iterations for Argon2id.
// - randomlyGeneratedFileKey: Uint8Array | null - A key generated during encryption.
// - fileSalt: Uint8Array | null - A salt used in the derivation of the file key.
// - metadataSalt: Uint8Array | null - A salt used in the derivation of the metadata key.
// - encryptedFilename: Uint8Array | null - The encrypted filename.
// - encryptedDescription: Uint8Array | null - The encrypted description of the file.
// - encryptedMetadataTag: Uint8Array | null - An encrypted metadata tag.
// - encryptedRecordIntegrityTag: Uint8Array | null - An encrypted record integrity tag.
// - onClose: (result: {
//     -- decryptedFilename: Uint8Array | null - The decrypted filename.
//     -- filenameIntegrity: Boolean | null - Integrity check for the filename.
//     -- filenamePaddingValid: Boolean | null - Padding validation for the filename.
//     -- decryptedDescription: Uint8Array | null - The decrypted description of the file.
//     -- descriptionIntegrity: Boolean | null - Integrity check for the description.
//     -- descriptionPaddingValid: Boolean | null - Padding validation for the description.
//     -- metadataIntegrity: Boolean | null - Integrity check for the metadata.
//     -- metadataStatus: Message[] - Status messages for metadata.
//     -- decryptedFileContent: Uint8Array | null - The decrypted content of the file.
//     -- fileIntegrityCompromised: boolean - Indicates if the file integrity is compromised. (true -> compromised)
//     -- fileHasInvalidPadding: boolean - Indicates if the file padding is invalid. (true -> invalid)
//     -- fileStatus: Message[] - Status messages for the file.
//     -- recordIntegrity: Boolean | null - Integrity check for the record.
//     -- recordStatus: Message[] - Status messages for the record.
//     -- isThereAnError: boolean - Indicates if an error occurred during decryption.
//     -- errorMessage: string - The error message if an error occurred.
// }) => void (required) - Callback function called when the decryption process is completed or an error occurs.
`,
code: [
  {
    filename: 'app/cryptographicPrimitives/serpent.js',
    content: `"use client";
import { Serpent } from 'mipher';

export function encryptSerpent256ECB(block, key) {
    // Check input lengths
    if (block.length !== 16 || key.length !== 32) {
        throw new Error('Invalid input lengths. Block must be 16 bytes and key must be 32 bytes.');
    }

    // Initialize Serpent cipher
    const serpent = new Serpent();

    // Encrypt
    const encryptedBlock = serpent.encrypt(key, block);

    // Convert to Uint8Array if it's not already
    return new Uint8Array(encryptedBlock);
}

export function decryptSerpent256ECB(block, key) {
    // Check input lengths
    if (block.length !== 16 || key.length !== 32) {
        throw new Error('Invalid input lengths. Block must be 16 bytes and key must be 32 bytes.');
    }

    // Initialize Serpent cipher
    const serpent = new Serpent();

    // Decrypt
    const decryptedBlock = serpent.decrypt(key, block);

    // Convert to Uint8Array if it's not already
    return new Uint8Array(decryptedBlock);
}
`
  },
  {
    filename: 'next-i18next.config.js',
    content: `import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('./public/locales/en/translation.json'), // English translation
      },
      he: {
        translation: require('./public/locales/he/translation.json'), // Hebrew translation
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
`
  },
  {
    filename: 'app.tsx',
    content: `"use client";
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import i18nConf from '@/next-i18next.config.js'; // Import your i18n configuration
import { useTranslation } from 'react-i18next';
...
  return (
    <I18nextProvider i18n={i18nConf}>
      {The app components}
    </I18nextProvider>
  );
};
`
  },
  {
    filename: 'public/locales/en/translation.json',
    content: `{
  "encrypt-file": "Encrypt File",
  "filename": "Filename",
  "description": "Description",
  "filename-placeholder-inscription": "Filename (Can't be empty)",
  "description-placeholder-inscription": "Enter a file description here or leave this text area empty to encrypt the file without a description.",
  "generating-keys": "Generating Encryption Keys",
  "please_wait": "Please wait for a while...",
  "reading-file": "Reading file",
  "encrypting-filename": "Encrypting Filename",
  "encrypting-description": "Encrypting Description",
  "computing-metadata": "Computing Metadata",
  "computing-metadata-tag": "Computing Metadata Tag",
  "encryption-step1": "Step 1/2 - Encrypting file with ChaCha20",
  "encryption-step2": "Step 2/2 - Encrypting file with Serpent-256 CBC",
  "computing-tag-for-file-using-HMAC-SHA3-512": "Computing tag for file using HMAC-SHA3-3-512",
  "finalizing-tag-computation": "Finalizing tag computation",
  "preparing-for-file-encryption": "Preparing for file encryption",
  "rng-title": "Random Number Generator",
  "rng-inscription": "Move your cursor to increase randomness.",
  "continue-button-inscription": "Continue",
  "cancel-button-inscription": "Cancel",
  "filename-cannot-be-empty": "The file name cannot be empty!",
  "decrypt-file": "Decrypt File",
  "no-filename": "Unknown filename",
  "no-description": "No description",
  "decrypting-metadata": "Decrypting Metadata",
  "metadata-status": "Metadata Status",
  "filename-integrity-error": "Filename integrity is compromised.",
  "description-integrity-error": "Description integrity is compromised.",
  "metadata-integrity-error": "Metadata integrity is compromised.",
  "filename-integrity-success": "Filename integrity verified successfully.",
  "description-integrity-success": "Description integrity verified successfully.",
  "metadata-integrity-success": "Metadata integrity verified successfully.",
  "filename-padding-invalid": "Invalid filename padding.",
  "description-padding-invalid": "Invalid description padding.",
  "missing-metadata-tag-error": "Metadata tag is missing.",
  "missing-description-error": "Description is missing.",
  "missing-filename-error": "Filename is missing.",
  "decryption-successful": "Decryption completed successfully.",
  "missing-metadata-salt-error": "Metadata salt is missing. Unable to decrypt the metadata.",
  "record-integrity-compromised": "Record integrity is compromised.",
  "record-integrity-verified": "Record integrity verified successfully.",
  "missing-metadata": "Metadata is missing.",
  "decrypt-button-inscription": "Decrypt",
  "close-button-inscription": "Close",
  "missing-file-content": "File content is missing. There's nothing to decrypt.",
  "missing-both-file-content-and-salt": "Both file content and file salt are missing. There's nothing to decrypt.",
  "missing-file-salt": "File salt is missing. Can't proceed with decryption.",
  "encrypted-file-size": "Encrypted file size: {{fileSize}}",
  "preparing-for-file-decryption": "Preparing for file decryption",
  "decryption-step1": "Step 1/2 - Decrypting file with Serpent-256 CBC",
  "decryption-step2": "Step 2/2 - Decrypting file with ChaCha20",
  "file-integrity-error": "File integrity is compromised.",
  "file-padding-invalid": "File padding is invalid.",
  "file-integrity-success": "File integrity verified successfully.",
  "record-integrity-error": "Record integrity is compromised.",
  "record-integrity-success": "Record integrity verified successfully.",
  "save-as-button-inscription": "Save As...",
  "file-size": "File size: {{fileSize}}",
  "decryption-result": "Decryption Result",
  "status": "Status"
}
`
  },
  {
    filename: 'public/locales/he/translation.json',
    content: `{
  "encrypt-file": "הצפן קובץ",
  "filename": "שם הקובץ",
  "description": "תיאור",
  "filename-placeholder-inscription": "שם הקובץ (לא יכול להיות ריק)",
  "description-placeholder-inscription": "הכנס תיאור לקובץ כאן או השאר את שדה הטקסט הזה ריק כדי להצפין את הקובץ ללא תיאור.",
  "generating-keys": "יצירת מפתחות הצפנה",
  "please_wait": "אנא המתן לרגע...",
  "reading-file": "קריאת קובץ",
  "encrypting-filename": "הצפנת שם הקובץ",
  "encrypting-description": "הצפנת תיאור",
  "computing-metadata": "חישוב מטא-נתונים",
  "computing-metadata-tag": "חישוב תג מטא-נתונים",
  "encryption-step1": "שלב 1 מתוך 2 - מצפין קובץ באמצעות ChaCha20",
  "encryption-step2": "שלב 2 מתוך 2 - מצפין קובץ באמצעות Serpent-256",
  "computing-tag-for-file-using-HMAC-SHA3-512": "חישוב תג לקובץ באמצעות HMAC-SHA3-3-512",
  "finalizing-tag-computation": "סיום חישוב התג",
  "preparing-for-file-encryption": "הכנה להצפנת קובץ",
  "rng-title": "מחולל מספרים אקראיים",
  "rng-inscription": "הזיז את העכבר כדי להגדיל את האקראיות.",
  "continue-button-inscription": "המשך",
  "cancel-button-inscription": "ביטול",
  "filename-cannot-be-empty": "שם הקובץ לא יכול להיות ריק!",
  "decrypt-file": "פענוח קובץ",
  "no-filename": "שם קובץ לא ידוע",
  "no-description": "אין תיאור",
  "decrypting-metadata": "פענוח מטא-נתונים",
  "metadata-status": "סטטוס מטא-נתונים",
  "filename-integrity-error": "אינטגריטת שם הקובץ נפגעה.",
  "description-integrity-error": "אינטגריטת התיאור נפגעה.",
  "metadata-integrity-error": "אינטגריטת המטא-נתונים נפגעה.",
  "filename-integrity-success": "אינטגריטת שם הקובץ אומתה בהצלחה.",
  "description-integrity-success": "אינטגריטת התיאור אומתה בהצלחה.",
  "metadata-integrity-success": "אינטגריטת המטא-נתונים אומתה בהצלחה.",
  "filename-padding-invalid": "מילוי שם הקובץ לא תקין.",
  "description-padding-invalid": "מילוי תיאור לא תקין.",
  "missing-metadata-tag-error": "תג מטא-נתונים חסר.",
  "missing-description-error": "תיאור חסר.",
  "missing-filename-error": "שם הקובץ חסר.",
  "decryption-successful": "פענוח הושלם בהצלחה.",
  "missing-metadata-salt-error": "מלח מטא-נתונים חסר. לא ניתן לפענח את המטא-נתונים.",
  "record-integrity-compromised": "אינטגריטת הרשומה נפגעה.",
  "record-integrity-verified": "אינטגריטת הרשומה אומתה בהצלחה.",
  "missing-metadata": "מטא-נתונים חסרים.",
  "decrypt-button-inscription": "פענוח",
  "close-button-inscription": "סגור",
  "missing-file-content": "תוכן הקובץ חסר. אין מה לפענח.",
  "missing-both-file-content-and-salt": "תוכן הקובץ ומלח הקובץ חסרים. אין מה לפענח.",
  "missing-file-salt": "מלח הקובץ חסר. לא ניתן להמשיך עם הפענוח.",
  "encrypted-file-size": "גודל קובץ מוצפן: {{fileSize}}",
  "preparing-for-file-decryption": "מכין לפענוח קובץ",
  "decryption-step1": "שלב 1 מתוך 2 - פוענח קובץ באמצעות Serpent-256 CBC",
  "decryption-step2": "שלב 2 מתוך 2 - פוענח קובץ באמצעות ChaCha20",
  "file-integrity-error": "שלמות הקובץ מופרת.",
  "file-padding-invalid": "מילוי הקובץ לא תקין.",
  "file-integrity-success": "שלמות הקובץ אומתה בהצלחה.",
  "record-integrity-error": "שלמות הרשומה מופרת.",
  "record-integrity-success": "שלמות הרשומה אומתה בהצלחה.",
  "save-as-button-inscription": "שמור כקובץ...",
  "file-size": "גודל קובץ: {{fileSize}}",
  "decryption-result": "תוצאות פענוח",
  "status": "סטטוס"
}
`
  },
  {
    filename: 'FileEncrypter.tsx',
    content: `"use client"
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
        //toast.error(\`Error processing the "\${file.name}" file. Check the console for more information.\`);
        //console.error(\`Error processing file \${file.name}:\`, error);
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
          errorMessage: \`\${error}\`
        });
        /*
        const errorMessage = \`
        <p style="margin-bottom: 10px;">Error processing the "\${file.name}" file:</p>
        <p>\${error instanceof Error ? error.message : 'Unknown error'}</p>\`;
    
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
    setProcessingStep(t('computing-tag-for-file-using-HMAC-SHA3-512'));
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
      container.innerHTML = \`
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
      \`;
    } else {
      container.innerHTML = \`
        <style>
          .file-processing-popup-progress-done {
            background: linear-gradient(to left, \${isRTL ? '#00A6FB, #9F4EFF' : '#9F4EFF, #00A6FB'});
            box-shadow: 0 3px 3px -5px rgba(0, 166, 251, 0.7), 0 2px 5px rgba(159, 79, 255, 0.7);
            color: white; /* Assuming white as the text color */
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: \${processingProgress}%; /* Ensure width is based on progress */
            opacity: 1;
            border-radius: 15px;
          }
        </style>
        <div class="file-processing-popup-progress-done" style="transform: \${isRTL ? 'scaleX(-1)' : 'none'}">
          \${processingProgress.toFixed(2)}%
        </div>
      \`;
    }
  };
  
  useEffect(() => {
    if (!showProcessingPopup) return;
    const container = progressContainerRef.current;
    if (!container) return;
    const progressDoneElement = container.querySelector('.file-processing-popup-progress-done') as HTMLElement;
    if (progressDoneElement) {
      progressDoneElement.style.width = \`\${processingProgress}%\`;
      progressDoneElement.textContent = \`\${processingProgress.toFixed(2)}%\`;
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
              <div className={\`flex \${isRTL ? 'justify-end' : ''}\`} style={{ width: '100%' }}>
                <label className="text-white mb-" dir={isRTL ? 'rtl' : 'ltr'}>{t('filename')}:</label>
              </div>
              <div style={{ height: '6px' }}></div>
              <DreamyInput ref={filenameEntry} placeholder={t('filename-placeholder-inscription')} presetText={filename} backgroundColor="#1b1a21" />
            </div>
            <div style={{ width: '100%' }}>
              <div className={\`flex \${isRTL ? 'justify-end' : ''}\`} style={{ width: '100%' }}>
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
          <style jsx>{\`
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
          \`}</style>
    </>
  );
};

export default FileEncrypter;
`
  },
  {
    filename: 'FileDecrypter.tsx',
    content: `'use client'
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
      return \`\${(sizeInBytes / (1024 * 1024 * 1024)).toFixed(2)} GB\`;
    } else if (sizeInBytes >= 1024 * 1024) {
      return \`\${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB\`;
    } else if (sizeInBytes >= 1024) {
      return \`\${(sizeInBytes / 1024).toFixed(2)} KB\`;
    } else if (sizeInBytes === 1) {
      return \`1 byte\`;
    } else {
      return \`\${sizeInBytes.toFixed(0)} bytes\`;
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
          returnError(\`\${error}\`);
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
    setProcessingStep(t('computing-tag-for-file-using-HMAC-SHA3-512'));
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
        progressDoneElement.style.width = \`\${processingProgress}%\`;
        progressDoneElement.textContent = \`\${processingProgress.toFixed(2)}%\`;
      }
    }, [processingProgress, showPopup]);

  const toggleProgressAnimation = (isAnimating: boolean) => {
    const container = progressContainerRef.current;
    if (!container) return;
  
    if (isAnimating) {
      container.innerHTML = \`
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
      \`;
    } else {
      container.innerHTML = \`
        <style>
          .file-processing-popup-progress-done {
            background: linear-gradient(to left, \${isRTL ? '#00A6FB, #9F4EFF' : '#9F4EFF, #00A6FB'});
            box-shadow: 0 3px 3px -5px rgba(0, 166, 251, 0.7), 0 2px 5px rgba(159, 79, 255, 0.7);
            color: white; /* Assuming white as the text color */
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: \${processingProgress}%; /* Ensure width is based on progress */
            opacity: 1;
            border-radius: 15px;
          }
        </style>
        <div class="file-processing-popup-progress-done" style="transform: \${isRTL ? 'scaleX(-1)' : 'none'}">
          \${processingProgress.toFixed(2)}%
        </div>
      \`;
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
      <style jsx>{\`
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
      \`}</style>
    </>
  );
};

export default FileDecrypter;
`
  },
  {
    filename: 'DecryptModal.tsx',
    content: `"use client";
import React, { useState, useEffect } from 'react';
import { ShieldCheck, ShieldOff } from 'lucide-react';
import DreamyInput from "@/app/the-actual-components/dreamy-input/DreamyInput";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useTranslation } from 'react-i18next';

interface DecryptModalProps {
  headline: string;
  headlineFontSize?: string;
  headlineColor?: string;
  inscription?: string;
  inscriptionFontSize?: string;
  inscriptionColor?: string;
  inscriptionAboveButtons?: string;
  inscriptionAboveButtonsFontSize?: string;
  inscriptionAboveButtonsColor?: string;
  filename?: string;
  description?: string;
  messagesListHeader?: string
  messages?: { text: string; success: boolean }[];
  onButtonClicked: (buttonType: 'first' | 'second') => void;
  firstButtonText: string;
  secondButtonText: string;
  firstButtonGradient: string;
  secondButtonGradient: string;
  displayFirstButton: boolean;
}

const DecryptModal: React.FC<DecryptModalProps> = ({
  headline,
  headlineFontSize = '1.5rem',
  headlineColor = '#fff',
  inscription,
  inscriptionFontSize = '1rem',
  inscriptionColor = '#fff',
  inscriptionAboveButtons,
  inscriptionAboveButtonsFontSize = '1rem',
  inscriptionAboveButtonsColor = '#fff',
  filename,
  description,
  messagesListHeader,
  messages = [],
  onButtonClicked,
  firstButtonText,
  secondButtonText,
  firstButtonGradient,
  secondButtonGradient,
  displayFirstButton,
}) => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'he';
  const [isMobile, setIsMobile] = useState(false);
  const [useFullScreen, setUseFullScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 520);
      const heightThreshold = 600 + (messages.length - 1) * 140; // Adjust threshold based on message count
      setUseFullScreen(window.innerHeight < heightThreshold || window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [messages.length]);  

  return (
    <>
        <div className="file-processing-popup" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowX: 'hidden', overflowY: useFullScreen ? 'auto' : 'hidden', zIndex: 1000 }}>
            <div className="modal-background" style={{ width: useFullScreen ? '100%' : 'min(90vw, 640px)', height: useFullScreen ? '100%' : 'auto', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', borderRadius: useFullScreen ? '0' : '12px', gap: '20px', overflow: useFullScreen ? 'auto' : 'visible', background: '#060507', border: '1px solid #292730', scrollbarWidth: 'thin', scrollbarColor: firstButtonGradient + ' ' + firstButtonGradient }}>
                {!useFullScreen && <GlowingEffect spread={76} glow={true} disabled={false} proximity={204} inactiveZone={0.01} />}
                <h2 style={{ fontSize: headlineFontSize, color: headlineColor, marginBottom: '0.4rem', textAlign: 'center' }}>
                {headline}
                </h2>
                {inscription && (
                <p style={{ fontSize: inscriptionFontSize, color: inscriptionColor, marginBottom: '1rem', textAlign: 'center' }}>
                    {inscription}
                </p>
                )}
                <div style={{ width: '100%', marginTop: '1rem' }}>
                <div className={\`flex \${isRTL ? 'justify-end' : ''}\`} style={{ width: '100%' }}>
                    <label className="text-white mb-" dir={isRTL ? 'rtl' : 'ltr'}>{filename ? t('filename') + ":" : t('no-filename')}</label>
                </div>
                {filename && (
                    <>
                    <div style={{ height: '6px' }}></div>
                    <DreamyInput placeholder="" presetText={filename} readOnly={true} backgroundColor="#1b1a21" />
                    </>
                )}
                </div>
                <div style={{ width: '100%', marginTop: '1rem' }}>
                <div className={\`flex \${isRTL ? 'justify-end' : ''}\`} style={{ width: '100%' }}>
                    <label className="text-white mb-" dir={isRTL ? 'rtl' : 'ltr'}>{description && t('description') + ":"} {!description && t('no-description')}</label>
                </div>
                {description && (
                    <>
                    <div style={{ height: '6px' }}></div>
                    <DreamyInput placeholder="" presetText={description} readOnly={true} multiLine={true} multiLineHeight={isMobile ? 3.2 : 4.18} backgroundColor="#1b1a21" />
                    </>
                )}
                </div>
                {messages.length > 0 && (
                <div style={{ width: '100%', marginTop: '1rem' }}>
                    <div className={\`flex \${isRTL ? 'justify-end' : ''}\`} style={{ width: '100%' }}>
                    <label className="text-white mb-" dir={isRTL ? 'rtl' : 'ltr'}>{messagesListHeader}:</label>
                    </div>
                    <div style={{ overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#151419 #151419', marginTop: '1rem' }}>
                    {messages.map((message, index) => (
                        <div key={index} dir={isRTL ? 'rtl' : 'ltr'} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                        {isRTL ? (
                            <span style={{ margin: '4px' }}>
                            {message.success ? (
                                <ShieldCheck size={16} style={{ color: '#059C47' }} />
                            ) : (
                                <ShieldOff size={16} style={{ color: '#BD064D' }} />
                            )}
                            </span>
                        ) : (
                            <span style={{ margin: '4px' }}>
                            {message.success ? (
                                <ShieldCheck size={16} style={{ color: '#059C47' }} />
                            ) : (
                                <ShieldOff size={16} style={{ color: '#BD064D' }} />
                            )}
                            </span>
                        )}
                        <span style={{ color: '#fff' }}>{message.text}</span>
                        </div>
                    ))}
                    </div>
                </div>
                )}
                {inscriptionAboveButtons && (
                <p dir={isRTL ? 'rtl' : 'ltr'} className={\`flex \${isRTL ? 'justify-end' : ''}\`} style={{ fontSize: inscriptionAboveButtonsFontSize, color: inscriptionAboveButtonsColor, marginBottom: '1rem', width: '100%' }}>
                    {inscriptionAboveButtons}
                </p>
                )}
                <div className={isMobile ? 'flex flex-col gap-6 w-full' : 'flex gap-6 w-full'}>
                {isRTL ? (
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
                        width: isMobile ? '100%' : '50%',
                        backgroundImage: secondButtonGradient,
                        }}
                        onClick={(e) => {
                        e.preventDefault();
                        onButtonClicked('second');
                        }}
                    >
                        <span
                        style={{
                            background: '#151419',
                            padding: isMobile ? '1rem 4rem' : '1rem 4rem',
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
                        {secondButtonText}
                        </span>
                    </a>
                    {displayFirstButton !== false && (
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
                            width: isMobile ? '100%' : '50%',
                            backgroundImage: firstButtonGradient,
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                            onButtonClicked('first');
                        }}
                        >
                        <span
                            style={{
                            background: '#151419',
                            padding: isMobile ? '1rem 4rem' : '1rem 4rem',
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
                            {firstButtonText}
                        </span>
                        </a>
                    )}
                    </>
                ) : (
                    <>
                    {displayFirstButton !== false && (
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
                            width: isMobile ? '100%' : '50%',
                            backgroundImage: firstButtonGradient,
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                            onButtonClicked('first');
                        }}
                        >
                        <span
                            style={{
                            background: '#151419',
                            padding: isMobile ? '1rem 4rem' : '1rem 4rem',
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
                            {firstButtonText}
                        </span>
                        </a>
                    )}
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
                        width: isMobile ? '100%' : '50%',
                        backgroundImage: secondButtonGradient,
                        }}
                        onClick={(e) => {
                        e.preventDefault();
                        onButtonClicked('second');
                        }}
                    >
                        <span
                        style={{
                            background: '#151419',
                            padding: isMobile ? '1rem 4rem' : '1rem 4rem',
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
                        {secondButtonText}
                        </span>
                    </a>
                    </>
                )}
                </div>
            </div>
        </div>
        <style jsx>{\`
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
        \`}</style>
    </>
  );
};

export default DecryptModal;
`
  },
  {
    filename: 'EncryptedFileAndKeyDownloaderHelper.tsx',
    content: `"use client"
import React from 'react';
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface Props {
  isEncryptedFileDownloaderVisible: boolean;
  encryptedFileDownloaderType: 'fileDownload' | 'error' | 'operationCancelled';
  encryptedFileResult: {
    encryptedFileContent?: Uint8Array | null;
    randomlyGeneratedFileKey?: Uint8Array | null;
    fileSalt?: Uint8Array | null;
    metadataSalt?: Uint8Array | null;
    encryptedFilename?: Uint8Array | null;
    encryptedDescription?: Uint8Array | null;
    encryptedMetadataTag?: Uint8Array | null;
    encryptedRecordIntegrityTag?: Uint8Array | null;
  };
  masterKeyForFileEncrypter: Uint8Array;
  argon2Iterations: number;
  handleCloseEncryptedFileDownloader: () => void;
}

const EncryptedFileAndKeyDownloaderHelper: React.FC<Props> = ({
  isEncryptedFileDownloaderVisible,
  encryptedFileDownloaderType,
  encryptedFileResult,
  masterKeyForFileEncrypter,
  argon2Iterations,
  handleCloseEncryptedFileDownloader,
}) => {
  const handleDownloadEncryptedFileAs = () => {
    const finalChunkSize = 16;
    const finalEncryptedChunks: Uint8Array[] = [];
    const encryptedFileContent = encryptedFileResult.encryptedFileContent;

    if (encryptedFileContent) {
      for (let i = 0; i < encryptedFileContent.length; i += finalChunkSize) {
        finalEncryptedChunks.push(encryptedFileContent.slice(i, i + finalChunkSize));
      }
      const encryptedFile = new Blob(finalEncryptedChunks, { type: 'application/octet-stream' });
      const url = URL.createObjectURL(encryptedFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = "irrelevant-name.encrypted-data";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleDownloadKeyAs = () => {
    const masterKeyBase64 = btoa(String.fromCharCode(...masterKeyForFileEncrypter));
    const iterations = argon2Iterations.toString();
    const keyBase64 = encryptedFileResult.randomlyGeneratedFileKey
      ? btoa(String.fromCharCode(...encryptedFileResult.randomlyGeneratedFileKey))
      : "null";
    const fileSaltBase64 = encryptedFileResult.fileSalt
      ? btoa(String.fromCharCode(...encryptedFileResult.fileSalt))
      : "null";
    const metadataSaltBase64 = encryptedFileResult.metadataSalt
      ? btoa(String.fromCharCode(...encryptedFileResult.metadataSalt))
      : "null";
    const encryptedFilenameBase64 = encryptedFileResult.encryptedFilename
      ? btoa(String.fromCharCode(...encryptedFileResult.encryptedFilename))
      : "null";
    const encryptedDescriptionBase64 = encryptedFileResult.encryptedDescription
      ? btoa(String.fromCharCode(...encryptedFileResult.encryptedDescription))
      : "null";
    const encryptedMetadataTagBase64 = encryptedFileResult.encryptedMetadataTag
      ? btoa(String.fromCharCode(...encryptedFileResult.encryptedMetadataTag))
      : "null";
    const encryptedRecordIntegrityTagBase64 = encryptedFileResult.encryptedRecordIntegrityTag
      ? btoa(String.fromCharCode(...encryptedFileResult.encryptedRecordIntegrityTag))
      : "null";
    const keyContentString = \`\${masterKeyBase64},\${iterations},\${keyBase64},\${fileSaltBase64},\${metadataSaltBase64},\${encryptedFilenameBase64},\${encryptedDescriptionBase64},\${encryptedMetadataTagBase64},\${encryptedRecordIntegrityTagBase64}\`;
    const keyBlob = new Blob([keyContentString], { type: 'text/plain' });
    const keyUrl = URL.createObjectURL(keyBlob);
    const aKey = document.createElement('a');
    aKey.href = keyUrl;
    aKey.download = "irrelevant-name.key";
    document.body.appendChild(aKey);
    aKey.click();
    document.body.removeChild(aKey);
    URL.revokeObjectURL(keyUrl);
  };

  return (
    <>
      {isEncryptedFileDownloaderVisible && (
        <div className="file-processing-popup" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100,
          }}
        >
          <div
            style={{
              width: 'min(90vw, 640px)',
              height: 'auto',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              borderRadius: '12px',
              gap: '20px',
              overflow: 'visible',
              background: '#060507',
              border: '1px solid #292730',
              scrollbarWidth: 'thin',
              scrollbarColor: 'linear-gradient(135deg, #4776cb, #a19fe5, #6cc606) linear-gradient(135deg, #4776cb, #a19fe5, #6cc606)',
            }}
          >
            <GlowingEffect spread={76} glow={true} disabled={false} proximity={204} inactiveZone={0.01} />
            {encryptedFileDownloaderType === 'fileDownload' && (
              <div>
                <h2 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>
                  Encrypted File is Ready for Download
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
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
                      handleDownloadEncryptedFileAs();
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
                        fontSize: '18px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'none';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#151419';
                      }}
                    >
                      Save Encrypted File
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
                      backgroundImage: 'linear-gradient(135deg, #4776cb, #a19fe5, #6cc606)',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleDownloadKeyAs();
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
                        fontSize: '18px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'none';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#151419';
                      }}
                    >
                      Save File Key
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
                      handleCloseEncryptedFileDownloader();
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
                        fontSize: '18px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'none';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#151419';
                      }}
                    >
                      Close
                    </span>
                  </a>
                </div>
              </div>
            )}
            {encryptedFileDownloaderType === 'error' && (
              <div>
                <span style={{ fontSize: '24px', marginBottom: '16px', display: 'block', textAlign: 'center' }}>
                  Error
                </span>
                <span style={{ fontSize: '18px', marginBottom: '16px', display: 'block', textAlign: 'center' }}>
                  Something went wrong. Check the console.
                </span>
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
                    handleCloseEncryptedFileDownloader();
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
                      fontSize: '18px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'none';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#151419';
                    }}
                  >
                    Close
                  </span>
                </a>
              </div>
            )}
            {encryptedFileDownloaderType === 'operationCancelled' && (
              <div>
                <span style={{ fontSize: '24px', textAlign: 'center' }}>
                  Operation was cancelled by user
                </span>
                <div style={{ height: '16px' }}></div>
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
                    handleCloseEncryptedFileDownloader();
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
                      fontSize: '18px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'none';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#151419';
                    }}
                  >
                    Close
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
        <style jsx>{\`
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
        \`}</style>
    </>
  );
};

export default EncryptedFileAndKeyDownloaderHelper;
`
  },
],
  dependencies: (
    <span>
      npm install hash-wasm --legacy-peer-deps
      <br />
      npm install mipher --legacy-peer-deps
      <br />
      npm install i18next react-i18next --legacy-peer-deps
      <br />
      Random Number Generator
      <br />
      Dreamy Input
      <br />
      <a href="https://ui.aceternity.com/components/glowing-effect" target="_blank" rel="noopener noreferrer" className="link">Glowing Effect</a> from <a href="https://ui.aceternity.com" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
    </span>
  ),
  credit: (
    <span>
      <a href="https://codepen.io/uchihaclan/pen/NWOyRWy" target="_blank" rel="noopener noreferrer" className="link">BUTTONS</a> by <a href="https://codepen.io/uchihaclan" target="_blank" rel="noopener noreferrer" className="link">TAYLOR</a>
      <br />
      <a href="https://codepen.io/FlorinPop17/pen/yLyzmLZ" target="_blank" rel="noopener noreferrer" className="link">Custom Progress Bar</a> by <a href="https://codepen.io/FlorinPop17" target="_blank" rel="noopener noreferrer" className="link">Florin Pop</a>
      <br />
      <a href="https://codepen.io/ash_creator/pen/zYaPZLB" target="_blank" rel="noopener noreferrer" className="link">すりガラスなプロフィールカード</a> by <a href="https://codepen.io/ash_creator" target="_blank" rel="noopener noreferrer" className="link">あしざわ - Webクリエイター</a>
      <br />
      <a href="https://ui.aceternity.com/components/signup-form" target="_blank" rel="noopener noreferrer" className="link">Signup Form</a> from <a href="https://ui.aceternity.com" target="_blank" rel="noopener noreferrer" className="link">Aceternity UI</a>
    </span>
  ),
}

export { metadata }