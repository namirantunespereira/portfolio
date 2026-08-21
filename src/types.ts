export type Difficulty = 'Easy' | 'Medium' | 'Hard'
export type Role = 'Front-end' | 'Back-end' | 'Full-stack'

export type ProjectJsonItem = {
  id: number
  slug: string
  title: string
  i18nKey: string
  tech: string[]
  difficulty: Difficulty
  role: Role
  thumbnail: string
  demo?: string
  code: string
}

// Unified shape ProjectCard renders, regardless of whether the entry came from the curated
// public/projects.json (deletable: false) or was added locally via NewMissionForm and is
// stored only in this visitor's browser (deletable: true).
export type DisplayProject = {
  id: string
  title: string
  tagline: string
  tech: string[]
  badge: string
  thumbnail?: string
  demo?: string
  code?: string
  deletable: boolean
}

export type LocalMission = {
  id: string
  item: string
  destino: string
  tech: string[]
  code: string
}
