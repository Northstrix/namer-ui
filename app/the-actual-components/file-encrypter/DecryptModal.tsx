"use client";
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
                <div className={`flex ${isRTL ? 'justify-end' : ''}`} style={{ width: '100%' }}>
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
                <div className={`flex ${isRTL ? 'justify-end' : ''}`} style={{ width: '100%' }}>
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
                    <div className={`flex ${isRTL ? 'justify-end' : ''}`} style={{ width: '100%' }}>
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
                <p dir={isRTL ? 'rtl' : 'ltr'} className={`flex ${isRTL ? 'justify-end' : ''}`} style={{ fontSize: inscriptionAboveButtonsFontSize, color: inscriptionAboveButtonsColor, marginBottom: '1rem', width: '100%' }}>
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
        `}</style>
    </>
  );
};

export default DecryptModal;