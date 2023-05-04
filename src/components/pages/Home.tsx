// Components
import { About, Contact, HeaderMenu, Hero, Project, Skills } from '@organisms'

export const Home = () => {
  return (
    <div>
      <HeaderMenu />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}
