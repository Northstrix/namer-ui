'use client';

import React from 'react';
import { ShimmerAccordion } from '@/app/the-actual-components/shimmer-accordion/ShimmerAccordion';
import { ZapIcon, FileText, CpuIcon, Palette } from 'lucide-react';

export default function DemoFullPage() {
  return (
    <div className="flex w-full flex-col gap-8">
      <ShimmerAccordion
        componentId="english-demo"
        items={[
          {
            id: 'english-blend-mixture',
            title: 'Blend vs Mixture',
            content:
              'In English, blend and mixture are related but not identical. Blend usually suggests that different parts have been combined smoothly, harmoniously, or in a way that reduces obvious boundaries between them. Mixture is broader and more neutral; it simply means a combination of different elements, without implying that they are evenly unified or aesthetically integrated. In practical writing, blend often fits situations where the result feels cohesive, while mixture is better when the focus is just on the fact that multiple things are present together.',
            icon: <ZapIcon className="h-5 w-5" />,
          },
          {
            id: 'english-controversial',
            title: 'What Does “Controversial” Mean?',
            content:
              'Controversial means causing disagreement, debate, or strong opposing opinions. It is used for topics, decisions, people, and works that are likely to divide opinion rather than produce general agreement.',
            icon: <FileText className="h-5 w-5" />,
          },
          {
            id: 'english-project',
            title: 'Is it legal for me to use this component in my project?',
            content:
              `Yes. This component is distributed under the MIT License, which allows you to use, copy, modify, and distribute it.

Copyright (c) 2026 by Jhey (https://codepen.io/jh3y/pen/gbLOajZ)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


MIT License

Copyright (c) 2025 Maxim Bortnikov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
          },
        ]}
        globalIsRTL={false}
        globalTitleAlign="left"
        globalContentAlign="left"
        showToggleIcon={true}
      />

      <div className="mx-auto w-full max-w-[480px]">
        <ShimmerAccordion
          componentId="hebrew-demo"
          items={[
            {
              id: 'hebrew-blueberry-loom',
              title: 'על Blueberry Loom',
              content:
                'Blueberry Loom הוא בונה טפסים שמחוזק קריפטוגרפית ומיועד להגנה משופרת על נתונים. הוא משלב יכולות הצפנה מתקדמות כדי להציע שכבת אבטחה חזקה יותר בעת בנייה וניהול של טפסים מקוונים.',
              icon: <CpuIcon className="h-5 w-5" />,
              isRTL: true,
              titleAlign: 'start',
              contentAlign: 'justify',
            },
            {
              id: 'hebrew-nof',
              title: 'על נוף',
              content:
                'נוף הוא מחולל פלטות צבעים מודרני שמאפשר ליצור פלטת צבעים שלמה מתוך צבע בסיס אחד. הוא מתאים לעיצוב ממשקים, לבחירת צבעים מהירה, ולבניית מערכות צבע עקביות יותר.',
              icon: <Palette className="h-5 w-5" />,
              isRTL: true,
              titleAlign: 'start',
              contentAlign: 'justify',
            },
          ]}
          globalIsRTL={true}
          globalTitleAlign="start"
          globalContentAlign="justify"
          cps={70}
          textAlpha={0.1}
          angle={0}
          offset={0}
          stops={[
            { color: '#D53AED', spread: 3 },
            { color: '#7C3AED', spread: 8 },
            { color: '#3A52ED', spread: 14 },
          ]}
          allowMultiple={true}
          showIcons={true}
          showToggleIcon={true}
          containerBg="#111111"
          borderWidth="1px"
          borderRadius="0px"
          titleColor="#F3F4F6"
          contentColor="#D1D5DB"
          revealColor="#EDEDED"
          iconWeight={1.5}
          toggleIconWeight={1.5}
          titleIconColor = '#646464'
          titleIconHoverColor = '#3A52ED'
          toggleIconColor = '#a0a0a0'
          toggleIconHoverColor = '#D53AED'
          inactiveToggleIconOpacity = {100}
          paddingX="1rem"
          paddingY="1.15rem"
          titleIconGap="0.65rem"
          toggleIconSize="1.25rem"
          animationDelay={0}
          revealTransitionDelay={0}
          revealTransitionDuration="0.18s"
        />
      </div>

      <div className="mx-auto w-full max-w-[480px]">
        <ShimmerAccordion
          componentId="spanish-demo"
          items={[
            {
              id: 'es-namer-ui-1',
              title: '¿Qué es Namer UI?',
              content:
                'Namer UI es una colección de componentes reutilizables para Next.js y React. Está pensada para ayudar a los desarrolladores a crear interfaces bonitas y funcionales con más rapidez y con menos trabajo repetitivo.',
            },
            {
              id: 'es-namer-ui-2',
              title: '¿Por qué usarlo?',
              content:
                'Permite construir proyectos con una base visual más consistente, mantener una estructura de interfaz más ordenada y ahorrar tiempo al reutilizar piezas ya preparadas. También facilita experimentar con diseños sin empezar desde cero.',
            },
          ]}
          globalIsRTL={false}
          globalTitleAlign="center"
          globalContentAlign="center"
          mode="sweep"
          cps={52}
          textAlpha={0.11}
          angle={0}
          offset={0}
          stops={[
            { color: '#ffffff', spread: 18 },
            { color: '#000000', spread: 28 },
          ]}
          allowMultiple={false}
          showIcons={true}
          showToggleIcon={false}
          containerBg="#7C3AED"
          borderWidth="10px"
          borderRadius="16px"
          separatorColor="rgba(255,255,255,0.22)"
          titleColor="#ffffff"
          contentColor="#000000"
          revealColor="#ffffff"
          iconWeight={1.5}
          toggleIconWeight={1.5}
          paddingX="1rem"
          paddingY="1.15rem"
          titleIconGap="0.65rem"
          toggleIconSize="1.25rem"
          animationDelay={0}
          revealTransitionDelay={0}
          revealTransitionDuration="0.18s"
        />
      </div>
    </div>
  );
}