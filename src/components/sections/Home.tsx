import RevealOnScroll from "../RevealOnScroll"

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
        <RevealOnScroll>
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-5xl font-bold mb-2 leading-tight">
                Momena,
            </h1>
            <h2 className="text-5xl md:text-5xl font-bold mb-8 leading-tight">
                <span className="italic font-serif bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Software</span> Developer
            </h2>
            
            <p className="text-white/60 text-medium mb-8 max-w-lg mx-auto">
                Helping teams design scalable AI/ML systems and applications with clean architecture and minimal infrastructure friction
            </p>
            
            <div className="flex justify-center space-x-4">
                <a href="#projects"
                className="bg-white text-black py-3 px-6 rounded-full font-medium transition relative overflow-hidden 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                > View My Work </a>
                <a href="#contact"
                className="bg-transparent border border-white/10 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                > Contact Me </a>
            </div>
          </div>
        </RevealOnScroll>
    </section>
  )
}

export default Home