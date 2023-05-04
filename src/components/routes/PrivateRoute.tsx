import { Navigate } from 'react-router-dom'
import { PrivateAndPublicRouteProps } from '@types'

export const PrivateRoute = ({
  isAuth,
  element: Element,
}: PrivateAndPublicRouteProps) => {
  return isAuth ? <Element /> : <Navigate to="/login" replace />
}
