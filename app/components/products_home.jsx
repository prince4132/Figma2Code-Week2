import Image from 'next/image'
import React from 'react'
import ProductAir from "@/public/images/nike-air.png";
import Cart2 from "@/public/images/cart.png";
import Link from 'next/link';


function products_home() {
  return (
   <section className='mt-[50px] px-[5%]'>
        <h1 className='font-chillax-semibold text-noir text-xl text-center md:text-3xl'>
            Discover the latests trends in summer fashion. Show now and refresh
            your wardrobe with our stylish summer shirt.
        </h1>

        <div className='mt-10 flex-grow-0 flex gap-2 md:gap-5 mx-auto w-full flex-wrap md:w-[600px]'>
            <button className='text-blanc flex-grow-0 hover:bg-blanc hover:text-noir hover:border-noir hover:border-2 bg-noir transition-all p-3 md:p-5 rounded-full'>
                All 132
            </button>

            <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc transition-all p-1 flex-grow-0 md:p-5 rounded-full'>
                Accessories 13
            </button>

            <button className='text-noir  border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc  transition-all flex-grow-0 p-1 md:p-5 rounded-full'>
                Featured 67
            </button>

            <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc  transition-all flex-grow-0 p-1 md:p-5 rounded-full'>
                Unisex 52
            </button>
        </div>

        <div className="md:flex flex-col items-center justify-center md:flex-row mt-10 flex-wrap gap-5 ">

            <div className='product-items flex relative flex-col justify-between rounded-3xl w-full md:w-[48%] lg:w-[32%] p-5 h-[450px]'>
                <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc w-32 bg-blanc  transition-all flex-grow-0 p-1 md:p-2 rounded-full'>
                    GET OF 20%
                </button>

                <div className="flex gap-2 absolute top-[80%] justify-center items-center">
                    
                    <div className='w-[100px] bg-blanc p-3 md:p-5 rounded-full'>
                        <Image src={Cart2} />
                    </div>

                    <Link href="./pages/products">
                            <button className='bg-transparent text-blanc hover:text-blanc border-blanc border-2 transition-all p-3 md:p-5 rounded-full'>
                                BUY NOW
                            </button>
                    </Link>
                </div>
                
                <h1 className='text-noir top-[100%] mt-3 absolute text-xl'>SUMMER SHIRT</h1>

                <h1 className='text-gris3 translate-y-6 top-[100%] mt-3 absolute text-1xl'>$99</h1>

            </div>

            <div className='product-items relative rounded-3xl mt-20 md:mt-0 p-5 w-full md:w-[48%] lg:w-[32%] h-[450px]'>
                <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc  transition-all flex-grow-0 p-1 md:p-2 rounded-full'>
                    GET OF 20%
                </button>

                <div className="flex gap-2 absolute top-[80%] justify-center items-center">
                    
                    <div className='w-[100px] bg-blanc p-3 md:p-5 rounded-full'>
                        <Image src={Cart2} />
                    </div>

                    <Link href="./pages/products">
                            <button className='bg-transparent text-blanc hover:text-blanc border-blanc border-2 transition-all p-3 md:p-5 rounded-full'>
                                BUY NOW
                            </button>
                    </Link>
                </div>

                <h1 className='text-noir top-[100%] mt-3 absolute text-xl'>SUMMER SHIRT</h1>

                <h1 className='text-gris3 translate-y-6 top-[100%] mt-3 absolute text-1xl'>$99</h1>

            </div>

            <div className='product-items relative rounded-3xl mt-20 md:mt-0 p-5 w-full md:w-[48%] lg:w-[32%] h-[450px]'>
                <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc  transition-all flex-grow-0 p-1 md:p-2 rounded-full'>
                    GET OF 20%
                </button>

                <div className="flex gap-2 absolute top-[80%] justify-center items-center">
                    
                    <div className='w-[100px] bg-blanc p-3 md:p-5 rounded-full'>
                        <Image src={Cart2} />
                    </div>

                    <Link href="./pages/products">
                            <button className='bg-transparent text-blanc hover:text-blanc border-blanc border-2 transition-all p-3 md:p-5 rounded-full'>
                                BUY NOW
                            </button>
                    </Link>
                </div>

                <h1 className='text-noir top-[100%] mt-3 absolute text-xl'>SUMMER SHIRT</h1>

                <h1 className='text-gris3 translate-y-6 top-[100%] mt-3 absolute text-1xl'>$99</h1>

            </div>

            <div className='product-items relative rounded-3xl mt-20 md:mt-10 p-5 w-full md:w-[48%] lg:w-[32%] h-[450px]'>
                <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc  transition-all flex-grow-0 p-1 md:p-2 rounded-full'>
                    GET OF 20%
                </button>

                <div className="flex gap-2 absolute top-[80%] justify-center items-center">
                    
                    <div className='w-[100px] bg-blanc p-3 md:p-5 rounded-full'>
                        <Image src={Cart2} />
                    </div>

                    <Link href="./pages/products">
                            <button className='bg-transparent text-blanc hover:text-blanc border-blanc border-2 transition-all p-3 md:p-5 rounded-full'>
                                BUY NOW
                            </button>
                    </Link>
                </div>

                <h1 className='text-noir top-[100%] mt-3 absolute text-xl'>SUMMER SHIRT</h1>

                <h1 className='text-gris3 translate-y-6 top-[100%] mt-3 absolute text-1xl'>$99</h1>

            </div>

            <div className='product-items relative rounded-3xl mt-20 md:mt-10  p-5 w-full md:w-[48%] lg:w-[32%] h-[450px]'>
                <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc  transition-all flex-grow-0 p-1 md:p-2 rounded-full'>
                    GET OF 20%
                </button>

                <div className="flex gap-2 absolute top-[80%] justify-center items-center">
                    
                    <div className='w-[100px] bg-blanc p-3 md:p-5 rounded-full'>
                        <Image src={Cart2} />
                    </div>

                    <Link href="./pages/products">
                            <button className='bg-transparent text-blanc hover:text-blanc border-blanc border-2 transition-all p-3 md:p-5 rounded-full'>
                                BUY NOW
                            </button>
                    </Link>
                </div>

                <h1 className='text-noir top-[100%] mt-3 absolute text-xl'>SUMMER SHIRT</h1>

                <h1 className='text-gris3 translate-y-6 top-[100%] mt-3 absolute text-1xl'>$99</h1>

            </div>

            <div className='product-items relative rounded-3xl mt-20 md:mt-10   p-5 w-full md:w-[48%] lg:w-[32%] h-[450px]'>
                <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc  transition-all flex-grow-0 p-1 md:p-2 rounded-full'>
                    GET OF 20%
                </button>

                <div className="flex gap-2 absolute top-[80%] justify-center items-center">
                    
                    <div className='w-[100px] bg-blanc p-3 md:p-5 rounded-full'>
                        <Image src={Cart2} />
                    </div>

                    <Link href="./pages/products">
                            <button className='bg-transparent text-blanc hover:text-blanc border-blanc border-2 transition-all p-3 md:p-5 rounded-full'>
                                BUY NOW
                            </button>
                    </Link>
                </div>

                <h1 className='text-noir top-[100%] mt-3 absolute text-xl'>SUMMER SHIRT</h1>

                <h1 className='text-gris3 translate-y-6 top-[100%] mt-3 absolute text-1xl'>$99</h1>

            </div>

            <div className='product-items relative rounded-3xl mt-20 md:mt-10  p-5 w-full md:w-[48%] lg:w-[32%] h-[450px]'>
                <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc  transition-all flex-grow-0 p-1 md:p-2 rounded-full'>
                    GET OF 20%
                </button>

                <div className="flex gap-2 absolute top-[80%] justify-center items-center">
                    
                    <div className='w-[100px] bg-blanc p-3 md:p-5 rounded-full'>
                        <Image src={Cart2} />
                    </div>

                    <Link href="./pages/products">
                            <button className='bg-transparent text-blanc hover:text-blanc border-blanc border-2 transition-all p-3 md:p-5 rounded-full'>
                                BUY NOW
                            </button>
                    </Link>
                </div>

                <h1 className='text-noir top-[100%] mt-3 absolute text-xl'>SUMMER SHIRT</h1>

                <h1 className='text-gris3 translate-y-6 top-[100%] mt-3 absolute text-1xl'>$99</h1>

            </div>

            <div className='product-items relative rounded-3xl mt-20 md:mt-10  p-5 w-full md:w-[48%] lg:w-[32%] h-[450px]'>
                <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc  transition-all flex-grow-0 p-1 md:p-2 rounded-full'>
                    GET OF 20%
                </button>
                
                <div className="flex gap-2 absolute top-[80%] justify-center items-center">
                    
                    <div className='w-[100px] bg-blanc p-3 md:p-5 rounded-full'>
                        <Image src={Cart2} />
                    </div>

                    <Link href="./pages/products">
                            <button className='bg-transparent text-blanc hover:text-blanc border-blanc border-2 transition-all p-3 md:p-5 rounded-full'>
                                BUY NOW
                            </button>
                    </Link>
                </div>

                <h1 className='text-noir top-[100%] mt-3 absolute text-xl'>SUMMER SHIRT</h1>

                <h1 className='text-gris3 translate-y-6 top-[100%] mt-3 absolute text-1xl'>$99</h1>

            </div>
            <div className='product-items relative rounded-3xl mt-20 md:mt-10  p-5 w-full md:w-[48%] lg:w-[32%] h-[450px]'>
                <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc  transition-all flex-grow-0 p-1 md:p-2 rounded-full'>
                    GET OF 20%
                </button>

                <div className="flex gap-2 absolute top-[80%] justify-center items-center">
                    
                    <div className='w-[100px] bg-blanc p-3 md:p-5 rounded-full'>
                        <Image src={Cart2} />
                    </div>

                    <Link href="./pages/products">
                            <button className='bg-transparent text-blanc hover:text-blanc border-blanc border-2 transition-all p-3 md:p-5 rounded-full'>
                                BUY NOW
                            </button>
                    </Link>
                </div>

                <h1 className='text-noir top-[100%] mt-3 absolute text-xl'>SUMMER SHIRT</h1>

                <h1 className='text-gris3 translate-y-6 top-[100%] mt-3 absolute text-1xl'>$99</h1>

            </div>
        </div>

        <div className='mt-20 md:mt-32 w-[100px] md:w-[140px] mx-auto'>
            <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc transition-all p-1 flex-grow-0 md:p-5 rounded-full'>
                View more
            </button>
        </div>
   </section>
  )
}

export default products_home
