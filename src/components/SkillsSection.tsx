import { WindowShell } from './WindowShell'

type Skill = {
  name: string
  percent: number
  color: string
}

const skills: Skill[] = [
  { name: 'REACT.JS', percent: 90, color: 'var(--color-blue-400)' },
  { name: 'REACT NATIVE', percent: 90, color: 'var(--color-blue-400)' },
  { name: 'NESTJS', percent: 90, color: 'var(--color-pink-400)' },
  { name: 'NEXTJS', percent: 90, color: 'var(--color-black)' },
  { name: 'EXPO', percent: 90, color: 'var(--color-black)' },
  { name: 'EXPRESS.JS', percent: 90, color: 'var(--color-orange-400)' },
  { name: 'TYPESCRIPT', percent: 90, color: 'var(--color-blue-400)' },
  { name: 'SUPABASE', percent: 90, color: 'var(--color-emerald-400)' },
  { name: 'POSTGRESQL', percent: 90, color: 'var(--color-emerald-400)' },
  { name: 'SQL', percent: 90, color: 'var(--color-white)' },

  { name: 'NODE.JS', percent: 75, color: 'var(--accent-teal)' },
  { name: 'TAILWIND', percent: 95, color: 'var(--secondary)' },
]

export const SkillsSection = () => {
  return (
    <WindowShell title="TOOLBOX.BIN" id="skills" accent="pink" className="md:col-span-4 self-start">
      <div className="p-6 bg-white space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <span className="font-label-md text-[11px]">{skill.name}</span>
              <span className="text-[10px] text-[color:var(--text)]/50">{skill.percent}%</span>
            </div>
            <div className="h-4 bg-[color:var(--tertiary)] border border-[color:var(--outline)] flex p-0.5">
              <div className="h-full" style={{ width: `${skill.percent}%`, backgroundColor: skill.color }}></div>
            </div>
          </div>
        ))}
        <div className="p-3 bg-[color:var(--tertiary)]/30 border border-dashed border-[color:var(--outline)] text-[11px] italic">
          System scan complete. All power-ups are functional and ready for deployment.
        </div>
      </div>
    </WindowShell>
  )
}
