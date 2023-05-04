import { useEffect, useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu'

export const HeaderMenu = () => {
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)
  const menuLinks = [
    { name: 'INICIO', link: '#home' },
    { name: 'SOBRE MI', link: '#about' },
    { name: 'HABILIDADES', link: '#skills' },
    { name: 'PROYECTOS', link: '#projects' },
    { name: 'CONTÁCTAME', link: '#contact' },
  ]
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav')
      window.scrollY > 0 ? setSticky(true) : setSticky(false)
    })
  }, [])
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? 'bg-white/60  text-gray-900' : 'text-white'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold my-0">
            L<span className="text-cyan-600">UI</span>S
          </h4>
        </div>
        <div
          className={` ${
            sticky ? 'md:bg-white/0 bg-white' : 'bg-white'
          } text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 px-0 py-2 text-lg my-0 list-none">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6">
                <a
                  href={menu?.link}
                  className="text-black no-underline hover:text-cyan-600"
                >
                  {menu?.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? 'text-gray-900' : 'text-gray-100'
          } text-3xl md:hidden m-5`}
        >
          <MenuIcon />
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? 'right-0' : 'right-[-100%]'
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg list-none">
            {menuLinks?.map((menu, i) => (
              <li onClick={() => setOpen(false)} key={i} className="px-6">
                <a
                  href={menu?.link}
                  className="text-black no-underline hover:text-cyan-600"
                >
                  {menu?.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
