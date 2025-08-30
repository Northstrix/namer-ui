"use client";

import { FishyButton } from "@/app/the-actual-components/fishy-button/FishyButton";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/context/app-context";

export default function DemoFishyButton() {
  const { toast } = useToast();
  const t = useTranslation();

  return (
    <div className="flex flex-col gap-12 w-full p-8 items-center justify-center">

      {/* 1st row — Basic buttons */}
      <div className="flex flex-wrap items-center justify-center gap-6 w-full">
        <FishyButton
          type="button"
          className="button--1"
          onClick={() =>
            toast({
              title: t('namer_ui'),
              description: t("fishy_button_toast_1"),
            })
          }
        >
          Ekhad
        </FishyButton>

        <FishyButton
          type="button"
          className="button--2"
          borderRadius="4px"
          fishSpeed="1.9s"
          onClick={() =>
            toast({
              title: t('namer_ui'),
              description: t("fishy_button_toast_2"),
            })
          }
        >
          Two
        </FishyButton>

        <FishyButton
          type="button"
          className="button--3"
          onClick={() =>
            toast({
              title: t('namer_ui'),
              description: t("fishy_button_toast_3"),
            })
          }
        >
          שלוש
        </FishyButton>
      </div>

      {/* 2nd row — Font customization */}
      <div className="flex flex-wrap items-center justify-center gap-6 w-full">
        <FishyButton
          type="button"
          className="button--1"
          fontFamily="'Roboto Mono', monospace"
          borderRadius="40px"
          width="272px"
          onClick={() =>
            toast({
              title: t('namer_ui'),
              description: t("fishy_button_toast_4"),
            })
          }
        >
          Roboto Mono
        </FishyButton>

        <FishyButton
          type="button"
          className="button--2"
          fontFamily="'Impact', fantasy, sans-serif"
          borderRadius="10px"
          width="272px"
          onClick={() =>
            toast({
              title: t('namer_ui'),
              description: t("fishy_button_toast_5"),
            })
          }
        >
          Impact Bold
        </FishyButton>
      </div>

      {/* 3rd row — Special demo */}
      <div className="flex justify-center w-full">
        <FishyButton
          type="button"
          className="button--3"
          width="216px"
          fishSpeed="6s"
          fontFamily="'Griffy', cursive"
          borderRadius="50px"
          onClick={() =>
            toast({
              title: t('namer_ui'),
              description: t("fishy_button_toast_6"),
            })
          }
        >
          Slow Fish
        </FishyButton>
      </div>

    </div>
  );
}