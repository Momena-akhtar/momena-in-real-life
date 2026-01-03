import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import "./index.css";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Experiences from "./components/sections/Experiences";
import Footer from "./components/sections/Footer";
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return <>
  <div className={`min-h-screen transition-opacity duration-700 bg-black text-gray-100 ` }>
  <Navbar menuOpen = { menuOpen } setMenuOpen = { setMenuOpen }/>
  <MobileMenu menuOpen = { menuOpen } setMenuOpen = { setMenuOpen }/>
  <Home />
  <About />
  <Experiences />
  <Projects />
  <Contact />
  <Footer />
  </div>
   </>;
};

export default App;
