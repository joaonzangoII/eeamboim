"use client"
import React, { useEffect, useRef, useState } from "react";
import styles from '@/public/styles/services.module.css';
import SocialIconsBanner from "@/app/components/socialIconsBanner";
import ServiceCard from "@/app/components/serviceCard";
import { useTranslation } from 'next-i18next';
import Text from "../models/Text";

const OurServices: React.FC = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language; // You can change this dynamically based on user preference or query

    const [texts, setTexts] = useState<Text | any>({});
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);;

    useEffect(() => {
        const maxHeight = Math.max(...cardRefs.current.map((card: any) => card.offsetHeight));
        cardRefs.current.forEach((card: any) => {
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
                <img className={`${styles.banner} ${styles.img} `}
                    src="/images/header/ourservices.png"
                    alt="Our Services Banner" />

                <div className={`${styles.leftTittle}`}>
                    <p className={`${styles.bannerTittle}`}>
                        <span>{t('our_services')}</span>
                    </p>
                    <i className="fas fa-play-circle" aria-hidden="true"></i>
                    <p
                        className={`${styles.findOutMore} `}
                        style={{
                            display: "inline-block",
                            paddingLeft: "2%",
                            fontWeight: 500,
                        }}
                    >
                        {t('find_out_more')}
                    </p>
                </div>

                <i className={`fas fa-chevron-left  ${styles.right}`} aria-hidden="true"></i>
                <div className={`${styles.arrows}`}>
                    <div className={`col-md-6 ${styles.arrowP} `}>
                        <p>{texts.ShallowWaterFieldsTitle}</p>
                    </div>
                    <div className={`col-md-6 ${styles.arrowP} `}>
                        <p>{texts.DeepWaterFieldsTitle}</p>
                    </div>
                </div>
                <i className={`fas fa-chevron-right  ${styles.right}`} aria-hidden="true"></i>
                <SocialIconsBanner styles={styles} />
            </section>
            <section>
                <div className="row">
                    <section className="col-md-12">
                        <section className={`col-md-5 ${styles.introSectionLine} `}>
                            <div className={`${styles.intro} `}>
                                <div className={`${styles.introTexto} `}>
                                    <div className="separator">
                                        <div className="line"></div>
                                        <h6>{t('our_services')}</h6>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="col-md-6" style={{ float: "right" }}>

                            <div className={`${styles.introTexto} `}  
                                dangerouslySetInnerHTML={{ __html: texts.introTextOurServices }}></div>
                        </section>
                    </section>
                </div>
                <div className="row">
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
                </div>
                <section className={`col-md-12 col-md-offset-1 ${styles.shallowSection} `} style={{ padding: "0px", marginBottom: "10%" }}>
                    <div className="col-md-6" style={{ padding: "0px" }}>
                        <img className={`${styles.imgFluid} ${styles.img}  float-left`}
                            src="/images/shallow.jpg" 
                            alt={texts.ShallowWaterFieldsTitle} />
                    </div>

                    <div className={`col-md-4  ${styles.shallowAlign} `}>
                        <h3 className="section-title">{texts.ShallowWaterFieldsTitle}</h3>
                        <div dangerouslySetInnerHTML={{ __html: texts.ShallowWaterFieldsIntro }}></div>
                    </div>

                    <div className={`col-md-2  ${styles.yardSection} `}>
                        <span className={`${styles.verticalText}`}>{t('yard_utilities')}</span>
                        <div className={`${styles.verticalYardLine}`}>
                            <div className={`${styles.verticalLine}`}></div>
                        </div>
                    </div>
                </section>

                {/* Deep water section */}
                <section className={`col-md-12  ${styles.shallowSection} `} style={{ padding: "0px", marginBottom: "10%" }}>
                    <div className="col-md-6" style={{ padding: "0px" }}>
                        <img className={`${styles.imgFluid} ${styles.img}  float-left`} 
                             src="/images/deep-water.jpg" 
                            alt={texts.DeepWaterFieldsTitle} />
                    </div>
                    <div className={`col-md-6  ${styles.shallowAlign} `}>
                        <h3 className="section-title">{texts.DeepWaterFieldsTitle}</h3>
                        <div dangerouslySetInnerHTML={{ __html: texts.DeepWaterFieldsIntro }}></div>
                    </div>
                </section>

                {/* Additional content here */}
            </section>
        </>);
};
export default OurServices;
