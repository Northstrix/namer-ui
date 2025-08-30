import { FishyFileDrop } from "@/app/the-actual-components/fishy-file-drop/FishyFileDrop";
import { useTranslation } from "@/context/app-context";

export default function MyPage() {
  const t = useTranslation();

  const handleFilesSelected = (files: FileList | File[]) => {
    // Normalize to File[] for easier processing if needed
    const fileArray: File[] = Array.isArray(files) ? files : Array.from(files);
    console.log("Files selected:", fileArray);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <div className="mt-4 text-sm text-[#aaa] flex flex-col items-center text-center max-w-md">
        <span>{t("fishy_file_drop_console_notice")}</span>
      </div>
      <div className="gap-10 flex items-center justify-center flex-wrap">
        {/* Dark Version Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "324px",
            width: "324px",
            background: "#161616",
            borderRadius: "22px",
          }}
        >
          <FishyFileDrop
            id="ffd-dark-version"
            width="324px"
            height="324px"
            padding="14px"
            backgroundImageWidth="96px"
            backgroundImage="https://raw.githubusercontent.com/Northstrix/Lakhash/refs/heads/main/Lakhash/Source%20code/public/ChristmasTreesPattern.png"
            backgroundRepeat="repeat"
            borderWidth="2px"
            borderColor="#363636"
            borderRadius="20px"
            shadow="0 2px 15px rgba(255, 255, 255, 0.1)"
            innerBorderRadius="10px"
            fishColor="white"
            waveColors={["#1b70a1", "#368cc1", "#50a8e0", "#6bc4ff"]}
            bubbleColor="rgba(255,255,255,0.8)"
            textColor="#fff"
            textStroke="#6BC4FF"
            textSize="24px"
            letterSpacingHover="10px"
            text="Add files"
            onFilesSelected={handleFilesSelected}
          />
        </div>

        {/* Light Version Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "324px",
            width: "324px",
            background: `
              repeating-conic-gradient(
                #eee 0deg 90deg,
                #fff 90deg 180deg
              )
              0 0 / 36px 36px,
              #f0f0f0
            `,
            borderRadius: "10px",
          }}
        >
          <FishyFileDrop
            id="ffd-light-version"
            width="324px"
            height="324px"
            padding="16px"
            backgroundImageWidth="94px"
            backgroundImage="https://raw.githubusercontent.com/Northstrix/Lakhash/refs/heads/main/Lakhash/Source%20code/public/ChristmasTreesPattern.png"
            backgroundRepeat="repeat"
            borderWidth="2px"
            borderColor="#0092a0"
            borderRadius="8px"
            shadow="0 2px 15px rgba(255, 255, 255, 0.1), 0 2px 18px #0092a0, 0 3px 12px #00cbc9"
            innerBorderRadius="6px"
            waveColors={["#0092a0", "#00afb4", "#00cbc9", "#00e7de"]}
            bubbleColor="rgba(0,0,0,0.5)"
            textColor="#182226"
            textStroke="#fff"
            textEffectColor="#00e7de"
            textSize="33px"
            textHoverSize="39px"
            letterSpacing="4px"
            letterSpacingHover="9px"
            text="רחף עליי"
            fishColor="#151419"
            fontFamily="'Varela Round', sans-serif"
            onFilesSelected={handleFilesSelected}
          />
        </div>
      </div>

      {/* Note below main container */}
      <div className="mt-4 text-sm text-[#aaa] flex flex-col items-center text-center max-w-md">
        <span>{t("fishy_file_drop_note_1")}</span>
        <span className="mt-1">{t("fishy_file_drop_note_2")}</span>
        <span className="mt-1">{t("fishy_file_drop_note_3")}</span>
      </div>
    </div>
  );
}
