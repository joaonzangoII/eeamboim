"use client"
import React, { useState } from "react";
import "@/public/styles/services.css";

interface ServiceCardProps {
    content: string;
    style?: React.CSSProperties;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ content, style }) => (
    <div className="card grey-box-card" style={style}>
        <p style={{ padding: "15%" }}>{content}</p>
        <div className="bottom">&nbsp;</div>
    </div>
);

const OurServices: React.FC = () => {
    return (
        <>
            <section className="container-banner">
                <img className="banner" src="/images/header/ourservices.png" alt="Our Services Banner" />

                <div className="left-tittle">
                    <p className="banner-tittle">
                        <span>OUR</span>
                        <span>SERVICES</span>
                    </p>
                    <i className="fas fa-play-circle" aria-hidden="true"></i>
                    <p
                        style={{
                            display: "inline-block",
                            paddingLeft: "2%",
                            fontWeight: 500,
                        }}
                    >
                        FIND OUT MORE
                    </p>
                </div>

                <i className="fas fa-chevron-left left" aria-hidden="true"></i>
                <div className="arrows">
                    <div className="col-md-2 arrow-p">
                        <p>Shallow water fields</p>
                    </div>
                    <div className="col-md-4 arrow-p" style={{ marginLeft: "2%" }}>
                        <p>Deep water fields</p>
                    </div>
                </div>
                <i className="fas fa-chevron-right right" aria-hidden="true"></i>

                <div className="social-icons-banner">
                    <i className="fab fa-facebook-f icons-banner padding-14" aria-hidden="true"></i>
                    <i className="fab fa-whatsapp icons-banner" aria-hidden="true"></i>
                </div>
            </section>
            <section>
                <section className="col-md-12">
                    <aside className="col-md-5 intro-section-line">
                        <div className="intro">
                            <div className="intro-text">
                                <div className="separator">
                                    <div className="line"></div>
                                    <h6>our services</h6>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <aside className="col-md-6" style={{ float: "right" }}>
                        <p className="intro-texto">
                            We have strived to meet our clients demands by delivering<br />
                            our projects at the highest quality, and<br />
                            through our ability to design and manufacture all kinds of<br />
                            tailor-made steel tool structures.<br />
                            Our yard used to provide the following services:
                        </p>
                    </aside>
                </section>

                <section className="col-md-12">
                    <section className="col-md-10 col-md-offset-1 top-boxes">
                        {[
                            "Design and Engineering of offshore structures",
                            "Procurement and Logistics for offshore structures",
                            "Fabrication of offshore structures",
                            "Installation and commissioning of offshore in shallow water",
                        ].map((content, index) => (
                            <div className="col-md-3" key={index}>
                            <ServiceCard
                                content={content}
                                style={index === 3 ? { backgroundColor: "#EDEDED", textAlign: "center" } : undefined}
                            />
                            </div>
                        ))}
                    </section>
                </section>

                <section className="col-md-12 shallow-section" style={{ padding: "0px", marginBottom: "10%" }}>
                    <div className="col-md-6" style={{ padding: "0px" }}>
                        <img className="img-fluid float-left" src="/images/shallow.jpg" alt="Shallow water fields" />
                    </div>

                    <div className="col-md-4 shallow-align">
                        <h3 className="section-title">Shallow water fields</h3>
                        <ul className="shallow-list">
                            {["Piles", "Jackets", "Small topside modules", "Grillages", "Seafastening"].map((item, index) => (
                                <li key={index} className="shallow-list-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-md-2 yard-section">
                        <span className="vertical-text">Yard utilities</span>
                        <div className="vertical-yard-line">
                            <div className="verticalLine"></div>
                        </div>
                    </div>
                </section>

                {/* Deep water section */}
                <section className="col-md-12 shallow-section" style={{ padding: "0px", marginBottom: "10%" }}>
                    <div className="col-md-6" style={{ padding: "0px" }}>
                        <img className="img-fluid float-left" src="/images/deep-water.jpg" alt="Deep water fields" />
                    </div>
                    <div className="col-md-6 shallow-align">
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
