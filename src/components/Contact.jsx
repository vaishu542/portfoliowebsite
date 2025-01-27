import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8tsx84d', 'template_84qu4bj', form.current, 'fCWvQfHnVpc3hrs6_')
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <footer className="text-gray-100" id="contact">
            <div className="container px-5 pt-24 mx-auto flex justify-between items-center flex-col md:flex-row gap-10 w-full">
                <div className="contact-me w-[220px]">
                    <h2 className="text-4xl lg:text-6xl w-[400px]">Contact Me</h2>
                    <div className="icons flex justify-around my-6">
                        {/* GitHub Icon */}
                        <a
                            href="https://github.com/vaishu542"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-600 transition duration-300"
                            aria-label="GitHub"
                        >
                            <svg
                                className="feather feather-github line"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 19c-1.5-.5-2.5-1.5-3-3l.5-.5m6 3c-3 .5-6-1.5-6-6a5.8 5.8 0 011-4.5c-.5-1 .5-2 .5-2 2 0 4 2 4 2s2-2 4-2c0 0 1 1.5.5 2A5.8 5.8 0 0118 13c0 4.5-3 6.5-6 6" />
                            </svg>
                        </a>

                        {/* LinkedIn Icon */}
                        <a
                            href="https://www.linkedin.com/in/psrivaishnavi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-600 transition duration-300"
                            aria-label="LinkedIn"
                        >
                            <svg
                                className="feather feather-linkedin line"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                                <rect height="12" width="4" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>

                        {/* Instagram Icon */}
                        <a
                            href="https://www.instagram.com/vaishu_542/?next=%2F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-600 transition duration-300"
                            aria-label="Instagram"
                        >
                            <svg
                                className="feather feather-instagram line"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect height="20" rx="5" width="20" x="2" y="2" />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                <circle cx="17.5" cy="6.5" r="1.5" />
                            </svg>
                        </a>

                        {/* Facebook Icon */}
                        <a
                            href="https://www.facebook.com/vaishnavi.palanti.7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-600 transition duration-300"
                            aria-label="Facebook"
                        >
                            <svg
                                className="feather feather-facebook line"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                    </div>

                </div>
                <div className="contact-form md:mr-7 md:w-max">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-2 mb-4">
                                <h2 className="leading-7 text-2xl font-bold text-slate-200 mb-5">Your Feedback is valuable 😊</h2>
                                <div className="mt-8 w-[350px] md:w-[400px] lg:w-[550px] form-wrapper">
                                    <div className="input-group">
                                        <input required type="text" name="name" autoComplete="off" className="input" />
                                        <label className="user-label">Name</label>
                                    </div>
                                    <div className="input-group">
                                        <input required type="email" name="email" autoComplete="off" className="input" />
                                        <label className="user-label">Email</label>
                                    </div>
                                    <div className="input-group">
                                        <textarea required name="feedback" rows="4" autoComplete="off" className="input" />
                                        <label className="user-label">Contact me</label>
                                    </div>
                                </div>
                                <div className="button-wrapper mt-2">
                                    <button className="cta">
                                        <span>Send Message &nbsp;</span>
                                        <svg>...</svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
