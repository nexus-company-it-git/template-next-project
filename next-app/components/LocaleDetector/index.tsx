'use client';

import { useEffect } from "react";
import i18n from "@/libs/i18n/i18n.client";
import { Locale } from "@/libs/types";

export type LocaleDetectorProps = {
  locale: Locale;
} 

export default function LocaleDetector({
  locale,
}: LocaleDetectorProps) {
  
  useEffect(() => {
    if (!locale) return;

    const changeLanguage = async () => {
      if (i18n.language !== locale) {
        i18n.changeLanguage(locale)
      }
    }

    changeLanguage();
  }, [locale])

  return null;

  return `Server locale: ${locale} | Client locale: ${i18n.language}`;
}