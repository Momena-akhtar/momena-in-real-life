import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import RevealOnScroll from '../RevealOnScroll';
import { faLink, faChevronLeft, faChevronRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface Project {
  title: string;
  description: string;
  technologies: { name: string; logo: string }[];
  github: string;
  live?: string;
  image: string;
  collaborators?: {
    name: string;
    url: string;
  }[];
}

const techLogos: Record<string, string> = {
  "NextJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "NestJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  "PostGres": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",  
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "HuggingFace": "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "TailwindCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Langchain": "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
  "Stripe": "https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "OpenAI": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgo1dralioTT376FfDA2V8UkA4TgEbKspQGw&s",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "MERN": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Typescript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Socket.io": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
};

const projectsData: Project[] = [
  {
    title: "Solidio",
    description: "Solidio is an AI-powered investment platform designed to support structured interactions between startups and investors. It enables efficient startup discovery, intelligent matching, and consistent evaluation to support informed investment decisions.",
    technologies: ["NextJS", "NestJS", "PostGres", "TailwindCSS", "HuggingFace"].map(tech => ({ name: tech, logo: techLogos[tech] })),
    github: "https://github.com/ecellolabs/Solidio",
    live: "https://solidio.developertest.cloud/",
    image: "/img7.png",
    collaborators: [{ name: "Talal Majeed", url: "https://github.com/TalalMajeed" }]
  }, 
  {
    title: "Classfellow",
    description: "ClassFellow is an AI-powered learning assistant that helps students capture and organize academic content. It transforms lectures and study materials into structured, searchable notes to support more effective studying and collaboration.",
    technologies: ["NextJS", "MongoDB", "TailwindCSS", "Express", "Socket.io", "Langchain"].map(tech => ({ name: tech, logo: techLogos[tech] })),
    github: "https://github.com/ecellolabs/Classfellow",
    live: "https://classfellow.developertest.cloud/",
    image: "/img6.png",
    collaborators: [{ name: "Talal Majeed", url: "https://github.com/TalalMajeed" }]
  },
  {
    title: "Collinear",
    description: "Collinear is an AI-Driven CRM Platform featuring Intelligent Automation and Conversational Assistants. It's designed to help businesses manage customer relationships more efficiently by leveraging state-of-the-art AI technologies and robust automation features",
    technologies: ["NextJS", "MongoDB", "TailwindCSS", "Express", "Langchain"].map(tech => ({ name: tech, logo: techLogos[tech] })),
    github: "https://github.com/ecellolabs/Collinear",
    live: "https://collinear.developertest.cloud/",
    image: "/img5.png",
    collaborators: [{ name: "Talal Majeed", url: "https://github.com/TalalMajeed" }]
  },
  {
    title: "QuizRush",
    description: "QuizRush is an interactive online trivia platform that lets users test their knowledge, compete in real-time challenges, and engage with dynamic quizzes across diverse topics - designed to make learning fun and competitive",
    technologies: ["NextJS", "MongoDB", "TailwindCSS", "Express", "Docker"].map(tech => ({ name: tech, logo: techLogos[tech] })),
    github: "https://github.com/codexonsolutions/Quiz-Rush-Frontend",
    live: "https://quizrush.online/",
    image: "/img3.png",
    collaborators: [{ name: "Talal Majeed", url: "https://github.com/TalalMajeed" }]
  },
  {
    title: "Reality Cheque",
    description: "An easy-to-use site for agencies and freelancers offering a variety of custom GPT tools, organized into 10 main categories with several helpful technical tools.",
    technologies: ["NextJS", "Express", "MongoDB", "TailwindCSS", "Langchain", "Stripe"].map(tech => ({ name: tech, logo: techLogos[tech] })),
    github: "https://github.com/Momena-akhtar/reality-cheque",
    live: "https://ai.realitycheque.co/",
    image: "/img1.png",
    collaborators: [{ name: "Shaheer-Ul-Haq", url: "/" }]
  },
  {
    title: "Saddam's Chatbot",
    description: "Developed a RAG-powered chatbot for Pakistan's leading agency owner, Saddam Hasan, delivering intelligent, context-aware assistance and improving client engagement.",
    technologies: ["React", "Javascript", "Express", "Redis", "Langchain"].map(tech => ({ name: tech, logo: techLogos[tech] })),
    github: "https://github.com/Momena-akhtar/chatbot",
    live: "https://saddam-chatbot.vercel.app/",
    image: "/img2.png"
  },
  {
    title: "Sync",
    description: "A powerful real-time collaborative whiteboard built with the MERN stack, enabling teamwork, instant updates, and interactive brainstorming from anywhere.",
    technologies: ["MERN", "Typescript", "TailwindCSS", "Firebase", "Socket.io"].map(tech => ({ name: tech, logo: techLogos[tech] })),
    github: "https://github.com/Momena-akhtar/sync-board",
    image: "/img4.png",
    collaborators: [{ name: "Danish Abbas", url: "https://github.com/12Danish" }]
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="flex-shrink-0 w-full md:w-[400px] rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-4">
          {project.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 p-1.5 hover:bg-white/20 transition cursor-pointer">
                <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              {hoveredTech === tech.name && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                  {tech.name}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-2 text-sm border-t border-white/5 pt-4">
          <a 
            target='_blank'
            href={project.github}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} />
            View Project 
            <span className="ml-auto">→</span>
          </a>

          {project.live && (
            <a 
              target='_blank'
              href={project.live}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faLink} />
              Live Project 
              <span className="ml-auto">→</span>
            </a>
          )}

          {project.collaborators && (
            <div className='text-xs text-gray-400 pt-2'>
              Collaborators: {project.collaborators.map((collaborator, idx) => (
                <a 
                  key={idx}
                  target='_blank'
                  href={collaborator.url}
                  className="hover:text-white transition-colors"
                >
                  {idx > 0 && ", "}{collaborator.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const handleNext = () => {
    if (currentIndex < projectsData.length - 1) {
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
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What I've worked on.
          </h2>
          
          {/* Mobile: Vertical stack */}
          <div className="md:hidden space-y-4">
            <ProjectCard project={projectsData[0]} />
            
            {showAll && projectsData.slice(1).map((project, idx) => (
              <ProjectCard key={idx + 1} project={project} />
            ))}
            
            {projectsData.length > 1 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="w-full py-3 rounded-full bg-white/5 backdrop-blur-md cursor-pointer border border-white/20 hover:bg-white/20 transition flex items-center justify-center gap-2"
              >
                {showAll ? (
                  <>
                    Show Less
                    <FontAwesomeIcon icon={faChevronUp} className="w-4" />
                  </>
                ) : (
                  <>
                    Show More
                    <FontAwesomeIcon icon={faChevronDown} className="w-4" />
                  </>
                )}
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
                {projectsData.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
              
              {currentIndex > 0 && (
                <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
              )}
              
              {currentIndex < projectsData.length - 1 && (
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

            {currentIndex < projectsData.length - 1 && (
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

export default Projects;