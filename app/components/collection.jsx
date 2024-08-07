import React from 'react'
import ArrowIcon from "@/public/images/arrow.png";
import Image from 'next/image';

function Collection() {
  return (
    <section className='mt-[50px] px-[5%]'>
        <div className='flex flex-col gap-5 justify-center items-center'>
            <h1 className='text-noir font-bold text-3xl'>OUR COLLECTION</h1>
            <p className='text-gris3 font-archivo-regular text-center '>
                Our latests collections, where classic and contemporary styles converge
                in perfect harmony.
            </p>
        </div>

        <div className="mt-10 block flex-row md:flex-row md:flex gap-5">

            <div  className='col1 w-full md:w-1/3 h-[400px] md:h-[500px] justify-center flex p-3 rounded-[40px] md:rounded-3xl '>
                <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc place-self-end bg-blanc p-1 md:p-2 rounded-full'>
                     LEARN MORE
                     {/* <span><Image src={ArrowIcon} className='flex-shrink-0' width={20} height={20}/></span> */}
                </button>
            </div>

            <div  className='col2 mt-5 md:mt-0 w-full md:w-2/3 h-[400px] md:h-[500px] flex flex-col justify-center items-center  rounded-[40px] md:rounded-3xl '>
                <h1 className='uppercase text-3xl md:text-6xl  text-blanc text-center font-chillax-bold'>CLASSIC MEN
                </h1>
                <h3 className='text-blanc font-archivo-regular text-xl text-center'>
                    We're changing the way things get made.
                </h3>
            </div>
        </div>
    </section>
  )
}

export default Collection
