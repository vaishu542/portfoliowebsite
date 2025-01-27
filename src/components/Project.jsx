import React from 'react'
import tracknest from '../assets/svgImages/project/tracknest.png'
import dice from '../assets/svgImages/project/dice.png'
import imggallery from '../assets/svgImages/project/img-gallery.png'
import tictactoe from '../assets/svgImages/project/tic-tac-toe.png'
import todo from '../assets/svgImages/project/todo.jpg'
import weather from '../assets/svgImages/project/weather.jpg'
import rockps from '../assets/svgImages/project/rockps.png'

const Project = () => {
  const galleryItems = [
    {
      src: dice,
      title: 'Dice Game ',
      description: 'Dynamic Dice Game with animated rolls and immersive, overlapping design elements.',
      href1: 'https://dice-game-u8u.netlify.app/',
      href2: 'https://github.com/vaishu542/Dice-Game/tree/main'
    },
    {
      src: tracknest,
      title: 'TrackNest',
      description: 'rackNest is your personal finance tracker, designed to help you track your spending, and  finances effectively',
      href1: 'https://tracknest-04.netlify.app/',
      href2: 'https://github.com/vaishu542/TrackNest'
    },
    {
      src: imggallery,
      title: 'Image Gallery',
      description: 'Explore stunning visuals in our dynamic gallery, featuring search, download,responsive design.',
      href1: 'https://image-gallery-hj7.netlify.app/',
      href2: 'https://github.com/vaishu542/Image_Gallery'
    },
    {
      src: todo,
      title: 'TO-Do List',
      description: 'Simple To-Do List app for task management with user-friendly interface.',
      href1: 'https://to-do-list-s04.netlify.app/',
      href2: 'https://github.com/vaishu542/to-do-list'
    },
    {
      src: tictactoe,
      title: 'Tic-Tac-Toe',
      description: 'Engaging Tic-Tac-Toe game with sleek design and smooth interactive gameplay.',
      href1: 'https://tic-tac-toe-678.netlify.app/',
      href2: 'https://github.com/vaishu542/Tic-Tac-Toe'
    },
    {
      src: weather,
      title: 'Weather App',
      description: 'Weather app providing real-time forecasts with a clean, intuitive interface.',
      href1: 'https://weather-app-2789.netlify.app/',
      href2: 'https://github.com/vaishu542/Weather-App'
    },
    {
      src: rockps,
      title: 'Rock-Paper-Scissors',
      description: 'Rock-Paper-Scissors game featuring smooth gameplay and an intuitive user experience.',
      href1: 'https://rock-paper-scissors-g89.netlify.app/',
      href2: 'https://github.com/vaishu542/Rock-Paper-Scissors'
    }

  ];

  return (
    <section className="text-gray-400 " id='project'>
      <div className="container px-5 md:pt-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="title-font text-5xl lg:text-6xl md:mb-4 font-medium text-white flex justify-center">Projects</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <a
                  href={item.href1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center"
                    src={item.src}
                  />
                </a>
                <div className="px-8 py-10 relative z-10 w-full border-2 bg-gray-500 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h1 className="title-font text-3xl font-medium text-slate-200 mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed">{item.description}</p>
                  <a
                    href={item.href2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-600 rounded-md px-2 py-1 mt-2 border-2 hover:bg-slate-700 text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Project
