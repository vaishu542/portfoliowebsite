import React from 'react'
import pythonIcon from '../assets/svgImages/skills/python.svg'
import css from '../assets/svgImages/skills/css.svg'
import html from '../assets/svgImages/skills/html.svg'
import javascript from '../assets/svgImages/skills/javascript.svg'
import react from '../assets/svgImages/skills/react.svg'
import tailwind from '../assets/svgImages/skills/tailwindcss.svg'
import bootstrap from '../assets/svgImages/skills/bootstrap.svg'
import skills from '../assets/svgImages/skills.svg'

const Skill = () => {
  return (

    <section className="text-gray-400  body-font" id='skill'>
      <div className="container mx-auto flex px-5 pt-20 lg:pt-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 hidden md:block">
          <img
            className="object-cover object-center rounded "
            alt="about"
            src={skills}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col  items-center ">
          <p className="title-font text-5xl md:text-5xl mb-4 font-medium text-white">
            Skills
          </p>
          <div className="listSkilss my-12">
            <ul className="grid grid-cols-3 gap-12 lg:grid-cols-4">
              <li className=" md:my-0 hover:scale-105 transition-all" id='html'>
                <img src={html} alt="HTML" className='w-28' />
              </li>
              <li className=" md:my-0 hover:scale-105 transition-all" id='css'>
                <img src={css} alt="CSS" className='w-28' />
              </li>
              <li className=" md:my-0 hover:scale-105 transition-all" id='js'>
                <img src={javascript} alt="Javascript" className='w-28' />
              </li>
              <li className=" hover:scale-105 transition-all" id='react'>
                <img src={react} alt="react" className='w-28' />
              </li>
              <li className=" hover:scale-105 transition-all" id='python'>
                <img src={pythonIcon} alt="python" className='w-28' />
              </li>
              <li className=" hover:scale-105 transition-all" id='python'>
                <img src={tailwind} alt="tailwind" className='w-28' />
              </li>
              <li className=" hover:scale-105 transition-all" id='python'>
                <img src={bootstrap} alt="bootstrap" className='w-28' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Skill
