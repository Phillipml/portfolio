export interface RepoType {
  id: number
  repoName: string
  html_url: string
  highlight: boolean
  description: string
  readme: string
  technologies: [
    'Django',
    'PostgreSQL',
    'Docker',
    'Poetry',
    'pytest',
    'Factory Boy',
    'Gunicorn'
  ]
  thumbnail: string
  demo_url: string
  mainFocus: string
  role: string
}
export interface Profile {
  login: string
  avatar_url: string
  bio: string
  whatsapp: string
  linkedin: string
  github: string
}
