import hireMe from '@assets/images/hero.jpg'

export const Hireme = () => {
  const handleContactMe = () => {
    window.location.href = '#contact'
  }
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Buscas <span className="text-cyan-600">Contratarme</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">¿Tienes algún trabajo?</p>
      </div>
      <div className="bg-gray-700 px-8 relative rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            ¿Quieres que trabajemos juntos?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Trabajar juntos es sin duda alguna una excelente opción, cuentas con
            múltiples opciones para convertir tus ideas en realidad.
          </p>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Tus proyectos se construirán con las mejores prácticas de
            desarrollo, aplicacndo los estándares actuales como:{' '}
            <span className="text-cyan-600">
              SOLID, MVC, UX/UI, Atomic Design, CI/CD, Conventional Commits,
              versionado de software y ambientes de desarrollo
            </span>
            .
          </p>
          <button className="btn-primary mt-10" onClick={handleContactMe}>
            Contáctame
          </button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:absolute bottom-0 -right-0 object-cover rounded-full w-96 h-96"
        />
      </div>
    </section>
  )
}
