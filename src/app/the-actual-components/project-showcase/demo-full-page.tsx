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
    { name: "Blueberry Loom", quote: 'A cryptographically reinforced form builder that utilizes ML-KEM-1024, as well as the \"ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512\" authenticated encryption scheme to enable end-to-end encryption for form responses.', designation: "Next.js + Nuxt Project", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/blueberry-loom.webp", link: "https://blueberry-loom.netlify.app/" },
    { name: "Nof", quote: 'A modern color palette generator that can pick matching colors, offers brightness control tools, and employs multiple color mixing modes—even enabling users to mix colors using a quadratic equation with an adjustable aperture.', designation: "Next.js Project", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/nof.webp", link: "https://nofpg.netlify.app/" },
    { name: "Merucav", quote: 'A design tool that offers several customizable shaders, along with features for adding shapes, text, and icons to the canvas. It also makes it possible to apply noise to the entire canvas and blur it.', designation: "Next.js Project", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/merucav.webp", link: "https://merucav.netlify.app/" },
    { name: "Namer UI", quote: "A comprehensive collection of modern, attractive, and unique reusable TypeScript components crafted specifically for Next.js.", designation: "Next.js Project", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui.webp", link: "https://namer-ui.netlify.app/" },
    { name: "Namer UI For Vue", quote: "A collection of customizable, reusable TypeScript, vanilla CSS components for Vue 3.", designation: "Vue Project", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui-for-vue.webp", link: "https://namer-ui-for-vue.netlify.app/" },
    { name: "React Cryptographic Toolkit", quote: "A web app that’s capable of encrypting user data, hashing strings, and calculating tags using the available HMAC algorithms. Please don’t judge me too harshly for it; this is the first React app I ever made.", designation: "React Project", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/react-cryptographic-toolkit.webp", link: "https://northstrix.github.io/React-Cryptographic-Toolkit/" },
    { name: "Clandestine", quote: "A clean and modern beauty salon landing page template made using Next.js, Perplexity, and Firebase Studio.", designation: "React Project", src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/clandestine.webp", link: "https://clandestine-beauty-salon-landing-page.netlify.app/" },
  ];

  const testimonialsHe = [
    { 
      name: "בלוברי לום", 
      quote: 'יוצר טפסים עם חיזוק קריפטוגרפי המשתמש ב-ML-KEM-1024, בנוסף לסכמת ההצפנה המאומתת "ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512", כדי לאפשר הצפנה מקצה לקצה של תגובות בטפסים.', 
      designation: "פרויקט Next.js + Nuxt", 
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/blueberry-loom.webp", 
      link: "https://blueberry-loom.netlify.app/" 
    },
    { 
      name: "נוף", 
      quote: 'מחולל פלטת צבעים מודרני שיכול לבחור צבעים תואמים, מציע כלים לשליטה בבהירות, ומשתמש במצבי ערבוב צבעים שונים — ואף מאפשר למשתמשים לערבב צבעים באמצעות משוואה ריבועית עם מפתח מתכוונן.', 
      designation: "פרויקט Next.js", 
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/nof.webp", 
      link: "https://nofpg.netlify.app/" 
    },
    { 
      name: "מרוכב", 
      quote: 'כלי עיצוב המספק מספר שיידרים הניתנים להתאמה אישית, יחד עם אפשרויות להוספת צורות, טקסט ואייקונים על הקנבס. הוא גם מאפשר להוסיף רעש לכל הקנבס ולטשטש אותו.', 
      designation: "פרויקט Next.js", 
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/merucav.webp", 
      link: "https://merucav.netlify.app/" 
    },
    { 
      name: "נמר UI", 
      quote: "אוסף מקיף של רכיבי TypeScript מודרניים, ייחודיים וניתנים לשימוש חוזר, שעוצבו במיוחד עבור Next.js.", 
      designation: "פרויקט Next.js", 
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui.webp", 
      link: "https://namer-ui.netlify.app/" 
    },
    { 
      name: "נמר UI עבור Vue", 
      quote: "אוסף של רכיבי TypeScript ו-CSS טהור, הניתנים להתאמה אישית ולשימוש חוזר, עבור Vue 3.", 
      designation: "פרויקט Vue", 
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui-for-vue.webp", 
      link: "https://namer-ui-for-vue.netlify.app/" 
    },
    { 
      name: "React קריפטוגרפיק טולקיט", 
      quote: "אפליקציית ווב שמסוגלת להצפין נתוני משתמשים, לגבות מחרוזות (hash), ולחשב תגיות באמצעות אלגוריתמי HMAC זמינים. בבקשה אל תשפטו אותי לחומרה — זו האפליקציה הראשונה שבניתי ב-React.", 
      designation: "פרויקט React", 
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/react-cryptographic-toolkit.webp", 
      link: "https://northstrix.github.io/React-Cryptographic-Toolkit/" 
    },
    { 
      name: "קלאנדסטין", 
      quote: "תבנית דף נחיתה נקייה ומודרנית לסלון יופי, שנוצרה באמצעות Next.js, Perplexity ו-Firebase Studio.", 
      designation: "פרויקט React", 
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/clandestine.webp", 
      link: "https://clandestine-beauty-salon-landing-page.netlify.app/" 
    },
  ];

  const testimonialsEs = [
    { 
      name: "Blueberry Loom", 
      quote: 'Un creador de formularios reforzado criptográficamente que utiliza ML-KEM-1024, además del esquema de cifrado autenticado "ChaCha20 + Serpent-256 CBC + HMAC-SHA3-512", para habilitar el cifrado de extremo a extremo en las respuestas de formularios.', 
      designation: "Proyecto Next.js + Nuxt", 
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/blueberry-loom.webp", 
      link: "https://blueberry-loom.netlify.app/" 
    },
    { 
      name: "Nof", 
      quote: 'Un generador moderno de paletas de colores que puede seleccionar colores compatibles, ofrece herramientas de control de brillo y emplea múltiples modos de mezcla de colores; incluso permite a los usuarios mezclar colores usando una ecuación cuadrática con una apertura ajustable.', 
      designation: "Proyecto Next.js", 
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/nof.webp", 
      link: "https://nofpg.netlify.app/" 
    },
    { 
      name: "Merucav", 
      quote: 'Una herramienta de diseño que ofrece varios sombreadores personalizables, junto con funciones para agregar formas, texto e íconos al lienzo. También permite aplicar ruido a todo el lienzo y desenfocarlo.', 
      designation: "Proyecto Next.js", 
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/merucav.webp", 
      link: "https://merucav.netlify.app/" 
    },
    { 
      name: "Namer UI", 
      quote: "Una colección completa de componentes TypeScript modernos, atractivos y únicos, reutilizables y diseñados específicamente para Next.js.", 
      designation: "Proyecto Next.js", 
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui.webp", 
      link: "https://namer-ui.netlify.app/" 
    },
    { 
      name: "Namer UI For Vue", 
      quote: "Una colección de componentes TypeScript y CSS puro, personalizables y reutilizables, para Vue 3.", 
      designation: "Proyecto Vue", 
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/namer-ui-for-vue.webp", 
      link: "https://namer-ui-for-vue.netlify.app/" 
    },
    { 
      name: "React Cryptographic Toolkit", 
      quote: "Una aplicación web capaz de cifrar datos de usuario, generar hashes de cadenas y calcular etiquetas usando los algoritmos HMAC disponibles. Por favor, no me juzgues demasiado; esta fue la primera aplicación de React que hice.", 
      designation: "Proyecto React", 
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/react-cryptographic-toolkit.webp", 
      link: "https://northstrix.github.io/React-Cryptographic-Toolkit/" 
    },
    { 
      name: "Clandestine", 
      quote: "Una plantilla limpia y moderna para página de aterrizaje de salón de belleza, creada con Next.js, Perplexity y Firebase Studio.", 
      designation: "Proyecto React", 
      src: "https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/clandestine.webp", 
      link: "https://clandestine-beauty-salon-landing-page.netlify.app/" 
    },
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
