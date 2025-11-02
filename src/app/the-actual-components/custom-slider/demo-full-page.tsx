'use client';
import React, { useState } from 'react';
import { CustomSlider } from '@/app/the-actual-components/custom-slider/CustomSlider';

export default function DemoFullPage() {
  const [temperature, setTemperature] = useState(76);
  const [aperture, setAperture] = useState(0.5);
  const [volume, setVolume] = useState(10);
  const [brightness, setBrightness] = useState(40);
  const [contrast, setContrast] = useState(25);

  const labelCommonStyle: React.CSSProperties = {
    marginBottom: 8,
    color: '#fafafa',
    userSelect: 'none' as any,
  };

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gap: 32,  // gap between label+slider groups
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 480px))',
          justifyContent: 'center',
        }}
      >
        {/* Temperature */}
        <div style={{ minWidth: 240, maxWidth: 480, display: 'flex', flexDirection: 'column' }}>
          <label style={{ ...labelCommonStyle, textAlign: 'left' }}>
            <span>Temperature</span>{' '}
            <span style={{ fontWeight: 400 }}>({temperature}°F)</span>
          </label>
          <CustomSlider
            id="temperature"
            min={32}
            max={212}
            value={temperature}
            onValueChange={setTemperature}
            isRTL={false}
          />
        </div>

        {/* Aperture */}
        <div style={{ minWidth: 240, maxWidth: 480, display: 'flex', flexDirection: 'column' }}>
          <label style={{ ...labelCommonStyle, textAlign: 'left' }}>
            <span>Aperture</span>{' '}
            <span style={{ fontWeight: 400 }}>{aperture.toFixed(2)}</span>
          </label>
          <CustomSlider
            id="aperture"
            min={0.1}
            max={2.8}
            step={0.01}
            value={aperture}
            onValueChange={setAperture}
            colorTrackBackground="#444"
            colorFillDefault="#AAA"
            colorFillHover="#EEE"
            colorFillActive="#FFF"
            colorThumbDefault="#D000FA"
            colorThumbHover="#A600C8"
            colorThumbActive="#FFF"
            colorThumbBorderDefault="#E049FF"
            colorThumbBorderHover="#D000FA"
            colorThumbBorderActive="#A600C8"
            isRTL={false}
            trackFillBorderRadius="4px"
            thumbBorderRadius="50%"
            thumbWidth="26px"
            thumbHeight="26px"
            trackHeight="12px"
            thumbBorderWidth="5px"
            keyStep={0.05}
          />
        </div>

        {/* Volume */}
        <div style={{ minWidth: 240, maxWidth: 480, display: 'flex', flexDirection: 'column' }}>
          <label style={{ ...labelCommonStyle, textAlign: 'left' }}>
            <span>Volume</span>{' '}
            <span style={{ fontWeight: 400 }}>({volume}%)</span>
          </label>
          <CustomSlider
            id="volume"
            min={0}
            max={100}
            value={volume}
            onValueChange={setVolume}
            colorTrackBackground="#222831"
            colorFillDefault="#00ADB5"
            colorFillHover="#00BCD4"
            colorFillActive="#FFF"
            colorThumbDefault="#EEEEEE"
            colorThumbHover="#B2EBF2"
            colorThumbActive="#80DEEA"
            colorThumbBorderDefault="#0097A7"
            colorThumbBorderHover="#00838F"
            colorThumbBorderActive="#006064"
            isRTL={false}
            trackFillBorderRadius="10px"
            thumbBorderRadius="30%"
            thumbWidth="22px"
            thumbHeight="22px"
          />
        </div>

        {/* Brightness */}
        <div
          style={{
            minWidth: 240,
            maxWidth: 480,
            display: 'flex',
            flexDirection: 'column',
            direction: 'rtl',
          }}
        >
          <label
            style={{
              ...labelCommonStyle,
              textAlign: 'right',
              direction: 'rtl',
            }}
          >
            <span>בהירות</span>{' '}
            <span style={{ fontWeight: 400 }}>({brightness}%)</span>
          </label>
          <CustomSlider
            id="brightness"
            min={0}
            max={100}
            value={brightness}
            onValueChange={setBrightness}
            colorTrackBackground="#1c2a23"
            colorFillDefault="#2ecc71"
            colorFillHover="#27ae60"
            colorFillActive="#229954"
            colorThumbDefault="#a8dda8"
            colorThumbHover="#78c679"
            colorThumbActive="#fff"
            colorThumbBorderDefault="#27ae60"
            colorThumbBorderHover="#1e8449"
            colorThumbBorderActive="#1b6b3a"
            isRTL={true}
            trackFillBorderRadius="6px"
            thumbBorderRadius="12px"
            thumbBorderWidth="6px"
            thumbWidth="22px"
            thumbHeight="28px"
          />
        </div>

        {/* Contrast */}
        <div
          style={{
            minWidth: 240,
            maxWidth: 480,
            display: 'flex',
            flexDirection: 'column',
            direction: 'rtl',
          }}
        >
          <label
            style={{
              ...labelCommonStyle,
              textAlign: 'right',
              direction: 'rtl',
            }}
          >
            <span>ניגודיות</span>{' '}
            <span style={{ fontWeight: 400 }}>({contrast}%)</span>
          </label>
          <CustomSlider
            id="contrast"
            min={0}
            max={100}
            value={contrast}
            onValueChange={setContrast}
            colorTrackBackground="#3a2b1f"
            colorFillDefault="#ff6600"
            colorFillHover="#e65c00"
            colorFillActive="#cc5200"
            colorThumbDefault="#ffbf80"
            colorThumbHover="#242424"
            colorThumbActive="#e65c00"
            colorThumbBorderDefault="#ff9933"
            colorThumbBorderHover="#cc7a00"
            colorThumbBorderActive="#fff"
            isRTL={true}
            trackFillBorderRadius="6px"
            thumbBorderRadius="6px"
            thumbWidth="28px"
            thumbHeight="22px"
          />
        </div>
      </div>
    </div>
  );
}