import { useNavigate } from "react-router-dom";
import heroImg from "../assets/sanidhya-hero.png";
import Skills from "./Skills";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white flex flex-col items-center px-4 py-16 transition-colors duration-300">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 mx-auto">
        {/* LEFT */}
        <div>
          <h2 className="text-xl mb-2">
            Hello<span className="text-red-500">.</span>
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            I’m{" "}
            <span className="text-blue-600 dark:text-blue-400">Sanidhya</span>
          </h1>
          <h3 className="text-2xl font-semibold mb-6">Software Developer</h3>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded text-white shadow transition"
            >
              Got a project?
            </button>
            <a
              href="/Sanidhya_resume.pdf"
              className="border border-black dark:border-white px-5 py-2 rounded transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              My resume
            </a>
          </div>
        </div>
        {/* RIGHT */}
        <div className="relative flex justify-center md:justify-end">
          {/* Soft blurred glow behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-pink-500 to-orange-500 blur-[100px] opacity-50 z-0"></div>

          {/* Actual transparent image in front */}
          <img
            src={heroImg}
            alt="Sanidhya"
            className="relative z-10 w-[280px] sm:w-[340px] h-auto"
          />
        </div>
      </div>

      {/* SKILLS COMPONENT */}
      <Skills />
    </section>
  );
};

export default Hero;
