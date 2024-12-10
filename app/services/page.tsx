"use client"
import React, { useEffect, useRef } from "react";
import styles from '@/public/styles/services.module.css';
import SocialIconsBanner from "@/app/components/socialIconsBanner";
import ServiceCard from "@/app/components/serviceCard";
import { useTranslation } from 'next-i18next';

const OurServices: React.FC = () => {
    const { t } = useTranslation();
    const cardRefs: any = useRef([]);
    const introTexto = `
    We have strived to meet our clients demands by delivering<br />
    our projects at the highest quality, and<br />
    through our ability to design and manufacture all kinds of<br />
    tailor-made steel tool structures.<br />
    Our yard used to provide the following services:
    `
    useEffect(() => {
        const maxHeight = Math.max(...cardRefs.current.map((card: any) => card.offsetHeight));
        cardRefs.current.forEach((card: any) => {
            card.style.height = `${maxHeight}px`;
            console.log(maxHeight)
        });
    }, []);
    return (
        <>
            <section className={`${styles.containerBanner} `}>
                <img className={`${styles.banner} `}
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

                <i className="fas fa-chevron-left left" aria-hidden="true"></i>
                <div className={`${styles.arrows}`}>
                    <div className={`col-md-6 ${styles.arrowP} `}>
                        <p>Shallow water fields</p>
                    </div>
                    <div className={`col-md-6 ${styles.arrowP} `}>
                        <p>Deep water fields</p>
                    </div>
                </div>
                <i className={`fas fa-chevron-right  ${styles.right}`} aria-hidden="true"></i>
                <SocialIconsBanner styles={styles} />
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
                    <section className="col-md-6" style={{ float: "right" }}>
                        <div className={`${styles.introTexto} `}>
                            {introTexto}
                        </div>
                    </section>
                </section>

                <section className="col-md-12">
                    <section className={`col-md-10 col-md-offset-1 ${styles.topBoxes} `}>
                        {[
                            "Design and Engineering of offshore structures",
                            "Procurement and Logistics for offshore structures",
                            "Fabrication of offshore structures",
                            "Installation and commissioning of offshore in shallow water",
                        ].map((content, index) => (
                            <div className="col-md-3" key={index}>
                                <ServiceCard
                                    styles={styles}
                                    ref={(el: any) => (cardRefs.current[index] = el)}
                                    content={content}
                                    style={index === 3 ? { backgroundColor: "#EDEDED", textAlign: "center" } : undefined}
                                />
                            </div>
                        ))}
                    </section>
                </section>

                <section className={`col-md-12 col-md-offset-1 ${styles.shallowSection} `} style={{ padding: "0px", marginBottom: "10%" }}>
                    <div className="col-md-6" style={{ padding: "0px" }}>
                        <img className={`${styles.imgFluid} float-left`}
                            src="/images/shallow.jpg" 
                            alt="Shallow water fields" />
                    </div>

                    <div className={`col-md-4  ${styles.shallowAlign} `}>
                        <h3 className="section-title">Shallow water fields</h3>
                        <ul className={`${styles.shallowList}`}>
                            {["Piles", "Jackets", "Small topside modules", "Grillages", "Seafastening"].map((item, index) => (
                                <li key={index} className="shallow-list-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
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
                        <img className={`${styles.imgFluid} float-left`} src="/images/deep-water.jpg" alt="Deep water fields" />
                    </div>
                    <div className={`col-md-6  ${styles.shallowAlign} `}>
                        <h3 className="section-title">Deep water fields</h3>
                        {[
                            "Suction Piles",
                            "Buoyancy tanks",
                            "In-field flow lines",
                            "Risers",
                            "In line structures LRAs, URAs, FLETs, PLETs",
                            "Manifolds",
                            "Other subsea structures",
                        ].map((item, index) => (
                            <span key={index} className="shallow-list">
                                {item}{" "}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Additional content here */}
            </section>
        </>);
};

export default OurServices;
