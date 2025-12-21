import { Locale } from "./types";

export const DEFAULT_LOCALE: Locale = "ua";

export const SESSION_SECRET: string = 
  process.env.NEXTAUTH_SECRET || 'session.secret';