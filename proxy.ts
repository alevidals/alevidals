import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { type NextRequest, NextResponse } from "next/server";
import type { Locale } from "@/app/[lang]/dictionaries";

const locales: Locale[] = ["es", "en"];
const defaultLocale: Locale = "es";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const locale = getLocaleFromBrowser(req);
  req.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(req.nextUrl);
}

function getLocaleFromBrowser(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  const negotiator = new Negotiator({
    headers: {
      "accept-language": request.headers.get("accept-language") || "",
    },
  });

  try {
    return match(negotiator.languages(), locales, defaultLocale) as Locale;
  } catch {
    return defaultLocale;
  }
}

export const config = {
  matcher: ["/((?!(?:es|en)(?:/|$)|_next/|api/|public/|.*\\..*?).*)"],
};
