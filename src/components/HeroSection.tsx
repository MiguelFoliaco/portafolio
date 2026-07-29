import { useState } from 'react'
import { WindowShell } from './WindowShell'
import { Check } from 'lucide-react'

export const HeroSection = () => {

  const [pasted, setPasted] = useState(false)

  const onCopy = async (text: string) => {

    navigator.clipboard.writeText(text)
    setPasted(true)
    setTimeout(() => setPasted(false), 2000)
  }

  return (
    <WindowShell title="SYSTEM_INFO.TXT" className="max-w-2xl mx-auto w-full z-10">
      <div className="p-8 flex flex-col md:flex-row items-center gap-8 bg-white">
        <img
          alt="Lo-Fi Avatar"
          className="w-24 h-24 border border-[color:var(--outline)] p-1 bg-[color:var(--tertiary)]"
          src="https://res.cloudinary.com/dqjicshv9/image/upload/v1768085532/new-papers/uploads/2a36f655-3041-4b50-9757-230d81f26975/c21073a8ae02d2a3d683ae36b9fd5019.jpg.jpg"
        />
        <div className="text-center md:text-left">
          <h1 className="font-headline-md text-headline-md text-[color:var(--text)] mb-2">Miguel Foliaco: DEV</h1>
          <p className="text-body-md text-[color:var(--text)]/70 leading-relaxed mb-4">
            I'm a software developer from Colombia. I like to build web apps and tools.
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <a href="/resume.pdf" target="_blank" className="start-btn text-[12px] font-label-md uppercase" type="button">
              Resume.pdf
            </a>
            <button onClick={() => onCopy('foliaco18@gmail.com')} className="start-btn flex duration-300 transition-all items-center text-[12px] font-label-md bg-[color:var(--accent-teal)] uppercase" type="button">
              {
                pasted ? <>
                  Copied! <Check size={16} className="ml-2" />
                </> : 'Hire Me - foliaco18@gmail.com'
              }
            </button>
          </div>
        </div>
      </div>
    </WindowShell>
  )
}
