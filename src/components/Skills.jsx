import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiCplusplus, SiC } from "react-icons/si";

import { motion } from "framer-motion";

const skills = {
  languages: [
    { name: "Java", icon: <FaJava className="text-red-600" />, level: 85 },
    { name: "C++", icon: <SiCplusplus className="text-blue-500" />, level: 80 },
    { name: "C", icon: <SiC className="text-gray-500" />, level: 75 },
    {
      name: "Python",
      icon: <FaPython className="text-yellow-400" />,
      level: 70,
    },
  ],
  frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" />, level: 85 },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
      level: 80,
    },
    { name: "React", icon: <FaReact className="text-cyan-400" />, level: 80 },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400" />,
      level: 75,
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      level: 75,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" />,
      level: 70,
    },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 85 },
    { name: "GitHub", icon: <FaGithub className="text-white" />, level: 80 },
  ],
};

const barVariants = {
  hidden: { width: 0 },
  visible: (custom) => ({
    width: `${custom}%`,
    transition: { duration: 1, delay: 0.2 },
  }),
};

const SkillGroup = ({ title, list }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="w-full sm:w-1/2 lg:w-1/4 p-4"
  >
    <h3 className="text-xl font-bold mb-4 border-b pb-2">{title}</h3>
    {list.map((skill) => (
      <div key={skill.name} className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">{skill.icon}</span>
          <span className="font-medium">{skill.name}</span>
        </div>
        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded h-2 overflow-hidden">
          <motion.div
            className="bg-blue-500 h-2 rounded"
            custom={skill.level}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={barVariants}
          />
        </div>
      </div>
    ))}
  </motion.div>
);

const Skills = () => {
  return (
    <section className="mt-20 px-4 w-full max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center">
        <SkillGroup title="Languages" list={skills.languages} />
        <SkillGroup title="Frontend" list={skills.frontend} />
        <SkillGroup title="Backend" list={skills.backend} />
        <SkillGroup title="Tools & Platforms" list={skills.tools} />
      </div>
    </section>
  );
};

export default Skills;
