"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function ProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 0, 0, 0.3)" }}
    >
      <motion.div
        className="flip-card-inner"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
      >
        <div className="flip-card-front p-6">
          <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-blue-500 text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-end space-x-4">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-blue-400 transition-colors" />
            </a>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="text-2xl hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
        <div className="flip-card-back p-6">
          <h4 className="text-xl font-bold mb-2">Challenges:</h4>
          <p className="text-gray-300 mb-4">{project.challenges}</p>
          <h4 className="text-xl font-bold mb-2">Solutions:</h4>
          <p className="text-gray-300">{project.solutions}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

