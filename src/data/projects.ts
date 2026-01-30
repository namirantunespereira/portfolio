export type Tech =
  | 'Node.js'
  | 'Vue.js'
  | 'TypeScript'
  | 'Python'
  | 'Spring Boot'
  | 'Docker'
  | 'AWS'
  | 'Azure'
  | 'Terraform'
  | 'PostgreSQL'
  | 'MongoDB'
  | 'SQL'
  | '.NET'
  | 'React'
  | 'Angular'
  | 'Camunda'
  | 'Flask'
  | 'Rails'

export type Project = {
  id: number
  title: string
  tagline: string
  tech: Tech[]
  difficulty: 'Easy' | 'Medium' | 'Hard'
  role: 'Front-end' | 'Back-end' | 'Full-stack'
  demo?: string
  code: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Quest Weather Widget',
    tagline: 'Widget de clima com UI neon + filtros e estados de loading.',
    tech: ['Vue.js', 'TypeScript'],
    difficulty: 'Easy',
    role: 'Front-end',
    demo: 'https://react-weather-widget-livid.vercel.app/',
    code: 'https://github.com/namirantunespereira/react-weather-widget',
    highlights: ['Consumo de API', 'UX', 'Acessibilidade']
  },
  {
    id: 2,
    title: 'Animated Cards Filter',
    tagline: 'Cartões animados e filtragem com foco em UX.',
    tech: ['React', 'TypeScript'],
    difficulty: 'Easy',
    role: 'Front-end',
    demo: 'https://react-animated-cards.vercel.app/',
    code: 'https://github.com/namirantunespereira/react-animated-cards',
    highlights: ['Animações', 'Componentização', 'UX']
  }
]
