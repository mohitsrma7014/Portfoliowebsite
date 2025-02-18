"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  FaCode,
  FaChartBar,
  FaBrain,
  FaGraduationCap,
  FaLaptopCode,
  FaUsers,
  FaProjectDiagram,
  FaBookOpen,
} from "react-icons/fa"

export default function About() {
  const highlights = [
    {
      icon: FaLaptopCode,
      title: "Technical Skills",
      description: "Python, Machine Learning, Data Analysis, and Full-Stack Development",
    },
    {
      icon: FaChartBar,
      title: "Data-Driven Solutions",
      description: "Building AI-powered tools for business efficiency and decision-making",
    },
    {
      icon: FaProjectDiagram,
      title: "Project Experience",
      description: "Worked on diverse projects in data analytics and machine learning",
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "Experience working with cross-functional teams on technical projects",
    },
    {
      icon: FaProjectDiagram,
      title: "Freelance Projects",
      description: "Successfully delivered data science and ML solutions to diverse clients",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A passionate engineer combining mechanical expertise with modern data science
        </p>
        <p>
          In addition to my full-time role, I also work as a freelance Data Scientist and ML Engineer. This allows me to
          tackle diverse projects across various industries, further expanding my skill set and bringing innovative
          solutions to a wider range of clients.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-6"></div>
            <div className="relative z-10 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG20230410130254%5B385%5D-IT5DgukH5Y0kIIfL2lJXHs5noe4OrM.jpeg"
                alt="Mohit Sharma"
                width={400}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Data Scientist & ML Engineer
          </h3>
          <div className="space-y-4 text-gray-300">
            <p>
              With over a year of experience as a Developer and Data Scientest at SSB Pvt. Ltd., I specialize in data
              analysis, machine learning, and Python development. My role involves building data-driven solutions,
              optimizing processes, and developing automation tools to enhance business efficiency.
            </p>
            <p>
              Previously, I gained hands-on experience at NBC Jaipur and Auring Technologies, working on predictive
              modeling, data-driven decision-making, and AI-powered solutions for real-world challenges.
            </p>
            <p>
              I have a strong foundation in machine learning, data analytics, and web application development, with a keen
              interest in leveraging AI to optimize industrial processes and drive innovation. My goal is to create
              intelligent, scalable solutions that bridge the gap between data science and business strategy.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <item.icon className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

