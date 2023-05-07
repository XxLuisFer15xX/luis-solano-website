import { Swiper, SwiperSlide } from 'swiper/react'
import AlmacenCURC from '@assets/images/projects/AlmacénCURC.png'
import ReconocimientoDeLetras from '@assets/images/projects/ReconocimientoDeLetras.png'
import BaseNodeTS from '@assets/images/projects/BaseNodeTS.png'
import BaseReactJS from '@assets/images/projects/BaseReactJS.png'
import SISACotizador from '@assets/images/projects/SISACotizador.png'
import SISAAdministrador from '@assets/images/projects/SISAAdministrador.png'
import MedicatelClientes from '@assets/images/projects/MedicatelClientes.png'
import MedicatelEmpresas from '@assets/images/projects/MedicatelEmpresas.png'
import Dilo from '@assets/images/projects/Dilo.png'
import EspressoAmericano from '@assets/images/projects/EspressoAmericano.png'
import GlodisApp from '@assets/images/projects/GlodisApp.png'
import GlodisPanel from '@assets/images/projects/GlodisPanel.png'
import LuisSolanoWebsite from '@assets/images/projects/LuisSolanoWebsite.png'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper'
import { ProjectCard } from '@molecules'

export const Project = () => {
  const projects = [
    {
      img: EspressoAmericano,
      name: 'Espresso Americano',
      live_link:
        'https://play.google.com/store/apps/details?id=com.yourappland.espressoamericano',
    },
    {
      img: SISACotizador,
      name: 'Cotizador SISA',
      live_link: 'https://cotizador.ingenieria.digital/#/home',
    },
    {
      img: SISAAdministrador,
      name: 'Administrador SISA',
      live_link: 'https://administrador.ingenieria.digital/#/login',
    },
    {
      img: MedicatelClientes,
      name: 'Medicatel Clientes',
      live_link: 'https://redmedicatel.com/empresas',
    },
    {
      img: MedicatelEmpresas,
      name: 'Medicatel Empresas',
      live_link: 'https://empresa.medicatel.red/#/login',
    },
    {
      img: Dilo,
      name: 'Dilo',
      live_link:
        'https://play.google.com/store/apps/details?id=com.idmission.dilo',
    },
    {
      img: GlodisApp,
      name: 'Glodis App',
      live_link:
        'https://play.google.com/store/apps/details?id=com.yourappland.glodis',
    },
    {
      img: GlodisPanel,
      name: 'Glodis Panel',
      live_link: 'https://desarrollo-cms-glodis.netlify.app/login',
    },
    {
      img: LuisSolanoWebsite,
      name: 'Sitio Web Luis Solano',
      live_link: '#home',
    },
    {
      img: BaseNodeTS,
      name: 'Base de NodeJS',
      github_link: 'https://github.com/basic-project-15/base-node-ts',
      live_link: 'https://base-node-ts.up.railway.app/api-docs/',
    },
    {
      img: BaseReactJS,
      name: 'Base de ReactJS',
      github_link: 'https://github.com/basic-project-15/base-react-js',
      live_link: 'https://dev-bp-15-admin.netlify.app/#/login',
    },
    {
      img: ReconocimientoDeLetras,
      name: 'Reconocimiento de letras',
      github_link: 'https://github.com/XxLuisFer15xX/Proyecto-IS-701',
      live_link: 'https://youtu.be/Nx5xUHtmLHQ',
    },
    {
      img: AlmacenCURC,
      name: 'Almacén CURC',
      live_link: 'https://youtu.be/MTDbMSo9BEU',
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
