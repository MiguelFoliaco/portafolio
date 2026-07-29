import './App.css'
import { FolderOpen, Mail, Package2 } from 'lucide-react'
import { ContactSection } from './components/ContactSection'
import { DesktopIcon } from './components/DesktopIcon'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { Taskbar } from './components/Taskbar'

function App() {
  return (
    <div className="min-h-screen bg-(--background) text-(--text)">
      <div className="crt-overlay" />
      <div className="relative min-h-screen p-4 md:p-8">
        <div className="hidden md:flex flex-col gap-6 fixed left-4 top-4 z-0 md:left-8 md:top-8">
          <DesktopIcon href="#projects" label="PROJECTS.EXE" icon={<FolderOpen size={30} />} />
          <DesktopIcon href="#skills" label="SKILLS.DLL" icon={<Package2 size={30} />} />
          <DesktopIcon href="#contact" label="MAIL.APP" icon={<Mail size={30} />} />
        </div>

        <main className="mx-auto flex max-w-300 flex-col gap-12 mt-12 mb-24">
          <HeroSection />
          <ProjectsSection />
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <SkillsSection />
            <ContactSection />
          </div>
        </main>
      </div>

      <Taskbar />
    </div>
  )
}

export default App
