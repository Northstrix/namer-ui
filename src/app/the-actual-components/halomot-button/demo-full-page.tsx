"use client";

import HalomotButton from '@/app/the-actual-components/halomot-button/HalomotButton';
import { useToast } from "@/hooks/use-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from '@/context/app-context';

export default function HalomotButtonDemo() {
  const { toast } = useToast();
  const t = useTranslation();

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '36px', // Space between items
        justifyContent: 'center',
        padding: '32px',
        borderRadius: '8px',
        minHeight: '300px'
      }}
    >

      {/* 1st Button */}
      <HalomotButton
        inscription="חלומות"
        onClick={() =>
          toast({
            title: t('namer_ui'),
            description: t('halomot_toast_1')
          })
        }
      />

      {/* 2nd Button with gradient border */}
      <HalomotButton
        inscription="עוד אחד"
        borderWidth="3px"
        gradient="linear-gradient(135deg, #a123f4, #603dec)"
        outerBorderRadius="12.56px"
        innerBorderRadius="12px"
        onClick={() =>
          toast({
            title: t('namer_ui'),
            description: t('halomot_toast_2')
          })
        }
      />

      {/* 3rd Button — GitHub icon button */}
      <div style={{ width: "52px" }}>
        <HalomotButton
          inscription=""
          backgroundColor="#111014"
          gradient="linear-gradient(135deg, #a123f4, #603dec)"
          fillWidth={true}
          href="https://github.com/Northstrix"
          icon={<FontAwesomeIcon icon={faGithub} size="lg" />}
          onClick={() =>
            toast({
              title: t('namer_ui'),
              description: t('halomot_toast_3')
            })
          }
        />
      </div>

      {/* 4th Button — custom padding */}
      <HalomotButton
        inscription="Custom padding"
        padding="46px 24px"
        onClick={() =>
          toast({
            title: t('namer_ui'),
            description: t('halomot_toast_4')
          })
        }
      />

    </div>
  );
}
