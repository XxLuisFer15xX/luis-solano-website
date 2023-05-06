// Components
import {
  About,
  Contact,
  HeaderMenu,
  Hero,
  Hireme,
  Project,
  Skills,
} from '@organisms'

export const Home = () => {
  return (
    <div>
      <HeaderMenu />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact />
    </div>
  )
}
