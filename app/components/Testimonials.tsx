"use client"

import { motion } from "framer-motion"
import { FaQuoteLeft } from "react-icons/fa"

export default function Testimonials() {
  const testimonials = [
    {
      name: "",
      position: "",
      content:
        "",
    },
    {
      name: "",
      position: "",
      content:
        "",
    },
    {
      name: "",
      position: "",
      content:
        "",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What People Say
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FaQuoteLeft className="text-4xl mb-4 text-blue-500" />
            <p className="mb-4">{testimonial.content}</p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-400">{testimonial.position}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

