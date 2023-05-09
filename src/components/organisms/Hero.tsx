import hero from '@assets/images/hero.jpg'

import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'

// Styles
import './hero.css'

export const Hero = () => {
  const handleContactMe = () => {
    window.location.href = '#contact'
  }

  const social_media = [
    {
      name: <LinkedInIcon />,
      link: 'https://www.linkedin.com/in/luis-fernando-solano/',
    },
    { name: <GitHubIcon />, link: 'https://github.com/XxLuisFer15xX' },
    {
      name: <FacebookIcon />,
      link: 'https://www.facebook.com/luis.solano.7169',
    },
    {
      name: <YouTubeIcon />,
      link: 'https://www.youtube.com/channel/UCfJLszHbdL1vh3rX3CGPa9Q',
    },
  ]
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt=""
          className="object-cover rounded-full profile-hero"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              !Hola!
              <br />
            </span>
            Mi nombre es <span>Luis Solano</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Full Stack Developer / React Developer
          </h4>
          <button className="btn-primary mt-8" onClick={handleContactMe}>
            Contáctame
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, i) => (
              <div
                key={i}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={icon.link} target="_blank" className="text-gray-500">
                  {icon.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
