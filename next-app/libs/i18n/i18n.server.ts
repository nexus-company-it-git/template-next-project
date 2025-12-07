import i18next, { i18n as I18nInstance } from "i18next";
import { LOCALES, } from "../common";
import { DEFAULT_LOCALE } from "../constants";

const INSTANCES: Map<string, I18nInstance> = new Map<string, I18nInstance>();

export default async function initI18nServer(locale: string) {
  if (INSTANCES.has(locale)) {
    return INSTANCES.get(locale);
  }

  const instaince = i18next.createInstance();

  await instaince
    .init({
      lng: locale,
      resources: LOCALES,
      fallbackLng: DEFAULT_LOCALE,
      interpolation: {
        escapeValue: false,
      },
    });

  INSTANCES.set(locale, instaince);

  return instaince;
}