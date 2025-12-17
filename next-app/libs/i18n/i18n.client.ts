'use client';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LOCALES } from "../common";
import { DEFAULT_LOCALE } from "../constants";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      lng: DEFAULT_LOCALE,
      resources: DEFAULT_LOCALES,
      fallbackLng: DEFAULT_LOCALE,
      interpolation: { escapeValue: false },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;