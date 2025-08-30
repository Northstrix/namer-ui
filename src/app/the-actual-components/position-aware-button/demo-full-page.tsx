"use client";

import PositionAwareButton from '@/app/the-actual-components/position-aware-button/PositionAwareButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from '@/context/app-context';

export default function PositionAwareButtonDemo() {
  const { toast } = useToast();
  const t = useTranslation();

  return (
    <div className="bg-[#eee] p-8 w-full min-h-[300px] gap-8 flex flex-wrap items-center justify-center">
      <PositionAwareButton
        onClick={() =>
          toast({
            title: t('namer_ui'),
            description: t('position_aware_button_toast_1')
          })
        }
      >
        {t('position_aware_button_label_default')}
      </PositionAwareButton>

      <PositionAwareButton
        borderRadius="0.76em"
        buttonColor="#6A0DAD"
        fontWeight="bold"
        fontSize="1.2rem"
        foregroundColor="#fff"
        glossColor="#ffe6"
        onClick={() =>
          toast({
            title: t('namer_ui'),
            description: t('position_aware_button_toast_2')
          })
        }
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />&nbsp;GitHub
      </PositionAwareButton>

      <PositionAwareButton
        buttonColor="#ff4500"
        filamentColor="#363636"
        glossColor="#fff9"
        foregroundColor="#ffffee"
        fontSize="1.2rem"
        onClick={() =>
          toast({
            title: t('namer_ui'),
            description: t('position_aware_button_toast_3')
          })
        }
      >
        {t('position_aware_button_label_orange')}
      </PositionAwareButton>
    </div>
  );
}
