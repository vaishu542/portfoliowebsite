import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8tsx84d', 
                    'template_84qu4bj', 
                    form.current, {
                    publicKey: 'fCWvQfHnVpc3hrs6_',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset(); // Clear the form fields after successful submission
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <footer className='text-gray-100' id='contact'>
            <div className='container px-5 pt-24 mx-auto flex justify-between items-center flex-col md:flex-row gap-10 w-full'>
                <div className="contact-me w-[220px]">
                    <h2 className='text-4xl lg:text-6xl w-[400px]'>Contact Me</h2>
                    <div className="icons my-6 flex justify-around">
                        <a href='https://github.com/vaishu542'>
                            <svg className="feather feather-github line" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/psrivaishnavi/">
                            <svg className="feather feather-linkedin line" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect height="12" width="4" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                        <a href="https://www.instagram.com/vaishu_542/?next=%2F">
                            <svg className="feather feather-instagram line" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </a>
                        <a href="https://www.facebook.com/vaishnavi.palnati.7/">
                            <svg className="feather feather-facebook line" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </a>
                    </div>
                </div>
                <div className='contact-form md:mr-7 md:w-max'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-2 mb-4">
                                <h2 className="leading-7 text-2xl font-bold text-slate-200 mb-5">Your Feedback is valuable 😊</h2>
                                <div className="mt-8 w-[350px] md:w-[400px] lg:w-[550px] form-wrapper">
                                    <div className="input-group">
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            autoComplete="off"
                                            className="input"
                                        />
                                        <label className="user-label">Name</label>
                                    </div>
                                    <div className="input-group">
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            autoComplete="off"
                                            className="input"
                                        />
                                        <label className="user-label">Email</label>
                                    </div>
                                    <div className="input-group">
                                        <textarea
                                            required
                                            name="feedback"
                                            rows="4"
                                            autoComplete="off"
                                            className="input"
                                        />
                                        <label className="user-label">Contact me</label>
                                    </div>
                                </div>
                                <div className="button-wrapper mt-2">
                                    <button className="cta">
                                        <span>Send Message &nbsp;</span>
                                        <svg
                                            id="Layer_1"
                                            style={{ enableBackground: "new 0 0 30.2 30.1" }}
                                            version="1.1"
                                            viewBox="0 0 30.2 30.1"
                                            xmlSpace="preserve"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                        >
                                            <style type="text/css">
                                                {`.st0{fill:none;stroke:#ffffff;stroke-width:1.25;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                                  .st1{fill:none;stroke:#ffffff;stroke-width:1.1713;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}`}
                                            </style>
                                            <path
                                                className="st0"
                                                d="M2.1,14.6C8.9,12,28.5,4,28.5,4l-3.9,22.6c-0.2,1.1-1.5,1.5-2.3,0.8l-6.1-5.1l-4.3,4l0.7-6.7l13-12.3l-16,10  l1,5.7l-3.3-5.3l-5-1.6C1.5,15.8,1.4,14.8,2.1,14.6z"
                                            />
                                        </svg>
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
