import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { images } from '../assets/information.js';

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Innovative and scalable.",
    image: images.project_1,

  },
  {
    id: 2,
    title: "Project Two",
    description: "Focused on AI solutions.",
    image: images.project_2,
  },
  {
    id: 3,
    title: "Project Three",
    description: "A data-driven platform.",
    image: images.project_3,
  },
  {
    id: 4,
    title: "Project Four",
    description: "Automation at its best.",
    image: images.project_4,
  },
  {
    id: 5,
    title: "Project Five",
    description: "Cutting edge tech stack.",
    image: images.project_5,
  },
  {
    id: 6,
    title: "Project Six",
    description: "User-centric design.",
    image: images.project_6,
  }
];

export default function ProjectCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1, spacing: 15 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    drag: true,
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-white mt-10">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>

      {/* Slider container */}
      <div ref={sliderRef} className="keen-slider rounded-lg cursor-grab select-none">
        {projects.map((project) => (
          <div
            key={project.id}
            className="keen-slider__slide flex justify-center"
            style={{ minWidth: "80%" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg shadow-lg object-fill max-h-[400px]"
            />
          </div>
        ))}
      </div>

      {/* Text below slider */}
      <div className="mt-8 text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold">{projects[currentSlide].title}</h2>
        <p className="mt-2 text-gray-300">{projects[currentSlide].description}</p>
      </div>
    </div>
  );
}
