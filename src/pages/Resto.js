import { ScrollArea } from '@mantine/core'
import React from 'react'
import RestoHome from '../components/resto/RestoHome'
export default function Resto() {
  return (
    <ScrollArea classNames={{ root: 'h-screen text-white', thumb: 'bg-gray-500 opacity-50', scrollbar: 'hover:bg-white/50 z-50' }}>
      <RestoHome />
      <div id='Menu' className='relative bg-[#2C2C2C] h-[550px] px-28 py-10 text-center'>
        <h1 className='text-yellow-300 text-lg font-bold'>Our Best Seller This Month</h1>
        <h2>
          Filled by Respect and poured in a little Love, so that You can feel infinite Pleasure
          <a href='/resto#Home' className='absolute right-[112px] text-yellow-300 underline'>
            See All Menu
          </a>
        </h2>
      </div>
    </ScrollArea>
  )
}
