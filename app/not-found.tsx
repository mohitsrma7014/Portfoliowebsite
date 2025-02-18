"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <motion.h1
        className="text-9xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-2xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Oops! This page doesn't exist.
      </motion.p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href="/" passHref>
          <motion.a
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-semibold shadow-lg"
            whileHover={{ boxShadow: "0 0 15px rgba(66, 153, 225, 0.5)" }}
          >
            Back to Home
          </motion.a>
        </Link>
      </motion.div>
    </div>
  )
}

