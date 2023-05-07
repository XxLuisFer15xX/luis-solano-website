import axios from 'axios'
import { ApiResponse, TypeLanguage } from '@types'
import { buildNormal } from './buildRequest'

interface ContactForm {
  name: string
  email: string
  messageContact: string
}

type DataContactForm = object | null

export const apiContactForm = async (
  language: TypeLanguage,
  params: ContactForm,
) => {
  const url = `${import.meta.env.VITE_APP_API}contactForm`
  const apiSecret = import.meta.env.VITE_API_SECRET
  const dataResponse: ApiResponse<DataContactForm> = {
    success: false,
    statusCode: 0,
    message: '',
    data: {},
  }

  try {
    const response = await axios.post(
      url,
      { secret: apiSecret, ...params },
      buildNormal(language),
    )
    const { status, data } = response
    dataResponse.success = true
    dataResponse.data = data.data
    dataResponse.message = data.message
    dataResponse.statusCode = status
  } catch (error) {
    dataResponse.data = error
    if (!error.response?.status || !error.response?.data.message) {
      dataResponse.message = `Error inesperado. Código: ${error.code}`
      return dataResponse
    }
    dataResponse.message = error.response.data.message
    dataResponse.statusCode = error.response.status
  }
  return dataResponse
}
