import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useHover } from '@mantine/hooks'
import { FindUs, LogoDiamond, LogoExperience, LogoHour, LogoLocation, LogoReservation } from '../svg/svgResto'
export default function RestoHome() {
  const { hovered: hoverTop, ref: refTop } = useHover()
  const [activeClass, setActiveClass] = useState(0)
  const [activeClassFooter, setActiveClassFooter] = useState(0)
  const [activeHoverRight, setActiveHoverRight] = useState(false)
  const [activeHoverLeft, setActiveHoverLeft] = useState(false)
  const indicator = useRef()
  const indicator2 = useRef()
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
  const activeMenuFooter = (e, index) => {
    const client = e.target.tagName === 'DIV' ? e.target : e.target.parentNode
    console.log(client.offsetLeft)
    indicator2.current.style.transform = `translateX(calc(${client.offsetLeft}px - 40px)) scaleY(0.5)`

    setActiveClassFooter(index)
  }
  const listMenu = [
    { id: 'link-home', name: 'Home' },
    { id: 'link-menu', name: 'Menu' },
    { id: 'link-service', name: 'Service' },
    { id: 'link-contact', name: 'Contact Us' },
  ]
  const listMenuFooter = [
    { logo: <LogoLocation className={'w-12 h-12'} />, name: 'Location' },
    { logo: <LogoHour className={'w-12 h-12'} />, name: 'Opening Hours' },
    { logo: <LogoExperience className={'w-12 h-12'} />, name: 'Experience' },
    { logo: <LogoReservation className={'w-12 h-12'} />, name: 'Reservation' },
  ]
  const mouseLeave = e => {
    setActiveHoverLeft(false)
    setActiveHoverRight(false)
  }
  const mouseMove = e => {
    const clientX = e.clientX
    const left = window.innerWidth / 3
    const right = window.innerWidth - left
    clientX < left ? setActiveHoverLeft(true) : setActiveHoverLeft(false)
    clientX > right ? setActiveHoverRight(true) : setActiveHoverRight(false)
  }
  return (
    <div id='Home' className="relative bg-[url('../public/image/resto/hero.jpg')] bg-cover lg:h-screen w-full aspect-[10/6] group">
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
        className='absolute ml-28 font-bold z-20 w-[500px] tracking-wide lg:leading-tight lg:text-6xl md:text-5xl left-0 top-[30%]'
        onMouseMove={mouseMove}
        onMouseLeave={mouseLeave}>
        The Great Place To Create Your Moment
      </div>
      <div className='absolute mr-28 z-20 text-3xl right-0 top-[25%] w-56 text-right' onMouseMove={mouseMove} onMouseLeave={mouseLeave}>
        <h1>Find Us On</h1>
        <FindUs className={'w-28 float-right my-5 cursor-pointer'} />
        <p className='clear-both text-lg'>Jl. Bangkit Blok 15 No. 16, Panyileukan, Kota Bandung Jawa Barat, Indonesia</p>
      </div>
      <div className='absolute z-20 bottom-8 px-28 flex justify-between mb-10 w-full select-none' onMouseMove={mouseMove} onMouseLeave={mouseLeave}>
        {listMenuFooter.map((item, index) => (
          <div
            key={index}
            className={`${
              activeClassFooter === index && 'text-yellow-300'
            } flex items-center gap-4 cursor-pointer transition-colors duration-300 ease-in-out hover:text-yellow-300`}
            onClick={e => activeMenuFooter(e, index)}>
            {item.logo}
            <span className='ml-2'>{item.name}</span>
          </div>
        ))}
        <span
          ref={indicator2}
          className=' absolute border-4 z-40 -bottom-4 scale-y-50 block border-yellow-300 rounded-full w-24 transition-transform text-white pointer-events-none translate-x-16'
        />
      </div>

      <div onMouseEnter={mouseMove} onMouseLeave={mouseLeave} className='mx-auto w-1/3 h-full absolute left-0 top-0 z-10 select-none' />
      <div onMouseEnter={mouseMove} onMouseLeave={mouseLeave} className='mx-auto w-1/3 h-full absolute right-0 top-0 z-10 select-none' />
      <img
        src='image/resto/hero-shadow.png'
        alt=''
        className={`absolute top-0 h-full w-full ${
          hoverTop || activeHoverLeft ? 'opacity-0' : null
        } gradient-mask-r-10 transition-opacity duration-500 linea`}
      />
      <img
        src='image/resto/hero-shadow.png'
        alt=''
        className={`absolute top-0 h-full w-full ${
          hoverTop || activeHoverRight ? 'opacity-0' : null
        } gradient-mask-l-10 transition-opacity duration-500 linea`}
      />
    </div>
  )
}
