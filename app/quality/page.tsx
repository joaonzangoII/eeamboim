"use client"
import React from "react";
import styles from '@/public/styles/quality.module.css';
import SocialIconsBanner from "@/app/components/socialIconsBanner";
import { useTranslation } from 'next-i18next';

const Quality: React.FC = () => {
    const { t } = useTranslation();

    const qualityText = `
    Estaleiro Atlântico do Amboim operates an integrated <br/>
    management system incorporating <br/>
    Quality, Safety, Health and environmental care which is guided <br/>
    by the ISO 9001:2008 Code <br/>
    for Quality management, and IMO’s ISM Code for safety and <br/>
    environmental management. <br/>
    We are commited to provide a healthy and safe working <br/>
    environment and, as such, we apply a set of effective <br/>
    measurement tools on the yard aimed at.
    `
    return (
        <>
            <section className={`${styles.containerBanner} `}>
            <img className="banner" src="/images/header/quality.png" />
                <div className={`${styles.leftTittle}`}>
                    <p className={`${styles.bannerTittle}`}>
                        <span>{t('quality_health_safety_and_environmental_care')}</span>
                    </p>
                <i className="fas fa-play-circle" aria-hidden="true"></i>
                <p className={`${styles.findOutMore} `}  style={{ display: 'inline-block', paddingLeft: '2%',fontWeight: 500}}> 
                    {t('find_out_more')}
                </p>
            </div>

            <div className="arrows">
                <div className={`col-md-6 ${styles.arrowP} `}>
                    <p>{t('quality_health_safety_and_environmental_care')}</p>
                </div>
            </div>
            <i className={`fas fa-chevron-right ${styles.right} `} aria-hidden="true"></i>
            <SocialIconsBanner styles={styles} />
        </section>
        <section className="col-md-12" style={{ padding: '0px', marginTop: '5%', height: '256px'}}>
            <section className="col-md-6 intro">
                <div className="intro-text">
                    <div className="separator">
                        <div className="line"></div>
                        <h6>{t('quality_health_safety_and_environmental_care')} </h6>
                    </div>
                </div>
            </section>
            <section className={`col-md-6 ${styles.introSection} `}>
                <div className={`${styles.introDescription} `}>
                    <div style={{ fontWeight: 400,color: '#C4C4C4',paddingBottom: '5%'}}>
                        <div
                            dangerouslySetInnerHTML={{ __html: qualityText }}
                        />
                    </div>
                </div>
            </section>
        </section>
        </>
    );
}


export default Quality;
