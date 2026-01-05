import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar, faChevronLeft, faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface Experience {
  title: string;
  description: string;
  company: string;
  location: string;
  dates: string;
  logo: string;
}

const experiencesData: Experience[] = [
  {
    title: "Software Developer",
    description: "Working on the design, development, and deployment of scalable cloud-based software and AI/ML systems. I focus on building reliable, production-ready services, improving system performance, and supporting models and data pipelines in real-world environments.",
    company: "Ecello Labs.",
    location: "Hybrid",
    dates: "September 2025 - Present",
    logo: "https://www.ecello.net/ecello.svg"
  },
  {
    title: "Frontend Developer",
    description: "Developed, deployed and maintained full-stack web applications, working across frontend interfaces and backend services. Implemented APIs, integrated databases, and collaborated with cross-functional teams to deliver reliable, maintainable software aligned with project requirements.",
    company: "Codexon Solutions.",
    location: "Remote",
    dates: "April 2025 - September 2025",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6nbYTKwdefcsS3WEuGYn52cG6q4ar_LPRQQ&s"
  },
  {
    title: "Student Intern",
    description: "Focused primarily on Deep Learning, contributed to real-time avatar-based chatbots and assisted in preprocessing datasets as part of the internship.",
    company: "TUKL R&D Center, NUST.",
    location: "On-site",
    dates: "June 2024 - April 2025",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFZfrVqIld93Q/company-logo_200_200/company-logo_200_200/0/1733210315438/tukl_nust_research_and_development_lab_logo?e=2147483647&v=beta&t=HkJPgsDzFmpCKYa2n6pjG0AWoCypumMHQe3e0jnSCqg"
  },
  {
    title: "Game/Web Developer",
    description: "Worked as a Unity Developer using Angular for frontend interfaces. Implemented advanced pathfinding solutions utilizing ArcGIS to enhance gameplay and spatial analysis features.",
    company: "Image Analysis Lab, SINES.",
    location: "Hybrid",
    dates: "September 2024 - November 2024",
    logo: "https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg"
  },
];

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <div className="flex-shrink-0 w-full md:w-[400px] p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all">
    <div className="flex items-center gap-4 mb-4">
      <img src={experience.logo} alt={experience.company} className="w-16 h-16 rounded-lg object-cover" />
      <div>
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <p className="text-sm text-gray-400">{experience.company}</p>
      </div>
    </div>
    
    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
      {experience.description}
    </p>
    
    <div className="space-y-2 text-sm">
      <p className="flex items-center gap-2 text-gray-400">
        <FontAwesomeIcon icon={faLocationDot} className="w-4" />
        {experience.location}
      </p>
      <p className="flex items-center gap-2 text-gray-400">
        <FontAwesomeIcon icon={faCalendar} className="w-4" />
        {experience.dates}
      </p>
    </div>
  </div>
);

const Experiences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const handleNext = () => {
    if (currentIndex < experiencesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section
      id="experiences"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Where I have worked.
          </h2>
          
          {/* Mobile: Vertical stack */}
          <div className="md:hidden space-y-4">
            <ExperienceCard experience={experiencesData[0]} />
            
            {showAll && experiencesData.slice(1).map((experience, idx) => (
              <ExperienceCard key={idx + 1} experience={experience} />
            ))}
            
            {!showAll && experiencesData.length > 1 && (
              <button
                onClick={() => setShowAll(true)}
                className="w-full py-3 rounded-full bg-white/5 cursor-pointer border border-white/20 hover:bg-white/20 transition flex items-center justify-center gap-2"
              >
                Show More
                <FontAwesomeIcon icon={faChevronDown} className="w-4" />
              </button>
            )}
          </div>

          {/* Desktop: Carousel */}
          <div className="hidden md:block relative">
            <div className="overflow-hidden relative">
              <div 
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 424}px)` }}
              >
                {experiencesData.map((experience, idx) => (
                  <ExperienceCard 
                    key={idx} 
                    experience={experience}
                  />
                ))}
              </div>
              
              {currentIndex > 0 && (
                <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
              )}
              
              {currentIndex < experiencesData.length - 1 && (
                <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
              )}
            </div>

            {currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 cursor-pointer rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition z-10"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            )}

            {currentIndex < experiencesData.length - 1 && (
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 cursor-pointer rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition z-10"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Experiences;