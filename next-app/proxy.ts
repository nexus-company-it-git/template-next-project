import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALES } from "./libs/common";
import { DEFAULT_LOCALE } from "./libs/constants";
import { auth } from "./auth";

const privateRoutes = ['/private'];
const unauthorizeRoutes = ['/sign-in'];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = Object.keys(DEFAULT_LOCALES).some(
    (locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
  );

  if (hasLocale) {
    const newPathname = `/${pathname.split('/').slice(2).join('/')}`;
    const session = await auth();
    const isPrivate = privateRoutes.some((route) =>
      route === '/' ? route === newPathname : pathname.includes(route));
    const isUnauthorize = unauthorizeRoutes.some((route) =>
      pathname.includes(route));

    if (session) {
      if (isUnauthorize) {
        return NextResponse.redirect(new URL(`/${pathname.split('/')[1]}/private`, request.nextUrl));
      }
    } else {
      if (isPrivate) {
        return NextResponse.redirect(new URL(`/${pathname.split('/')[1]}/sign-in`, request.nextUrl));
      }
    }

    return NextResponse.next();
  }

  request.nextUrl.pathname = `/${DEFAULT_LOCALE}/${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!_next|api|admin|favicon.ico|robots.txt|sitemap.xml|images|css|fonts|media|public).*)'
  ]
}