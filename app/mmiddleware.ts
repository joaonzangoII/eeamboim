import { NextResponse,  NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    console.log("pathname", pathname)

    // Check if the URL starts with a valid locale
    const isLocaleSpecified = /^\/(en|pt)/.test(pathname);

    if (!isLocaleSpecified) {
        // Redirect to default locale (e.g., '/en')
        const defaultLocale = 'en';
        return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
    }

    return NextResponse.next();
}

// Apply the middleware to all routes except public files
export const config = {
    matcher: ['/((?!api|_next|favicon.ico|*.svg).*)'],
};