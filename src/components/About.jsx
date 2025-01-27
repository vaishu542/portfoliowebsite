import React from 'react'
import about from '../assets/svgImages/about.svg'
import './About.css'

const About = () => {
  return (
    <section id='about' className="text-gray-400  body-font">
      <div className="container mx-auto flex px-5 pt-8 lg:pt-24 md:flex-row flex-col items-center">
        <div className="about-img lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 hidden md:block">
          <img className="object-cover object-center rounded" alt="hero" src={about}/>
        </div>
        <div className="about-sec lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div className="flex flex-col text-center w-full ">
            <p className="title-font  text-4xl md:text-4xl mb-4 font-medium text-white flex justify-center">About Me</p>
          </div>
          <p className="mb-8 text-lg lg:text-xl  text-gray-300 lg:tracking-wider leading-8 lg:leading-10" >
            I'm a frontend developer passionate about creating stunning, responsive web applications. I’m mastering the latest technologies, turning creative ideas into engaging user experiences, and refining my skills with each project.
            <br /> <br /> Explore my work and join me in turning code into dynamic, seamless websites. Let’s build something amazing together!
          </p>
          <div className="connect gap-3 flex items-center justify-center text-2xl text-gray-50">
            <a href="#contact">
            <span>Let's connect </span>
            <i class='bx bx-right-arrow-circle'></i>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About
