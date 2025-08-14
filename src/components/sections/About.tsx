import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap , faMessage} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import RevealOnScroll from "../RevealOnScroll";
const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "Typescript",
    "TailwindCSS",
    "Vue",
  ];
  const backendSkills = ["Express", "Node.js", "MongoDB", "MySQL", "GraphQL"];
  const tools = ["Git", "CI/CD", "Redis", "Linux", "VS Code", "Postman"];
  const aiml = ["Python", "Langchain", "LLMs/RAG", "Tensorflow", "OpenAI API", "HuggingFace"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
          About me.
        </h2>
        <div className="glass rounded-4xl p-6 border-white/10 border hover:-translate-y-1 transition-all ">
        <div className="flex flex-col items-center mb-8">
              <p>
                <span className="flex items-center gap-2 font-semibold text-lg mb-2">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-blue-800" />
                  B.Sc. Computer Science
                </span>
                <span className="block text-sm text-gray-300 mb-1">
                  SEECS, NUST. 2023 - 2027
                </span>
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/Momena-akhtar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-800 transition"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/momena-a-b9462a348/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-800 transition"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin}  />
                </a>
                <a
                  href="https://www.gmail.com/momena.akhtar19@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-800 transition"
                  aria-label="Email"
                >
                  <FontAwesomeIcon icon={faMessage}  />
                </a>
              </div>
            </div>
            <hr className="text-gray-600/30"/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend </h3>
              <div className="flex flex-wrap gap-2 ">
                {frontendSkills.map((tech) => (
                  <span
                    className="bg-blue-800/50 text-white px-5 py-2 cursor-pointer rounded-full text-sm hover:bg-transparent 
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
                        "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend </h3>
              <div className="flex flex-wrap gap-2 ">
                {backendSkills.map((tech) => (
                  <span
                    className="bg-blue-800/50 text-white px-5 py-2 cursor-pointer rounded-full text-sm hover:bg-transparent 
                        hover:shadow[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
                        "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> AI/ML </h3>
              <div className="flex flex-wrap gap-2 ">
                {aiml.map((tech) => (
                  <span
                    className="bg-blue-800/50 text-white px-5 py-2 cursor-pointer rounded-full text-sm hover:bg-transparent 
                        hover:shadow[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
                        "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Tools </h3>
              <div className="flex flex-wrap gap-2 ">
                {tools.map((tech) => (
                  <span
                    className="bg-blue-800/50 text-white px-5 py-2 cursor-pointer rounded-full text-sm hover:bg-transparent 
                        hover:shadow[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
                        "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        </div>
       
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
