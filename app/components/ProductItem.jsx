// components/ProductItems.js
"use client"
import Image from 'next/image';
import Link from 'next/link';
import Cart2 from "@/public/images/cart.png";

const ProductItems = ({ imageUrl, title, price, link }) => {
  return (
    <div className='product-item relative flex w-full flex-col justify-between md:w-[48%] lg:w-[32%] h-[450px]' >

      <div style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='h-[450px] 
       rounded-3xl w-full  p-10  '>
          <button className='text-noir border-2 w-[150px] border-noir hover:bg-noir hover:text-blanc bg-blanc transition-all flex-grow-0 p-1 md:p-2 rounded-full'>
            GET OF 20%
          </button>

          <div className="flex gap-2 absolute top-[68%] justify-center items-center">
            <div className='w-[100px] bg-blanc p-3 md:p-5 rounded-full'>
                <Image src={Cart2} alt="Cart" />
            </div>

              <Link href={link}>
                <button className='bg-transparent text-blanc hover:text-noir border-blanc border-2 transition-all p-3 md:p-5 rounded-full'>
                  BUY NOW
                </button>
              </Link>
          </div>

      </div>
      
      <div>
            <h1 className='text-noir text-xl'>{title}</h1>
            <h1 className='text-gris3 text-1xl'>${price}</h1>
      </div>
    </div>
  );
}

export default ProductItems;
