import Header from "../components/skills/Header"
import Skills from "../components/Skills"
import CTASection from "../components/skills/CTASection"
import SkillsBackground from "../components/SkillsBackground"

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <SkillsBackground />
      <div className="relative z-10">
        <Header />
        <Skills />
        <CTASection />
      </div>
    </main>
  )
}

