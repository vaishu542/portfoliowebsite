import React from 'react'
import './Home.css'
import { ReactTyped } from "react-typed";
import herolargeScreen from "../assets/svgImages/hero-largeScreen.svg";
import heroimgMobile from "../assets/svgImages/hero-imgMobile.jpg";

const Home = () => {

    return (
        <>
            <section className="text-gray-400 body-font md:pt-5">
                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-16   ">
                    <div className="sec-home lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center lg:items-start text-center lg:text-left mb-16 lg:mb-0">
                        <h1 className="text-3xl lg:text-6xl font-semibold text-white mb-6 leading-tight">

                            Hi there👋!{" "}
                            <ReactTyped
                                strings={["I’m Sri Vaishnavi"]}
                                typeSpeed={100}
                                loop
                                backSpeed={20}
                                cursorChar="_"
                                showCursor={true}
                            />

                        </h1>
                        <p className="lg:mb-8 leading-8 lg:leading-10 text-lg lg:text-xl text-gray-300 tracking-wider">
                            Welcome to my Portfolio! I’m an aspiring frontend developer 👩‍💻 focused on crafting engaging, responsive websites, and on delivering user-friendly experiences .
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 my-5">
                            {/* Download CV Button */}
                            <a
                                href="CV.pdf"
                                download
                                className="bg-violet-900 inline-flex items-center text-white py-2 px-6 rounded-lg hover:bg-violet-600 focus:outline-none text-lg"
                            >
                                Download CV
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    height="24"
                                    className="fill-current pl-1 text-white"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M37,47H11c-2.209,0-4-1.791-4-4V5c0-2.209,1.791-4,4-4h18.973  
                    c0.002,0,0.005,0,0.007,0h0.02H30c0.32,0,0.593,0.161,0.776,0.395l9.829,9.829C40.84,11.407,41,11.68,41,12v0.021  
                    c0,0.002,0,0.003,0,0.005V43C41,45.209,39.209,47,37,47z 
                    M31,4.381V11h6.619L31,4.381z 
                    M39,13h-9c-0.553,0-1-0.448-1-1V3H11  
                    C9.896,3,9,3.896,9,5v38c0,1.104,0.896,2,2,2h26c1.104,0,2-0.896,2-2V13z 
                    M33,39H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18  
                    c0.553,0,1,0.448,1,1C34,38.553,33.553,39,33,39z 
                    M33,31H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18c0.553,0,1,0.448,1,1  
                    C34,30.553,33.553,31,33,31z 
                    M33,23H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18c0.553,0,1,0.448,1,1  
                    C34,22.553,33.553,23,33,23z"
                                    />
                                </svg>
                            </a>

                            {/* GitHub Button */}
                            <a
                                href="https://github.com/vaishu542"
                                target="_blank"
                                className="inline-flex items-center text-white py-2 px-6 border border-sky-200 rounded-lg hover:bg-gray-700 focus:outline-none text-lg"
                            >
                                GitHub
                            </a>
                        </div>

                    </div>
                    <div className="home-img lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <div className="imgBox">
                            <img
                                className="hero-img object-cover object-center rounded-lg shadow-lg  hidden md:block"
                                alt="hero"
                                src={herolargeScreen}
                            />
                        </div>
                        {/* for mobile  */}
                        <img
                            className="hero-img mobile object-cover object-center rounded-full my-4 shadow-lg block md:hidden"
                            alt="hero"
                            src={heroimgMobile}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home
