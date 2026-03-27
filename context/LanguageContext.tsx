"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale, useMessages } from "next-intl";

type Locale = "en" | "ru" | "uz";
type Language = "EN" | "RU" | "UZ";

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

export const useLanguage = () => {
  const router = useRouter();
  const locale = useLocale() as Locale;
  const messages = useMessages() as any;

  const setLang = (nextLang: Language) => {
    const nextLocale = langToLocale[nextLang];
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  };

  return {
    lang: localeToLang[locale] ?? "EN",
    setLang,
    t: messages,
  };
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
