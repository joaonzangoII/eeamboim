"use client"
import React, { useEffect, useRef } from "react";
// import Image from "next/image";
import styles from '@/public/styles/about.module.css';
import stylesManPower from '@/public/styles/about.module.css';
import { useTranslation } from 'next-i18next';
import Manpower from "@/app/components/manpower";
import SocialIconsBanner from "@/app/components/socialIconsBanner";
import ServiceCard from "@/app/components/serviceCard";
// import "@/public/styles/services.module.css";

const About: React.FC = () => {
    const { t } = useTranslation();
    const cardRefs: any = useRef([]);

    const introTexto = `
        In our yard, state of art technologies are utilized for
        manufacturing support. Specific design and drawing
        software, as well as Matrix
        for material traceability and primavera for planning, are
        combined with modules developed in-house for a bespoke
        fit to all our
        projects and requirements
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
                <img className={`${styles.banner} `} src="/images/EAA LDA (5 de 32).jpg" />
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
                            {introTexto}
                        </div>
                    </div>
                </section>

                <section className="col-md-12" style={{ padding: '0px', paddingTop: '4%' }}>
                    <div className="col-md-6" style={{ padding: '0px' }}>
                        <img className={`${styles.imgFluid} float-left`}  src="/images/Image 7.png" />
                    </div>
                    <div className="col-md-4">
                        <h3 className={`section-title `}>
                            {t('fabrication_facilities')}
                        </h3>
                        <p>Structural fabrication area of 180x32m of which Covered (130x32m).<br />
                            Outside fabrication area 210x120m 
                            3 overhead cranes (32/8mt) 10m hook heigth<br />
                            Utility area (100x10m)
                            PIP facility
                            Multi jointing facility
                            Dedicated area for Blasting and painting
                        </p>
                    </div>
                    <div className="col-md-2 yardUtilitiesDiv" style={{ paddingTop: '12%' }}>
                        <span className={`${styles.verticalText} `}>{t('yard_utilities')}</span>
                        <div className={`${styles.verticalYardLine} `}>
                            <div className={`${styles.verticalLine} `}>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2">
                        <h3 className={`section-title `}>
                            {t('production_equipment')}
                        </h3>
                        <p>
                            SMAW welding equipment (22 pc) <br />
                            FCAW welding equipment (25pc)<br />
                            GTAW welding equipment (30pc) <br />
                            SAW welding equipment (8pc ) <br />
                            Welding rollers (16 pc 100mt load <br />
                            capacity each. 200mT load <br />
                            capacity/set) <br />
                            CNC plate cutter (3x12m) <br />
                            CNC profiler (round tubular)<br />
                            CNC profiler (beams) <br />
                            Rolling machine (3000mm wide,<br />
                            72mm thick in St355) upper roll <br />
                            790mm<br />
                            Vacuum Blasting machines <br />
                            Fabrication stands for spools<br />
                            fabrication
                        </p>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h3 className={`section-title `}>
                            QC equipment
                        </h3>
                        <p>
                            Calibrated measuring tools (wide<br />
                            range, length, temperature, pressure) <br />
                            Weighing equipment <br />
                            Dimensional control (2x) 3D scanners <br />
                            Paint inspection equipment <br />
                            NDE equipment <br />
                            High pressure Hydrotesting <br />
                            equipment
                        </p>
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
                        <ul className="shallow-list">
                            <li className="shallow-list-item">1 Liebheer crawler crane (750mt)</li>
                            <li className="shallow-list-item">1 Liebheer crawler crane (400mt) </li>
                            <li className="shallow-list-item">1 Terex (63mt)</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <img style={{ marginBottom: '5%' }}
                        className={`${styles.imgFluid} ${styles.fabricFullImg}`} 
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
                                Estaleiro Atlântico do Amboim operates an integrated <br />
                                management system incorporating <br />
                                Quality, Safety, Health and environmental care which is guided <br />
                                by the ISO 9001:2008 Code <br />
                                for Quality management, and IMO’s ISM Code for safety and <br />
                                environmental management. <br />
                                We are commited to provide a healthy and safe working <br />
                                environment and, as such, we apply a set of effective <br />
                                measurement tools on the yard aimed at.
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
                            <p style={{ fontWeight: 400, color: '#C4C4C4' }}>
                                We have a training school where fabricators and <br />
                                welders are trained and qualified. The training includes <br />
                                the following welding process <br />
                                SMAW <br />
                                FCAW <br />
                                GTAW <br />
                                SAW <br />
                                Our training program extends to other specific <br />
                                disciplines such as scaffold, machine operators, Cranes <br />
                                operators, Safety training, First Aid, Inspection <br />
                                training, English, Excel, Matrix, Drawing Software, <br />
                                Injury <br />
                                incident free (IFF), Fire Fighting among others.<br />
                                We also collaborate with local universities and <br />
                                institutes, delivering workshops and presentations, <br />
                                with the <br />
                                aim of hunting local talents
                            </p>
                        </div>
                    </section>
                </section>
                <Manpower styles={stylesManPower}/>
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
                    <section className="col-md-6" style={{ float: 'right' }}>
                        <div className={`${styles.introTexto} `}>
                            We have strived to meet our clients demands by delivering<br />
                            our projects at the highest quality, and<br />
                            through our ability to design and manufacture all kinds of<br />
                            tailor-made steel tool strutures. <br />
                            Our yard used to provide the following services:
                        </div>
                    </section>
                </section>
                <section className="col-md-12">
                    <section className={`col-md-10 col-md-offset-1 ${styles.topBoxes} `}>
                        {[
                            "Design and Engineering of offshore structures.",
                            "Procurement and Logistics for offshore structures",
                            "Fabrication of offshore structure",
                            "Installation and commissioning of offshore in shallow water"
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

                <section className={`col-md-12 ${styles.shallowSection} `} style={{ padding: '0px', marginBottom: '10%' }}>
                    <div className="col-md-6" style={{ padding: 0 }}>
                        <img className={`${styles.imgFluid} float-left`} src="/images/shallow.jpg" />
                    </div>

                    <div className={`col-md-4 ${styles.shallowAlign} `}>
                        <h3 className={`section-title `}>
                            Shallow water fields
                        </h3>
                        <ul className={`col-md-4 ${styles.shallowList} `}>
                            <li className="shallow-list-item">Piles </li>
                            <li className="shallow-list-item">Jackets </li>
                            <li className="shallow-list-item">Small topside modules </li>
                            <li className="shallow-list-item">Grillages </li>
                            <li className="shallow-list-item">Seafastening</li>
                        </ul>
                    </div>

                    <div className={`col-md-2 ${styles.yardSection} `}>
                        <span className={`${styles.verticalText} `}> {t('yard_utilities')}</span>
                        <div className={`${styles.verticalYardLine} `}>
                            <div className={`${styles.verticalLine} `}>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`col-md-12 ${styles.shallowSection} `} style={{ padding: '0px', marginBottom: ' 10%' }}>
                    <div className="col-md-6" style={{ padding: '0px' }}>
                        <img className={`${styles.imgFluid} float-left`} src="/images/deep-water.jpg" />
                    </div>
                    <div className={`col-md-6 ${styles.shallowAlign} `}>
                        <h3 className={`section-title `}>Deep water fields</h3>
                        <ul>
                            <li className="shallow-list">Suction Piles </li>
                            <li className="shallow-list">Buoyancy tanks </li>
                            <li className="shallow-list">In-field flow lines </li>
                            <li className="shallow-list">Risers </li>
                            <li className="shallow-list">In line structures LRAs, URAs, FLETs, PLETs </li>
                            <li className="shallow-list">Manifolds </li>
                            <li className="shallow-list">Other subsea structures </li>
                            <li className="shallow-list">and several kinds of flow </li>
                            <li className="shallow-list">lines taking advantage of </li>
                            <li className="shallow-list">our pipe-in pipe and multi </li>
                            <li className="shallow-list">jointing facilities. </li>
                        </ul>
                    </div>
                </section>
                <section className={`col-md-12 ${styles.shallowSection} `} style={{ padding: '0px' }}>
                    <div className="col-md-6" style={{ padding: '0px' }}>
                        <img className={`${styles.imgFluid} float-left`}  src="/images/our-service-banner.jpg" />
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
                        <img className={`${styles.imgFluid} float-left`}  src="/images/3_481x360px.png" />
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
                </section>
            </section>
        </>
    )
}

export default About;