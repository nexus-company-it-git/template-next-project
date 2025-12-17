import en from './translations/en.json';
import ua from './translations/ua.json';
import ru from './translations/ru.json';

export type Translation = {
  translation: Record<string, string>
};

export const DEFAULT_LOCALES: Record<string, Translation> = {
  en: { translation: { ...en } },
  ua: { translation: { ...ua } },
  ru: { translation: { ...ru } },
};

export type Locale = string;

export type NavigationItem = {
  label: string;
  url: string;
  key: string;
}

export type Navigation = NavigationItem[];