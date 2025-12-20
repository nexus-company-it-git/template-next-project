'use client';

import { Locale } from "@/libs/common";
import i18n from "@/libs/i18n/i18n.client";
import { useEffect } from "react";

export type LocaleDetectorProps = {
  locale: Locale;
} 

export default function LocaleDetector({
  locale,
}: LocaleDetectorProps) {
  
  useEffect(() => {
    if (typeof window !== 'undefined' && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale])

  return null;
}