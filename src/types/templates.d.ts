export interface DialogCustomProps {
  children: React.ReactNode
  disabledDismiss?: boolean
  disabledIconClose?: boolean
  onDismiss?: () => void
  open: boolean
  setOpen: (value: boolean) => void
  title?: string
}
