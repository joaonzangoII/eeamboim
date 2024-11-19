"use client"
import React, { useState } from "react";
import "@/public/styles/contact.css";
import axios from "axios";

const Contact: React.FC = () => {
    const API_HOST_URL = "http://localhost:3333/api/";

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
            element.classList.add("error");
        } else {
            element.classList.remove("error");
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
                const response = await axios.post(`${API_HOST_URL}contact`, { name, email, subject, message });
                console.log(response.data);
                setAlert({ type: "success", message: "Message successfully sent." });
            } catch (error) {
                console.error(error);
                setAlert({ type: "danger", message: "There was an error sending your message. Please, try again." });
            }
        }
    };

    return (
        <div>
            <section className="container">
                <img className="banner" src="images/EAA_waves-02.svg" alt="Banner" />

                <div className="left-tittle">
                    <p className="banner-tittle">
                        <span>GET</span>
                        <span>IN</span>
                        <span>TOUCH</span>
                    </p>
                </div>

                <div className="social-icons-banner">
                    <i className="fab fa-facebook-f icons-banner padding-14" aria-hidden="true"></i>
                    <i className="fab fa-whatsapp icons-banner" aria-hidden="true"></i>
                </div>
            </section>

            <section className="contact-section-form">
                {alert && (
                    <div id="alert" className={`alert alert-${alert.type}`} role="alert">
                        {alert.message}
                    </div>
                )}
                <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <span className="label">NAME</span>
                        <input
                            id="name"
                            type="text"
                            className="input"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <span className="label">EMAIL</span>
                        <input
                            id="email"
                            type="text"
                            className="input"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <span className="label">SUBJECT</span>
                        <input
                            id="subject"
                            type="text"
                            className="input"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <span className="label">MESSAGE</span>
                        <textarea
                            id="message"
                            rows={10}
                            cols={50}
                            className="textarea"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div style={{ float: "right" }}>
                        <button id="submit" className="btn-submit" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Contact;
