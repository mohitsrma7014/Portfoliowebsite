"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference" as const,
    },
  }

  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")

  useEffect(() => {
    const handleTextEnter = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName.toLowerCase() === "a" ||
        (e.target as HTMLElement).tagName.toLowerCase() === "button"
      ) {
        textEnter()
      }
    }

    const handleTextLeave = () => {
      textLeave()
    }

    document.addEventListener("mouseover", handleTextEnter)
    document.addEventListener("mouseout", handleTextLeave)

    return () => {
      document.removeEventListener("mouseover", handleTextEnter)
      document.removeEventListener("mouseout", handleTextLeave)
    }
  }, [textEnter, textLeave]) // Added textEnter and textLeave to dependencies

  return <motion.div className="cursor" variants={variants} animate={cursorVariant} />
}

