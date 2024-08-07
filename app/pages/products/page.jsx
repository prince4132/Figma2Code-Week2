import Image from 'next/image'
import React from 'react'
import ProductImg from "@/public/images/argentina.png";
function page() {
  return (
    <section className="flex-col lg:flex lg:flex-row gap-5 mt-[50px] px-[5%]">

        <Image src={ProductImg} className='w-full rounded-3xl lg:w-1/2'/>
            

        <div className='w-full lg:w-1/2 flex flex-col gap-5 mt-5 lg:mt-0'>
            <h1 className='text-noir font-chillax-semibold font-bold text-3xl'>Bodascore Tshirt</h1>
            <h1 className='text-noir font-bold text-3xl'>CAD $80</h1>
            
            <h1 className='text-noir font-bold text-2xl'>Color: Green</h1>
            
            <div className="flex gap-2">
                <div className="h-5 w-5 rounded-full cursor-pointer bg-vert"></div>
                <div className="h-5 w-5 rounded-full cursor-pointer bg-bleu"></div>
                <div className="h-5 w-5 rounded-full cursor-pointer bg-bleu2"></div>
                <div className="h-5 w-5 rounded-full cursor-pointer bg-jaune"></div>
            </div>

            <h1 className='text-noir font-bold text-2xl'>Size:</h1>

            <div className="flex gap-2">
                <button className='text-blanc flex-grow-0 hover:bg-blanc hover:text-noir hover:border-noir hover:border-2 bg-noir p-0 md:p-2 w-[150px] md:w-[80px] rounded-full'>
                    XS
                </button>

                <button className='text-blanc flex-grow-0 hover:bg-blanc hover:text-noir hover:border-noir hover:border-2 bg-noir p-0 md:p-2 w-[150px] md:w-[80px] rounded-full'>
                    S
                </button>

                <button className='text-blanc flex-grow-0 hover:bg-blanc hover:text-noir hover:border-noir hover:border-2 bg-noir p-0 md:p-2  w-[150px] md:w-[80px] rounded-full'>
                    M
                </button>

                <button className='text-blanc flex-grow-0 hover:bg-blanc hover:text-noir hover:border-noir hover:border-2 bg-noir p-0 md:p-2  w-[150px] md:w-[80px] rounded-full'>
                    L
                </button>
                <button className='text-blanc flex-grow-0 hover:bg-blanc hover:text-noir hover:border-noir hover:border-2 bg-noir p-0 md:p-2  w-[150px] md:w-[80px] rounded-full'>
                    XL
                </button>
            </div>

            <div className="flex gap-3 w-full">
                <button className='text-blanc flex-grow-0 hover:bg-blanc hover:text-noir hover:border-noir hover:border-2 bg-noir w-full p-3 md:p-5 rounded-full'>
                    BUY NOW
                </button>

                <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc w-full  p-1 flex-grow-0 md:p-5 rounded-full'>
                ADD TO CARD
            </button>

            </div>


        </div>
    </section>
  )
}

export default page
