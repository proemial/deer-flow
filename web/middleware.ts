// web/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/' || req.url.endsWith('/')) {
    return NextResponse.redirect(new URL(
        "/chat",
        req.url,
    ),);
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};