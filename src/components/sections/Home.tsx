import RevealOnScroll from "../RevealOnScroll"
const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll><div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-4xl font-bold mb-6 leading-right ">
                Hi, I'm Momena Akhtar.
            </h1>
            <p className="text-white/50 text-medium mb-8 max-w-lg mx-auto">
                Helping teams deliver end-to-end web solutions built on top of AI/LLMs focused on rapid iteration, scalability and technical SEO.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects"
                className="bg-white text-black py-3 px-6 rounded-full font-medium transition relative overflow-hidden 
                hover:shadow[0_0_15px_rbga(59, 130, 246, 0.4)]"
                > View Projects </a>
                <a href="#contact"
                className="bg-transparent border border-white/10 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden 
                hover:shadow[0_0_15px_rbga(59, 130, 246, 0.2)] "
                > Contact </a>
            </div>
        </div></RevealOnScroll>
        
    </section>
  )
}

export default Home
