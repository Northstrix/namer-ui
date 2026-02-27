"use client";
import React from "react";
import WordCard from "./WordCard";

export default function WordCardDemo() {
  return (
    <div 
      className="w-full p-8 gap-4"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gridAutoRows: 'min-content',
        gap: '1rem',
        padding: '2rem'
      }}
    >
      {/* 1. Casa (Italian - with audio) */}
      <div style={{width: '320px', breakInside: 'avoid'}}>
        <WordCard
          word="Casa"
          translations={["House", "Home"]}
          definition='Primarily refers to a physical dwelling place, but often carries an emotional sense of "home" as a place of belonging.'
          audioUrl="/word-card-sounds/casa.wav"
          cardTagLabel="Everyday Italian"
          cardWidth="320px"
        />
      </div>

      {/* 2. Mare (Italian - with audio) */}
      <div style={{width: '320px', breakInside: 'avoid'}}>
        <WordCard
          word="Mare"
          translations={["Sea"]}
          definition="A large body of salt water, often expansive and deep, used to describe the open sea."
          audioUrl="/word-card-sounds/mare.wav"
          primaryColor="#0ea5e9"
          cardTagLabel="Maritime"
          wordWeight={900}
          cardWidth="320px"
          glowGradient={`
            radial-gradient(circle at 30% 30%, #a663eb 0%, #a663eb00 20%),
            radial-gradient(circle at 70% 70%, #22d3ee 0%, #22d3ee00 25%),
            radial-gradient(circle at 50% 50%, #a6ff00 0%, #a6ff0000 30%),
            repeating-conic-gradient(
              from 236.84deg at 50% 50%,
              #a663eb 0%,
              #22d3ee 10%,
              #a6ff00 20%,
              #a663eb 30%,
              #22d3ee 40%,
              #a6ff00 50%,
              #a663eb 60%,
              #22d3ee 70%,
              #a6ff00 80%,
              #a663eb 90%,
              #22d3ee 100%
            )
          `}
        />
      </div>

      {/* 3. נמר */}
      <div style={{ width: "320px", breakInside: "avoid" }}>
        <WordCard
          word="נמר"
          translations={["Leopard", "Tiger"]}
          definition="A swift, spotted wildcat known for its stealthy prowess and predatory spots, embodying cunning ambush and untamed agility."
          primaryColor="#7c3aed"
          lampEnabled={false}
          glowEnabled={true}
          borderColor="#e1e1e1"
          cardBackground="linear-gradient(180deg, #faf5ff 0%, #f6edff 100%)"
          wordColor="#1a1a1a"
          translationTextColor="#1f1f1f"
          definitionTextColor="#2b2b2b"
          noteTextColor="#2b2b2b"
          isWordRTL={true}
          cardTagLabel="Wildlife"
          cardWidth="320px"
          cardPadding="2.25rem"

          // stronger, darker translation + definition labels/icons
          translationLabelColor="#35215f"
          translationLabelSize="0.8rem"
          translationLabelWeight={600}
          translationIconColor="#5b21b6"
          translationIconSize="1rem"
          translationIconStrokeWidth={2}

          definitionLabelColor="#35215f"
          definitionLabelSize="0.8rem"
          definitionLabelWeight={600}
          definitionIconColor="#5b21b6"
          definitionIconSize="1rem"
          definitionIconStrokeWidth={2}

          noteLabelColor="#2b2248"
          noteLabelSize="0.8rem"

          // stylish purple-accented tag
          cardTagBackground="#ede9fe"
          cardTagBorderColor="#d8b4fe"
          cardTagTextColor="#5b21b6"
          cardTagIconColor="#6d28d9"
          cardTagIconSize="0.9rem"
          cardTagRadius="0.75rem"

          // luminous purple glow
          glowGradient={`
            radial-gradient(circle at 30% 30%, #a855f7 0%, #a855f700 20%),
            radial-gradient(circle at 70% 70%, #c084fc 0%, #c084fc00 25%),
            radial-gradient(circle at 50% 50%, #8b5cf6 0%, #8b5cf600 30%),
            repeating-conic-gradient(
              from 236.84deg at 50% 50%,
              #a855f7 0%,
              #c084fc 10%,
              #8b5cf6 20%,
              #a855f7 30%,
              #c084fc 40%,
              #8b5cf6 50%,
              #a855f7 60%,
              #c084fc 70%,
              #8b5cf6 80%,
              #a855f7 90%,
              #c084fc 100%
            )
          `}
        />
      </div>

      {/* 4. מדבר */}
      <div style={{width: '320px', breakInside: 'avoid'}}>
        <WordCard
          word="מדבר"
          translations={["Desert", "Wilderness"]}
          definition="A pastoral wilderness, usually depicted as an arid steppe expanse where flocks graze sparsely, evoking isolation, divine testing, and revelation's echo."
          primaryColor="#d95c09"
          lampEnabled={true}
          lampTopColor="#ffffff"
          lampShadowColor="#eeeeee"
          glowEnabled={false}
          borderColor="#262626"
          dotColor="rgba(255,255,255,0.12)"
          dotOpacity={0.75}
          cardBackground="radial-gradient(circle at 50% 25%, #2e2e2e 0%, #1d1d1d 90%)"
          wordColor="#fff9f1"
          cardTagLabel="Journey"
          cardWidth="320px"
          cardPadding="2.25rem"
        />
      </div>

      {/* 5. 荒野 */}
      <div style={{width: '320px', breakInside: 'avoid'}}>
        <WordCard
          word="荒野"
          translations={["Wasteland", "Desolate field"]}
          definition="Vast, barren expanse of uncultivated land, often desolate or rugged, untouched by human settlement—like a sprawling wilderness evoking isolation and raw nature."
          primaryColor="#6366f1"
          showCardTag={false}
          borderRadius="0"
          glowEnabled={true}
          lampEnabled={false}
          glowGradient="repeating-conic-gradient(from 236.84deg at 50% 50%, #6366f1 0%, #818cf8 25%, #6366f1 50%, #818cf8 75%, #6366f1 100%)"
          cardWidth="320px"
          cardPadding="2rem"
          wordWeight={900}
        />
      </div>

      {/* 6. Wild */}
      <div style={{width: '320px', breakInside: 'avoid'}}>
        <WordCard
          word="Wild"
          translations={["פראי", "בלתי מבוית"]}
          definition="מעמד חופשי ולא גמור של פראות טבעית, כמו נופים עזים או מעשים בלי גבולות, שמעוררים בלי תנועה מחוקקי אדם."
          note="המשקף את הרוח הבלתי נכנעת של הטבע והיצירה – מרחב חי וחשוף ללא גבולות."
          primaryColor="#00ffa2"
          cardBackground="linear-gradient(180deg, #012b2b 0%, #001818 100%)"
          isCardRTL={true}
          isWordRTL={true}
          wordWeight={600}
          cardWidth="320px"

          /** Borders & layout */
          borderWidth="2px"
          borderColor="#003f36"
          borderRadius="40px"
          cardPadding="2rem"

          /** Glow styling — more prominent, organic pattern */
          glowEnabled={true}
          glowBlur={4}
          glowSpread={90}
          glowProximity={70}
          glowInactiveZone={0.05}
          glowGradient={`
            radial-gradient(circle at 25% 40%, #00ffa2 0%, #00ffa200 20%),
            radial-gradient(circle at 75% 60%, #13ffd2 0%, #13ffd200 25%),
            radial-gradient(circle at 55% 55%, #09f3c5 0%, #09f3c500 35%),
            radial-gradient(circle at 40% 70%, #00e2b0 0%, #00e2b000 30%),
            repeating-conic-gradient(
              from 240deg at 50% 50%,
              #00ffa2 0%,
              #13ffd2 10%,
              #00bfa5 20%,
              #00ffc2 30%,
              #00ffa2 40%,
              #13ffd2 55%,
              #00bfa5 70%,
              #00ffa2 85%,
              #00e2b0 100%
            )
          `}

          /** Separator customization */
          accentColor="#00ffb2"          // custom color for separator
          separatorHeight="3px"
          separatorMargin="1.25rem 0"

          /** Typography colors */
          wordColor="#e0ffee"
          definitionTextColor="#caffef"
          translationTextColor="#adffe3"
          noteTextColor="#adffe3"
          translationLabelColor="#8fffe0"
          definitionLabelColor="#8fffe0"
          noteLabelColor="#7fffd4"
          translationLabelSize="0.75rem"
          definitionLabelSize="0.75rem"
          noteLabelSize="0.8rem"

          /** Tag styling */
          cardTagLabel="טבע פראי"
          cardTagBackground="#003a34"
          cardTagBorderColor="#00ddaa"
          cardTagTextColor="#00ffbb"
          cardTagIconColor="#00ffc2"
          cardTagIconSize="1rem"
          cardTagRadius="8px"
          cardTagTextSize="0.65rem"
          cardTagWeight={600}

          /** Icon adjustments */
          translationIconColor="#55ffd2"
          translationIconSize="0.95rem"
          definitionIconColor="#55ffd2"
          definitionIconSize="0.95rem"
          translationIconStrokeWidth={2}
          definitionIconStrokeWidth={2}

          /** Label text */
          labelTranslationSingle="תרגום"
          labelTranslationMultiple="תרגומים"
          labelDefinition="הגדרה"
          labelNote="הערה"
          labelListen="האזן"
        />
      </div>

      {/* 7. Edge */}
      <div style={{width: '320px', breakInside: 'avoid'}}>
        <WordCard
          word="Edge"
          translations={["קצה", "גבול"]}
          definition="עיט שפיף או שבל חיצוני, גבול מדוחק שבו נשרכות יכולות על סף, או שבו נוגע עודן אחד לאחד באפס שפיף."
          borderWidth="10px"
          cardTagLabel="גבולות"
          isCardRTL={true}
          isWordRTL={true}
          wordWeight={100}
          cardWidth="320px"
        />
      </div>
    </div>
  );
}
