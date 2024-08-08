// components/ProductItems.js
"use client"
import Image from 'next/image';
import Link from 'next/link';
import Cart2 from "@/public/images/cart.png";

const ProductItems = ({ imageUrl, title, price }) => {
  return (

    <div className='product-item relative flex w-full flex-col md:w-[48%] lg:w-[23%] h-full' >

        <div className="w-full h-full">
            <Image src={imageUrl}
            className='w-full h-full rounded-3xl'
            width={10}
            height={800}
            layout="responsive"
            />

            <div>
                <h1 className='text-noir text-xl'>{title}</h1>
                <h1 className='text-gris3 text-1xl'>${price}</h1>
            </div>
        </div>
      
      
    </div>
  );
}

export default ProductItems;
