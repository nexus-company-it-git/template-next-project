import en from './translations/en.json';
import ua from './translations/ua.json';
import ru from './translations/ru.json';

export type Translation = {
  translation: Record<string, Record<string, string>>
};

export const LOCALES: Record<"en" | "ua" | "ru", Translation> = {
  en: { translation: en },
  ua: { translation: ua },
  ru: { translation: ru },
};

export type Locale = (keyof typeof LOCALES);