"use client"
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

export default function Footer() {
    const { t } = useTranslation(); // Hook to access translations
    const { locale } = useParams(); // Get the current locale from the URL

    return (
        <footer className="footer">
            <img className="logo-footer" src="/images/white_logo.png" />
            <div className="footer-section col-md-12">
                <div className="col-md-12 text-center">
                    <Link className="half-a-border-on-bottom tittle" href={`/${locale}/contact`}>{t('contact_us')}</Link>
                </div>
            </div>
            <div className="col-md-12 copyright-section">
                <p className="copyright"> ©2021 OBRA PRIMATA DESIGN · Made in <i className="fas fa-sun" style={{ marginLeft: '5px', marginRight: '5px' }} aria-hidden="true"></i> ANGOLA</p>
            </div>
        </footer>
    )
}