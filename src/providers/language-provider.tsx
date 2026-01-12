"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

type Language = "en" | "th";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  /**
   * Helper function to switch content based on language.
   * Supports Strings and ReactNodes (JSX).
   */
  t: <T>(en: T, th: T) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  // Load from LocalStorage on Mount
  useEffect(() => {
    setIsMounted(true);
    const savedLang = localStorage.getItem(STORAGE_KEY) as Language;
    if (savedLang === "en" || savedLang === "th") {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang; // Accessibility: Update html lang
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "th" : "en");
  }, [language, setLanguage]);

  const t = useCallback(
    <T,>(en: T, th: T): T => {
      return language === "en" ? en : th;
    },
    [language],
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
