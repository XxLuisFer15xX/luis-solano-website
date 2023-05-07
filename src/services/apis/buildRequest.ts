import { AxiosRequestConfig } from 'axios'
import { TypeLanguage } from '@types'

export const buildNormal = <T>(language: TypeLanguage, request?: T) => {
  let headers: AxiosRequestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': language,
    },
    params: request,
  }
  return headers
}
