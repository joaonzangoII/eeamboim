"use client"
import Link from 'next/link';
import LanguageSwitcher from './languageSwitcher';
import { useTranslation } from 'react-i18next';
import styles from '@/public/styles/home.module.css';
import { useState } from 'react';

const Menu: React.FC= () => {
    const [openMenu, setOpenMenu] = useState(false)
    const { t } = useTranslation(); // Hook to access translations
    const menuItems = [
        { label: t('home'), path: '/' },
        { label: t('about_us'), path: '/about' },
        { label: t('services'), path: '/services' },
        { label: t('contact_us'), path: '/contact' },
    ];

    return (
        <>
            <nav className="navbar navbar-white navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" 
                            className="navbar-toggle" 
                            data-toggle="collapse" 
                            data-target="#navbar"
                            onClick={() => setOpenMenu(!openMenu)}>
                            <i className="fas fa-bars" aria-hidden="true"></i>
                        </button>
                        <Link className="navbar-brand" href="/" style={{ width: '181px' }}>
                            <img alt={`logo-nav ${styles.logoNav}`} className="logo-nav" src="/images/black_logo.png" />
                        </Link>
                    </div>
                    <div id="navbar" className={`navbar-collapse collapse menu-options ${openMenu ? 'show': 'hide'}`}>
                        <ul className="nav navbar-nav">
                            {menuItems.map((item) => (
                                <li key={item.path}>
                                    <Link href={`${item.path}`}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="navbar-right">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu;
