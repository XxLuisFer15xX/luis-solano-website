export interface SkillCardProps {
  count: number
  logo: React.ReactNode
  name: string
}

export interface DialogTitleCustomProps {
  disabledIconClose?: boolean
  children: React.ReactNode
  onClose?: () => void
}
