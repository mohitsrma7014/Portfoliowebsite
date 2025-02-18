import type { Metadata } from "next"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import BackToTop from "./components/BackToTop"
import Freelance from "./components/Freelance"

export const metadata: Metadata = {
  title: "Mohit Sharma - Data Analyst & Machine Learning Engineer",
  description: "Explore my portfolio showcasing data analysis, machine learning, and AI-driven solutions.",
  keywords: "Data Analyst, Machine Learning Engineer, Python, Django, Portfolio, AI, Machine Learning, Data Science",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
      <Hero />
      </section>
      <section id="about">
      <About />
      </section>
      <section id="skills">
      <Skills />
      </section>
      <section id="projects">
      <Projects />
      </section>
      <section id="experience">
      <Experience />
      </section>
      <Testimonials />
      <section id="freelance">
      <Freelance />
      </section>
      <section id="contact">
      <Contact />
      </section>
      <BackToTop />
    </main>
  )
}

