import RevealOnScroll from "../RevealOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";

interface Experience {
  title: string;
  description: string;
  company: string;
  location: string;
  dates: string;
}

const experiencesData: Experience[] = [
  {
    title: "Frontend Developer",
    description: "Developed and maintained full-stack features using React and Next.js, contributing to both frontend and backend development.",
    company: "Codexon Solutions.",
    location: "Remote",
    dates: "April 2025 - Present"
  },
  {
    title: "Game/Web Developer",
    description: "Worked as a Unity Developer using Angular for frontend interfaces. Implemented advanced pathfinding solutions utilizing ArcGIS to enhance gameplay and spatial analysis features.",
    company: "Image Analysis Lab, SINES.",
    location: "Hybrid",
    dates: "September 2024 - November 2024"
  },
  {
    title: "Student Intern",
    description: "Focused primarily on Deep Learning, contributed to real-time avatar-based chatbots and assisted in preprocessing datasets as part of the internship.",
    company: "TUKL R&D Center, NUST.",
    location: "On-site",
    dates: "June 2024 - April 2025"
  }
];

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <div className="relative p-6 rounded-xl border border-white/10 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-pointer overflow-hidden">
    <div className="pointer-events-none absolute inset-0 opacity-60"></div>
    <h3 className="text-xl font-bold mb-2 relative z-10">{experience.title}</h3>
    <p className="text-gray-400 mb-4 relative z-10">
      {experience.description}
    </p>
    <p className="relative z-10">
      <span>
        <FontAwesomeIcon icon={faBriefcase} className="mr-2 ml-1" />
        <span className="text-gray-400 font-sm">{experience.company}</span>
      </span>
    </p>
    <p className="relative z-10">
      <span>
        <FontAwesomeIcon icon={faLocationDot} className="mr-2 ml-1" />
        <span className="text-gray-400 font-sm">{experience.location}</span>
      </span>
    </p>
    <p className="relative z-10">
      <span>
        <FontAwesomeIcon icon={faCalendar} className="mr-2 ml-1" />
        <span className="text-gray-400 font-sm">{experience.dates}</span>
      </span>
    </p>
  </div>
);

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Experiences.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiencesData.map((experience, idx) => (
              <ExperienceCard key={idx} experience={experience} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Experiences;
