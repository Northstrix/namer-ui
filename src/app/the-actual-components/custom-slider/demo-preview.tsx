'use client';
import React, { useState } from 'react';
import { CustomSlider } from '@/app/the-actual-components/custom-slider/CustomSlider';
import { useApp } from '@/context/app-context';
import useIsRTL from '@/hooks/useIsRTL';

export default function CustomSliderDemo() {
  const { t } = useApp();
  const isRTL = useIsRTL();
  const [temperature, setTemperature] = useState(122);

  const labelStyle: React.CSSProperties = {
    marginBottom: 8,
    color: '#000',
    userSelect: 'none',
    textAlign: isRTL ? 'right' : 'left',
    direction: isRTL ? 'rtl' : 'ltr',
    width:"240px"
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <label style={labelStyle}>
          <span>{t('custom_slider_note_temperature')}</span>{' '}
          <span style={{ fontWeight: 400 }}>({temperature}°F)</span>
        </label>

        {/* Slider container */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '240px',
          }}
        >
          <CustomSlider
            id="custom-slider-preview"
            min={32}
            max={212}
            step={1}
            value={temperature}
            onValueChange={setTemperature}
            disabled={false}
            trackHeight="10px"
            thumbWidth="24px"
            thumbHeight="24px"
            width="240px"
            trackFillBorderRadius="8px"
            thumbBorderRadius="50%"
            thumbBorderWidth="2px"
            colorTrackBackground="#AAA"
            colorFillDefault="#00A7FA"
            colorFillHover="#008BD0"
            colorFillActive="#008BD0"
            colorThumbDefault="#EEE"
            colorThumbHover="#FFF"
            colorThumbActive="#222"
            colorThumbBorderDefault="#0083C4"
            colorThumbBorderHover="#0079B5"
            colorThumbBorderActive="#5a5a5a"
            ariaLabel="namer-ui-custom-slider-preview-slider"
            isRTL={isRTL}
            keyStep={1}
          />
        </div>
      </div>
    </div>
  );
}
