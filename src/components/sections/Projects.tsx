import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import RevealOnScroll from '../RevealOnScroll';
import { faLink } from '@fortawesome/free-solid-svg-icons';
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
          Featured projects.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* REALITY CHEQUE */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-800/50
          hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-pointer">
            <h3 className="text-xl font-bold mb-2"> Reality Cheque </h3>
            <p className="text-gray-400 mb-4 ">
              {" "}
              An easy-to-use site for agencies and freelancers offering a variety of custom GPT tools, organized into 10 main categories with several helpful technical tools.
            </p>
            <div className="m-2 flex flex-wrap gap-2">
              {[
                "NextJS",
                "Express",
                "MongoDB",
                "TailwindCSS",
                "Langchain",
                "Stripe",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-800/50 text-white px-5 py-2 cursor-pointer rounded-full text-sm hover:bg-transparent 
                        hover:shadow[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
                        "
                >
                  {tech}
                </span>
              ))}
            </div>
            <a 
            target='_blank'
            href="https://github.com/Momena-akhtar/reality-cheque"
            className=" text-white hover:text-blue-800 text-sm transition-colors">
                <FontAwesomeIcon icon={faGithub}  className="text-white pr-2" />
                View Project 
                <span className="ml-1 text-sm">&#8594;</span>
            </a>
            <a 
              target='_blank'
              href="https://ai.realitycheque.co/"
              className="text-white hover:text-blue-800 text-sm transition-colors block"
            >
              <FontAwesomeIcon icon={faLink} className="text-white pr-2" />
              Live Project 
              <span className="ml-1 text-sm">&#8594;</span>
            </a>
            <div className='ml-1 text-sm text-gray-400'>
                Collaborators: 
                <a 
                target='_blank'
                className='text-blue-800'
                href="/"> {" "}Shaheer-Ul-Haq</a>
            </div>
          </div>
          {/* QUIZ RUSH */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-800/50
          hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-pointer">
            <h3 className="text-xl font-bold mb-2"> Quiz Rush </h3>
            <p className="text-gray-400 mb-4 ">
              {" "}
              Working on an engaging platform for creating, publishing, and solving quizzes, empowering users to challenge themselves and others in a dynamic, interactive environment.
            </p>
            <div className="m-2 flex flex-wrap gap-2">
              {[
                "NextJS",
                "MongoDB",
                "TailwindCSS",
                "Express",
                "Docker"
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-800/50 text-white px-5 py-2 cursor-pointer rounded-full text-sm hover:bg-transparent 
                        hover:shadow[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
                        "
                >
                  {tech}
                </span>
              ))}
            </div>
            <a 
              target='_blank'
              href="https://github.com/codexonsolutions/Quiz-Rush-Frontend"
              className="text-white hover:text-blue-800 text-sm transition-colors block mb-1"
            >
              <FontAwesomeIcon icon={faGithub} className="text-white pr-2" />
              View Project 
              <span className="ml-1 text-sm">&#8594;</span>
            </a>
            <a 
              target='_blank'
              href="https://quizrush.online/"
              className="text-white hover:text-blue-800 text-sm transition-colors block"
            >
              <FontAwesomeIcon icon={faLink} className="text-white pr-2" />
              Live Project 
              <span className="ml-1 text-sm">&#8594;</span>
            </a>
            <div className='ml-1 text-sm text-gray-400'>
                Collaborators: 
                <a 
                target='_blank'
                className='text-blue-800'
                href="#"> {" "}Codexon team</a>
            </div>
            
          </div>
          {/* SADDAM'S CHATBOT */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-800/50
          hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-pointer">
            <h3 className="text-xl font-bold mb-2"> Saddam's Chatbot </h3>
            <p className="text-gray-400 mb-4 ">
              {" "}
              Developed a RAG-powered chatbot for Pakistan’s leading agency owner, Saddam Hasan, delivering intelligent, context-aware assistance and elevating client engagement.
            </p>
            <div className="m-2 flex flex-wrap gap-2">
              {[
                "React",
                "Javascript",
                "Express",
                "Redis",
                "Langchain",
                
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-800/50 text-white px-5 py-2 cursor-pointer rounded-full text-sm hover:bg-transparent 
                        hover:shadow[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
                        "
                >
                  {tech}
                </span>
              ))}
            </div>
            <a 
              target='_blank'
              href="https://github.com/Momena-akhtar/chatbot"
              className="text-white hover:text-blue-800 text-sm transition-colors block mb-1"
            >
              <FontAwesomeIcon icon={faGithub} className="text-white pr-2" />
              View Project 
              <span className="ml-1 text-sm">&#8594;</span>
            </a>
            <a 
              target='_blank'
              href="https://saddam-chatbot.vercel.app/"
              className="text-white hover:text-blue-800 text-sm transition-colors block"
            >
              <FontAwesomeIcon icon={faLink} className="text-white pr-2" />
              Live Project 
              <span className="ml-1 text-sm">&#8594;</span>
            </a>
          </div>
           {/* SYNC */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-800/50
          hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-pointer">
            <h3 className="text-xl font-bold mb-2"> Sync </h3>
            <p className="text-gray-400 mb-4 ">
              {" "}
              A powerful real-time collaborative whiteboard built with the MERN stack, enabling teamwork, instant updates, and interactive brainstorming from anywhere.
            </p>
            <div className="m-2 flex flex-wrap gap-2">
              {[
                "MERN",
                "Typescript",
                "TailwindCSS",
                "Firebase",
                "Socket.io",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-800/50 text-white px-5 py-2 cursor-pointer rounded-full text-sm hover:bg-transparent 
                        hover:shadow[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
                        "
                >
                  {tech}
                </span>
              ))}
            </div>
            <a 
            target='_blank'
            href="https://github.com/Momena-akhtar/sync-board"
            className=" text-white hover:text-blue-800 text-sm transition-colors">
                <FontAwesomeIcon icon={faGithub}  className="text-white pr-2" />
                View Project 
                <span className="ml-1 text-sm">&#8594;</span>
            </a>
            <div className='ml-1 text-sm text-gray-400'>
                Collaborators: 
                <a 
                target='_blank'
                className='text-blue-800'
                href="https://github.com/12Danish"> {" "}Danish Abbas</a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
