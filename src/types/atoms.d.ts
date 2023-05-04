import { TypographyProps } from '@mui/material'

import { TypeAnimation, TypeColor, TypeLoader } from '@types'

export interface IconButtonCustomProps {
  onClick?: () => void
  size?: number
  className?: string
  icon: React.ReactElement<SvgIconProps> | null
  disabled?: boolean
  typeColor?: TypeColor
  typeColorHover?: TypeColor
}

export interface LoaderProps {
  typeAnimation?: TypeAnimation
  loop?: boolean
  size?: string | number
  mode?: TypeLoader
  speed?: number
  pause?: boolean
  setPause?: (value: boolean) => void
  play?: boolean
  setPlay?: (value: boolean) => void
  stop?: boolean
  setStop?: (value: boolean) => void
}

export interface TextCustomProps {
  text: string | undefined | null
  isParagraph?: boolean
  variant?: TypographyProps['variant']
  isWrap?: boolean
  className?: string
}
