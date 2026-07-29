import { WindowShell } from './WindowShell'

type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  code: string
  url: string
}

const projects: Project[] = [
  {
    title: 'Salon',
    description: 'Ecommerce for salon services and scheduling.',
    tags: ['NextJS', 'NestJs', 'TypeScript', 'Wompi', 'WebHooks'],
    image:
      'https://res.cloudinary.com/dqjicshv9/image/upload/v1778041346/reservas/Flujo_Crear_una_reserva_mokxxh_poster.webp',
    code: '01_SALON_SCHEDULES.JS',
    url: 'https://salon-mu-three.vercel.app/'
  },
  {
    title: 'New Papers',
    description: 'Social media for writers.',
    tags: ['TypeScript', 'NextJs', 'Tailwind', 'Supabase', 'Postgres'],
    image:
      'https://res.cloudinary.com/dqjicshv9/image/upload/v1784738424/24fe540f-fd5a-42c9-862a-a9e618f3a522.png',
    code: '02_NEW_PAPERS.EXE',
    url: 'https://new-papers.vercel.app'
  },
  {
    title: 'Bloki.cloud',
    description: 'CRM for estate agents in Argentina.',
    tags: ['NestJs', 'React', 'TypeScript', 'Tailwind', 'Postgres'],
    image:
      'https://res.cloudinary.com/dqjicshv9/image/upload/v1784738695/f9e00147-cb95-43d2-8c05-563133de45c8.png',
    code: '03_BLOKI.CLOUD',
    url: 'https://bloki.cloud',
  },
  {
    title: 'Olimpica App Ecommerce',
    description: 'Online shop for Olimpicas supermarkets in Colombia.',
    tags: ['React Native', 'React', 'VTEX',],
    image:
      'https://res.cloudinary.com/dqjicshv9/image/upload/v1784738845/6e17f3b6-d824-4ecb-b3f3-cd4559cb9ba4.png',
    code: '03_OLIMPICA_APP.APK',
    url: 'https://play.google.com/store/apps/details?id=io.cordova.myapp5c2f9d&hl=es_CO'
  },
  {
    title: 'JUMBO App Ecommerce',
    description: 'Online shop for Cencosud Group in America Latina.',
    tags: ['React Native', 'React', 'VTEX',],
    image:
      'https://res.cloudinary.com/dqjicshv9/image/upload/v1784738986/c43eadef-8fcc-4b8b-8b9c-751b4a764331.png',
    code: '03_JUMBO_APP.APK',
    url: 'https://play.google.com/store/apps/details?id=com.cencosud.co.clientes&hl=es_CO'
  },
  {
    title: 'EASY App Ecommerce',
    description: 'Online shop for Cencosud Group in America Latina.',
    tags: ['React Native', 'React', 'VTEX',],
    image:
      'https://res.cloudinary.com/dqjicshv9/image/upload/v1784739140/10f114dd-6a63-402f-b64e-4d2ce0af7417.png',
    code: '03_EASY_APP.APK',
    url: 'https://play.google.com/store/apps/details?id=com.co.cencosud.easyapp&hl=es_CO'
  },
]

export const ProjectsSection = () => {
  return (
    <WindowShell title="PROJECT_DIRECTORY_C:/" id="projects" accent="teal" className="w-full">
      <div className="p-6 bg-(--tertiary)/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="window-frame bg-white group overflow-hidden  hover:scale-98 transition-all">
              <div className="window-header" style={{ backgroundColor: 'rgba(178, 226, 242, 0.2)' }}>
                <span className="text-[10px] font-label-md">{project.code}</span>
              </div>
              <div className="p-2">
                <div className='w-full h-fit relative'>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute top-0 left-0 w-full h-full z-10"></a>
                  <img className="w-full h-40 transition-all cursor-pointer object-cover border border-(--outline) grayscale hover:grayscale-0" src={project.image} alt={project.title} />
                </div>
                <div className="mt-3 p-2">
                  <h3 className="font-label-md text-[12px] font-bold uppercase mb-1">{project.title}</h3>
                  <p className="text-[11px] text-(--text)/70 mb-3">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-label-md bg-(--secondary)/20 px-1 border border-[color:var(--outline)]/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WindowShell>
  )
}
