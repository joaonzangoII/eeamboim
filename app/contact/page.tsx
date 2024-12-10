"use client"
import React, { useState } from "react";
import styles from '@/public/styles/contact.module.css';
import axios from "axios";
import SocialIconsBanner from "@/app/components/socialIconsBanner";
import { useTranslation } from 'next-i18next';

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const API_HOST_URL = process.env.API_HOST_URL;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [alert, setAlert] = useState<{ type: "success" | "danger"; message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;

        setFormData((prevData) => ({ ...prevData, [id]: value }));
        handleValidation(e.target);
    };

    const handleValidation = (element: HTMLInputElement | HTMLTextAreaElement) => {
        if (!element.value) {
            element.classList.add(styles.error);
        } else {
            element.classList.remove(styles.error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;

        // Validate all fields
        const formInputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("#contact-form input, #contact-form textarea");
        formInputs.forEach((input) => handleValidation(input));

        if (name && email && subject && message) {
            try {
                const response = await axios.post(`${API_HOST_URL}/contact`, { name, email, subject, message });
                console.log(response.data);
                setAlert({ type: "success", message: "Message successfully sent." });
            } catch (error) {
                console.error(error);
                setAlert({ type: "danger", message: "There was an error sending your message. Please, try again." });
            }
        }
    };

    return (
        <>
            <section className={`container ${styles.container} `}>
                <img className={`${styles.banner} `} src="/images/EAA_waves-02.svg" alt="Banner" />
                <div className={`${styles.leftTittle}`}>
                    <p className={`${styles.bannerTittle}`}>
                        <span className={`${styles.findOutMore} `}>{t('get_in_touch')}</span>
                    </p>
                </div>
                <SocialIconsBanner styles={styles} />
            </section>

            <section className={`${styles.contactSectionForm} `} >
                {alert && (
                    <div id="alert" className={`alert alert-${alert.type}`} role="alert">
                        {alert.message}
                    </div>
                )}
                <form id="contact-form" className={`contact-form  `} onSubmit={handleSubmit}>
                    <div>
                        <span className="label">{t('name')}</span>
                        <input
                            id="name"
                            type="text"
                            className={`${styles.input} `}
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <span className="label">{t('email')}</span>
                        <input
                            id="email"
                            type="text"
                            className={`${styles.input} `}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <span className="label">{t('subject')}</span>
                        <input
                            id="subject"
                            type="text"
                            className={`${styles.input} `}
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <span className="label">{t('message')}</span>
                        <textarea
                            id="message"
                            rows={10}
                            cols={50}
                            className={`${styles.textarea} `}
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div style={{ float: "right" }}>
                        <button id="submit" className={`${styles.btnSubmit} `} type="submit">
                            {t('submit')}
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Contact;
