"use client"
import React, { useState } from "react";
import "@/public/styles/quality.css";

const Quality: React.FC = () => {
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
            <section className="container-banner ">
            <img className="banner" src="/images/header/quality.png" />
            <div className="left-tittle">
                <p className="banner-tittle">
                    <span>QUALITY, HEALTH, </span>
                    <span>SAFETY AND</span>
                    <span> ENVIRONMENTAL CARE</span>
                </p>
                <i className="fas fa-play-circle" aria-hidden="true"></i>
                <p style={{ display: 'inline-block', paddingLeft: '2%',fontWeight: 500}}> FIND OUT MORE</p>
            </div>

            <div className="arrows">
                <div className="col-md-8 arrow-p" style={{ marginLeft: '2%'}}>
                    <p>Quality, health, safety and environmental care</p>
                </div>

            </div>
            <i className="fas fa-chevron-right right" aria-hidden="true"></i>
            <div className="social-icons-banner">
                <i className="fab fa-facebook-f icons-banner padding-14" aria-hidden="true"></i>
                <i className="fab fa-whatsapp icons-banner" aria-hidden="true"></i>
            </div>
        </section>
        <section className="col-md-12" style={{ padding: '0px', marginTop: '5%', height: '256px'}}>
            <section className="col-md-6 intro">
                <div className="intro-text">
                    <div className="separator">
                        <div className="line"></div>
                        <h6>quality, health, <br /> safety and <br /> environmental care </h6>
                    </div>
                </div>
            </section>
            <section className="col-md-6 intro-section">
                <div className="intro-description">
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
