const SkillItem = ({ name, icon, color, level }) => {
  const dots = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="flex items-center space-x-4 group">
      <div
        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700/[0.2] shadow-lg transition-transform duration-300 group-hover:scale-110"
        style={{ '--shadow-color': color }}
      >
        <img src={icon} alt={`${name} icon`} className="w-7 h-7" />
      </div>

      <div className="flex items-center space-x-2">
        {dots.map((dot) => (
          <span
            key={dot}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
              dot <= level
                ? 'scale-100'
                : 'bg-gray-300 dark:bg-gray-700 scale-90'
            }`}
            style={{
              background: dot <= level ? `linear-gradient(45deg, ${color}, #fff)` : undefined,
            }}
          ></span>
        ))}
      </div>
      <p className="ml-4 text-gray-800 dark:text-white font-medium">{name}</p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      category: 'Frontend & Frameworks',
      items: [
        { name: 'HTML5', level: 9, color: '#E44D26', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
        { name: 'CSS3', level: 8, color: '#264DE4', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
        { name: 'JavaScript', level: 8, color: '#F0DB4F', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
        { name: 'ReactJS', level: 8, color: '#61DAFB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        { name: 'NextJS', level: 7, color: '#000000', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg' },
      ],
    },
    {
      category: 'Backend & Database',
      items: [
        { name: 'NodeJS', level: 8, color: '#339933', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
        { name: 'ExpressJS', level: 7, color: '#000000', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
        { name: 'MongoDB', level: 7, color: '#47A248', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
        { name: 'Firebase', level: 6, color: '#FFCA28', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg' },
        { name: 'Tailwind CSS', level: 7, color: '#38B2AC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((category) => (
            <div key={category.category} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {category.category}
              </h3>
              {category.items.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
