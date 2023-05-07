import { useState } from 'react'

import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { TextCustom, TextInputCustom } from '@atoms'
import { apiContactForm } from '@services/apis'

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [messageContact, setMessageContact] = useState('')
  const contact_info = [
    { logo: <MailOutlineIcon />, text: 'luisfer.sm15@gmail.com' },
    { logo: <WhatsAppIcon />, text: '+504 9859-9100' },
    {
      logo: <LocationOnIcon />,
      text: 'Tegucigalpa, Honduras',
    },
  ]

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessageContact('')
  }

  const formValid = () => {
    let message = ''
    if (!name) message += 'Falta el nombre\n'
    if (!email) message += 'Falta el correo\n'
    if (!messageContact) message += 'Falta el mensaje\n'
    return message
  }

  const handleSendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const responseValid = formValid()
    if (!responseValid) {
      const response = await apiContactForm('es', {
        name,
        email,
        messageContact,
      })
      const { success, message } = response
      if (success) {
        resetForm()
      } else {
        console.log(message)
      }
    } else {
      alert(responseValid)
      console.log(responseValid)
    }
  }

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          <span className="text-cyan-600">Contáctame</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Ponte en contacto con mí</p>
        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5">
            <div className="flex flex-col">
              <TextCustom text="Ingrese su nombre" className="text-start" />
              <TextInputCustom value={name} setValue={setName} />
              <TextCustom
                text="Ingrese su correo"
                className="text-start mt-3"
              />
              <TextInputCustom type="email" value={email} setValue={setEmail} />
              <TextCustom
                text="Escriba su mensaje"
                className="text-start mt-3"
              />
              <TextInputCustom
                multiline
                value={messageContact}
                setValue={setMessageContact}
              />
            </div>

            <button className="btn-primary w-fit" onClick={handleSendEmail}>
              Enviar mensaje
            </button>
          </form>
          <div className="flex flex-col gap-7 pt-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  {contact.logo}
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
