import Image from 'next/image'
import React from 'react'
import ArrowIcon from "@/public/images/arrow.png";

function hero() {
  return (
    <section className='mx-[5%] mt-10 hero h-[450px] rounded-[40px] py-5 md:rounded-3xl flex justify-center items-center flex-col gap-5 border'>

        <div className="flex justify-center items-center p-5 gap-1">
            <hr className='w-[50px] md:w-[80px] border-none h-[1px] bg-gris3' />
            <h3 className='text-gris2 font-archivo-regular text-center '>We bring new fashion to the world</h3>
            <hr className='w-[50px] border-none h-[1px] bg-gris3' />
        </div>

        <h1 className='text-blanc font-chillax-semibold uppercase text-3xl md:text-6xl text-center font-bold'>
            Discover the latest fashion trends here
        </h1>

        <h3 className='text-gris2 font-archivo-regular text-center'>
            Discover the world of the fashion with our meticulously curated 
            outfits. Show now to update your wardrobe with chic and stylits outfits.
        </h3>

        <div className="flex gap-2">
            <button className='text-noir hover:bg-noir hover:text-blanc transition-all bg-blanc p-3 md:p-5 rounded-full'>
                Start Shopping
            </button>

            <button className='bg-blanc hover:text-blanc transition-all p-3 md:p-5 rounded-full'>
                <Image src={ArrowIcon} className='flex-shrink-0' width={20} height={20}/>
            </button>
        </div>
        
    </section>
  )
}

export default hero
