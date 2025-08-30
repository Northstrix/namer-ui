"use client";

import { useState, useEffect } from "react";
import { ProjectShowcase } from "@/app/the-actual-components/project-showcase/ProjectShowcase";
import { useTranslation, useApp } from "@/context/app-context";
import { useToast } from "@/hooks/use-toast";

export default function ProjectShowcaseDemo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-rendered
    setIsClient(true);
  }, []);

  const t = useTranslation();
  const { lang } = useApp();
  const { toast } = useToast();

  // Testimonials (EN / HE / ES)
  const testimonialsEn = [
    { name: "Blueberry Loom", quote: 'A cryptographically reinforced form builder that utilizes ML-KEM-1024, as well as the "ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512" authenticated encryption scheme to enable end-to-end encryption for enhanced data protection.', designation: "Next.js + Nuxt Project", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/blueberry-loom.webp", link: "https://blueberry-loom.netlify.app/" },
    { name: "Namer UI", quote: "A comprehensive collection of modern, attractive, and unique reusable TypeScript components crafted specifically for Next.js.", designation: "Next.js Project", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui.webp", link: "https://namer-ui.netlify.app/" },
    { name: "Namer UI For Vue", quote: "A collection of customizable, reusable TypeScript, vanilla CSS components for Vue 3.", designation: "Vue Project", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui-for-vue.webp", link: "https://namer-ui-for-vue.netlify.app/" },
    { name: "React Cryptographic Toolkit", quote: "A web app that’s capable of encrypting user data, hashing strings, and calculating tags using the available HMAC algorithms. Please don’t judge me too harshly for it; this is the first React app I ever made.", designation: "React Project", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/rct.webp", link: "https://northstrix.github.io/React-Cryptographic-Toolkit/" },
    { name: "PHA5E-Inspired Hero Section", quote: "An unorthodox, customizable component. I put it here just to demonstrate that I'm capable of creating an Angular app.", designation: "Angular Project", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/pha5e-inspired-hero-section.webp", link: "https://pha5e-inspired-hero-section.netlify.app/" },
    { name: "Bootleg Website Localization Tool", quote: "A simple tool designed to localize websites created with the Bazium website builder, as well as their vanilla HTML/CSS/JS counterparts.", designation: "Vanilla HTML/CSS/JS Project", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/bwlt.webp", link: "https://codepen.io/Northstrix/full/mydWRJB" },
    { name: "Plum Cave", quote: 'A cloud backup solution that employs the "ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512" authenticated encryption scheme for data encryption and ML-KEM-1024 for quantum-resistant key exchange.', designation: "Next.js Project", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/plum-cave.webp", link: "https://plum-cave.netlify.app/" },
  ];

  const testimonialsHe = [
    { name: "בלוברי לום", quote: 'בונה טפסים מחוזק קריפטוגרפית המשתמש ב-ML-KEM-1024 ובסכימת ההצפנה המאומתת "ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512" כדי לאפשר הצפנה מקצה לקצה להגנה משופרת על נתונים.', designation: "פרויקט Next.js ו-Nuxt", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/blueberry-loom.webp", link: "https://blueberry-loom.netlify.app/" },
    { name: "נמר UI", quote: "אוסף מקיף של רכיבי TypeScript מודרניים, אטרקטיביים וייחודיים לשימוש חוזר המיועדים במיוחד ל-Next.js.", designation: "פרויקט Next.js", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui.webp", link: "https://namer-ui.netlify.app/" },
    { name: "נמר UI ל-Vue", quote: "אוסף של רכיבי TypeScript ו-CSS ונילה, הניתנים להתאמה אישית ולשימוש חוזר עבור Vue 3.", designation: "פרויקט Vue", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui-for-vue.webp", link: "https://namer-ui-for-vue.netlify.app/" },
    { name: "React קריפטוגרפיק טולקיט", quote: "אפליקציית אינטרנט המסוגלת להצפין נתוני משתמש, לבצע האש של מחרוזות ולחשב תגיות באמצעות אלגוריתמי HMAC הזמינים. אל תשפטו אותי בחומרה - זוהי האפליקציה הראשונה שיצרתי ב-React.", designation: "פרויקט React", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/rct.webp", link: "https://northstrix.github.io/React-Cryptographic-Toolkit/" },
    { name: "מקטע גיבור בהשראת PHA5E", quote: "רכיב לא שגרתי וניתן להתאמה אישית. הוספתי אותו כאן כדי להדגים שאני מסוגל ליצור אפליקציית Angular.", designation: "פרויקט Angular", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/pha5e-inspired-hero-section.webp", link: "https://pha5e-inspired-hero-section.netlify.app/" },
    { name: "בוטלג וובסייט לוקליזיישן טול", quote: "כלי פשוט שנועד לבצע לוקליזציה לאתרים שנוצרו עם בוני האתרים Bazium, כמו גם לגרסאות ה-vanilla HTML/CSS/JS שלהם.", designation: "פרויקט HTML/CSS/JS וונילה", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/bwlt.webp", link: "https://codepen.io/Northstrix/full/mydWRJB" },
    { name: "פלאם קייב", quote: 'פתרון גיבוי בענן המשתמש בסכימת הצפנה מאומתת "HMAC-SHA3-512 + CBC Serpent-256 + ChaCha20" להצפנת נתונים ו-ML-KEM-1024 לחילופי מפתחות עמידים לקוונטים.', designation: "פרויקט Next.js", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/plum-cave.webp", link: "https://plum-cave.netlify.app/" },
  ];

  const testimonialsEs = [
    { name: "Blueberry Loom", quote: 'Un creador de formularios cripto-reforzado que usa ML-KEM-1024 y el esquema de cifrado autenticado "ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512" para habilitar el cifrado de extremo a extremo.', designation: "Proyecto Next.js + Nuxt", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/blueberry-loom.webp", link: "https://blueberry-loom.netlify.app/" },
    { name: "Namer UI", quote: "Una colección completa de componentes de TypeScript reutilizables, modernos, atractivos y únicos, diseñados específicamente para Next.js.", designation: "Proyecto Next.js", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui.webp", link: "https://namer-ui.netlify.app/" },
    { name: "Namer UI para Vue", quote: "Una colección de componentes de TypeScript y CSS vanilla personalizables y reutilizables para Vue 3.", designation: "Proyecto Vue", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui-for-vue.webp", link: "https://namer-ui-for-vue.netlify.app/" },
    { name: "React Cryptographic Toolkit", quote: "Una aplicación web capaz de cifrar datos de usuario, aplicar hash a cadenas y calcular etiquetas utilizando los algoritmos HMAC disponibles. Por favor, no me juzguen con demasiada dureza; esta es la primera aplicación de React que he creado.", designation: "Proyecto React", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/rct.webp", link: "https://northstrix.github.io/React-Cryptographic-Toolkit/" },
    { name: "Sección de Héroe Inspirada en PHA5E", quote: "Un componente poco ortodoxo y personalizable. Lo puse aquí solo para demostrar que soy capaz de crear una aplicación en Angular.", designation: "Proyecto Angular", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/pha5e-inspired-hero-section.webp", link: "https://pha5e-inspired-hero-section.netlify.app/" },
    { name: "Bootleg Website Localization Tool", quote: "Una herramienta sencilla diseñada para localizar sitios web creados con el constructor de sitios web Bazium, así como sus contrapartes de HTML/CSS/JS vanilla.", designation: "Proyecto Vanilla HTML/CSS/JS", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/bwlt.webp", link: "https://codepen.io/Northstrix/full/mydWRJB" },
    { name: "Plum Cave", quote: 'Una solución de respaldo en la nube que emplea el esquema de cifrado autenticado "ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512" para el cifrado de datos y ML-KEM-1024 para el intercambio de claves resistente a la cuántica.', designation: "Proyecto Next.js", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/plum-cave.webp", link: "https://plum-cave.netlify.app/" },
  ];

  const getButtonInscriptions = (locale: "en" | "he" | "es") => {
    if (locale === "he") {
      return {
        previousButton: t("project_showcase_prev_button"),
        nextButton: t("project_showcase_next_button"),
        openWebAppButton: t("project_showcase_open_app_button"),
      };
    }
    if (locale === "es") {
      return {
        previousButton: "Anterior",
        nextButton: "Siguiente",
        openWebAppButton: "Abrir App Web",
      };
    }
    return {
      previousButton: "Previous",
      nextButton: "Next",
      openWebAppButton: "Open Web App",
    };
  };

  const getPrimaryDemo = () => {
    if (lang === "he")
      return { data: testimonialsHe, rtl: true, inscriptions: getButtonInscriptions("he") };
    if (lang === "es")
      return { data: testimonialsEs, rtl: false, inscriptions: getButtonInscriptions("es") };
    return { data: testimonialsEn, rtl: false, inscriptions: getButtonInscriptions("en") };
  };

  const getSecondaryDemo = () => {
    const secondaryLang = lang === "he" ? "en" : "he";
    const inscriptions =
      secondaryLang === "he"
        ? { previousButton: "הקודם", nextButton: "הבא", openWebAppButton: "פתח אפליקציה" }
        : { previousButton: "Previous", nextButton: "Next", openWebAppButton: "Open Web App" };

    if (secondaryLang === "he")
      return { data: testimonialsHe, rtl: true, inscriptions };
    return { data: testimonialsEn, rtl: false, inscriptions };
  };

  const primaryDemo = getPrimaryDemo();
  const secondaryDemo = getSecondaryDemo();

  // Prevent SSR render → only mount after client
  if (!isClient) return null;

  const showToastForLink = (link: string) => {
    toast({
      title: t("namer_ui"),
      description: t("project_showcase_toast_description") + link,
    });
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="bg-[#050505] p-8 md:p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
        <div className="items-center justify-center relative flex w-full" style={{ maxWidth: "1536px" }}>
          <ProjectShowcase
            testimonials={primaryDemo.data}
            isRTL={primaryDemo.rtl}
            buttonInscriptions={primaryDemo.inscriptions}
            fontSizes={{ name: "28px", position: "20px", testimony: "20px" }}
            spacing={{
              nameTop: "0",
              nameBottom: "10px",
              positionTop: "0",
              positionBottom: "0.5em",
              testimonyTop: "1.24em",
              testimonyBottom: "1em",
              lineHeight: "1.56",
            }}
            onItemClick={showToastForLink}
          />
        </div>
      </div>
      <div className="bg-[#f1f1f7] p-8 md:p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
        <div className="items-center justify-center relative flex w-full" style={{ maxWidth: "1152px" }}>
          <ProjectShowcase
            testimonials={secondaryDemo.data}
            colors={{ name: "#0a0a0a", position: "#454545", testimony: "#171717" }}
            fontSizes={{ name: "32px", position: "21px", testimony: "21px" }}
            spacing={{
              nameTop: "0",
              nameBottom: "12px",
              positionTop: "0",
              positionBottom: "0.5em",
              testimonyTop: "1.24em",
              testimonyBottom: "1em",
              lineHeight: "1.56",
            }}
            isRTL={secondaryDemo.rtl}
            buttonInscriptions={secondaryDemo.inscriptions}
            halomotButtonGradient="linear-gradient(to right, #603dec, #a123f4)"
            halomotButtonBackground="#eee"
            halomotButtonTextColor="#111"
            halomotButtonOuterBorderRadius="16.2px"
            halomotButtonInnerBorderRadius="15px"
            halomotButtonHoverTextColor="#fff"
            onItemClick={showToastForLink}
          />
        </div>
      </div>
    </div>
  );
}
