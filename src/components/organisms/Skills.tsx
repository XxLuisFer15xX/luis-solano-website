// Assets
// Backend
import { ReactComponent as ExpressJSIcon } from '@assets/icons/backend/ExpressJSIcon.svg'
import { ReactComponent as FirebaseIcon } from '@assets/icons/backend/FirebaseIcon.svg'
import { ReactComponent as JWTIcon } from '@assets/icons/backend/JWTIcon.svg'
import { ReactComponent as LaravelIcon } from '@assets/icons/backend/LaravelIcon.svg'
import { ReactComponent as MongoDBIcon } from '@assets/icons/backend/MongoDBIcon.svg'
import { ReactComponent as MySQLIcon } from '@assets/icons/backend/MySQLIcon.svg'
import { ReactComponent as NodeJSIcon } from '@assets/icons/backend/NodeJSIcon.svg'
import { ReactComponent as OracleIcon } from '@assets/icons/backend/OracleIcon.svg'
import { ReactComponent as SQLServerIcon } from '@assets/icons/backend/SQLServerIcon.svg'
import { ReactComponent as SwaggerIcon } from '@assets/icons/backend/SwaggerIcon.svg'

// Frontend
import { ReactComponent as MaterialUIIcon } from '@assets/icons/frontend/MaterialUIIcon.svg'
import { ReactComponent as NextJSIcon } from '@assets/icons/frontend/NextJSIcon.svg'
import { ReactComponent as ReactIcon } from '@assets/icons/frontend/ReactIcon.svg'
import { ReactComponent as ReactNativeIcon } from '@assets/icons/frontend/ReactNativeIcon.svg'
import { ReactComponent as ReduxIcon } from '@assets/icons/frontend/ReduxIcon.svg'
import { ReactComponent as TailwindCSSIcon } from '@assets/icons/frontend/TailwindCSSIcon.svg'

// Languages
import { ReactComponent as CSSIcon } from '@assets/icons/languages/CSSIcon.svg'
import { ReactComponent as HTMLIcon } from '@assets/icons/languages/HTMLIcon.svg'
import { ReactComponent as JavaIcon } from '@assets/icons/languages/JavaIcon.svg'
import { ReactComponent as JavaScriptIcon } from '@assets/icons/languages/JavaScriptIcon.svg'
import { ReactComponent as PHPIcon } from '@assets/icons/languages/PHPIcon.svg'
import { ReactComponent as TypeScriptIcon } from '@assets/icons/languages/TypeScriptIcon.svg'

export const Skills = () => {
  const languages = [
    {
      logo: <HTMLIcon />,
      level: 'HTML',
      count: 100,
    },
    {
      logo: <CSSIcon />,
      level: 'CSS',
      count: 100,
    },
    {
      logo: <JavaScriptIcon />,
      level: 'JavaScript',
      count: 100,
    },
    {
      logo: <TypeScriptIcon />,
      level: 'TypeScript',
      count: 100,
    },
    {
      logo: <PHPIcon />,
      level: 'PHP',
      count: 100,
    },
    {
      logo: <JavaIcon />,
      level: 'Java',
      count: 100,
    },
  ]
  const skillsFrontend = [
    {
      logo: <ReactIcon />,
      level: 'React',
      count: 100,
    },
    {
      logo: <ReactNativeIcon />,
      level: 'React Native',
      count: 100,
    },
    {
      logo: <NextJSIcon />,
      level: 'NextJS',
      count: 100,
    },
    {
      logo: <ReduxIcon />,
      level: 'Redux',
      count: 100,
    },
    {
      logo: <TailwindCSSIcon />,
      level: 'Tailwind CSS',
      count: 100,
    },
    {
      logo: <MaterialUIIcon />,
      level: 'Material UI',
      count: 100,
    },
  ]
  const skillsBacktend = [
    {
      logo: <NodeJSIcon />,
      level: 'NodeJS',
      count: 100,
    },
    {
      logo: <ExpressJSIcon />,
      level: 'Express',
      count: 100,
    },
    {
      logo: <JWTIcon />,
      level: 'JWT',
      count: 100,
    },
    {
      logo: <SwaggerIcon />,
      level: 'Swagger',
      count: 100,
    },
    {
      logo: <FirebaseIcon />,
      level: 'Firebase',
      count: 100,
    },
    {
      logo: <MySQLIcon />,
      level: 'MySQL',
      count: 100,
    },
    {
      logo: <SQLServerIcon />,
      level: 'SQL Server',
      count: 100,
    },
    {
      logo: <OracleIcon />,
      level: 'Oracle',
      count: 100,
    },
    {
      logo: <MongoDBIcon />,
      level: 'MongoDB',
      count: 100,
    },
    {
      logo: <LaravelIcon />,
      level: 'Laravel',
      count: 100,
    },
  ]
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Mis <span className="text-cyan-600">Habilidades</span>
        </h3>
        <p className="text-gray-400 mt-6 text-lg">Lenguages de programación</p>
        <div className="flex items-center justify-center mt-3 gap-10 flex-wrap">
          {languages?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  {skill.logo}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 mt-6 text-lg">Tecnologías Frontend</p>
        <div className="flex items-center justify-center mt-3 gap-10 flex-wrap">
          {skillsFrontend?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  {skill.logo}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 mt-12 text-lg">Tecnologías Backend</p>
        <div className="flex items-center justify-center mt-3 gap-10 flex-wrap">
          {skillsBacktend?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  {skill.logo}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
