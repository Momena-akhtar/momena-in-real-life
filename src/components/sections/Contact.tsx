import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";

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
        setFormData({name: "", email:"", message:""})
        console.log(result)
      })
      .catch(() => {
        alert("Oops! Somethin went wrong. PLease try again later.");
      });
  };
  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center py-10 medium:py-20"
    >
      <RevealOnScroll>
        <div className="max-w-[70%] mx-auto px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Get in touch.
          </h2>
          <form action="" className="space-y-6 " onSubmit={handleSubmit}>
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
                placeholder="Enter your name.."
                className="w-full border border-white/10 rounded-xl px-4 py-3 transition focus:outline-none focus:border-blue-800/50"
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
                placeholder="example@gmail.com"
                className="w-full border border-white/10 rounded-xl px-4 py-3 transition focus:outline-none focus:border-blue-800/50"
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
                placeholder="Enter your message.."
                className="w-full border border-white/10 rounded-xl px-4 py-3 transition focus:outline-none focus:border-blue-800/50"
              />
            </div>
            <button
              className="w-full border border-blue-800 text-white py-3 px-6 rounded-full font-medium transition 
            relative overflow-hidden hover:-translate-y-0.5 cursor-pointer hover:shadow[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-800/50 hover:border-blue-800/50
            "
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
