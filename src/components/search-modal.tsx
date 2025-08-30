'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { componentsMetadata } from '@/lib/component-meta';
import { useApp } from '@/context/app-context';
import { dictionaries } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { ModalOverlay } from './modal-overlay';

interface SearchModalProps {
  show: boolean;
  onClose: () => void;
  outlineColor?: string;
}

const SearchModal: React.FC<SearchModalProps> = ({
  show,
  onClose,
  outlineColor = 'hsl(var(--border))',
}) => {
  const { lang, t } = useApp();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isRTL = lang === 'he';

  useEffect(() => {
    if (show) {
      setQuery('');
      searchInputRef.current?.focus();
    }
  }, [show]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const filteredComponents = useMemo(() => {
    const lowerCaseQuery = query.toLowerCase().trim();

    if (!lowerCaseQuery) {
      return componentsMetadata;
    }

    return componentsMetadata.filter(comp => {
      const titleEn = dictionaries.en[comp.title]?.toLowerCase() || '';
      const titleHe = dictionaries.he[comp.title]?.toLowerCase() || '';
      const titleEs = dictionaries.es[comp.title]?.toLowerCase() || '';

      const descEn = dictionaries.en[comp.description]?.toLowerCase() || '';
      const descHe = dictionaries.he[comp.description]?.toLowerCase() || '';
      const descEs = dictionaries.es[comp.description]?.toLowerCase() || '';

      return (
        titleEn.includes(lowerCaseQuery) ||
        titleHe.includes(lowerCaseQuery) ||
        titleEs.includes(lowerCaseQuery) ||
        descEn.includes(lowerCaseQuery) ||
        descHe.includes(lowerCaseQuery) ||
        descEs.includes(lowerCaseQuery)
      );
    });
  }, [query]);

  const handleNavigation = (componentId: string) => {
    router.push(`/components/${componentId}`);
    onClose();
  };

  const searchIconClass = isRTL ? 'right-3' : 'left-3';
  const closeIconClass = isRTL ? 'left-3' : 'right-3';
  const inputPaddingClass = isRTL ? 'pr-10 pl-10' : 'pl-10 pr-10';

  return (
    <AnimatePresence>
      {show && (
        <ModalOverlay onClose={onClose}>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-lg m-4 p-4 bg-card text-card-foreground rounded-2xl border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ zIndex: 1001 }}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div className="relative mb-4">
              <Search className={cn("absolute top-1/2 -translate-y-1/2 text-muted-foreground", searchIconClass)} size={20} />
              <input
                ref={searchInputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('search_placeholder_text')}
                className={cn(
                  "w-full h-12 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                  inputPaddingClass
                )}
              />
              <button
                onClick={onClose}
                className={cn("absolute top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", closeIconClass)}
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>
            <div className="max-h-[50vh] overflow-y-auto space-y-2">
              {filteredComponents.length > 0 ? (
                filteredComponents.map((comp) => (
                  <div
                    key={comp.id}
                    onClick={() => handleNavigation(comp.id)}
                    className={cn(
                      "p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors",
                      isRTL ? 'text-right' : 'text-left'
                    )}
                  >
                    <div className="font-semibold text-foreground">{t(comp.title)}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">{t(comp.description)}</div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-muted-foreground">
                  No components found.
                </div>
              )}
            </div>
          </motion.div>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
