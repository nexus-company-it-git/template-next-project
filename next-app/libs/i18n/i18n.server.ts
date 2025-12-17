import i18next, { i18n as I18nInstance } from "i18next";
import { DEFAULT_LOCALES, } from "../common";
import { DEFAULT_LOCALE } from "../constants";

const INSTANCES: Map<string, I18nInstance> = new Map<string, I18nInstance>();

export default async function initI18nServer(locale: string) {
  if (INSTANCES.has(locale)) {
    return INSTANCES.get(locale);
  }

  const instance = i18next.createInstance();

  await instance
    .init({
      lng: locale,
      resources: DEFAULT_LOCALES,
      fallbackLng: DEFAULT_LOCALE,
      interpolation: {
        escapeValue: false,
      },
    });

  INSTANCES.set(locale, instance);

  return instance;
}