import { JetBrains_Mono } from 'next/font/google'
import Image from 'next/image'
import UserIcon from "@/public/images/user.png";
import SearchIcon from "@/public/images/search.png";
import OpenIcon from "@/public/images/state=show.png";

const JetBrains = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

import React from 'react'

function Header() {
  return (
    <section className='text-1xl sticky'>
      <h1 className={`${JetBrains.className} text-xs flex justify-center items-center bg-noir p-5 text-blanc md:text-xl`}>
        Sign up and get 20% off for all new arrivals collections
      </h1>

      <div className='flex justify-between items-center px-[5%] py-8 border-b-2'>
        
        <Image src={OpenIcon} className='md:hidden cursor-pointer' />

        <ul className='hidden md:flex gap-5'>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Kids</a></li>
          <li><a href="#">Collections</a></li>
        </ul>

        <h1 className='uppercase text-[36px] font-chillax-extralight font-semibold'>Ballamas</h1>

        <ul className='hidden md:flex gap-5'>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About Us</a></li>
          <li>
            <div className="flex gap-2">
              <Image src={UserIcon} className='flex-shrink-0 flex-none' width={15} alt='Icone User' />
              <a href="#">Account</a>
            </div>
          </li>
          <li><a href="#">Cart(0)</a></li>
          <li><a href="#">
          <Image src={SearchIcon} className='flex-shrink-0 flex-none' alt='Search Icon' />
            </a></li>
        </ul>

        <div className=' flex gap-5 md:hidden'>
        <Image src={UserIcon} className='flex-shrink-0 flex-none' alt='Search Icon' />
        <Image src={SearchIcon} className='flex-shrink-0 flex-none' alt='Search Icon' />
        </div>
      </div>
    </section>
  )
}

export default Header
