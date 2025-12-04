import profile from "../assets/Noman.jpg";
import { Monitor, Server, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-8 bg-background-light dark:bg-background-dark"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-20">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full glow-effect"></div>
              <img
                src={profile}
                alt="Portrait of Abdullah al Noman"
                className="w-full h-full object-cover rounded-full p-2 relative z-10"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              I'm <span className="text-primary">Abdullah Al Noman</span>
            </p>

            <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
              Passionate MERN Stack Developer focused on building modern,
              responsive, and user-friendly web applications. Currently growing
              my skills in React, Node.js, Express, MongoDB & next-gen tools.
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
              I love turning real-world ideas into clean, functional, and
              scalable digital products — from UI design to backend logic.
            </p>

            <div className="mt-8 space-y-4 max-w-md mx-auto lg:mx-0">
              {[
                {
                  icon: <Monitor className="w-8 h-8 text-primary" />,
                  text: "Full-Stack Web Development (MERN)",
                },
                {
                  icon: <Server className="w-8 h-8 text-primary" />,
                  text: "REST API Design & Backend Logic",
                },
                {
                  icon: <Lightbulb className="w-8 h-8 text-primary" />,
                  text: "Scalable Solutions & Problem Solving",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center p-4 border border-purple-500/40 bg-purple-100 dark:bg-purple-900/20 rounded-lg transition-transform hover:scale-105"
                >
                  <span>{item.icon}</span>
                  <span className="ml-4 text-gray-800 dark:text-white font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
