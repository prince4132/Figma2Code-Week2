'use client'
import { JetBrains_Mono } from 'next/font/google'
import Image from 'next/image'
import UserIcon from "@/public/images/user.png";
import SearchIcon from "@/public/images/search.png";
import OpenIcon from "@/public/images/state=default.png";
import CloseIcon from "@/public/images/state=show.png";
import CardIcon from "@/public/images/cart-2.png";

const JetBrains = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

import React, { useState } from 'react'

function Header() {
   // État pour gérer la visibilité du menu
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   // Fonction pour basculer l'état du menu
   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };


  return (
    <section className='text-1xl font-archivo-regular sticky'>
      <h1 className={`${JetBrains.className} text-xs flex justify-center items-center bg-noir p-5 text-blanc md:text-xl`}>
        Sign up and get 20% off for all new arrivals collections
      </h1>

      <div className={`flex relative justify-between items-center ${isMenuOpen ? "p-0" : "p-[5%]"} py-8 border-b-2`}>
        
        <Image src={isMenuOpen ? CloseIcon : OpenIcon} onClick={toggleMenu} className='lg:hidden cursor-pointer' />

        <ul className='hidden lg:flex gap-5'>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Kids</a></li>
          <li><a href="#">Collections</a></li>
        </ul>

        <h1 className='uppercase text-[36px] font-chillax-extralight font-semibold'>Ballamas</h1>

        <ul className="hidden lg:flex w-full h-full md:w-auto md:relative gap-5">
          <li><a href="#">Shop</a></li>
          <li><a href="#">About Us</a></li>
          <li>
            <div className="flex gap-2">
              <Image src={UserIcon} className='flex-shrink-0 flex-none' width={15} alt='Icone User' />
              <a href="#">Account</a>
            </div>
          </li>
          <li><a href="#">Cart (0)</a></li>
          <li><a href="#">
          <Image src={SearchIcon} className='flex-shrink-0 flex-none' alt='Search Icon' />
            </a></li>
        </ul>
        
        <ul className={`w-full h-full-scrre z-50 bg-blanc lg:w-auto lg:relative top-[100%] gap-5 flex-col items-center mt-10 absolute ${isMenuOpen ? 'flex' : 'hidden'}`}>
           <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Kids</a></li>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About Us</a></li>
          <li>
            <div className="flex gap-2">
              <Image src={UserIcon} className='flex-shrink-0 flex-none' width={15} alt='Icone User' />
              <a href="#">Account</a>
            </div>
          </li>
          <li><a href="#">Cart (0)</a></li>
          <li className='mt-5'><a href="#">FAQ</a></li>
          <li><a href="#">Contact Us Us</a></li>
        </ul>

        <div className=' flex gap-5 lg:hidden'>
        <Image src={UserIcon} className='flex-shrink-0 hidden md:block flex-none' alt='Search Icon' />
        <Image src={SearchIcon} className='flex-shrink-0 flex-none' alt='Search Icon' />
        <Image src={CardIcon} className='flex-shrink-0 flex-none' alt='Search Icon' />
        </div>
      </div>
    </section>
  )
}

export default Header
