"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const skillData = [
  { skill: "Python", proficiency: 95 },
  { skill: "TensorFlow", proficiency: 85 },
  { skill: "Django", proficiency: 80 },
  { skill: "SQL", proficiency: 90 },
  { skill: "JavaScript", proficiency: 75 },
]

export default function SkillVisualization() {
  const chartRef = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.5 })
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  })

  useEffect(() => {
    if (isInView) {
      setChartData({
        labels: skillData.map((item) => item.skill),
        datasets: [
          {
            label: "Proficiency",
            data: skillData.map((item) => item.proficiency),
            backgroundColor: "rgba(54, 162, 235, 0.8)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      })
    }
  }, [isInView])

  const options: ChartOptions<"bar"> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
    },
  }

  return (
    <section className="py-20 bg-gray-800" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skill Proficiency</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {isInView && <Bar ref={chartRef} data={chartData} options={options} />}
        </motion.div>
      </div>
    </section>
  )
}

