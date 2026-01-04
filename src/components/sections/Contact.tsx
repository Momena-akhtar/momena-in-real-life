import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
        console.log(result);
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again later.");
      });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/Momena-akhtar",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/momena-a-b9462a348/",
    },
    {
      name: "Email",
      icon: faEnvelope,
      url: "mailto:momena.akhtar19@gmail.com",
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Get in touch.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-2xl border border-white/10 p-8">
              <h3 className="text-xl font-bold mb-6">Send me a message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="Your name"
                    className="w-full border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/50 transition focus:outline-none focus:border-white/20"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="your.email@example.com"
                    className="w-full border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/50 transition focus:outline-none focus:border-white/20"
                  />
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    placeholder="Your message..."
                    className="w-full border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/50 transition focus:outline-none focus:border-white/20 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full  border border-white/10 text-white py-3 px-6 rounded-full font-medium transition cursor-pointer hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Connect with me</h3>
                <p className="text-white/50 mb-6">
                  Feel free to reach out through any of these platforms. I'm always open to discussing new projects, opportunities, or getting to know more about you
                </p>
              </div>

              <div className="space-y-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 p-4 rounded-xl border border-white/10  transition-all hover:border-white/20 group`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition">
                      <FontAwesomeIcon icon={link.icon} className="text-2xl" />
                    </div>
                    <div>
                      <p className="font-semibold">{link.name}</p>
                      <p className="text-sm text-gray-400">
                        {link.name === "Email" ? "momena.akhtar19@gmail.com" : `@${link.name}`}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;