"use client";
import React, { useState } from "react";
import ColorPicker from "@/app/the-actual-components/color-picker/ColorPicker";

export default function ColorPickerDemo() {
  const [color1, setColor1] = useState("#06B5EF");
  const [color2, setColor2] = useState("#7B24D2");
  const [color3, setColor3] = useState("#EF4006");
  const [color4, setColor4] = useState("#24EF23");
  const [color5, setColor5] = useState("#B406EF");
  const [color6, setColor6] = useState("#4287f5");
  const [color7, setColor7] = useState("#D6001C");

  const labelStyle = { margin: 0, fontWeight: 400, color: "#aaa" };
  const colorValueStyle = (color: string) => ({
    color,
    fontWeight: 600,
    display: "block",
    marginTop: "4px",
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "32px",
        justifyContent: "center",
        padding: "32px",
      }}
    >
      {/* 1. Default */}
      <div style={{ width: "360px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <div style={{ textAlign: "center" }}>
          <h4 style={labelStyle}>1. Default Demo</h4>
          <span style={colorValueStyle(color1)}>{color1}</span>
        </div>
        <ColorPicker value={color1} onValueChange={setColor1} showAlpha={false} showContrast={true} />
      </div>

      {/* 2. Hebrew */}
      <div style={{ width: "372px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <div style={{ textAlign: "center" }}>
          <h4 style={labelStyle}>2. Hebrew Demo</h4>
          <span style={colorValueStyle(color2)}>{color2}</span>
        </div>
        <ColorPicker
          value={color2}
          onValueChange={setColor2}
          isRTL={true}
          showAlpha={false}
          showContrast={true}
          hexLabel="הקס"
          rgbLabel="ארג׳יבי"
          hslLabel="האסאל"
          modeLabel="מצב"
          contrastLabel="ניגודיות"
          rLabel="אדום"
          gLabel="ירוק"
          bLabel="כחול"
          hLabel="גוון"
          sLabel="רוויה"
          lLabel="בהירות"
          floatingLabelFocusBorderColor="#fff"
          floatingLabelActiveTextColor={color2}
        />
      </div>

      {/* 3. Italian */}
      <div style={{ width: "364px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <div style={{ textAlign: "center" }}>
          <h4 style={labelStyle}>3. Italian Demo</h4>
          <span style={colorValueStyle(color3)}>{color3}</span>
        </div>
        <ColorPicker
          value={color3}
          onValueChange={setColor3}
          enabledModes={["hex", "rgb", "hsl"]}
          saturationHeight={210}
          saturationRadius={0}
          saturationThumbRadius={0}
          defaultFormat="rgb"
          containerRadius="0px"
          inputRadius={0}
          previewRadius={0}
          showContrast={true}
          hexLabel="ESA" 
          rgbLabel="RGB"
          hslLabel="TNL"
          modeLabel="Modo"
          contrastLabel="Rapporto di contrasto"
          rLabel="Rosso"
          gLabel="Verde"
          bLabel="Blu"
          hLabel="Ton"
          sLabel="Sat"
          lLabel="Lum"
          badgeBorderRadius="0px"
          contrastFormat="value"
          hueTrackHeight={14}
          hueTrackRadius="0px"
          hueTrackBorderColor="#242424"
          hueThumbSize={20}
          hueThumbRadius="none"
          modeDropdownWidth="120px"
          dropdownMenuRadius={0}
          contrastAreaTopMargin="8px"
        />
      </div>

      {/* 4. Light Mode */}
      <div style={{ width: "380px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <div style={{ textAlign: "center" }}>
          <h4 style={labelStyle}>4. Light Mode Demo</h4>
          <span style={colorValueStyle(color4)}>{color4}</span>
        </div>
          <ColorPicker
            value={color4}
            onValueChange={setColor4}
            enabledModes={["hsl", "rgb"]}
            defaultFormat="hsl"
            containerBg="#fafafa"
            containerBorderColor="#e0e0e0"
            inputBg="#fff"
            inputTextColor="#111"
            floatingLabelTextColor="#0059B8"
            floatingLabelActiveTextColor="#0E82FF"
            floatingLabelFocusBorderColor="#333333"
            floatingLabelBorderColor="#333333"         // Dark border
            floatingLabelBorderWidth={1}               // 1px outline
            contrastLabel="Contrast"
            rLabel="Red"
            gLabel="Green"
            bLabel="Blue"
            hLabel="Hue"
            sLabel="Sat"
            lLabel="Lum"
            showContrast={true}
            contrastValueColor="#000"
            dropdownMenuBg="#ffffff"
            dropdownMenuBorderColor="#e0e0e0"
            dropdownMenuTextColor="#333333"
            dropdownMenuActiveTextColor="#000000"
            dropdownMenuHoverBg="rgba(0,0,0,0.05)"
            dropdownMenuActiveBg="rgba(0,0,0,0.10)"
            modeDropdownWidth="96px"
            hueTrackHeight={14}
            hueTrackBorderColor="#333333"              // Dark outline like #242424
            hueTrackBorderWidth={1}
            hueThumbSize={20}
            hueThumbBgDefault="#333333"                // Dark thumb
            hueThumbBgHover="#444444"                  // Hover state
            hueThumbBgActive="#555555"                 // Active state
            hueThumbBorderDefault="#666666"            // Default border
            hueThumbBorderHover="#777777"              // Hover border
            hueThumbBorderActive="#888888"             // Active border
            saturationBorderColor="#333"
            saturationBorderWidth={1}
          />
      </div>

      {/* 5. Cantonese */}
      <div style={{ width: "280px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <div style={{ textAlign: "center" }}>
          <h4 style={labelStyle}>5. Cantonese Demo</h4>
          <span style={colorValueStyle(color5)}>{color5}</span>
        </div>
          <ColorPicker
            value={color5}
            onValueChange={setColor5}
            enabledModes={["rgb"]}
            defaultFormat="rgb"
            containerRadius="24px"
            rgbLabel="紅綠藍"
            rLabel="紅"
            gLabel="綠"
            bLabel="藍"
            contrastLabel="對比度"
            modeLabel="模式"
            badgeBgPass="rgba(255, 215, 0, 0.15)"
            badgeBgFail="rgba(128, 128, 128, 0.15)"
            badgeBorderPass="rgba(255, 215, 0, 0.5)"
            badgeBorderFail="rgba(128, 128, 128, 0.5)"
            badgeTextPass="#FFD700"
            badgeTextFail="#808080"
            floatingLabelFocusBorderColor="#FFD700"     // Gold outline (prosperity, luck)
            floatingLabelActiveTextColor="#FF6B35"      // Coral red text (joy, celebration)
            contrastFormat="value"
          />
      </div>

      {/* 6. French */}
      <div style={{ width: "360px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <div style={{ textAlign: "center" }}>
          <h4 style={labelStyle}>6. French Demo</h4>
          <span style={colorValueStyle(color6)}>{color6}</span>
        </div>
        <ColorPicker
          value={color6}
          onValueChange={setColor6}
          enabledModes={["hex", "rgb"]}
          containerRadius="4px"
          hueTrackRadius="4px"
          hueThumbRadius="4px"
          inputRadius={4}
          previewRadius={4}
          saturationRadius={4}
          saturationThumbRadius={4}
          dropdownRadius={4}
          dropdownMenuRadius={4}
          badgeBorderRadius="4px"
          hexLabel="HEX"
          rgbLabel="RVB"
          modeLabel="Mode"
          rLabel="R"
          gLabel="V"
          bLabel="B"
          showContrast={false}
        />
      </div>

      {/* 7. Japanese */}
      <div style={{ width: "386px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <div style={{ textAlign: "center" }}>
          <h4 style={labelStyle}>7. Japanese Demo</h4>
          <span style={colorValueStyle(color7)}>{color7}</span>
        </div>
          <ColorPicker
            value={color7}
            onValueChange={setColor7}
            // Authentic Japanese indigo base (紺 = stability)
            containerBg="#0A0E17"
            containerBorderColor = "#1F2832"
            containerRadius="12px"
            containerPadding="24px"
            enabledModes={["hex", "rgb"]}

            // Input: indigo theme
            inputBg="#151C26"
            inputBorderColor="#2D3A4A"                  // Indigo (positive stability)
            inputBorderWidth={1}
            inputRadius={8}
            inputTextColor="#F0F4F8"                    // Soft white (purity)
            inputErrorOutlineColor="#8CE300"

            // Saturation: subtle indigo containment
            saturationHeight={160}
            saturationRadius={8}
            saturationBorderColor="#2D3A4A"             // Indigo
            saturationBorderWidth={1}
            saturationThumbWidth={16}
            saturationThumbHeight={16}
            saturationThumbRadius={50}
            saturationThumbBorderStyle="solid"
            saturationThumbBorderWidth={1}
            saturationThumbBorderColor="#F0F4F8"        // White purity

            // Hue track: dark indigo outline
            hueTrackHeight={12}
            hueTrackRadius="6px"
            hueTrackBorderWidth={1}
            hueTrackBorderColor="#2D3A4A"               // Indigo

            // Hue thumb: white outline (positive purity)
            hueThumbSize={20}
            hueThumbRadius="50%"
            hueThumbBorderWidth={1}
            hueThumbBgDefault="#1A2333"
            hueThumbBgHover="#25334A"
            hueThumbBgActive="#334B62"
            hueThumbBorderDefault="#F0F4F8"             // White (positive)
            hueThumbBorderHover="#FFFFFF"
            hueThumbBorderActive="#FFFFFF"

            // Authentic Japanese labels
            hexLabel="十六進数"
            rgbLabel="赤緑青"
            hslLabel="色相・彩度・明度"
            modeLabel="表示モード"
            contrastLabel="コントラスト比"
            rLabel="赤"
            gLabel="緑"
            bLabel="青"
            hLabel="色相"
            sLabel="彩度"
            lLabel="明度"

            // Preview: indigo containment
            previewBgFallback="#151C26"
            previewBorderColor="#2D3A4A"
            previewBorderWidth={1}
            previewRadius={8}
            previewFontSize={20}
            previewFontWeight={500}
            previewTextColor="#F0F4F8"

            // Floating labels: vermilion active (positive authority)
            floatingLabelBg="#0A0E17"
            floatingLabelTextColor="#8AA8C2"            // Cool blue (stability)
            floatingLabelActiveTextColor="#E13535"      // Vermilion (positive focus!)
            floatingLabelFocusBorderColor="#E13535"     // Vermilion (positive highlight)
            floatingLabelRadius={6}
            floatingLabelBorderColor="#2D3A4A"          // Indigo
            floatingLabelBorderWidth={1}

            // Dropdown: indigo theme
            dropdownHeight={48}
            dropdownBg="#151C26"
            dropdownBorderColor="#2D3A4A"
            dropdownBorderWidth={1}
            dropdownRadius={8}
            dropdownTextColor="#F0F4F8"
            dropdownFocusBorderColor="#E13535"          // Vermilion focus
            dropdownChevronColor="#8AA8C2"

            dropdownMenuBg="#0A0E17"
            dropdownMenuBorderColor="#2D3A4A"
            dropdownMenuBorderWidth={1}
            dropdownMenuRadius={8}
            dropdownMenuTextColor="#E0E8F0"
            dropdownMenuActiveTextColor="#E13535"       // Vermilion active
            dropdownMenuHoverBg="rgba(225,53,53,0.1)"   // Vermilion hover
            dropdownMenuActiveBg="rgba(225,53,53,0.15)"
            modeDropdownWidth="120px"

            // Badges: vermilion success, slate neutral fail (no negativity)
            badgeBgPass="rgba(227,53,53,0.18)"          // Vermilion (positive)
            badgeBgFail="rgba(70,80,90,0.25)"           // Slate (neutral attention)
            badgeBorderPass="rgba(227,53,53,0.5)"
            badgeBorderFail="rgba(70,80,90,0.5)"
            badgeTextPass="#E13535"                     // Vermilion
            badgeTextFail="#787878"                     // Slate gray (neutral)
            badgeBorderRadius="100px"
            badgeFontWeight={500}
          />
      </div>
    </div>
  );
}
