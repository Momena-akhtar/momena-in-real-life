import RevealOnScroll from "../RevealOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
const Experiences = () => {
  return (
    <section
      id="experiences"
      className="min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
          Experiences.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CODEXON SOLUTIONS */}
            <div className="relative p-6 rounded-xl border hover:-translate-y-1 border-blue-800/50
            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-pointer overflow-hidden">
            {/* Faint fading gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-800/30 via-transparent to-blue-500/10 opacity-60"></div>
            <h3 className="text-xl font-bold mb-2 relative z-10"> Frontend Developer </h3>
            <p className="text-gray-400 mb-4 relative z-10">
              {" "}
              Developed and maintained full-stack features using React and Next.js, contributing to both frontend and backend development.
            </p>
            <p className="relative z-10">
              <span>
              <FontAwesomeIcon icon={faBriefcase} className="text-blue-800 mr-2 ml-1" />
              <span className="text-gray-400 font-sm">Codexon Solutions.</span>
              </span>
            </p>
            <p className="relative z-10">
              <span>
              <FontAwesomeIcon icon={faLocationDot} className="text-blue-800 mr-2 ml-1" />
              <span className="text-gray-400 font-sm">Remote</span>
              </span>
            </p>
            <p className="relative z-10">
              <span>
              <FontAwesomeIcon icon={faCalendar} className="text-blue-800 mr-2 ml-1" />
              <span className="text-gray-400 font-sm">April 2025 - Present</span>
              </span>
            </p>
            </div>
          {/* IMAGE ANALYSIS LAB */}
            <div className="relative p-6 rounded-xl border hover:-translate-y-1 border-blue-800/50
            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-pointer overflow-hidden">
            {/* Faint fading gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-800/30 via-transparent to-blue-500/10 opacity-60"></div>
            <h3 className="text-xl font-bold mb-2 relative z-10"> Game/Web Developer </h3>
            <p className="text-gray-400 mb-4 relative z-10">
              {" "}
              Worked as a Unity Developer using Angular for frontend interfaces. Implemented advanced pathfinding solutions utilizing ArcGIS to enhance gameplay and spatial analysis features.
            </p>
            <p className="relative z-10">
              <span>
              <FontAwesomeIcon icon={faBriefcase} className="text-blue-800 mr-2 ml-1" />
              <span className="text-gray-400 font-sm">Image Analysis Lab, SINES.</span>
              </span>
            </p>
            <p className="relative z-10">
              <span>
              <FontAwesomeIcon icon={faLocationDot} className="text-blue-800 mr-2 ml-1" />
              <span className="text-gray-400 font-sm">Hybrid</span>
              </span>
            </p>
            <p className="relative z-10">
              <span>
              <FontAwesomeIcon icon={faCalendar} className="text-blue-800 mr-2 ml-1" />
              <span className="text-gray-400 font-sm">September 2024 - November 2024</span>
              </span>
            </p>
            </div>
          {/* TUKL INTERNSHIP */}
            <div className="relative p-6 rounded-xl border hover:-translate-y-1 border-blue-800/50
            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-pointer overflow-hidden">
            {/* Faint fading gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-800/30 via-transparent to-blue-500/10 opacity-60"></div>
            <h3 className="text-xl font-bold mb-2 relative z-10"> Student Intern </h3>
            <p className="text-gray-400 mb-4 relative z-10">
              Focused primarily on Deep Learning, contributed to real-time avatar-based chatbots and assisted in preprocessing datasets as part of the internship.
            </p>
            <p className="relative z-10">
              <span>
              <FontAwesomeIcon icon={faBriefcase} className="text-blue-800 mr-2 ml-1" />
              <span className="text-gray-400 font-sm">TUKL R&D Center, NUST.</span>
              </span>
            </p>
            <p className="relative z-10">
              <span>
              <FontAwesomeIcon icon={faLocationDot} className="text-blue-800 mr-2 ml-1" />
              <span className="text-gray-400 font-sm">On-site</span>
              </span>
            </p>
            <p className="relative z-10">
              <span>
              <FontAwesomeIcon icon={faCalendar} className="text-blue-800 mr-2 ml-1" />
              <span className="text-gray-400 font-sm">June 2024 - April 2025</span>
              </span>
            </p>          
            </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Experiences;
