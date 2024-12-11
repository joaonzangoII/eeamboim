"use client"
import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
import styles from '@/public/styles/about.module.css';
import stylesManPower from '@/public/styles/manpower.module.css';
import { useTranslation } from 'next-i18next';
import ImagesDisplay from "@/app/components/imagesDiplay";
import SocialIconsBanner from "@/app/components/socialIconsBanner";
import ServiceCard from "@/app/components/serviceCard";
import Text from "../models/Text";

const About: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [texts, setTexts] = useState<Text | any>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);;
    const card2Refs = useRef<(HTMLDivElement | null)[]>([]);
    const lang = i18n.language; // You can change this dynamically based on user preference or query

    const mainPowerImages: string[] =
    [
        "/images/manpower-banner.jpg",
        "/images/manpower2.jpg",
        "/images/imagens-06.png"
    ]

    useEffect(() => {
        let maxHeight = Math.max(...cardRefs.current.map((card: any) => card.offsetHeight));
        cardRefs.current.forEach((card: any) => {
            card.style.height = `${maxHeight}px`;
            console.log(maxHeight)
        });

        maxHeight = Math.max(...card2Refs.current.map((card: any) => card.offsetHeight));
        card2Refs.current.forEach((card: any) => {
            card.style.height = `${maxHeight}px`;
            console.log(maxHeight)
        });
    }, [texts]);


    useEffect(() => {
        const fetchTexts = async () => {
            try {
                const response = await fetch(`/api/text?lang=${lang}`);
                const data = await response.json();
                setTexts(data);
            } catch (error) {
                console.error('Error fetching texts:', error);
            }
        };

        fetchTexts();
    }, [lang]);

    if (!texts) return <p>Loading...</p>;


    return (
        <>
            <section className={`${styles.containerBanner} `}>
                <img className={`${styles.banner} ${styles.img}`} src="/images/EAA LDA (5 de 32).jpg" alt="/images/EAA LDA (5 de 32).jpg" />
                <div className={`${styles.leftTittle}`}>
                    <p className={`${styles.bannerTittle}`}>
                        <span>{t('our_technology')}</span>
                    </p>
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <a className={`${styles.findOutMore} `}  style={{ display: 'inline-block', paddingLeft: '2%', fontWeight: '500' }}>
                        {t('find_out_more')}
                    </a>
                </div>
                <i className={`fa fa-chevron-left ${styles.left} `} aria-hidden="true"></i>
                <div className={`${styles.arrows} `}>
                    <div className={`col-md-6 ${styles.arrowP} `}>
                        <p>{t('fabrication_facilities')}</p>
                    </div>

                    <div className={`col-md-4 ${styles.arrowP} `} style={{ marginLeft: '2%' }}>
                        <p>{t('production_equipment')}</p>
                    </div>
                </div>
                <i className={`fa fa-chevron-right ${styles.right} `} aria-hidden="true"></i>
                <SocialIconsBanner styles={styles} />
            </section>
            <section>
                <section className="col-md-12">
                    <div className={`col-md-5 ${styles.introSectionLine} `} >
                        <div className={`${styles.intro} `}>
                            <div className={`${styles.introText} `}>
                                <div className="separator">
                                    <div className="line"></div>
                                    <h6>{t('our_technology')}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ float: 'right' }}>
                        <div className={`${styles.introTexto} `}>
                            <div dangerouslySetInnerHTML={{ __html: texts.OurTechnologyIntroTexto }}></div>
                        </div>
                    </div>
                </section>

                <section className="col-md-12" style={{ padding: '0px', paddingTop: '4%' }}>
                    <div className="col-md-6" style={{ padding: '0px' }}>
                        <img 
                            className={`${styles.imgFluid} ${styles.img} float-left`}  
                            src="/images/Image 7.png" />
                    </div>
                    <div className="col-md-4">
                        <h3 className={`section-title `}>
                            {t('fabrication_facilities')}
                        </h3>
                        <div dangerouslySetInnerHTML={{ __html: texts.installationUtilities }}></div>
                    </div>
                    <div className={`col-md-2 ${styles.yardUtilitiesDiv} `} style={{ paddingTop: '12%' }}>
                        <span className={`${styles.verticalText} `}>{t('yard_utilities')}</span>
                        <div className={`${styles.verticalYardLine} `}>
                            <div className={`${styles.verticalLine} `}></div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2">
                        <h3 className={`section-title `}>
                            {t('production_equipment')}
                        </h3>
                        <div dangerouslySetInnerHTML={{ __html: texts.productionEquipmentIntro }}></div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h3 className={`section-title `}>
                            {texts.QcEquipmentTitle}
                        </h3>
                        <div dangerouslySetInnerHTML={{ __html: texts.QcEquipmentIntro }}></div>
                    </div>

                    <div className={`col-md-2 ${styles.yardSection} `} style={{ paddingTop: '12%' }}>
                        <span className={`${styles.verticalText} `}> {t('production_equipment')}</span>
                        <div className={`${styles.verticalYardLine} `}>
                            <div className={`${styles.verticalLine} `}></div>
                        </div>
                    </div>
                </section>

                <section className="col-md-12" style={{ padding: '0px', marginBottom: '10%' }}>
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-6 mt-3">
                        <h3 className={`section-title `}>
                            {t('logistic_equipment')}
                        </h3>
                        <div dangerouslySetInnerHTML={{ __html: texts.logisticEquipmentIntro }}></div>
                    </div>
                </section>

                <section>
                    <img style={{ marginBottom: '5%' }}
                        className={`${styles.imgFluid} ${styles.fabricFullImg}  ${styles.img}`} 
                        src="/images/sections/home-full-section-4.png" />
                </section>
            </section>

            <section>
                <section className="col-md-12" style={{ padding: '0px', marginTop: '5%', height: '256px' }}>
                    <section className={`col-md-6 ${styles.intro} `}>
                        <div className="intro-text">
                            <div className="separator">
                                <div className="line"></div>
                                <h6>{t('quality_health_safety_and_environmental_care')}</h6>
                            </div>
                        </div>
                    </section>
                    <section className={`col-md-6 ${styles.introSection} `}>
                        <div className={`${styles.introDescription} `}>
                            <div style={{ fontWeight: 400, color: '#C4C4C4', paddingBottom: '5%' }}>
                                <div dangerouslySetInnerHTML={{ __html: texts.qualityHealthSafetyAndEnvironmentalcareIntroText }}></div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>

            <section>
                <section className="col-md-12" style={{ padding: '0px', marginBottom: '12%', marginTop: '5%', height: '256px' }}>
                    <section className={`col-md-6  ${styles.intro} `}>
                        <div className={`${styles.introText} `}>
                            <div className="separator">
                                <div className="line"></div>
                                <h6>{t('manpower_and_training')}</h6>
                            </div>
                        </div>
                    </section>

                    <section className={`col-md-6 ${styles.introSection} `}>
                        <div className={`${styles.introDescription} `}>
                            <div style={{ fontWeight: 400, color: '#C4C4C4' }}>
                                <div dangerouslySetInnerHTML={{ __html: texts.ManpowerAndTrainingText }}></div>
                            </div>
                        </div>
                    </section>
                </section>
                <ImagesDisplay styles={stylesManPower} images={mainPowerImages} />
            </section>
            <section>
                <section className="col-md-12">
                    <section className={`col-md-5 ${styles.introSectionLine} `}>
                        <div className={`${styles.intro} `}>
                            <div className={`${styles.introText} `}>
                                <div className="separator">
                                    <div className="line"></div>
                                    <h6>{t('our_services')}</h6>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={`${styles.introTextoContainer} col-md-6 `}>
                        <div className={`${styles.introTexto} `}>
                            <div dangerouslySetInnerHTML={{ __html: texts.introTextOurServices }}></div>
                        </div>
                    </section>
                </section>
                <section className="col-md-12">
                    <section className={`col-md-10 col-md-offset-1 ${styles.topBoxes} `}>
                        {
                            texts.services
                                ? texts.services.map((content: string, index: number) => (
                                    <div className="col-md-3" key={index}>
                                        <ServiceCard
                                            styles={styles}
                                            ref={(el: any) => (cardRefs.current[index] = el)}
                                            content={content}
                                            style={index === 3 ? { backgroundColor: "#EDEDED", textAlign: "center" } : undefined}
                                        />
                                    </div>
                                ))

                                : null
                        }
                    </section>
                </section>

                <section className={`col-md-12 ${styles.shallowSection} `} style={{ padding: '0px', marginBottom: '5%' }}>
                    <div className="col-md-6" style={{ padding: 0 }}>
                        <img className={`${styles.imgFluid}  ${styles.img} float-left`} src="/images/shallow.jpg" />
                    </div>

                    <div className={`col-md-4 ${styles.shallowAlign} `}>
                        <h3 className={`section-title `}>
                            {texts.ShallowWaterFieldsTitle}
                        </h3>
                        <div dangerouslySetInnerHTML={{ __html: texts.ShallowWaterFieldsIntro }}></div>
                    </div>

                    <div className={`col-md-2 ${styles.yardSection} `}>
                        <span className={`${styles.verticalText} `}> {t('yard_utilities')}</span>
                        <div className={`${styles.verticalYardLine} `}>
                            <div className={`${styles.verticalLine} `}>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`col-md-12 ${styles.shallowSection} `} style={{ padding: '0px', marginBottom: ' 5%' }}>
                    <div className="col-md-6" style={{ padding: '0px' }}>
                        <img className={`${styles.imgFluid}  ${styles.img} float-left`} src="/images/deep-water.jpg" />
                    </div>
                    <div className={`col-md-6 ${styles.shallowAlign} `}>
                        <h3 className={`section-title `}>{texts.DeepWaterFieldsTitle}</h3>
                        <div dangerouslySetInnerHTML={{ __html: texts.DeepWaterFieldsIntro }}></div>
                    </div>
                </section>

                <section className="col-md-12">
                    <section className={`col-md-10 col-md-offset-1 ${styles.topBoxes} `}>
                        {
                            texts.services2 
                                ? texts.services2.map((content: string, index: number) => (
                                    <div className="col-md-4" key={index}>
                                        <ServiceCard
                                            styles={styles}
                                            ref={(el: any) => (card2Refs.current[index] = el)}
                                            content={content}
                                            style={index === 3 ? { backgroundColor: "#EDEDED", textAlign: "center" } : undefined}
                                        />
                                    </div>
                                ))

                            : null
                        }
                    </section>
                </section>

                <ImagesDisplay styles={stylesManPower} images={["/images/EAA LDA (31 de 32).jpg", "/images/our-service-banner.jpg", "/images/EAA LDA (29 de 32).jpg"]} />

                {/* <section className={`col-md-12 ${styles.shallowSection} `} style={{ padding: '0px', paddingBottom: '15px' }}>
                    <div className="col-md-6" style={{ padding: '0px', paddingBottom: '15px' }}>
                        <img className={`${styles.imgFluid}  ${styles.img} float-left`}  
                            src="/images/our-service-banner.jpg" />
                    </div>

                    <div className="col-md-6">
                        <div className={`col-md-4 ${styles.card} ${styles.greyBoxCard} ${styles.greyBoxCard2}`}>
                            <p style={{ padding: '15%' }}>
                                Maintence and repairment of offshore structures:
                                Rigs, Vessels, as well drawing and tests (as required for certification).
                            </p>
                            <div className={`${styles.bottom}` }>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ marginTop: '2%' }}>
                        <div className={`col-md-4 ${styles.card} ${styles.greyBoxCard} ${styles.greyBoxCard2}`} style={{ marginTop: '10%' }}>
                            <p style={{ padding: '15%' }}>
                                Logistics and storage services, taking advantage of our 250m quay length with 10.6m water depth.
                            </p>
                            <div className={`${styles.bottom}` }>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`col-md-12 ${styles.shallowSection} `}
                    style={{ float: 'right', display: 'table', padding: '0px', marginBottom: '10%' }}>
                    <div className="col-md-6" style={{ padding: '0px' }}>
                        <img className={`${styles.imgFluid}  ${styles.img} float-left`}  
                            src="/images/3_481x360px.png" />
                    </div>
                    <div className="col-md-6">
                        <div className={`col-md-4 ${styles.card} ${styles.greyBoxCard} ${styles.greyBoxCard2}`} style={{ marginTop: '15%' }}>
                            <p style={{ padding: '15%' }}>Maintence and repairment of offshore structures:
                                Rigs, Vessels, as well drawing and tests (as required for certification).</p>
                            <div className={`${styles.bottom}` }>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </section> */}
            </section>
        </>
    )
}

export default About;