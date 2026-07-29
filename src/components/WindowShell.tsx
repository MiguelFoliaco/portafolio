import type { ReactNode } from 'react'

type WindowShellProps = {
  title: string
  children: ReactNode
  className?: string
  bodyClassName?: string
  id?: string
  accent?: 'default' | 'teal' | 'pink'
}

export const WindowShell = ({
  title,
  children,
  className = '',
  bodyClassName = 'bg-white',
  id,
  accent = 'default',
}: WindowShellProps) => {
  const accentStyle =
    accent === 'teal'
      ? { backgroundColor: 'rgba(178, 226, 242, 0.3)' }
      : accent === 'pink'
        ? { backgroundColor: 'rgba(249, 197, 209, 0.3)' }
        : undefined

  return (
    <section id={id} className={`window-frame ${className}`.trim()}>
      <div className="window-header" style={accentStyle}>
        <span className="font-label-md text-[11px] font-bold uppercase tracking-tight flex items-center gap-2">
          <span className="material-symbols-outlined text-[14px]">desktop_windows</span>
          {title}
        </span>
        <div className="window-controls">
          <div className="window-btn"></div>
          <div className="window-btn bg-[color:var(--accent-teal)]"></div>
          <div className="window-btn bg-[color:var(--accent-pink)]"></div>
        </div>
      </div>
      <div className={bodyClassName}>{children}</div>
    </section>
  )
}
