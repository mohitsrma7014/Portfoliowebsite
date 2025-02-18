"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-900 text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to leverage these skills for your next big idea?
        </motion.h2>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/contact" passHref>
            <motion.a
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full text-lg shadow-lg"
              whileHover={{ boxShadow: "0 0 15px rgba(66, 153, 225, 0.5)" }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(66, 153, 225, 0)",
                  "0 0 15px rgba(66, 153, 225, 0.5)",
                  "0 0 0 rgba(66, 153, 225, 0)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              }}
            >
              Hire Me
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

