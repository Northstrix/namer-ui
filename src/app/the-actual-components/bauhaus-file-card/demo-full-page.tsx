
"use client";

import BauhausFileCard from '@/app/the-actual-components/bauhaus-file-card/BauhausFileCard';
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from '@/context/app-context';

export default function BauhausFileCardDemo() {
    const { toast } = useToast();
    const t = useTranslation();

    return (
      <div className="bg-[#262630] p-16 w-full gap-9 flex flex-wrap items-center justify-center">
        <BauhausFileCard
          id="file1"
          topInscription="Size: 5.96 MB"
          fileName="Downtown Dallas.png"
          subMainText="A high-quality image featuring the stunning skyline of Downtown Dallas, showcasing its modern architecture and vibrant city life."
          filledButtonInscription="View"
          outlinedButtonInscription="Download"
          onFilledButtonClick={(id) => toast({ title: t('namer_ui'), description: `Filled button clicked for ${id}` })}
          onOutlinedButtonClick={(id) => toast({ title: t('namer_ui'), description: `Outlined button clicked for ${id}` })}
          onTitleClick={(id) => toast({ title: t('namer_ui'), description: `Title clicked for ${id}` })}
          onDescriptionClick={(id) => toast({ title: t('namer_ui'), description: `Description clicked for ${id}` })}
          onMoreOptionsClick={(id) => toast({ title: t('namer_ui'), description: `More options clicked for ${id}` })}
        />
      
        <BauhausFileCard
          id="file2"
          topInscription="Size: 15.5 MB"
          fileName="Important project.zip"
          subMainText="This small archive contains code, videos, and a presentation for a very important project."
          filledButtonInscription="Extract"
          outlinedButtonInscription="Info"
          onFilledButtonClick={(id) => toast({ title: t('namer_ui'), description: `Filled button clicked for ${id}` })}
          onOutlinedButtonClick={(id) => toast({ title: t('namer_ui'), description: `Outlined button clicked for ${id}` })}
          onTitleClick={(id) => toast({ title: t('namer_ui'), description: `Title clicked for ${id}` })}
          onDescriptionClick={(id) => toast({ title: t('namer_ui'), description: `Description clicked for ${id}` })}
          onMoreOptionsClick={(id) => toast({ title: t('namer_ui'), description: `More options clicked for ${id}` })}
        />
      
        <BauhausFileCard
          id="file3"
          topInscription="Grössi: 71.2 KB"
          fileName="BauhausFileCard.tsx"
          subMainText="En Code für en Bauhaus-inspirierte Datei-Container mit interaktiven Elementen."
          filledButtonInscription="Uuslade"
          outlinedButtonInscription="Teile"
          containerBorderRadius="1.76em"
          buttonRounding="0.76em"
          onFilledButtonClick={(id) => toast({ title: t('namer_ui'), description: `Filled button clicked for ${id}` })}
          onOutlinedButtonClick={(id) => toast({ title: t('namer_ui'), description: `Outlined button clicked for ${id}` })}
          onTitleClick={(id) => toast({ title: t('namer_ui'), description: `Title clicked for ${id}` })}
          onDescriptionClick={(id) => toast({ title: t('namer_ui'), description: `Description clicked for ${id}` })}
          onMoreOptionsClick={(id) => toast({ title: t('namer_ui'), description: `More options clicked for ${id}` })}
        />
      
        <BauhausFileCard
          id="file4"
          topInscription="Tamaño: 250 MB"
          fileName="App tutorial.mp4"
          subMainText="Video Tutorial - Este video proporciona una guía completa sobre el uso de la aplicación y sus características."
          filledButtonInscription="Descargar"
          outlinedButtonInscription="Detalles"
          backgroundColor="#f5f5f5"
          separatorColor="#d0d0d0"
          chronicleButtonBackground="#2a2a34"
          chronicleButtonForeground="#f5f5f5"
          descriptionColor="#333333"
          fileSizeColor="#555555"
          borderWidth="6px"
          ligtenButtonColor={-0.17}
          onFilledButtonClick={(id) => toast({ title: t('namer_ui'), description: `Filled button clicked for ${id}` })}
          onOutlinedButtonClick={(id) => toast({ title: t('namer_ui'), description: `Outlined button clicked for ${id}` })}
          onTitleClick={(id) => toast({ title: t('namer_ui'), description: `Title clicked for ${id}` })}
          onDescriptionClick={(id) => toast({ title: t('namer_ui'), description: `Description clicked for ${id}` })}
          onMoreOptionsClick={(id) => toast({ title: t('namer_ui'), description: `More options clicked for ${id}` })}
        />
      
        <BauhausFileCard
          id="file5"
          topInscription="2.3 KB :גודל"
          fileName="bauhaus-file-card.js"
          subMainText="קופסה לאחסון בהשראת הבאוהאוס עם אלמנטים אינטראקטיביים."
          filledButtonInscription="פתח"
          outlinedButtonInscription="שתף"
          mirrored={true}
          swapButtons={true}
          borderWidth="4px"
          onFilledButtonClick={(id) => toast({ title: t('namer_ui'), description: `Filled button clicked for ${id}` })}
          onOutlinedButtonClick={(id) => toast({ title: t('namer_ui'), description: `Outlined button clicked for ${id}` })}
          onTitleClick={(id) => toast({ title: t('namer_ui'), description: `Title clicked for ${id}` })}
          onDescriptionClick={(id) => toast({ title: t('namer_ui'), description: `Description clicked for ${id}` })}
          onMoreOptionsClick={(id) => toast({ title: t('namer_ui'), description: `More options clicked for ${id}` })}
        />
      
        <BauhausFileCard
          id="file6"
          topInscription="Size: 5.7 MB"
          fileName="Financial Report.pdf"
          subMainText="The integrity of this file is compromised."
          filledButtonInscription="View"
          outlinedButtonInscription="Delete"
          metadataIntegrity={false}
          onFilledButtonClick={(id) => toast({ title: t('namer_ui'), description: `Filled button clicked for ${id}` })}
          onOutlinedButtonClick={(id) => toast({ title: t('namer_ui'), description: `Outlined button clicked for ${id}` })}
          onTitleClick={(id) => toast({ title: t('namer_ui'), description: `Title clicked for ${id}` })}
          onDescriptionClick={(id) => toast({ title: t('namer_ui'), description: `Description clicked for ${id}` })}
          onMoreOptionsClick={(id) => toast({ title: t('namer_ui'), description: `More options clicked for ${id}` })}
        />
      </div>
    );
}
