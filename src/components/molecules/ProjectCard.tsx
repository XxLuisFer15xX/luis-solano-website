import { ProjectCardProps } from '@types'

export const ProjectCard = ({
  img,
  name,
  github_link,
  live_link,
}: ProjectCardProps) => {
  return (
    <div className="h-fit w-full p-4 mb-12 bg-slate-700">
      <img src={img} alt="" className="rounded-lg w-64 h-40" />
      <h3 className="text-xl my-4">{name}</h3>
      <div className="flex gap-3 h-8">
        {github_link && (
          <a
            href={github_link}
            target="_blank"
            className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
          >
            Github
          </a>
        )}
        {live_link && (
          <a
            href={live_link}
            target="_blank"
            className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}
