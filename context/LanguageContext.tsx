"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import enMessages from "@/messages/en.json";

type Locale = "en" | "ru" | "uz";
type Language = "EN" | "RU" | "UZ";

const DEFAULT_LOCALE: Locale = "en";

const localeToLang: Record<Locale, Language> = {
  en: "EN",
  ru: "RU",
  uz: "UZ",
};

const langToLocale: Record<Language, Locale> = {
  EN: "en",
  RU: "ru",
  UZ: "uz",
};

const messageLoaders: Record<Locale, () => Promise<any>> = {
  en: () => Promise.resolve(enMessages),
  ru: () => import("@/messages/ru.json").then((m) => m.default),
  uz: () => import("@/messages/uz.json").then((m) => m.default),
};

function readLocaleCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)locale=([^;]+)/);
  const value = match?.[1]?.toLowerCase();
  return value === "ru" || value === "uz" || value === "en" ? value : null;
}

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);
  const [messages, setMessages] = useState<any>(enMessages);

  // Подхватываем сохранённый язык после монтирования (избегаем рассинхронизации с серверным рендером)
  useEffect(() => {
    const saved = readLocaleCookie();
    if (saved && saved !== DEFAULT_LOCALE) {
      let cancelled = false;
      messageLoaders[saved]().then((msgs) => {
        if (!cancelled) {
          setLocale(saved);
          setMessages(msgs);
        }
      });
      return () => {
        cancelled = true;
      };
    }
  }, []);

  const setLang = useCallback((nextLang: Language) => {
    const nextLocale = langToLocale[nextLang];
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    messageLoaders[nextLocale]().then((msgs) => {
      setLocale(nextLocale);
      setMessages(msgs);
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang: localeToLang[locale], setLang, t: messages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
