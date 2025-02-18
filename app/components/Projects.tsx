"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    id: 1,
    title: "Book Review System",
    description:
      "Designed a backend system allowing CRUD operations for books, user authentication, and rating system.",
    image: "/placeholder.svg",
    githubLink: "https://github.com/mohitsrma7014/Book_Review_Django_app",
    technologies: ["Django", "REST Framework", "PostgreSQL"],
    challenges: "Ensuring cross-functional API access and securing endpoints.",
    solutions: "Implemented robust authentication and authorization mechanisms using Django REST Framework.",
    impact: "Created a scalable and secure backend for a book review platform.",
  },
  {
    id: 2,
    title: "Startup Website (3D Elements)",
    description: "Developed a modern, interactive startup website using Next.js, Node.js, and TypeScript.",
    image: "/placeholder.svg",
    githubLink: "https://github.com/mohitsrma7014/Startupwebsite",
    liveLink: "https//lavainnovate.vercel.app",
    technologies: ["Next.js", "Node.js", "TypeScript", "Three.js", "Vercel"],
    challenges: "Implementing 3D UI elements and ensuring smooth performance.",
    solutions: "Utilized Three.js for 3D elements and optimized for performance using Next.js.",
    impact: "Created a visually striking and performant website deployed on Vercel.",
  },
  {
    id: 3,
    title: "PortFolio Website",
    description: "Developed a modern, interactive portfolio website using Next.js, Node.js, and TypeScript.",
    image: "/placeholder.svg",
    githubLink: "https://github.com/mohitsrma7014/Portfoliowebsite",
    liveLink: "https://mohitsharmainfo.vercel.app",
    technologies: ["Next.js", "Node.js", "TypeScript", "Three.js", "Vercel"],
    
  },
  {
    id: 4,
    title: "AI-Powered Stock Trading Recommendation Platform",
    description: "Built a real-time stock trading recommendation system using Python, Django, and JavaScript.",
    image: "/placeholder.svg",
    githubLink: "https://github.com/mohitsrma7014/Stock-Trading-Recommendation-System",
    technologies: ["Python", "Django", "JavaScript", "REST APIs", "News API", "TextBlob"],
    challenges: "Integrating multiple data sources and providing real-time recommendations.",
    solutions: "Implemented efficient data processing pipelines and sentiment analysis using TextBlob.",
    impact:
      "Developed a platform that provides personalized stock trading insights based on real-time data and sentiment analysis.",
  },
]

export default function Projects() {
  //const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 h-20 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-500 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-blue-500 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => console.log("Project details:", project)}
                    className="text-blue-500 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                  >
                    Learn More
                  </button>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub size={20} />
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />} */}
    </section>
  )
}

