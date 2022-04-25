import { ScrollArea } from '@mantine/core'
import React from 'react'
import { useHover } from '@mantine/hooks'
export default function Resto() {
  const { hovered: hoverLeft, ref: refLeft } = useHover()
  const { hovered: hoverRight, ref: refRight } = useHover()
  return (
    <ScrollArea classNames={{ root: 'h-screen', thumb: 'bg-gray-300 opacity-30' }}>
      <div className="relative bg-[url('../public/image/resto/hero.jpg')] bg-cover lg:h-screen w-full aspect-[10/6] group">
        <div ref={refLeft} className='mx-auto w-1/3 h-full absolute left-0 z-10 select-none'></div>
        <div ref={refRight} className='mx-auto w-1/3 h-full absolute right-0 z-10 select-none'></div>
        <img
          src='image/resto/hero-shadow.png'
          alt='hero'
          className={`absolute h-full w-full ${hoverLeft && 'opacity-0'} gradient-mask-r-10 transition-opacity duration-500 linea`}
        />
        <img
          src='image/resto/hero-shadow.png'
          alt='hero'
          className={`absolute h-full w-full ${hoverRight && 'opacity-0'} gradient-mask-l-10 transition-opacity duration-500 linea`}
        />
      </div>
      <div className='h-72' />
    </ScrollArea>
  )
}
