"use client"
import React, { useEffect, useRef } from "react";
// import Image from "next/image";
import styles from '@/public/styles/about.module.css';
import stylesManPower from '@/public/styles/about.module.css';

// import "@/public/styles/services.module.css";
import Manpower from "@/components/manpower";
import SocialIconsBanner from "@/components/socialIconsBanner";
import ServiceCard from "@/components/serviceCard";

const About: React.FC = () => {
    const cardRefs: any = useRef([]);


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
                <img className={`${styles.banner} `} src="/images/header/ourtech.png" />
                <div className={`${styles.leftTittle}`}>
                    <p className={`${styles.bannerTittle}`}>
                        <span>OUR</span>
                        <span>TECHNOLOGY</span>
                    </p>
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <p style={{ display: 'inline-block', paddingLeft: '2%', fontWeight: '500' }}>
                        FIND OUT MORE
                    </p>
                </div>
                <i className={`fa fa-chevron-left ${styles.left} `} aria-hidden="true"></i>
                <div className={`${styles.arrows} `}>
                    <div className={`col-md-2 ${styles.arrowP} `}>
                        <p>Fabrication facilities</p>
                    </div>

                    <div className={`col-md-4 ${styles.arrowP} `} style={{ marginLeft: '2%' }}>
                        <p>Production equipment</p>
                    </div>

                </div>
                <i className={`fa fa-chevron-right ${styles.right} `} aria-hidden="true"></i>
                <SocialIconsBanner styles={styles} />
            </section>
            <section>
                <section className="col-md-12">
                    <aside className="col-md-5 intro-section-line">
                        <div className="intro">
                            <div className="intro-text">
                                <div className="separator">
                                    <div className="line"></div>
                                    <h6>our technology</h6>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <aside className="col-md-6" style={{ float: 'right' }}>
                        <p className="introTexto">
                            In our yard, state of art technologies are utilized for<br />
                            manufacturing support. Specific design and drawing<br />
                            software, as well as Matrix<br />
                            for material traceability and primavera for planning, are <br />
                            combined with modules developed in-house for a bespoke <br />
                            fit to all our <br />
                            projects and requirements
                        </p>
                    </aside>
                </section>

                <section className="col-md-12" style={{ padding: '0px', paddingTop: '4%' }}>
                    <div className="col-md-6" style={{ padding: '0px' }}>
                        <img className={`${styles.imgFluid} float-left`}  src="/images/Image 7.png" />
                    </div>
                    <div className="col-md-4">
                        <h3 className={`${styles.sectionTitle} `}>
                            Fabrication facilities
                        </h3>
                        <p>Structural fabrication area of 180x32m <br />
                            of which Covered (130x32m).<br />
                            Outside fabrication area 210x120m<br />
                            3 overhead cranes (32/8mt) 10m hook<br />
                            heigth<br />
                            Utility area (100x10m)<br />
                            PIP facility<br />
                            Multi jointing facility<br />
                            Dedicated area for Blasting and<br />
                            painting
                        </p>
                    </div>
                    <div className="col-md-2 yardUtilitiesDiv" style={{ paddingTop: '12%' }}>
                        <span className={`${styles.verticalText} `}> Yard utilities</span>
                        <div className={`${styles.verticalYardLine} `}>
                            <div className={`${styles.verticalLine} `}>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2">
                        <h3 className={`${styles.sectionTitle} `}>
                            Production equipment
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
                        <h3 className={`${styles.sectionTitle} `}>
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
                        <span className={`${styles.verticalText} `}> Production equipment</span>
                        <div className={`${styles.verticalYardLine} `}>
                            <div className={`${styles.verticalLine} `}>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="col-md-12" style={{ padding: '0px', marginBottom: '10%' }}>
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-6 mt-3">
                        <h3 className={`${styles.sectionTitle} `}>
                            Logistc Equipment
                        </h3>
                        <ul className="shallow-list">
                            <li className="shallow-list-item"> 1 Liebheer crawler crane (750mt)</li>
                            <li className="shallow-list-item">1 Liebheer crawler crane (400mt) </li>
                            <li className="shallow-list-item"> 1 Terex (63mt)</li>
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
                                <h6>quality, health, <br /> safety and <br /> environmental care </h6>
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
                                <h6>manpower and training</h6>
                            </div>
                        </div>
                    </section>

                    <section className={`col-md-6 ${styles.introSection} `}>
                        <div className={`${styles.introDescription} `}>
                            <p style={{ fontWeight: 400, color: '#C4C4C4' }}>
                                We have a training school where fabricators and <br />
                                welders are trained and qualified. The training includes <br />
                                the following welding process <br />
                                <br />
                                SMAW <br />
                                FCAW <br />
                                GTAW <br />
                                SAW <br />
                                <br />
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
                                    <h6>our services</h6>
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



                    {/* <section className={`col-md-10 col-md-offset-1 ${styles.topBoxes} `}>
                        {[
                            "Maintence and repairment of offshore structures: Rigs, Vessels, as well drawing and tests(as required for certification).",
                            "Logistics and storage services, taking advantage of our 250m quay length with 10.6m water depth.",
                            "Maintence and repairment of offshore structures: Rigs, Vessels, as well drawing and tests(as required for certification)",
                        ].map((content, index) => (
                            <div className="col-md-4" key={index}>
                                <ServiceCard
                                    styles={styles}
                                    ref={(el: any) => (cardRefs.current[index] = el)}
                                    content={content}
                                    style={index === 3 ? { backgroundColor: "#EDEDED", textAlign: "center" } : undefined}
                                />
                            </div>
                        ))}
                    </section> */}


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
                        <h3 className={`${styles.sectionTitle} `}>
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
                        <span className={`${styles.verticalText} `}> Yard utilities</span>
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
                        <h3 className={`${styles.sectionTitle} `}>Deep water fields</h3>
                        <span className="shallow-list">Suction Piles </span>
                        <span className="shallow-list">• Buoyancy tanks </span>
                        <span className="shallow-list">• In-field flow lines </span>
                        <span className="shallow-list">• Risers </span>
                        <span className="shallow-list">• In line structures LRAs, URAs, FLETs, PLETs </span>
                        <span className="shallow-list">• Manifolds </span>
                        <span className="shallow-list">• Other subsea structures </span>
                        <span className="shallow-list">and several kinds of flow </span>
                        <span className="shallow-list">lines taking advantage of </span>
                        <span className="shallow-list">our pipe-in pipe and multi </span>
                        <span className="shallow-list">jointing facilities. </span>
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
                                Logistics and storage services, taking advantage of our 250m quay length with 10.6m water
                                depth.
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