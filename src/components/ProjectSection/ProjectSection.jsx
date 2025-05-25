import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../../assets/information';

const projects = [
  {
    name: 'Portfolio Website',
    image: images.project_1,
    description: 'A personal portfolio built using React and Tailwind CSS. Features dynamic content and smooth animations.',
    link: 'https://yourportfolio.com',
  },
  {
    name: 'E-commerce Dashboard',
    link: 'https://yourportfolio.com',
    description: 'An admin dashboard for managing products, users, and orders, built with React and Chart.js.',
    image: images.project_3,
  },
];

const ProjectSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
            <div className="relative w-full h-screen bg-gradient-to-tr from-[#0a1a2f] to-[#142b47]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-24 gap-8 text-white min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[current].image}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="w-full md:w-1/2 h-64 md:h-[400px] overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={projects[current].image}
              alt={projects[current].name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            key={projects[current].name}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="w-full md:w-1/2 flex flex-col gap-4"
          >
            <div className="inline-flex flex-col items-start">
                <h2 className="text-2xl md:text-3xl text-white font-semibold whitespace-nowrap">
                {projects[current].name}
                </h2>
                <div className="h-1 bg-white mt-1 w-full" />
            </div>

            <p className="text-gray-200 text-base md:text-lg">{projects[current].description}</p>
            <div className="flex justify-between items-center mt-4">
  <a
    href="/projects"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300 text-sm"
  >
    Check Project
  </a>
  <button
    onClick={nextSlide}
    className="ml-4 text-2xl font-thin text-white border border-white w-10 h-10 rounded hover:scale-110 transition flex items-center justify-center"
    aria-label="Next Project"
  >
    &gt;
  </button>
</div>

          </motion.div>
        </AnimatePresence>

        {/* Right Arrow Button */}
        

      </div>
    </div>
  );
};

export default ProjectSlider;
