import { useState } from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const roadmapData = [
  {
    year: 2018,
    type: 'Education',
    title: 'Cambridge GCE - O Levels',
    institution: 'Playpen School',
    location: 'Dhaka, Bangladesh',
    duration: '2016 - 2018',
    description: 'Studied Physics, Chemistry, Biology, Mathematics D, Additional Mathematics, English and Bengali',
  },
  {
    year: 2020,
    type: 'Education',
    title: 'Cambridge GCE - A Levels',
    institution: 'Playpen School',
    location: 'Dhaka, Bangladesh',
    duration: '2018 - 2020',
    description: 'Studied Physics, Chemistry, Mathematics',
  },
  {
    year: 2024,
    type: 'Education',
    title: 'BSc in Computer Science',
    institution: 'BRAC University',
    location: 'Dhaka, Bangladesh',
    duration: '2020 - 2024',
    description: 'Graduated with honors, specialized in Software Engineering, Data Science, Machine Learning and AI',
  },
  {
    year: 2025,
    type: 'Work',
    title: 'IT Project Analyst',
    institution: 'LIIA Smart Inc',
    location: 'Remote',
    duration: '2025 - Present',
    description: 'Leading development projects using programming and technology knowledge to meet business needs of clients',
  },
];

const iconMap = {
  Education: <FaGraduationCap className="text-white text-4xl" />,
  Work: <FaBriefcase className="text-white text-4xl" />,
};

export default function Roadmap() {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePopup = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const closePopup = () => {
    setActiveIndex(null);
  };

  return (
    <div className="relative py-20 px-4 md:px-10 mx-auto text-white h-auto bg-[#121f36] w-full">
      <h2 className="text-5xl font-bold text-center mb-32">My Journey</h2>

      {/* Vertical center line */}
      <div className="absolute top-[200px] left-1/2 h-[calc(100%-200px)] w-[4px] bg-white transform -translate-x-1/2 z-0"></div>

      {/* Blur everything behind on mobile when popup is active */}
      <div className={`${activeIndex !== null ? 'blur-sm sm:blur-none' : ''} relative z-10 flex flex-col gap-32`}>
        {roadmapData.map((item, index) => {
          const isLeft = index % 2 === 0;
          const bgColor = item.type === 'Education' ? 'bg-blue-500' : 'bg-emerald-500';

          return (
            <div key={index} className="relative flex items-center">
              {/* Year label */}
              <div className="w-1/2 flex justify-end pr-6">
                {isLeft && <div className="text-2xl font-bold">{item.year}</div>}
              </div>

              {/* Icon */}
              <div
                onClick={() => togglePopup(index)}
                className={`relative z-10 cursor-pointer md:w-[85px] md:h-[80px] w-[85px] h-[70px] ${bgColor} rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 hover:-translate-y-2`}
              >
                {iconMap[item.type]}

                {/* Desktop card */}
                {activeIndex === index && (
                  <div
                    className={`hidden sm:block absolute top-1/2 transform -translate-y-1/2 w-[320px] p-6 rounded-xl shadow-xl bg-white text-gray-800 border border-gray-200 transition-all duration-300 ${
                      isLeft ? 'left-[calc(100%+2rem)]' : 'right-[calc(100%+2rem)]'
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <div className="text-sm text-gray-500 mb-1">
                      {item.institution} — {item.location}
                    </div>
                    <div className="text-xs text-gray-400 italic mb-2">{item.duration}</div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                )}
              </div>

              {/* Year label (right side) */}
              <div className="w-1/2 flex justify-start pl-6">
                {!isLeft && <div className="text-2xl font-bold">{item.year}</div>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile popup overlay */}
      {activeIndex !== null && (
  <>
    {/* Background blur overlay */}
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
      onClick={closePopup}
    ></div>

    {/* Centered popup */}
    <div
      className="fixed inset-0 z-40 flex items-center justify-center sm:hidden"
      onClick={closePopup}
    >
      <div
        className="bg-white text-gray-800 p-6 rounded-xl shadow-2xl w-[90%] max-w-xs border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold mb-1">{roadmapData[activeIndex].title}</h3>
        <div className="text-sm text-gray-500 mb-1">
          {roadmapData[activeIndex].institution} — {roadmapData[activeIndex].location}
        </div>
        <div className="text-xs text-gray-400 italic mb-2">
          {roadmapData[activeIndex].duration}
        </div>
        <p className="text-gray-600 text-sm">{roadmapData[activeIndex].description}</p>
      </div>
    </div>
  </>
)}

    </div>
  );
}
