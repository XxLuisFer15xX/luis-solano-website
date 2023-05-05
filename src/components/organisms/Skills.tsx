// Components
import { SkillCard } from '@molecules'

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
      logo: <HTMLIcon width={80} height={80} />,
      level: 'HTML',
      count: 100,
    },
    {
      logo: <CSSIcon width={80} height={80} />,
      level: 'CSS',
      count: 100,
    },
    {
      logo: <JavaScriptIcon width={80} height={80} />,
      level: 'JavaScript',
      count: 100,
    },
    {
      logo: <TypeScriptIcon width={80} height={80} />,
      level: 'TypeScript',
      count: 100,
    },
    {
      logo: <PHPIcon width={80} height={80} />,
      level: 'PHP',
      count: 100,
    },
    {
      logo: <JavaIcon width={80} height={80} />,
      level: 'Java',
      count: 100,
    },
  ]
  const skillsFrontend = [
    {
      logo: <ReactIcon width={80} height={80} />,
      level: 'React',
      count: 100,
    },
    {
      logo: <ReactNativeIcon width={80} height={80} />,
      level: 'React Native',
      count: 100,
    },
    {
      logo: <NextJSIcon width={80} height={80} fill="#ffffff" />,
      level: 'NextJS',
      count: 100,
    },
    {
      logo: <ReduxIcon width={80} height={80} />,
      level: 'Redux',
      count: 100,
    },
    {
      logo: <TailwindCSSIcon width={80} height={80} />,
      level: 'Tailwind CSS',
      count: 100,
    },
    {
      logo: <MaterialUIIcon width={80} height={80} />,
      level: 'Material UI',
      count: 100,
    },
  ]
  const skillsBacktend = [
    {
      logo: <NodeJSIcon width={80} height={80} />,
      level: 'NodeJS',
      count: 100,
    },
    {
      logo: <ExpressJSIcon fill="#ffffff" />,
      level: 'Express',
      count: 100,
    },
    {
      logo: <JWTIcon width={80} height={80} />,
      level: 'JWT',
      count: 100,
    },
    {
      logo: <SwaggerIcon width={80} height={80} />,
      level: 'Swagger',
      count: 100,
    },
    {
      logo: <FirebaseIcon width={80} height={80} />,
      level: 'Firebase',
      count: 100,
    },
    {
      logo: <MySQLIcon width={80} height={80} />,
      level: 'MySQL',
      count: 100,
    },
    {
      logo: <SQLServerIcon width={80} height={80} />,
      level: 'SQL Server',
      count: 100,
    },
    {
      logo: <OracleIcon width={80} height={80} />,
      level: 'Oracle',
      count: 100,
    },
    {
      logo: <MongoDBIcon width={80} height={80} />,
      level: 'MongoDB',
      count: 100,
    },
    {
      logo: <LaravelIcon width={80} height={80} />,
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
            <SkillCard
              key={i}
              count={skill.count}
              logo={skill.logo}
              name={skill.level}
            />
          ))}
        </div>
        <p className="text-gray-400 mt-6 text-lg">Tecnologías Frontend</p>
        <div className="flex items-center justify-center mt-3 gap-10 flex-wrap">
          {skillsFrontend?.map((skill, i) => (
            <SkillCard
              key={i}
              count={skill.count}
              logo={skill.logo}
              name={skill.level}
            />
          ))}
        </div>
        <p className="text-gray-400 mt-12 text-lg">Tecnologías Backend</p>
        <div className="flex items-center justify-center mt-3 gap-10 flex-wrap">
          {skillsBacktend?.map((skill, i) => (
            <SkillCard
              key={i}
              count={skill.count}
              logo={skill.logo}
              name={skill.level}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
