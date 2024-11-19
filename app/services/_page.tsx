"use client"
import React from "react";
import "@/public/styles/services.css";

const Services: React.FC = () => {
    const banner = {
        image: "/images/header/ourservices.png",
        title: ["OUR", "SERVICES"],
        actions: [
            { icon: "fas fa-play-circle", text: "FIND OUT MORE" },
            { icon: "fas fa-chevron-left", direction: "left" },
            { icon: "fas fa-chevron-right", direction: "right" },
        ],
        arrows: [
            "Shallow water fields",
            "Deep water fields",
        ],
        socialIcons: [
            { icon: "fab fa-facebook-f", className: "padding-14" },
            { icon: "fab fa-whatsapp", className: "" },
        ],
    };

    const introText = `We have strived to meet our clients demands by delivering
our projects at the highest quality, and through our ability to design and manufacture all kinds of
tailor-made steel tool structures. Our yard provides the following services:`;

    const services = [
        "Design and Engineering of offshore structures",
        "Procurement and Logistics for offshore structures",
        "Fabrication of offshore structures",
        "Installation and commissioning of offshore in shallow water",
    ];

    const shallowWaterFields = {
        title: "Shallow water fields",
        items: ["Piles", "Jackets", "Small topside modules", "Grillages", "Seafastening"],
        image: "/images/shallow.jpg",
    };

    const deepWaterFields = {
        title: "Deep water fields",
        description: [
            "Suction Piles",
            "Buoyancy tanks",
            "In-field flow lines",
            "Risers",
            "In line structures LRAs, URAs, FLETs, PLETs",
            "Manifolds",
            "Other subsea structures",
            "Flow lines taking advantage of our pipe-in pipe and multi jointing facilities",
        ],
        image: "/images/deep-water.jpg",
    };

    const additionalServices = [
        {
            description: "Maintenance and repairment of offshore structures: Rigs, Vessels, as well as drawing and tests (as required for certification).",
            image: "/images/our-service-banner.jpg",
        },
        {
            description: "Logistics and storage services, taking advantage of our 250m quay length with 10.6m water depth.",
            image: "/images/3_481x360px.png",
        },
    ];

    return (
        <>
            <section className="container-banner">
                <img className="banner" src={banner.image} alt="Our Services Banner" />
                <div className="left-tittle">
                    <p className="banner-tittle">
                        {banner.title.map((text, index) => (
                            <span key={index}>{text}</span>
                        ))}
                    </p>
                    {banner.actions.map((action, index) => (
                        <div key={index} style={{ display: "inline-block", padding: "0 5px" }}>
                            <i className={action.icon} aria-hidden="true"></i>
                            {action.text && <p>{action.text}</p>}
                        </div>
                    ))}
                </div>
                <div className="arrows">
                    {banner.arrows.map((arrow, index) => (
                        <div key={index} className="arrow-p">
                            <p>{arrow}</p>
                        </div>
                    ))}
                </div>
                <div className="social-icons-banner">
                    {banner.socialIcons.map((icon, index) => (
                        <i key={index} className={`${icon.icon} icons-banner ${icon.className}`} aria-hidden="true"></i>
                    ))}
                </div>
            </section>
            <section>
                {/* Intro Section */}
                <section className="col-md-12">
                    <aside className="col-md-5 intro-section-line">
                        <div className="separator">
                            <div className="line"></div>
                            <h6>Our Services</h6>
                        </div>
                    </aside>
                    <aside className="col-md-6">
                        <p className="intro-text">{introText}</p>
                    </aside>
                </section>

                {/* Services Cards */}
                <section className="col-md-12">
                    <section className="col-md-10 col-md-offset-1 top-boxes">
                        {services.map((service, index) => (
                            <div key={index} className="col-md-3">
                                <div className="card grey-box-card">
                                    <p className="service-title">{service}</p>
                                    <div className="bottom">
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </section>

                {/* Shallow Water Fields */}
                <section className="col-md-12 shallow-section" style={{ padding: '0px', marginBottom: '10%'  }}>
                    <div className="col-md-6">
                        <img className="img-fluid" src={shallowWaterFields.image} alt="Shallow Water" />
                    </div>
                    <div className="col-md-4">
                        <h3>{shallowWaterFields.title}</h3>
                        <ul>
                            {shallowWaterFields.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Deep Water Fields */}
                <section className="col-md-12 shallow-section" style={{ padding: '0px', marginBottom: '10%' }}>
                    <div className="col-md-6">
                        <img className="img-fluid" src={deepWaterFields.image} alt="Deep Water" />
                    </div>
                    <div className="col-md-6">
                        <h3>{deepWaterFields.title}</h3>
                        {deepWaterFields.description.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}
                    </div>
                </section>

                {/* Additional Services */}
                {additionalServices.map((service, index) => (
                    <section key={index} className="col-md-12 shallow-section" style={{ padding: '0px', marginBottom: '10%' }}>
                        <div className="col-md-6">
                            <img className="img-fluid" src={service.image} alt={`Service ${index + 1}`} />
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-4 card grey-box-card grey-box-card-2">
                                <p className="service-title">{service.description}</p>
                                <div className="bottom">
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </section>
        </>
    );
};

export default Services;
