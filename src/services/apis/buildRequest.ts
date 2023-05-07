import { AxiosRequestConfig } from 'axios'
import { TypeLanguage } from '@types'

export const buildNormal = <T>(language: TypeLanguage, request?: T) => {
  const apiSecret = import.meta.env.VITE_API_SECRET
  let headers: AxiosRequestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': language,
    },
    params: { secret: apiSecret, ...request },
  }
  return headers
}
