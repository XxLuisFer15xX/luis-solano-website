import aboutImg from '@assets/images/about.png'

export const About = () => {
  const info = [
    { text: 'Años de experiencia', count: '03' },
    { text: 'Projectos trabajados', count: '10' },
    { text: 'Compañías trabajadas', count: '02' },
  ]
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Sobre <span className="text-cyan-600">Mi</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">Introducción</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Soy desarrollador FullStack con conocimientos en el desarrollo
                de software para aplicaciones web y móvil. He contribuido al
                desarrollo de aplicaciones web como{' '}
                <span className="text-cyan-600">Medicatel, SISA y Glodis</span>.
                También al desarrollo de aplicaciones móviles como{' '}
                <span className="text-cyan-600">
                  Dilo, Glodis y Espresso Americano
                </span>
                .
              </p>
              <br />
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Actualmente me dedico al desarrollo de aplicaciones web en{' '}
                <span className="text-cyan-600">React</span>, sitios web en{' '}
                <span className="text-cyan-600">NextJS</span>, aplicaciones
                móviles en <span className="text-cyan-600">React Native</span> y
                web services en{' '}
                <span className="text-cyan-600">NodeJS con Express</span>.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map(content => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{' '}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="/CV_Luis_Solano.pdf" download>
                <button className="btn-primary">Descargar CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
