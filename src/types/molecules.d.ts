export interface DialogTitleCustomProps {
  disabledIconClose?: boolean
  children: React.ReactNode
  onClose?: () => void
}

export interface ProjectCardProps {
  img: string
  name: string
  github_link?: string
  live_link?: string
}

export interface SkillCardProps {
  count: number
  logo: React.ReactNode
  name: string
}
