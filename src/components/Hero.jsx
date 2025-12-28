import profile from "../assets/pro.jpg";
// Using the URL from the HTML for now as a placeholder or direct link if possible

const nextjsIcon =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";

const reactIcon =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-6 lg:px-8 overflow-hidden relative"
    >
      <div className="absolute inset-0  radial-gradient-bg pointer-events-none"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I'm Noman
          </h1>
          <p className="text-4xl md:text-5xl font-bold text-primary mt-2">
            Full stack developer
          </p>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 text-lg">
            Crafting modern, responsive, and user-friendly websites with passion
            and precision.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <a
              href="/Resume_of_Noman.pdf"
              download="Md-Abdullah-Al-Noman-Resume.pdf"
              
              className="inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/30"
            >
              Download Resume
              <span className="material-icons-outlined ml-2 text-xl">
                file_download
              </span>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full glow-effect"></div>
            <img
              src={profile}
              alt="Portrait of Abdullah al-noman"
              className="w-full h-full object-cover rounded-full p-2 relative z-10"
            />

            {/* Floating Icons */}
            <div className="tech-icon" style={{ bottom: "10%", left: "-5%" }}>
              <img
                src={nextjsIcon}
                alt="Next.js"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>

            <div className="tech-icon" style={{ bottom: "10%", right: "-5%" }}>
              <img src={reactIcon} alt="React" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
