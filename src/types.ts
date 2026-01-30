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
