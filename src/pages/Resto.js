import { ScrollArea } from '@mantine/core'
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useHover } from '@mantine/hooks'
import { FindUs, LogoDiamond } from '../components/svg/svgResto'
export default function Resto() {
  const { hovered: hoverLeft, ref: refLeft } = useHover()
  const { hovered: hoverRight, ref: refRight } = useHover()
  const { hovered: hoverTop, ref: refTop } = useHover()
  const [activeClass, setActiveClass] = useState(0)
  const [activeHoverRight, setActiveHoverRight] = useState(false)
  const [activeHoverLeft, setActiveHoverLeft] = useState(false)
  const indicator = useRef()
  useEffect(() => {
    setTimeout(() => {
      const home = document.querySelector('#link-home')
      const mid = (indicator.current.getBoundingClientRect().width - home.getBoundingClientRect().width) / 2
      indicator.current.style.transform = `translateX(calc(${home.getBoundingClientRect().left}px - ${mid}px)) scaleY(0.5)`
    }, 10)
  }, [])

  const activeMenu = (e, index, hash) => {
    const mid = (indicator.current.getBoundingClientRect().width - e.target.getBoundingClientRect().width) / 2
    indicator.current.style.transform = `translateX(calc(${e.target.getBoundingClientRect().left}px - ${mid}px)) scaleY(0.5)`

    setActiveClass(index)
    setTimeout(() => {
      window.location.hash = `#${hash}`
    }, 300)
  }
  const listMenu = [
    { id: 'link-home', name: 'Home' },
    { id: 'link-menu', name: 'Menu' },
    { id: 'link-service', name: 'Service' },
    { id: 'link-contact', name: 'Contact Us' },
  ]
  return (
    <ScrollArea classNames={{ root: 'h-screen text-white', thumb: 'bg-gray-500 opacity-50', scrollbar: 'hover:bg-white/50 z-50' }}>
      <div className="relative bg-[url('../public/image/resto/hero.jpg')] bg-cover lg:h-screen w-full aspect-[10/6] group">
        <div ref={refTop} className='flex relative gap-10 border-b-2 px-28 py-3 w-full text-white items-center z-20'>
          <div className='flex-grow'>
            <LogoDiamond className={'w-36'} />
          </div>
          {listMenu.map((item, index) => (
            <div
              key={index}
              id={item.id}
              className={`${
                activeClass === index && 'text-yellow-300'
              } p-2 select-none cursor-pointer transition-colors duration-300 ease-in-out hover:text-yellow-300`}
              onClick={e => activeMenu(e, index, item.name)}>
              {item.name}
            </div>
          ))}
          <button className='bg-[#C4C4C4] w-16 h-8 rounded-xl' />
        </div>
        <span
          ref={indicator}
          className='border-2 relative z-40 -top-[4.5px] scale-y-50 block border-yellow-300 rounded-full w-20 transition-transform text-white pointer-events-none'
        />
        <div
          className='absolute font-bold z-20 w-[450px] text-6xl left-[10%] top-[30%]'
          onMouseOver={() => setActiveHoverLeft(true)}
          onMouseLeave={() => setActiveHoverLeft(false)}>
          The Great Place To Create Your Moment
        </div>
        <div
          className='absolute z-20  text-4xl right-[20%] top-[25%] w-56 text-right'
          onMouseOver={() => setActiveHoverRight(true)}
          onMouseLeave={() => setActiveHoverRight(false)}>
          <h1>Find Us On</h1>
          <FindUs className={'w-36 float-right my-5 cursor-pointer'} />
          <p className='clear-both text-lg'>Jl. Bangkit Blok 15 No. 16, Panyileukan, Kota Bandung Jawa Barat, Indonesia</p>
        </div>
        <div className='absolute bottom-10 px-28 flex justify-between mb-10 w-full border'>
          <div className='flex items-center'>
            <p>Content 1</p>
          </div>
          <div className='flex items-center'>
            <p>Content 1</p>
          </div>
          <div className='flex items-center'>
            <p>Content 1</p>
          </div>
          <div className='flex items-center'>
            <p>Content 1</p>
          </div>
        </div>

        <div ref={refLeft} className='mx-auto w-1/3 h-full absolute left-0 z-10 select-none' />
        <div ref={refRight} className='mx-auto w-1/3 h-full absolute right-0 z-10 select-none' />
        <img
          src='image/resto/hero-shadow.png'
          alt=''
          className={`absolute top-0 h-full w-full ${
            hoverLeft || hoverTop || activeHoverLeft ? 'opacity-0' : null
          } gradient-mask-r-10 transition-opacity duration-500 linea`}
        />
        <img
          src='image/resto/hero-shadow.png'
          alt=''
          className={`absolute top-0 h-full w-full ${
            hoverRight || hoverTop || activeHoverRight ? 'opacity-0' : null
          } gradient-mask-l-10 transition-opacity duration-500 linea`}
        />
      </div>
      <button className='bg-yellow-300 text-4xl rounded-lg'>a</button>
      <div className='h-72' />
      <div id='Menu'>Halo Dunia</div>
    </ScrollArea>
  )
}
