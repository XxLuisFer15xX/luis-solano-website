import { BaseTextFieldProps, TypographyProps } from '@mui/material'

import {
  TypeAnimation,
  TypeColor,
  TypeInputIconMode,
  TypeLoader,
  TypeValidation,
} from '@types'

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

export interface TextInputCustomProps {
  name?: string
  value?: string
  setValue: (value: string) => void
  onBlur?: () => void
  onEnter?: () => void
  placeholder?: string
  type?: BaseTextFieldProps['type']
  typesValidation?: TypeValidation
  validInitNumbers?: number[]
  maxLength?: number
  className?: string
  iconStart?: React.ReactElement<SvgIconProps> | null
  iconEnd?: React.ReactElement<SvgIconProps> | null
  iconMode?: TypeInputIconMode
  iconTypeColor?: TypeColor
  iconOnClick?: () => void
  msgError?: string | null
  disabled?: boolean
  multiline?: boolean
  required?: boolean
  fontSize?: number
}
