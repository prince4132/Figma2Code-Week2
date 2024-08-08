'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import TrashIcon from '@/public/images/trash.png'
import Link from 'next/link'
import Tshirt from '@/public/images/t-shirt.png'
import Plus from '@/public/images/plus.png'
import Moins from '@/public/images/moins.png'


function cart() {
  var [qtProd, setqtProd] = useState(0);

  const Increment = () => {
    setqtProd(qtProd++)
  };

  const Decrement = () => {
    setqtProd(qtProd--)
  };

  return (
  <section className='mt-[50px] flex-col lg:flex-row flex gap-10 px-[5%]'>
    
    <div className='w-full lg:w-2/3 '>

        <div className="flex justify-between">
            <h1 className='text-noir font-chillax-semibold text-1xl md:text-2xl'>Cart(3)</h1>

            <div className='bg-gris1 cursor-pointer p-2 flex gap-2 justify-center items-center rounded-full w-[120px]'>
              <Image src={TrashIcon} />
              <h3>Clear All</h3>
            </div>
        </div>

        <div className="flex justify-between pb-5 border-b border-gris2 items-center mt-5 ">
          <h3 className='text-gris3 text-1xl'>Product</h3>
          <h3 className='text-gris3 text-1xl'>Quantity</h3>
          <h3 className='text-gris3 text-1xl'>Price</h3>
        </div>

        {/* le map commence par ici demain Prince */}

        <div className="flex justify-between pb-5 border-b border-gris2 items-center mt-5 ">
            <div className="flex gap-2 md:gap-3">
              <Image src={Tshirt}
              width={50}
              height={50}
              className='rounded-lg' />

              <div className='text-sm md:text-1xl'>
                <h3 className='text-noir font-bold text-sm md:text-1xl'>T-shirt</h3>
                <h3 className='text-gris3 font-bold text-sm md:text-1xl '>Green Large</h3>
                <h3 className='text-noir font-bold text-sm md:text-1xl'>$87</h3>
              </div>

              
            </div>

            <div className='flex justify-center items-center gap-2 md:gap-10'>

                <div className='bg-gris1 cursor-pointer p-2 flex gap-2 justify-between items-center rounded-full w-[100px] md:w-[120px]'>
                  <Image src={Moins} onClick={Decrement}/>
                  <h3>{qtProd}</h3>
                  <Image src={Plus} onClick={Increment} />
                </div>

                <Image src={TrashIcon}
                  width={30}
                  height={30}
                  className='cursor-pointer w-5 h-5'
                />
              </div>

              <h3 className='text-noir font-bold text-sm md:text-1xl'>$174.00</h3>

        </div>

         

    </div>

    <div className='w-full md:w-[400px] md:mx-auto lg:w-1/3 border border-gris2 rounded-xl p-5 '>

      <h3 className='text-noir font-bold text-1xl'>Order Summary</h3>

      <div className="flex justify-between items-center mt-5">
        <h3 className='text-gris3 text-1xl'>Subtotal</h3>
        <h3 className='text-gris3 text-1xl'>$564.00</h3>
      </div>

      <div className="flex justify-between items-center pb-5 border-gris2 border-b">
        <h3 className='text-gris3 text-1xl'>Discount</h3>
        <h3 className='text-gris3 text-1xl'>$0</h3>
      </div>

      <div className="flex justify-between font-bold items-center mt-5">
        <h3 className='text-noir text-1xl'>Order total</h3>
        <h3 className='text-noir text-1xl'>$564.00</h3>
      </div>

      <Link href="./cart" className='w-full '>
        <button className='text-blanc flex-grow-0 hover:bg-blanc hover:text-noir w-full mt-10 hover:border-noir hover:border-2 bg-noir  p-3 md:p-3 rounded-full'>
          Checkout now
        </button>
      </Link>
    </div>

  </section>
  )
}

export default cart
