import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/public/styles/globals.css";
import Menu from '@/components/menu';
import Footer from '@/components/footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/css/fontawesome.css" />
        <link rel="stylesheet" type="text/css" href="/css/site.css" />
        <link rel="stylesheet" type="text/css" href="/css/footer.css" />
        <link rel="stylesheet" type="text/css" href="/css/home/banner-icons.css" />
        <link rel="stylesheet" type="text/css" href="/css/menu.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <script src="/js/fontawesome.js"></script>
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-gr-ext-installed=""
        data-new-gr-c-s-check-loaded="14.1207.0"
      >
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}