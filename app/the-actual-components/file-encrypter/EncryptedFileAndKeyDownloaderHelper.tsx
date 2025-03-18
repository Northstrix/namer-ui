"use client"
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
    const keyContentString = `${masterKeyBase64},${iterations},${keyBase64},${fileSaltBase64},${metadataSaltBase64},${encryptedFilenameBase64},${encryptedDescriptionBase64},${encryptedMetadataTagBase64},${encryptedRecordIntegrityTagBase64}`;
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
        `}</style>
    </>
  );
};

export default EncryptedFileAndKeyDownloaderHelper;