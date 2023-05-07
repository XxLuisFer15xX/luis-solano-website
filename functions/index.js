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
  return transport
    .sendMail({
      subject: 'Nueva Oferta de Trabajo',
      to: ['luisfer.sm15@gmail.com'],
      html: `<h3>¡Tienes un nuevo mensaje!</h3>
    <p>Nombre: ${form.name} </p>
    <p>Correo: ${form.email} </p>
    <p>Mensaje: ${form.message} </p>`,
    })
    .then(r => {
      console.log('Accept => ', r.accepted)
      console.log('Rejected => ', r.rejected)
    })
    .catch(e => console.log(e))
}

exports.contactForm = functions.https.onRequest((req, res) => {
  if (req.body.secret !== process.env.API_SECRET)
    return res.send('Missing secret')
  sendContactForm(req.body)
  res.send('Sending email...')
})
