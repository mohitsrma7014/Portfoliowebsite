"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Hi, I'm Mohit Sharma"
  const [rotatingText, setRotatingText] = useState("Data Analyst")
  const rotatingTexts = ["Data Analyst", "Machine Learning Engineer", "Python Developer"]

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    let rotateIndex = 0
    const rotateInterval = setInterval(() => {
      rotateIndex = (rotateIndex + 1) % rotatingTexts.length
      setRotatingText(rotatingTexts[rotateIndex])
    }, 3000)

    return () => {
      clearInterval(typingInterval)
      clearInterval(rotateInterval)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-20 px-4">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>
      <div className="z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG20230410130254%5B385%5D-IT5DgukH5Y0kIIfL2lJXHs5noe4OrM.jpeg"
              alt="Mohit Sharma"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-white shadow-lg"
              priority
            />
          </div>
        </motion.div>
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {text}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {rotatingText}
          </span>
        </motion.p>
        <motion.p
          className="text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Passionate about leveraging data to drive insights and create innovative solutions. With expertise in Python,
          machine learning, and data analysis, I transform complex data into actionable strategies for businesses. As
          both a full-time Data Scientist and a freelance ML Engineer, I bring a diverse range of experience to every
          project.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <ScrollLink to="contact" smooth={true} duration={500}>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-semibold shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(66, 153, 225, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500}>
            <motion.button
              className="px-8 py-3 bg-transparent border-2 border-purple-500 rounded-full text-lg font-semibold cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(159, 122, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
          </ScrollLink>
        </motion.div>
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/mohitsrma"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#0077B5" }}
            className="cursor-pointer"
          >
            <FaLinkedin className="text-3xl" />
          </motion.a>
          <motion.a
            href="https://github.com/mohitsrma7014"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#6e5494" }}
            className="cursor-pointer"
          >
            <FaGithub className="text-3xl" />
          </motion.a>
          <motion.a
            href="https://twitter.com/mohitsrma7014"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#1DA1F2" }}
            className="cursor-pointer"
          >
            <FaTwitter className="text-3xl" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

