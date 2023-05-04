import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export const Contact = () => {
  const contact_info = [
    { logo: <MailOutlineIcon />, text: 'luisfer.sm15@gmail.com' },
    { logo: <WhatsAppIcon />, text: '+504 9859-9100' },
    {
      logo: <LocationOnIcon />,
      text: 'Tegucigalpa, Honduras',
    },
  ]
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          <span className="text-cyan-600">Contáctame</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Ponte en contacto con mí</p>
        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Tu Nombre" />
            <input type="Email" placeholder="Tu correo electrónico" />
            <textarea placeholder="Tu mensaje" rows={10}></textarea>
            <button className="btn-primary w-fit">Enviar mensaje</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
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
