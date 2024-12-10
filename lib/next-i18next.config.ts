import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    i18n: {
        locales: ['en', 'pt'], // Add your supported locales
        defaultLocale: 'pt',        // Set the default locale
        // localeDetection: true,      // Automatically detect the user's locale
    }
};

export default nextConfig;
