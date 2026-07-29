import type { ReactNode } from 'react'

type DesktopIconProps = {
  href: string
  label: string
  icon: ReactNode
}

export const DesktopIcon = ({ href, label, icon }: DesktopIconProps) => {
  return (
    <a className="desktop-icon" href={href}>
      <span className="text-4xl text-[color:var(--secondary)]">{icon}</span>
      <span className="font-label-md text-[10px] text-center bg-white px-1">{label}</span>
    </a>
  )
}
