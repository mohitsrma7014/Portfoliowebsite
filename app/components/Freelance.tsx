"use client"

import { motion } from "framer-motion"
import { FaChartLine, FaRobot, FaCode, FaLaptopCode, FaDatabase, FaCloud, FaChartBar, FaBrain } from "react-icons/fa"

const freelanceServices = [
  {
    icon: FaChartLine,
    title: "Data Analysis & Visualization",
    description:
      "Transform raw data into actionable insights with comprehensive analysis and compelling visualizations.",
  },
  {
    icon: FaRobot,
    title: "Machine Learning Solutions",
    description: "Develop custom ML models to solve complex business problems and drive data-driven decision making.",
  },
  {
    icon: FaCode,
    title: "AI-Powered Web Applications",
    description:
      "Create intelligent web applications that leverage the power of AI to deliver unique user experiences.",
  },
  {
    icon: FaLaptopCode,
    title: "Process Automation",
    description:
      "Streamline operations with intelligent automation solutions, increasing efficiency and reducing errors.",
  },
  {
    icon: FaDatabase,
    title: "Big Data Processing",
    description:
      "Design and implement scalable data processing pipelines for handling large volumes of data efficiently.",
  },
  {
    icon: FaCloud,
    title: "Cloud-based ML Infrastructure",
    description:
      "Set up and manage cloud-based machine learning infrastructure for scalable and cost-effective AI solutions.",
  },
  {
    icon: FaChartBar,
    title: "Business Intelligence Dashboards",
    description:
      "Create interactive and insightful BI dashboards to help businesses monitor KPIs and make data-driven decisions.",
  },
  {
    icon: FaBrain,
    title: "Natural Language Processing",
    description:
      "Implement NLP solutions for text analysis, sentiment analysis, chatbots, and language understanding tasks.",
  },
]

const testimonials = [
  {
    name: "",
    company: "",
    content:
      "",
  },
  {
    name: "",
    company: "",
    content:
      "",
  },
  {
    name: "",
    company: "",
    content:
      "",
  },
]

export default function Freelance() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Freelance Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {freelanceServices.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <service.icon className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.h3
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Client Testimonials
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-blue-400">{testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Ready to start a project?</h3>
        <p className="text-gray-300 mb-6">
          I'm always excited to take on new challenges and help businesses leverage the power of data and AI. Let's
          discuss how we can work together to achieve your goals.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  )
}

