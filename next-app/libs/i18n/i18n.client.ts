'use client';

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { LOCALES } from "../common";
import { DEFAULT_LOCALE } from "../constants";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      lng: DEFAULT_LOCALE,
      resources: LOCALES,
      fallbackLng: DEFAULT_LOCALE,
      interpolation: { escapeValue: false },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;