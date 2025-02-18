"use client"

import { motion } from "framer-motion"
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaCode,
  FaBrain,
  FaRobot,
  FaDocker,
  FaServer,
  FaLightbulb,
  FaJs,
  FaNodeJs,
  FaLanguage,
  FaPlug,
  FaGitAlt,
  FaGithub,
  FaFilter,
  FaChartBar,
  FaChartLine,
  FaCloud,
} from "react-icons/fa"
import { SiDjango, SiTensorflow, SiMysql, SiTypescript, SiPostgresql, SiVercel, SiScikitlearn } from "react-icons/si"

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "Django", icon: SiDjango },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-learn", icon: SiScikitlearn },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    name: "AI & Machine Learning",
    skills: [
      { name: "NLP", icon: FaLanguage },
      { name: "AI Agents", icon: FaRobot },
      { name: "Data Processing", icon: FaDatabase },
      { name: "Model Training", icon: FaBrain },
      { name: "Sentiment Analysis", icon: FaChartBar },
    ],
  },
  {
    name: "Web Development & APIs",
    skills: [
      { name: "REST Framework", icon: FaServer },
      { name: "API Integration", icon: FaPlug },
      { name: "Backend Development", icon: FaCode },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Docker", icon: FaDocker },
      { name: "Cloud Deployment", icon: FaCloud },
    ],
  },
  {
    name: "Data Analytics",
    skills: [
      { name: "Data Preprocessing", icon: FaFilter },
      { name: "Data Visualization", icon: FaChartBar },
      { name: "Predictive Analytics", icon: FaChartLine },
    ],
  },
]

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-50 z-0"></div>
      <div className="relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.name}>
              <motion.h3
                className="text-2xl font-semibold mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                {category.name}
              </motion.h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center text-center w-full max-w-[200px]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + index * 0.05 }}
                  >
                    <skill.icon className="text-4xl mb-3 text-blue-500" />
                    <h4 className="text-lg font-medium">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Additional Expertise</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <li className="flex items-center">
              <FaCode className="mr-2 text-blue-500" />
              Strong analytical and problem-solving abilities
            </li>
            <li className="flex items-center">
              <FaCode className="mr-2 text-blue-500" />
              Excellent communication and presentation skills
            </li>
            <li className="flex items-center">
              <FaCode className="mr-2 text-blue-500" />
              Team collaboration and leadership
            </li>
            <li className="flex items-center">
              <FaCode className="mr-2 text-blue-500" />
              Project management and organization
            </li>
            <li className="flex items-center">
              <FaCode className="mr-2 text-blue-500" />
              Adaptability and quick learning of new technologies
            </li>
            <li className="flex items-center">
              <FaCode className="mr-2 text-blue-500" />
              Data privacy and security best practices
            </li>
            <li className="flex items-center">
              <FaCode className="mr-2 text-blue-500" />
              Agile and Scrum methodologies
            </li>
            <li className="flex items-center">
              <FaCode className="mr-2 text-blue-500" />
              Technical writing and documentation
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            I'm committed to staying up-to-date with the latest advancements in data science, machine learning, and
            software development. Currently, I'm expanding my knowledge in:
          </p>
          <ul className="inline-block text-left text-gray-300">
            {[
              "Advanced Deep Learning techniques",
              "Reinforcement Learning",
              "MLOps and AI model deployment at scale",
              "Quantum Computing for Machine Learning",
              "Ethical AI and Responsible Machine Learning",
              "Serverless Architecture and Microservices",
              "Advanced Natural Language Processing techniques",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <FaLightbulb className="mr-2 text-yellow-500" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

