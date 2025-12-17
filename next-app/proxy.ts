import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALES } from "./libs/common";
import { DEFAULT_LOCALE } from "./libs/constants";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = Object.keys(DEFAULT_LOCALES).some(
    (locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
  );

  if (hasLocale) return;

  request.nextUrl.pathname = `/${DEFAULT_LOCALE}/${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|robots.txt|sitemap.xml|images|css|fonts|media|public).*)'
  ]
}