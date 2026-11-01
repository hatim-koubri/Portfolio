import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/lib/constants/locales";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  if (!firstSegment) {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  if (!isLocale(firstSegment)) {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};
