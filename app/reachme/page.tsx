import Navbar from "../components/Navbar";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ReachMe() {
  return (
    <div>
      <Navbar />
      <section id="education" className="px-6 sm:px-10 md:px-20 lg:px-52 py-16">
      <h2 className="text-7xl mb-6 text-left text-amber-300">Reach Me</h2>

        <div className="mt-64 lg:text-5xl flex justify-center items-center gap-6 text-3xl text-gray-600 ">
          {[
            { Icon: FaInstagram, link: "https://www.instagram.com/christiandls444/" },
            { Icon: FaGithub, link: "https://github.com/christiandls444" },
            { Icon: FaLinkedin, link: "https://www.linkedin.com/in/christiandls444/" },
            { Icon: FaEnvelope, link: "mailto:christiandelossantos444@gmail.com" },
          ].map(({ Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-4 rounded-full hover:scale-125 ransition-transform duration-300"
            >
              {/* Rotating Circular Border (gradual drawing effect) */}
              <span className="absolute inset-0 w-full h-full border-4 border-transparent rounded-full 
                group-hover:animate-draw-circle transition-all duration-700"></span>

              {/* Icon */}
              <Icon className="m-3"/>
            </a>
          ))}
        </div>


      </section>
    </div>
  );
}
