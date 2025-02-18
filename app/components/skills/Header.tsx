"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <header className="py-20 text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4 neon-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills & Expertise
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Here are the tools and technologies I excel in to solve problems and create solutions.
      </motion.p>
    </header>
  )
}

