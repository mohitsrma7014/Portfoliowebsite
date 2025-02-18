"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import emailjs from "emailjs-com"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "mohitsrma7014@gmail.com",
        },
        "YOUR_USER_ID",
      )
      toast.success("Message sent successfully!")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    }
  }

  const contactInfo = [
    { icon: FaEnvelope, info: "mohitsrma7014@gmail.com", label: "Email" },
    { icon: FaPhone, info: "+91 7014 028949", label: "Phone" },
    { icon: FaMapMarkerAlt, info: "Alwar, Rajasthan, India", label: "Location" },
  ]

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/mohitsrma", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/mohitsrma", label: "GitHub" },
    { icon: FaTwitter, href: "https://twitter.com/mohitsrma", label: "Twitter" },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-4 mb-8">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <item.icon className="text-2xl mr-4 text-blue-500" />
                <span>
                  <strong>{item.label}:</strong> {item.info}
                </span>
              </li>
            ))}
          </ul>
          <h3 className="text-2xl font-semibold mb-4">Connect with Me</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                aria-label={social.label}
              >
                <social.icon className="text-3xl" />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  )
}

