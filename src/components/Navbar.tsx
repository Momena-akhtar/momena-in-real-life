import { useEffect, useState } from "react";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experiences", label: "Experiences" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40">
      <div className="bg-black/90 backdrop-blur-sm border border-[#181818] rounded-full shadow-2xl px-6 py-3">
        <div className="flex items-center">
          <button
            className="md:hidden text-gray-300 hover:text-white mr-4"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            &#9776;
          </button>
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href.substring(1))}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeLink === link.href.substring(1)
                    ? "bg-white text-black"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
