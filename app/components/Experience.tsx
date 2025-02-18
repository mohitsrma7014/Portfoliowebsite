"use client"

import { motion } from "framer-motion"
import { FaCode, FaChartLine, FaGraduationCap, FaLaptopCode } from "react-icons/fa"

const experiences = [
  {
    title: "Developer and Data Scientist",
    company: "SSB Engineers Pvt. Ltd.",
    location: "Alwar, Rajasthan",
    period: "April 2024 - Present",
    type: "Full-time",
    description: "Developing data-driven solutions and automating systems for production and quality control.",
    responsibilities: [
      "Developed live reporting dashboards for production and quality control.",
      "Automated inventory management and production planning systems.",
      "Designed a traceability system for real-time tracking of materials and processes.",
      "Centralized data systems for seamless cross-data sharing within the company.",
      "Created a local network system for internal accessibility.",
    ],
    technologies: ["Python", "Django", "Data Science", "Automation", "Dashboards", "Networking"],
    icon: FaLaptopCode,
  },
  {
    title: "Backend Developer",
    company: "Auring Technologies",
    location: "Gurugram",
    period: "January 2024 - April 2024",
    type: "Full-time",
    description: "Worked on AI integration and automation projects.",
    responsibilities: [
      "Integrated APIs for AI models, LLMs, and AI agents.",
      "Designed workflows for AI-powered automation.",
      "Worked on OpenAI-based projects for intelligent systems.",
    ],
    technologies: ["Python", "API Integration", "AI", "LLMs", "OpenAI", "Automation"],
    icon: FaCode,
  },
  {
    title: "Data Science Intern",
    company: "National Engineering Industries Ltd. (NBC CK Birla Group)",
    location: "Jaipur, Rajasthan",
    period: "September 2023 - November 2023",
    type: "Internship",
    description: "Gained hands-on experience in data science and analytics.",
    responsibilities: [
      "Developed a live reporting dashboard for production analytics.",
      "Worked with Django to automate data collection and reporting.",
      "Gained hands-on experience in data science, Python, and AI-powered analytics.",
    ],
    technologies: ["Python", "Django", "Data Science", "Analytics", "Dashboards"],
    icon: FaChartLine,
  },
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4 mb-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My journey in data science and machine learning, featuring internships and full-time roles that have shaped my
          professional growth and expertise.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className={`flex flex-col md:flex-row gap-8 items-center md:items-start relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900 z-10" />

              <div className="w-full md:w-5/12">
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <exp.icon className="text-3xl text-blue-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.period}</p>
                      {exp.location && <p className="text-gray-400 text-sm">{exp.location}</p>}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-blue-300">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-blue-300">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey in engineering and artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold">B.Tech in Mechanical Engineering</h3>
                <p className="text-blue-400">Bikaner Technical University</p>
                <p className="text-gray-400">2020 - 2024</p>
              </div>
            </div>
            <p className="text-gray-300">
              Focused on core mechanical principles with additional emphasis on computational methods and data analysis
              in engineering applications. Completed several projects combining mechanical engineering concepts with
              data science techniques.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <FaCode className="text-3xl text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
            </div>
            <ul className="space-y-2">
              <li>
                <p className="font-semibold">Minor in Artificial Intelligence</p>
                <p className="text-blue-400">IIT Ropar</p>
                <p className="text-gray-400">(2024 – Dropped, but gained extensive AI knowledge)</p>
              </li>
              <li>
                <p className="font-semibold">100 Days of Code: The Complete Python Pro Bootcamp</p>
                <p className="text-blue-400">Udemy</p>
                <p className="text-gray-400">2024</p>
              </li>
              <li>
                <p className="font-semibold">Machine Learning with Hands-on Projects</p>
                <p className="text-blue-400">InternPi</p>
                <p className="text-gray-400">2024</p>
                <p className="text-gray-300">
                  Worked on data cleaning, preprocessing, analytics, and ML model training across 4 projects.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

