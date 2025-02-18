"use client"

import { motion } from "framer-motion"
import { FaPython, FaDatabase, FaJs } from "react-icons/fa"
import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiDjango,
  SiGit,
  SiMysql,
  SiJupyter,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"

const programmingSkills = [
  { name: "Python", icon: FaPython },
  { name: "SQL", icon: FaDatabase },
  { name: "JavaScript", icon: FaJs },
]

const dataMLSkills = [
  { name: "Pandas", icon: SiPandas, proficiency: 90 },
  { name: "NumPy", icon: SiNumpy, proficiency: 85 },
  { name: "Scikit-learn", icon: SiScikitlearn, proficiency: 80 },
  { name: "TensorFlow", icon: SiTensorflow, proficiency: 75 },
  { name: "Keras", icon: SiKeras, proficiency: 70 },
]

const webDevTools = [
  { name: "Django", icon: SiDjango, description: "Building robust web applications" },
  { name: "RESTful APIs", icon: TbApi, description: "Designing and implementing APIs" },
  { name: "Git", icon: SiGit, description: "Version control and collaboration" },
  { name: "MySQL", icon: SiMysql, description: "Database management" },
  { name: "Jupyter Notebook", icon: SiJupyter, description: "Data analysis and visualization" },
]

export default function SkillCategories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Programming</h2>
        <div className="flex justify-center space-x-8 mb-16">
          {programmingSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="text-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <skill.icon className="text-6xl mb-2" />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-12 text-center">Data & Machine Learning</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {dataMLSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <skill.icon className="text-4xl mb-2 mx-auto" />
              <p className="mb-2">{skill.name}</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
              <p className="mt-1 text-sm">{skill.proficiency}%</p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-12 text-center">Web Development & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {webDevTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="flip-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front flex flex-col items-center justify-center">
                  <tool.icon className="text-4xl mb-2" />
                  <p>{tool.name}</p>
                </div>
                <div className="flip-card-back flex items-center justify-center p-4">
                  <p className="text-sm">{tool.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

