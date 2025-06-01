interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const MobileMenu = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  return (
    <div
      className={`fixed top-0 max-w-screen left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out 
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto "
            : "h-0 opacity-0 pointer-events-none"
        }
        `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-8 text-white text-2xl focus:outline-none cursor-pointer sm:text-medium"
        aria-label="Close"
      >
        &times;
      </button>
      <a
        href="#home"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
        onClick={() => setMenuOpen(false)}
      >
        {" "}
        Home{" "}
      </a>
      <a
        href="#about"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
      >
        {" "}
        About{" "}
      </a>
      <a
        href="#experiences"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
      >
        {" "}
        Experiences{" "}
      </a>
      <a
        href="#projects"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
      >
        {" "}
        Projects{" "}
      </a>
      <a
        href="#contact"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `}
      >
        {" "}
        Contact{" "}
      </a>
    </div>
  );
};

export default MobileMenu;
