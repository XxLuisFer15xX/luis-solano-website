import { Swiper, SwiperSlide } from 'swiper/react'
import project1 from '@assets/images/project-1.png'
import project2 from '@assets/images/project-2.jpg'
import project3 from '@assets/images/project-3.jpg'
import project4 from '@assets/images/project-4.jpg'
import project5 from '@assets/images/project-5.png'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper'
import { ProjectCard } from '@molecules'

export const Project = () => {
  const projects = [
    {
      img: project1,
      name: 'Movie App',
    },
    {
      img: project2,
      name: 'Job search Web App',
      github_link: 'https://github.com/Sridhar-C-25/jobsearchapp',
      live_link: 'https://myjobsearch.netlify.app',
    },
    {
      img: project3,
      name: 'Highking',
      github_link: 'https://github.com/Sridhar-C-25/highking',
      live_link: 'https://highking01.netlify.app',
    },
    {
      img: project4,
      name: 'React Nav',
      github_link:
        'https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown',
      live_link: 'https://reacttailwindnavbar.netlify.app',
    },
    {
      img: project5,
      name: 'Vue Country',
      github_link: 'https://github.com/Sridhar-C-25',
      live_link: 'https://vuecountry05.netlify.app',
    },
  ]
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Mis <span className="text-cyan-600">Proyectos</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Algunos de mis proyectos</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative ">
        <div className="w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <ProjectCard
                  img={project_info.img}
                  name={project_info.name}
                  github_link={project_info.github_link}
                  live_link={project_info.live_link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          {/* <img src={project_person} alt="" /> */}
        </div>
      </div>
    </section>
  )
}
