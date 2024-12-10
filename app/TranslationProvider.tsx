'use client';

import { ReactNode } from 'react';
import '@/app/i18n';

type TranslationProviderProps = {
    children: ReactNode;
};

export default function TranslationProvider({ children }: TranslationProviderProps) {
    return <>{children}</>;
}
