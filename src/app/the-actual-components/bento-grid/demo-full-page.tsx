"use client";

import BentoGrid from "@/app/the-actual-components/bento-grid/BentoGrid";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/context/app-context";

export default function BentoGridDemo() {
  const { toast } = useToast();
  const t = useTranslation();

  return (
    <div
      id="wonderland-card-wrapper"
      className="flex flex-wrap w-full p-8 items-center justify-center relative"
    >
      <BentoGrid
        mainAspect="9/16"
        leftColRatio={0.32}
        rightCol1={0.6}
        rightCol2={0.4}
        topRowRatio={0.65}
        bottomRowRatio={0.35}
        gap="14px"
        gridHeight="264px"
        cellBackground="#17161c"
        cellBorderColor="#33313d"
        cellBorderRadius="32px"
        cellBorderWidth="5px"
        cellPadding="8px"
        mainCellBorderColor="#7b1fa2"
        mainCellBorderRadius="32px"
        topCenterCellBackground="#060507"
        topRightCellBackground="#111014"
        bottomCellBackground="#4776cb"
        bottomCellBorderRadius="4px"
        bottomCellBorderWidth="0px"
        onCellClick={(cell) => {
          switch (cell) {
            case "main":
              toast({ title: t("namer_ui"), description: t("bento_grid_toast_main") });
              break;
            case "topCenter":
              toast({ title: t("namer_ui"), description: t("bento_grid_toast_topcenter") });
              break;
            case "topRight":
              toast({ title: t("namer_ui"), description: t("bento_grid_toast_topright") });
              break;
            case "bottom":
              toast({ title: t("namer_ui"), description: t("bento_grid_toast_bottom") });
              break;
          }
        }}
        main={
          <div style={{ width: "100%", textAlign: "center" }}>
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>Left (Main)</div>
          </div>
        }
        topCenter={
          <div style={{ width: "100%", textAlign: "center" }}>
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>Top Center</div>
          </div>
        }
        topRight={
          <div style={{ width: "100%", textAlign: "center" }}>
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>Top Right</div>
          </div>
        }
        bottom={
          <div style={{ width: "100%", textAlign: "center" }}>
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>Bottom Cell</div>
          </div>
        }
      />
    </div>
  );
}
