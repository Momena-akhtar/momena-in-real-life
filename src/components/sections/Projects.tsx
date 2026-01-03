import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import RevealOnScroll from '../RevealOnScroll';
import { faLink } from '@fortawesome/free-solid-svg-icons';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  collaborators?: {
    name: string;
    url: string;
  }[];
}

const projectsData: Project[] = [
  {
    title: "Reality Cheque",
    description: "An easy-to-use site for agencies and freelancers offering a variety of custom GPT tools, organized into 10 main categories with several helpful technical tools.",
    technologies: ["NextJS", "Express", "MongoDB", "TailwindCSS", "Langchain", "Stripe"],
    github: "https://github.com/Momena-akhtar/reality-cheque",
    live: "https://ai.realitycheque.co/",
    collaborators: [{ name: "Shaheer-Ul-Haq", url: "/" }]
  },
  {
    title: "Next Rep",
    description: "An AI-powered fitness platform to provide personalized health tracking, progress monitoring, and actionable insights for users.",
    technologies: ["React", "Express", "MongoDB", "TailwindCSS", "Langchain", "OpenAI"],
    github: "https://github.com/12Danish/NextRepFrontend",
    live: "https://nextrep.site/",
    collaborators: [{ name: "Danish Abbas", url: "https://github.com/12Danish" }]
  },
  {
    title: "Quiz Rush",
    description: "Working on an engaging platform for creating, publishing, and solving quizzes, empowering users to challenge themselves and others in a dynamic, interactive environment.",
    technologies: ["NextJS", "MongoDB", "TailwindCSS", "Express", "Docker"],
    github: "https://github.com/codexonsolutions/Quiz-Rush-Frontend",
    live: "https://quizrush.online/",
    collaborators: [{ name: "Talal Majeed", url: "https://github.com/TalalMajeed" }]
  },
  {
    title: "Saddam's Chatbot",
    description: "Developed a RAG-powered chatbot for Pakistan's leading agency owner, Saddam Hasan, delivering intelligent, context-aware assistance and improving client engagement.",
    technologies: ["React", "Javascript", "Express", "Redis", "Langchain"],
    github: "https://github.com/Momena-akhtar/chatbot",
    live: "https://saddam-chatbot.vercel.app/"
  },
  {
    title: "Sync",
    description: "A powerful real-time collaborative whiteboard built with the MERN stack, enabling teamwork, instant updates, and interactive brainstorming from anywhere.",
    technologies: ["MERN", "Typescript", "TailwindCSS", "Firebase", "Socket.io"],
    github: "https://github.com/Momena-akhtar/sync-board",
    collaborators: [{ name: "Danish Abbas", url: "https://github.com/12Danish" }]
  }
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="p-6 rounded-xl border border-white/10  hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-pointer">
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
    <p className="text-white/50 mb-4">{project.description}</p>
    
    <div className="m-2 flex flex-wrap gap-2">
      {project.technologies.map((tech, key) => (
        <span
          key={key}
          className="bg-white text-black px-5 py-2 cursor-pointer rounded-full text-sm hover:bg-transparent hover:text-white hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
        >
          {tech}
        </span>
      ))}
    </div>

    <a 
      target='_blank'
      href={project.github}
      className="text-white text-sm transition-colors block mb-1"
    >
      <FontAwesomeIcon icon={faGithub} className="text-white pr-2" />
      View Project 
      <span className="ml-1 text-sm">&#8594;</span>
    </a>

    {project.live && (
      <a 
        target='_blank'
        href={project.live}
        className="text-white text-sm transition-colors block mb-1"
      >
        <FontAwesomeIcon icon={faLink} className="text-white pr-2" />
        Live Project 
        <span className="ml-1 text-sm">&#8594;</span>
      </a>
    )}

    {project.collaborators && (
      <div className='ml-1 text-sm text-white/50'>
        Collaborators: 
        {project.collaborators.map((collaborator, idx) => (
          <a 
            key={idx}
            target='_blank'
            href={collaborator.url}
          >
            {idx > 0 && ", "}{collaborator.name}
          </a>
        ))}
      </div>
    )}
  </div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured projects.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
