import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(_req: NextRequest) {
  // Placeholder middleware; add auth checks when using a supported helper.
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/employees/:path*', '/schedule/:path*', '/leaves/:path*', '/reports/:path*', '/settings/:path*']
};
