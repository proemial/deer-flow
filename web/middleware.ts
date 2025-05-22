import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('middleware', request.nextUrl.pathname);
  // Check if the path is exactly "/"
  if (request.nextUrl.pathname === '/') {
    // Redirect to "/chat"
    return NextResponse.redirect(new URL('/chat', request.url));
  }
  // Continue for all other paths
  return NextResponse.next();
}

// Ensure middleware only runs on the root path
export const config = {
  matcher: '/',
};
