"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/mohitsrma", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/mohitsrma", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/mohitsrma", label: "Twitter" },
  ]

  const contactInfo = [
    { icon: FaEnvelope, info: "mohitsrma7014@gmail.com" },
    { icon: FaPhone, info: "+91 7014 028949" },
    { icon: FaMapMarkerAlt, info: "Alwar, Rajasthan, India" },
  ]

  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mohit Sharma</h3>
            <p className="text-gray-300 mb-4">Data Analyst | Machine Learning Engineer | Python Developer</p>
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
                  <social.icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`}>
                    <motion.span
                      className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <item.icon className="mr-2" />
                  <span>{item.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">© {currentYear} Mohit Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

