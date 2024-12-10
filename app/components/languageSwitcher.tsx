
"use client"
import React, { useState } from 'react';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const { i18n } = useTranslation();

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const changeLocale = (locale: string) => {
        console.log(`Switching to ${locale}`);
        const newPath = pathname.replace(i18n.language, locale);
        i18n.changeLanguage(locale);
        router.push(newPath);
        setDropdownVisible(false); // Close dropdown after selection
    };

    return (
        <div className="language-selector">
            <i
                className="fas fa-globe"
                aria-hidden="true"
                onClick={toggleDropdown}
                style={{ cursor: 'pointer' }}
            ></i>

            {dropdownVisible && (
                <div className="dropdown">
                    <button className="dropdown-item" onClick={() => changeLocale('en')}>
                        English
                    </button>
                    <button className="dropdown-item" onClick={() => changeLocale('pt')}>
                        Portuguese
                    </button>
                </div>
            )}
        </div>
    );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   