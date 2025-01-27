import React, { useState } from 'react';
import './NavBar.css'; 


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <header className=" text-gray-300  flex flex-col h-max justify-center items-center">
      <div className="container mx-auto flex flex-wrap p-5 pb-0 items-start justify-between sticky">
        <a className="flex title-font font-medium items-center text-4xl text-white mb-4 md:mb-0 cursor-pointer">
          <span className="ml-3 text-xl">Portfolio</span>
        </a>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center">
          <a href="#" className="mr-5 btn hover:text-white">Home</a>
          <a href="#about" className="mr-5  btn hover:text-white">About</a>
          <a href="#skill" className="mr-5  text-lg btn hover:text-white">Skills</a>
          <a href="#project" className="mr-5  btn hover:text-white">Projects</a>
          <a href="#contact" className="mr-5  btn hover:text-white">Contact</a>
        </nav>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden  top-0 left-0 right-0 text-gray-400  transition-max-height duration-300 ease-out w-[380px] opacity-85 rounded-xl ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <nav className="flex justify-evenly items-center text-xs">
          <a href="#" className="py-3 px-2 btn text-white hover:bg-gray-700">Home</a>
          <a href="#about" className="py-2 px-2 btn text-white hover:bg-gray-700">About</a>
          <a href="#skill" className="py-2 px-2 btn text-white hover:bg-gray-700">Skills</a>
          <a href="#project" className="py-2 px-4 btn text-white hover:bg-gray-700">Projects</a>
          <a href="#contact" className="py-2 px-2 btn text-white hover:bg-gray-700">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
