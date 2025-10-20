"use client";

import React from "react";
import SubmitCard from "@/app/the-actual-components/submit-card/SubmitCard";

const darkThemeProps = {
  backgroundColor: "#0a0a0a",
  borderColor: "#262626",
  innerAreaBorderColor: "#262626",
  innerAreaBgColor: "#111111",
  squareBgColor: "#ffffff",
  titleColor: "#ffffff",
  descriptionColor: "#aaaaaa",
};

export default function SubmitCardDemo() {
  return (
    <div className="flex flex-wrap gap-6 justify-start">
      <div style={{ maxWidth: 376 }}>
        <SubmitCard
          link="https://blueberry-loom-form-loader.netlify.app/form/bWF4aW0uYm9ydC5kZXZlbEBnbWFpbC5jb20=/Far247Squ6?key=Im5uylqLi3BwlN909sLP1Y3vY6nRwMixa8D6BGpj6Uz5B4b9OO)YZSyKWvCGeX65a6Yfsc2ZdUAEWrue3FXDDg=="
          title="Submit Your Project"
          description="Made a project that uses at least one Namer UI component? Submit it now for a chance to get featured!"
          backgroundColor={darkThemeProps.backgroundColor}
          borderColor={darkThemeProps.borderColor}
          innerBorderColor={darkThemeProps.innerAreaBorderColor}
          innerAreaBgColor={darkThemeProps.innerAreaBgColor}
          plusIconColor="#00a7fa"
          dashedBorderColor="#00a7fa"
          titleColor={darkThemeProps.titleColor}
          descriptionColor={darkThemeProps.descriptionColor}
          isRTL={false}
          useDrawIcon
        />
      </div>
      <div style={{ maxWidth: 376 }}>
        <SubmitCard
          link="https://blueberry-loom-form-loader.netlify.app/form/bWF4aW0uYm9ydC5kZXZlbEBnbWFpbC5jb20=/Far247Squ6?key=Im5uylqLi3BwlN909sLP1Y3vY6nRwMixa8D6BGpj6Uz5B4b9OO)YZSyKWvCGeX65a6Yfsc2ZdUAEWrue3FXDDg=="
          title="שלח את הפרויקט שלך"
          description="יצרת פרויקט המשתמש בלפחות רכיב אחד של נמר UI? שלח אותו עכשיו כדי לקבל הזדמנות להופיע!"
          backgroundColor={darkThemeProps.backgroundColor}
          borderColor={darkThemeProps.borderColor}
          innerBorderColor={darkThemeProps.innerAreaBorderColor}
          innerAreaBgColor={darkThemeProps.innerAreaBgColor}
          plusIconColor="#d500ff"
          dashedBorderColor="#d500ff"
          titleColor={darkThemeProps.titleColor}
          descriptionColor={darkThemeProps.descriptionColor}
          isRTL
          useDrawIcon
        />
      </div>
      <div style={{ maxWidth: 376 }}>
        <SubmitCard
          link="https://blueberry-loom-form-loader.netlify.app/form/bWF4aW0uYm9ydC5kZXZlbEBnbWFpbC5jb20=/Far247Squ6?key=Im5uylqLi3BwlN909sLP1Y3vY6nRwMixa8D6BGpj6Uz5B4b9OO)YZSyKWvCGeX65a6Yfsc2ZdUAEWrue3FXDDg=="
          title="Envía tu proyecto"
          description="¿Has creado un proyecto que utilice al menos un componente de Namer UI? ¡Envíalo ahora para tener la oportunidad de ser destacado!"
          backgroundColor="#f9f9f9"
          borderColor="#cccccc"
          innerBorderColor="#d5d5d5"
          innerAreaBgColor="#e1e1e1"
          squareBgColor="#222222"
          plusIconColor="#00a7fa"
          dashedBorderColor="#d500ff"
          titleColor="#222222"
          descriptionColor="#555555"
          isRTL={false}
          centerContent
        />
      </div>
      <div style={{ maxWidth: 376 }}>
        <SubmitCard
          link="https://clandestine-beauty-salon-landing-page.netlify.app/"
          title="Clandestine"
          description="A modern beauty salon landing page template featuring an appointment reservation UI and multilingual support."
          imageSrc="https://github.com/Northstrix/namer-ui/blob/main/public/showcase/clandestine.webp?raw=true"
          backgroundColor={darkThemeProps.backgroundColor}
          borderColor={darkThemeProps.borderColor}
          innerBorderColor={darkThemeProps.innerAreaBorderColor}
          innerAreaBgColor="#000"
          titleColor={darkThemeProps.titleColor}
          descriptionColor={darkThemeProps.descriptionColor}
          isRTL={false}
        />
      </div>
    </div>
  );
}
