const functions = require('firebase-functions')
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.USER_NODEMAILER,
    pass: process.env.PASSWORD_NODEMAILER,
  },
})

const sendContactForm = async form => {
  let message = ''
  try {
    const response = await transport.sendMail({
      subject: 'Nueva Oferta de Trabajo',
      to: ['luisfer.sm15@gmail.com'],
      html: `<h3>¡Tienes un nuevo mensaje!</h3>
    <p>Nombre: ${form.name} </p>
    <p>Correo: ${form.email} </p>
    <p>Mensaje: ${form.messageContact} </p>`,
    })
    console.log('Accept => ', response.accepted)
    console.log('Rejected => ', response.rejected)
  } catch (error) {
    console.log(error)
    message = error.message
  }
  return message
}

exports.contactForm = functions.https.onRequest(async (req, res) => {
  // Authorize the use of the API.
  if (req.body.secret !== process.env.API_SECRET)
    return res.status(403).send({ message: 'Missing secret', data: null })

  // Validate that the mail was sent by Nodemailer.
  const responseNodemailer = await sendContactForm(req.body)
  if (responseNodemailer)
    return res.status(500).send({
      message: 'Ha ocurrido un error, no se pudo enviar el correo.',
      data: responseNodemailer,
    })

  // Send successful response.
  return res
    .status(200)
    .send({ message: '¡Correo enviado exitósamente!', data: null })
})
