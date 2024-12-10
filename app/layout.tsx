import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/public/styles/globals.css";
import Menu from '@/app/components/menu';
import Footer from '@/app/components/footer';
import Script from 'next/script';
import { ReactNode } from "react";
import TranslationProvider from './TranslationProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EAA - Entreposto Aduaneito",
  description: "",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" /> */}
        {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" /> */}
        <link rel="stylesheet" href="/css/fontawesome.css" />
        <link rel="stylesheet" type="text/css" href="/css/site.css" />
        <link rel="stylesheet" type="text/css" href="/css/footer.css" />
        <link rel="stylesheet" type="text/css" href="/css/home/banner-icons.css" />
        <link rel="stylesheet" type="text/css" href="/css/menu.css" />
        <Script src="/js/jquery.min.js" />
        {/* <Script src="node_modules/bootstrap/dist/js/bootstrap.min.js" /> */}
        <Script src="/js/fontawesome.js" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased page-body`}
        data-gr-ext-installed=""
        data-new-gr-c-s-check-loaded="14.1209.0"
        
      >
        <TranslationProvider>
          <Menu />
          {children}
          {/* <Component {...pageProps} /> */}
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}