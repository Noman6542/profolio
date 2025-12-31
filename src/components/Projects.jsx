import { useState } from 'react';
import finease from '../assets/finease.png'
import warmpaws from '../assets/warmpaws.png'
import nextshop from '../assets/nextshop.png'
import smarthome from '../assets/Smart-home.png'
const ProjectCard = ({ title, description, image, repoLink, demoLink }) => (
  <div className="bg-white/30 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl shadow-gray-900/5 dark:shadow-black/20 backdrop-blur-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1">
    <div className="mb-4">
      <img
        src={image}
        alt={`Screenshot of ${title}`}
        className="rounded-lg w-full aspect-video object-cover border border-gray-200 dark:border-gray-700"
      />
    </div>
    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
      {description}
    </p>
    <div className="flex items-center justify-between gap-4 mt-auto">
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center py-2 px-4 rounded-full text-sm font-semibold border border-gray-300 dark:border-gray-700 bg-white/20 dark:bg-black/10 text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center gap-2"
      >
        Repository <span className="material-icons-outlined text-base">loop</span>
      </a>
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center py-2 px-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-md shadow-fuchsia-500/20 transition-all duration-300 ease-in-out hover:scale-105 flex items-center justify-center gap-2"
      >
        Demo <span className="material-icons-outlined text-base">play_arrow</span>
      </a>
    </div>
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Smart-Home',
      description: 'Smart Home is a platform for booking and managing home decoration services with secure payments.',
      image: smarthome,
      repoLink: 'https://github.com/Noman6542/Smart-Home',
      demoLink: 'https://smart-home-28254.web.app/',
    },
    {
      title: 'FinEase',
      description: 'A modern finance management tool to track expenses, budgets, and savings efficiently.',
      image: finease,
      repoLink: 'https://github.com/Noman6542/FinEase',
      demoLink: 'https://finease-74f4b9.netlify.app/',
    },
    {
      title: 'WarmPaws',
      description: 'A pet care platform connecting pet owners with services like grooming, training, and vet appointments.',
      image: warmpaws,
      repoLink: 'https://github.com/Noman6542/WarmPaws',
      demoLink: 'https://animated-bavarois-3a5789.netlify.app/',
    },
    {
      title: 'NextShop',
      description: 'A full-featured e-commerce platform with shopping cart, product categories, and secure checkout.',
      image: nextshop,
      repoLink: 'https://github.com/Noman6542/NextShop',
      demoLink: 'https://next-shop-psi-ten.vercel.app/',
    },
    {
      title: 'Admission Bridge',
      description: 'A modern web platform for exploring international universities and applying based on GPA and IELTS eligibility, built with Next.js, React, Node.js, and MySQL.',
      image: nextshop,
      repoLink: 'https://github.com/Noman6542/The-Admission-Bridge',
      demoLink: 'https://the-admission-bridge-two.vercel.app/',
    }
  ];

  const filteredProjects = projects.filter(p => filter === 'all' || p.type === filter);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            My Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-400 py-12">
              No projects found for this category yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
