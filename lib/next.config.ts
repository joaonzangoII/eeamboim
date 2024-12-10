import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    i18n:  {
      locales: ['en', 'pt', 'es'], // Add your supported locales
      defaultLocale: 'en',        // Set the default locale
      // localeDetection: true,      // Automatically detect the user's locale
  }
};

export default nextConfig;
