'use client';
import { motion, Variants } from 'framer-motion';
import { PlusIcon, type PlusIconHandle } from './plus-icon';
import { useTranslation, useApp } from "@/context/app-context";
import { useRef } from 'react';

const mainVariant: Variants = {
  initial: {
    x: 0,
    y: 0,
    boxShadow: '0px 10px 50px rgba(0,0,0,0.1)',
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 1,
    boxShadow: '0px 10px 50px rgba(0,0,0,0.2)',
  },
};

const secondaryVariant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export default function SubmissionCard({ isRTL, link }: { isRTL: boolean, link: string }) {
  const plusIconRef = useRef<PlusIconHandle>(null);
  const t = useTranslation();

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-4 rounded-xl border border-border overflow-hidden transition-all duration-200"
      initial="initial"
      whileHover="animate"
      onHoverStart={() => plusIconRef.current?.startAnimation()}
      onHoverEnd={() => plusIconRef.current?.stopAnimation()}
    >
      <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
        <div className="w-full h-full rounded-lg border border-border bg-[#111] relative grid place-items-center"
        style={{ transform: isRTL ?'scaleX(-1)' : "none" }}
        >
          
          <div className="relative w-auto h-1/2 aspect-square">
            <motion.div
              variants={secondaryVariant}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="absolute inset-0 border border-dashed border-accent opacity-0 rounded-md"
            ></motion.div>
            <motion.div
              layoutId="file-upload"
              variants={mainVariant}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              className="relative z-10 bg-[hsl(var(--foreground))] flex items-center justify-center h-full w-full mx-auto rounded-lg shadow-lg"
            >
              <PlusIcon ref={plusIconRef} size={42} className="text-[hsl(var(--accent))]" />
            </motion.div>
          </div>

        </div>
      </div>

      <div
        className={`pt-4 transition duration-200 ${
          isRTL ? 'group-hover:-translate-x-[6px]' : 'group-hover:translate-x-[6px]'
        }`}
      >
        <h3 className="font-headline text-[22px] mb-2 font-semibold text-foreground">
          {t("submit_your_project_title")}
        </h3>
        <p className="font-body text-base text-muted-foreground">
          {t("submit_your_project_description")}
        </p>
      </div>
    </motion.a>
  );
}
