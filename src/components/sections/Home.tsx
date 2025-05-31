import RevealOnScroll from "../RevealOnScroll"
const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll><div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r
            bg-clip-text text-transparent 
            from-blue-500 to-purple-600 leading-right ">
                Hi, I'm Momena Akhtar.
            </h1>
            <p className="text-gray-400 text-medium mb-8 max-w-lg mx-auto">
                Helping teams deliver end-to-end web solutions built on top of AI/LLMs focused on rapid iteration, scalability and technical SEO.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects"
                className="bg-blue-800 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden 
                hover:-translate-y-0.5 hover:shadow[0_0_15px_rbga(59, 130, 246, 0.4)]"
                > View Projects </a>
                <a href="#contact"
                className="bg-transprent border border-blue-800/50 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden 
                hover:-translate-y-0.5 hover:shadow[0_0_15px_rbga(59, 130, 246, 0.2)] hover:bg-blue-800/50"
                > Contact </a>
            </div>
        </div></RevealOnScroll>
        
    </section>
  )
}

export default Home
