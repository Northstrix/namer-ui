"use client";

import React from "react";
import InflectedCard from "@/app/the-actual-components/inflected-card/InflectedCard";
import {
  IconBrandAppleFilled,
  IconBrandAndroid,
  IconDeviceMobile,
  IconCornerRightUp,
  IconFold,
  IconBoltFilled,
} from "@tabler/icons-react";

import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/context/app-context";

// Detect RTL chars
const isRTL = (text: string) =>
  /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);

export default function InflectedCardDemo() {
  const { toast } = useToast();
  const t = useTranslation();

  const firstDesc = t("inflected_card_demo_iphone15pro_desc");
  const firstCardIsRTL = isRTL(firstDesc);

  return (
    <section>
      {/* Info Note */}
      <div className="text-center mb-3 mt-8" style={{ color: "#aaa" }}>
        {t("inflected_card_demo_note")}
      </div>

      {/* --- DARK THEME CARDS (row 1) --- */}
      <div className="min-h-[300px] flex flex-wrap gap-8 items-center justify-center p-8 rounded-lg">
        {/* iPhone 15 Pro (Dark, localized) */}
        <div className="max-w-[600px]">
          <InflectedCard
            id="iphone15pro-dark"
            image="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color.jpeg"
            title={t("inflected_card_demo_iphone15pro_title")}
            description={firstDesc}
            tags={[
              {
                name: t("inflected_card_demo_tag_new"),
                textColor: "#f7f7ff",
                backgroundColor: "#9F4EFF",
                rounding: 5,
              },
              {
                name: t("inflected_card_demo_tag_discount"),
                textColor: "#242424",
                backgroundColor: "#f1f1f7",
                rounding: 5,
              },
            ]}
            parentBackgroundColor="hsl(var(--background))"
            cardRounding={15}
            buttonIcon={<IconCornerRightUp />}
            buttonIconColor="#ffffff"
            buttonIconHoverColor="#EEEEEE"
            buttonBackgroundColor="#9F4EFF"
            buttonBackgroundHoverColor="#a960ff"
            price="$1,079"
            oldPrice="$1,199"
            mirrored={firstCardIsRTL}
            titleAlignment={firstCardIsRTL ? "right" : "left"}
            descriptionAlignment={firstCardIsRTL ? "right" : "left"}
            onClick={(target, id) =>
              toast({
                title: t("namer_ui"),
                description: `${t(
                  "inflected_card_toast_clicked"
                )} ${target} (${id})`,
              })
            }
            onHover={(target, id, event) =>
              console.log("Hover event:", event, "target:", target, "card", id)
            }
          />
        </div>

        {/* Samsung Flip (Dark, hardcoded text) */}
        <div className="max-w-[600px]">
          <InflectedCard
            id="samsung-flip6-dark"
            image="https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?q=80"
            title="Samsung Galaxy Flip 6"
            description="Innovative foldable smartphone with sleek portable design."
            tags={[
              { name: "Pre-owned", textColor: "#f7f7ff", backgroundColor: "#00A6FB" },
              { name: "50% off", textColor: "#242424", backgroundColor: "#f1f1f7" },
            ]}
            parentBackgroundColor="hsl(var(--background))"
            buttonIcon={<IconFold />}
            buttonIconColor="#ffffff"
            buttonIconHoverColor="#EEEEEE"
            buttonBackgroundColor="#00A6FB"
            buttonBackgroundHoverColor="#0582CA"
            price="$499"
            oldPrice="$991"
            onClick={(target, id) =>
              toast({
                title: t("namer_ui"),
                description: `${t("inflected_card_toast_clicked")} ${target} (${id})`,
              })
            }
            onHover={(target, id, event) =>
              console.log("Hover event:", event, "target:", target, "card", id)
            }
          />
        </div>
      </div>

      {/* --- FULL WIDTH SHOWCASE card --- */}
      <div className="mt-10 w-full">
        <InflectedCard
          id="showcase-fullwidth"
          image="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg"
          title="Full Width Showcase"
          description="This demo card is 30rem tall and spans entire width."
          tags={[{ name: "Showcase", textColor: "#fff", backgroundColor: "#111" }]}
          parentBackgroundColor="hsl(var(--background))"
          buttonIcon={<IconDeviceMobile />}
          imageContainerHeight="30rem"
          maxWidth="100%"
          buttonIconColor="#ffffff"
          buttonIconHoverColor="#EEEEEE"
          buttonBackgroundColor="#9F4EFF"
          buttonBackgroundHoverColor="#a960ff"
          onClick={(target, id) =>
            toast({
              title: t("namer_ui"),
              description: `${t("inflected_card_toast_clicked")} ${target} (${id})`,
            })
          }
          onHover={(target, id, event) =>
            console.log("Hover event:", event, "target:", target, "card", id)
          }
        />
      </div>

      {/* --- LIVE CODE DEMO --- */}
      <div className="mt-10 flex justify-center w-full">
        <InflectedCard
          id="live-demo"
          title="Live Code Demo"
          description="A card showcasing live code demo. It has a fixed 1/1 aspect ratio."
          parentBackgroundColor="hsl(var(--background))"
          buttonIcon={<IconBoltFilled />}
          useAspectRatio
          aspectRatio="1/1"
          mediaNode={
            <div className="w-full h-full flex items-center justify-center rounded relative overflow-hidden bg-livepattern">
              <div className="live-text-container px-3 py-2 text-white text-2xl font-bold rounded transition-colors duration-500 z-10">
                Live Code Demo
              </div>
            </div>
          }
          buttonIconColor="#ffffff"
          buttonIconHoverColor="#EEEEEE"
          buttonBackgroundColor="#00A6FB"
          buttonBackgroundHoverColor="#0582CA"
          onClick={(target, id) =>
            toast({
              title: t("namer_ui"),
              description: `${t("inflected_card_toast_clicked")} ${target} (${id})`,
            })
          }
          onHover={(target, id, event) =>
            console.log("Hover event:", event, "target:", target, "card", id)
          }
        />
      </div>

      {/* --- LIGHT THEME CARDS --- */}
      <div className="flex justify-center w-full mt-10">
        <div className="bg-[#f8f8fa] min-h-[300px] flex gap-8 p-8 rounded-lg w-full max-w-6xl">
          {/* iPhone 15 Pro (Light) */}
          <div className="flex-1">
            <InflectedCard
              id="iphone15pro-light"
              image="https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg"
              title="iPhone 15 Pro"
              description="Titanium smartphone with advanced camera system."
              tags={[
                { name: "Brand new", textColor: "#181818", backgroundColor: "#E0C3FC" },
                { name: "10% off", textColor: "#181818", backgroundColor: "#b49ad7", tagHoverBrightness: 0.18 },
              ]}
              parentBackgroundColor="#f8f8fa"
              buttonIcon={<IconBrandAppleFilled />}
              buttonIconSize={32}
              buttonIconColor="#181818"
              buttonBackgroundColor="#E0C3FC"
              buttonBackgroundHoverColor="#bca1e7"
              price="$1,079"
              oldPrice="$1,199"
              priceTagTextColor="#222"
              oldPriceTextColor="#555"
              priceTagRounding="25px"
              priceTagBackgroundColor="#f5e6ff"
              titleAlignment="center"
              descriptionAlignment="center"
              tagsAlignment="center"
              colors={{ title: "hsl(var(--background))", description: "#363636" }}
              fontSizes={{ title: "1.625rem", description: "1.25rem", tags: "1rem", price: "1.3rem" }}
              onClick={(target, id) =>
                toast({
                  title: t("namer_ui"),
                  description: `${t("inflected_card_toast_clicked")} ${target} (${id})`,
                })
              }
              onHover={(target, id, event) =>
                console.log("Hover event:", event, "target:", target, "card", id)
              }
            />
          </div>

          {/* Samsung Flip (Light RTL) */}
          <div className="flex-1">
            <InflectedCard
              id="samsung-flip6-light"
              image="https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?q=80"
              title="סמסונג גלקסי פליפ 6"
              description="טלפון מתקפל חדשני עם עיצוב דקיק, תצוגה גדולה, ומאפשר חוויית צפייה וסביבת עבודה מרובת משימות."
              tags={[
                { name: "יד שניה", textColor: "#181818", backgroundColor: "#A2F9B8" },
                { name: "50% הנחה", textColor: "#181818", backgroundColor: "#6ccf8f", tagHoverBrightness: 0.18 },
              ]}
              parentBackgroundColor="#f8f8fa"
              buttonIcon={<IconBrandAndroid />}
              buttonIconSize={32}
              buttonIconColor="#181818"
              buttonBackgroundColor="#A2F9B8"
              buttonBackgroundHoverColor="#7ee6a2"
              mirrored
              price="₪1,499"
              oldPrice="₪2,999"
              priceTagTextColor="#181818"
              oldPriceTextColor="#565656"
              priceTagRounding="6px"
              priceTagBackgroundColor="#e1fbe6"
              titleAlignment="right"
              descriptionAlignment="right"
              colors={{ title: "hsl(var(--background))", description: "#363636" }}
              fontSizes={{ title: "1.625rem", description: "1.25rem", tags: "1rem", price: "1.3rem" }}
              onClick={(target, id) =>
                toast({
                  title: t("namer_ui"),
                  description: `${t("inflected_card_toast_clicked")} ${target} (${id})`,
                })
              }
              onHover={(target, id, event) =>
                console.log("Hover event:", event, "target:", target, "card", id)
              }
            />
          </div>
        </div>
      </div>

      {/* --- DARK THEME ROW: iPhone 7 + iPhone X Hebrew --- */}
      <div className="bg-[#0a0a0a] min-h-[300px] flex flex-wrap gap-8 items-center justify-center p-8 rounded-lg mt-10">
        {/* iPhone 7 */}
        <div className="max-w-[600px]">
          <InflectedCard
            id="iphone7-dark"
            image="https://images.unsplash.com/photo-1514473776127-61e2dc1dded3?q=80"
            title="iPhone 7"
            description="Classic iPhone with 12MP camera and waterproof build."
            tags={[
              { name: "Refurbished", textColor: "#fff", backgroundColor: "#FF3900" },
              { name: "20% off", textColor: "#242424", backgroundColor: "#f1f1f7" },
            ]}
            parentBackgroundColor="hsl(var(--background))"
            buttonIcon={<IconCornerRightUp />}
            buttonIconSize={32}
            buttonIconColor="#ffffff"
            buttonIconHoverColor="#EEEEEE"
            buttonBackgroundColor="#FF3900"
            buttonBackgroundHoverColor="#FF5733"
            price="$159"
            priceTagTextColor="hsl(var(--background))"
            priceTagBackgroundColor="rgba(255,255,255,0.64)"
            onClick={(target, id) =>
              toast({
                title: t("namer_ui"),
                description: `${t("inflected_card_toast_clicked")} ${target} (${id})`,
              })
            }
            onHover={(target, id, event) =>
              console.log("Hover event:", event, "target:", target, "card", id)
            }
          />
        </div>

        {/* iPhone X Hebrew */}
        <div className="max-w-[600px]">
          <InflectedCard
            id="iphonex-hebrew-dark"
            image="https://images.unsplash.com/photo-1511296933631-18b1a062212c?q=80"
            title="iPhone X"
            description="סמארטפון אייקוני עם תצוגת Super Retina בגודל 5.8 אינץ', טכנולוגיית Face ID מתקדמת, מצלמות כפולות של 12MP ועיצוב חדשני שמהפכני בצילום הסלולרי."
            tags={[
              { name: "משומש", textColor: "#f7f7ff", backgroundColor: "#00A6FB", rounding: 4 },
              { name: "40% הנחה", textColor: "#242424", backgroundColor: "#f1f1f7", rounding: 15, direction: "ltr" },
            ]}
            parentBackgroundColor="hsl(var(--background))"
            buttonIcon={<IconCornerRightUp />}
            mirrored
            swapPriceOrder={true}
            price="$599"
            oldPrice="$991"
            titleAlignment="center"
            descriptionAlignment="right"
            buttonIconSize={32}
            buttonIconColor="#ffffff"
            buttonIconHoverColor="#EEEEEE"
            buttonBackgroundColor="#00A6FB"
            buttonBackgroundHoverColor="#0582CA"
            imageHoverZoom={1.5}
            onClick={(target, id) =>
              toast({
                title: t("namer_ui"),
                description: `${t("inflected_card_toast_clicked")} ${target} (${id})`,
              })
            }
            onHover={(target, id, event) =>
              console.log("Hover event:", event, "target:", target, "card", id)
            }
          />
        </div>
      </div>

      {/* Custom CSS for live background */}
      <style jsx>{`
        .bg-livepattern {
          background-color: #00a7fa;
        }
        .bg-livepattern::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 30%, white 0%, transparent 40%),
                      radial-gradient(circle at 80% 70%, white 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7) 0%, transparent 40%);
          background-size: 200% 200%;
          animation: orbFloat 15s ease-in-out infinite alternate;
          z-index: 0;
          pointer-events: none;
        }
        @keyframes orbFloat {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .bg-livepattern:hover::before {
          background: radial-gradient(circle at 20% 30%, black 0%, transparent 40%),
                      radial-gradient(circle at 80% 70%, black 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(0,0,0,0.7) 0%, transparent 40%);
          animation: orbFloat 15s ease-in-out infinite alternate;
        }
        .live-text-container {
          background: #636363;
        }
        .live-text-container:hover {
          background: #fff;
          color: #636363;
        }
      `}</style>
    </section>
  );
}
