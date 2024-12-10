"use client"
import Link from 'next/link';
import LanguageSwitcher from './languageSwitcher';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

const Menu: React.FC= () => {
    const { t } = useTranslation(); // Hook to access translations
    const { locale } = useParams(); // Get the current locale from the URL
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
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                            <i className="fas fa-bars" aria-hidden="true"></i>
                        </button>
                        <Link className="navbar-brand" href="/" style={{ width: '181px' }}>
                            <img alt="logo-nav" className="logo-nav" src="/images/black_logo.png" />
                        </Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse menu-options">
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
