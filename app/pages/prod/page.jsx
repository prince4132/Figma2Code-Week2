"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cart1 from '@/public/images/cart-2.png';

const ProductItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://mock.shop/api?query={collections(first:%2010){edges%20{cursor%20node%20{id%20handle%20title%20description%20image%20{id%20url}}}}}');
        const data = await response.json();
        console.log('Fetched data:', data);

        // Accède aux produits dans la réponse
        const collections = data.data.collections.edges;
        setProducts(collections.map(edge => edge.node));
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className='product-item flex relative flex-col justify-between rounded-3xl w-full md:w-[48%] lg:w-[32%] p-5 h-[450px]' style={{ backgroundImage: `url(${product.image.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc w-32 bg-blanc transition-all flex-grow-0 p-1 md:p-2 rounded-full'>
            GET 20% OFF
          </button>

          <div className="flex gap-2 absolute top-[80%] justify-center items-center">
            <div className='w-[100px] bg-blanc p-3 md:p-5 rounded-full'>
              <Image src={Cart1} alt="Cart Icon" width={24} height={24} />
            </div>

            <Link href="./pages/products">
              <button className='bg-transparent text-blanc hover:text-blanc border-blanc border-2 transition-all p-3 md:p-5 rounded-full'>
                BUY NOW
              </button>
            </Link>
          </div>
          
          <h1 className='text-noir top-[100%] mt-3 absolute text-xl'>{product.title}</h1>

          <h1 className='text-gris3 translate-y-6 top-[100%] mt-3 absolute text-1xl'>$99</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductItems;
