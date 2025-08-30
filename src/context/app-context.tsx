
"use client";

import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";
import { getDictionary, TranslationKey, Dictionary } from "@/lib/translations";
import { dir } from 'i18next';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface AppContextType {
  lang: string;
  setLang: (lang: string) => void;
  dictionary: Dictionary;
  t: (key: TranslationKey | string) => string;
  isHydrated: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentLang = searchParams.get('lang') || 'en';
  
  const [lang, setInternalLang] = useState(currentLang);
  const [dictionary, setDictionary] = useState<Dictionary>({} as Dictionary);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if(currentLang !== lang) {
      setInternalLang(currentLang);
    }
  }, [currentLang, lang]);

  const setLang = useCallback((newLang: string) => {
    setInternalLang(newLang);
    
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    if (newLang === 'en') {
        current.delete('lang');
    } else {
        current.set('lang', newLang);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    
    router.push(`${pathname}${query}`, { scroll: false });
  }, [pathname, router, searchParams]);
  
  useEffect(() => {
    const fetchDictionary = async () => {
      const d = await getDictionary(lang);
      setDictionary(d);
      if (!isHydrated) {
        setIsHydrated(true);
      }
    };
    fetchDictionary();
  }, [lang, isHydrated]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir(lang);
  }, [lang]);

  const t = useCallback((key: TranslationKey | string): string => {
    const keys = Object.keys(dictionary);
    if (keys.length > 0) {
        return dictionary[key as TranslationKey] || String(key);
    }
    return String(key);
  }, [dictionary]);
  
  const value = {
    lang,
    setLang,
    dictionary,
    t,
    isHydrated
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

export const useTranslation = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within an AppProvider");
  }
  return context.t;
}
