import Image from 'next/image'
import React from 'react'
import Checked from '@/public/images/chevron.png'

function page() {
  return (
    <section className="mt-[50px] border h-[300px] flex-col gap-5 flex justify-center items-center mx-[5%]">

        <div className='w-16 h-16 border-2 border-noir flex items-center justify-center rounded-full'>
            <Image src={Checked}
            width={20}
            height={20}/>
        </div>

        <h3 className='text-noir font-bold text-1xl md:text-xl'>
            Thanks you for your order!
        </h3>

        <p className='text-gris3  text-sm md:text-1xl '>
            The order confirmation has been sent to johndoe@gmail.com
        </p>
    </section>
  )
}

export default page
