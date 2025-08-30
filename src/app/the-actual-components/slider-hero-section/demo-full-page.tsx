"use client";

import SliderHeroSection from '@/app/the-actual-components/slider-hero-section/SliderHeroSection';
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from '@/context/app-context';
import { useMemo } from 'react';

// Utility function to detect RTL characters
const isRTLCheck = (text: string): boolean =>
  /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text || '');

export default function SliderHeroSectionDemo() {
  const { toast } = useToast();
  const t = useTranslation();

  // Get translated title
  const title = t('slider_hero_main_title');

  // Detect RTL only once (memoized for performance)
  const desktopTitleAlign = useMemo(
    () => (isRTLCheck(title) ? "right" : "left"),
    [title]
  );

  return (
    <div className="w-full h-screen">
      <SliderHeroSection
        title={title}
        showcaseOptions={[
          {
            text: t('slider_hero_option_1'),
            imageUrl:
              'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            text: t('slider_hero_option_2'),
            imageUrl:
              'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            text: t('slider_hero_option_3'),
            imageUrl:
              'https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
        ]}
        onOptionClick={(option) =>
          toast({
            title: t('namer_ui'),
            description: `${t('slider_hero_toast_clicked')}: ${option}`,
          })
        }
        onOptionHover={() => {}}
        desktopTitleAlign={desktopTitleAlign}
      />
    </div>
  );
}
