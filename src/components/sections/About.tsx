import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontend = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
  ];

  const backend = [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Nest.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg"},
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  ];

  const aiml = [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Langchain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "HuggingFace", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { name: "OpenAI", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgo1dralioTT376FfDA2V8UkA4TgEbKspQGw&s" },
  ];

  const tools = [
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "AWS", logo: "https://icon2.cleanpng.com/20190418/vhc/kisspng-amazon-web-services-logo-cloud-computing-amazon-co-logoaws-1-itnext-summit-1713897597915.webp" },
    { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  ];

  const categories = [
    { title: "Frontend", skills: frontend },
    { title: "Backend", skills: backend },
    { title: "AI/ML", skills: aiml },
    { title: "Tools", skills: tools },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What I've worked with.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <div
                key={category.title}
                className="glass rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-6 h-6"
                      />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;