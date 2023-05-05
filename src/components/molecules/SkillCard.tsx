import { SkillCardProps } from '@types'

export const SkillCard = ({ count, logo, name }: SkillCardProps) => {
  return (
    <div className="border-2 group border-cyan-600 min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl flex flex-col items-center">
      <div
        style={{
          background: `conic-gradient(rgb(8,145,170) ${count}%,#ddd ${count}%)`,
        }}
        className="w-32 h-32 flex items-center justify-center rounded-full"
      >
        <div className="text-6xl p-1 w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
          {logo}
        </div>
      </div>
      <p className="text-xl mt-3">{name}</p>
    </div>
  )
}
