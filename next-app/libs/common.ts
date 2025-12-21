import en from './translations/en.json';
import ua from './translations/ua.json';
import ru from './translations/ru.json';
import { Translation } from './types';

export const DEFAULT_LOCALES: Record<string, Translation> = 
{
  en: { translation: { ...en } },
  ua: { translation: { ...ua } },
  ru: { translation: { ...ru } },
};

export type NavigationItem = {
  label: string;
  url: string;
  key: string;
}

export type Navigation = NavigationItem[];