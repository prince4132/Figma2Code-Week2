"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ProductImg from "@/public/images/argentina.png";
import Cart2 from "@/public/images/cart.png";
import Link from 'next/link';
import ProductItems from '@/app/components/prodItem';




function page() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://mock.shop/api?query=%7B%20products(first%3A%204)%20%7B%20edges%20%7B%20node%20%7B%20title%20description%20images(first%3A%201)%20%7B%20edges%20%7B%20node%20%7B%20url%20%7D%20%7D%20%7D%20variants(first%3A%201)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D');
                const data = await response.json();
                console.log('Fetched data:', data);
    
                // Accède aux produits dans la réponse
                const productsData = data.data.products.edges;
                // Mappe les données en extrayant id, titre, description, prix, et image URL
                const mappedProducts = productsData.map(edge => {
                    const id = edge.node.id; // Assure-toi que chaque produit a un id
                    const title = edge.node.title;
                    const description = edge.node.description;
                    const price = edge.node.variants.edges[0].node.price.amount;
                    const imageUrl = edge.node.images.edges[0].node.url;
                    return { id, title, description, price, imageUrl };
                });
    
                setProducts(mappedProducts);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };
    
        fetchProducts();
    }, []);
    
  return (
    <section>
        <section className="flex-col lg:flex lg:flex-row gap-5 mt-[50px] px-[5%]">

                <Image src={ProductImg} className='w-full rounded-3xl lg:w-1/2'/>
                    

                <div className='w-full lg:w-1/2 flex flex-col gap-5 mt-5 lg:mt-0'>
                    <h1 className='text-noir font-chillax-semibold font-bold text-2xl md:text-3xl'>Bodascore Tshirt</h1>
                    <h1 className='text-noir font-bold text-1xl md:text-3xl'>CAD $80</h1>
                    
                    <h1 className='text-noir font-bold text-1xl md:text-2xl'>Color: Green</h1>
                    
                    <div className="flex gap-2">
                        <div className="h-5 w-5 rounded-full cursor-pointer bg-vert"></div>
                        <div className="h-5 w-5 rounded-full cursor-pointer bg-bleu"></div>
                        <div className="h-5 w-5 rounded-full cursor-pointer bg-bleu2"></div>
                        <div className="h-5 w-5 rounded-full cursor-pointer bg-jaune"></div>
                    </div>

                    <h1 className='text-noir font-bold text-1xl md:text-2xl'>Size:</h1>

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

                        <Link href="./cart" className='w-1/2'>
                            <button className='text-blanc flex-grow-0 hover:bg-blanc hover:text-noir w-full  hover:border-noir hover:border-2 bg-noir  p-3 md:p-5 rounded-full'>
                                BUY NOW
                            </button>
                        </Link>

                        <Link href="./cart" className='w-1/2'>
                            <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc w-full  p-3 flex-grow-0 md:p-5 rounded-full'>
                                ADD TO CARD
                            </button>
                        </Link>

                    </div>

                    <div>
                        <h1 className='text-noir font-chillax-semibold text-1xl md:text-2xl'>Description</h1>
                        <p className='text-gris3 font-archivo-regular text-sm md:text-xl  mt-5 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                        </p>
                    </div>

                </div>
        </section>

        <section className='mt-[30px] px-[5%]'>
            <h1 className='text-noir font-chillax-semibold text-2xl md:text-3xl'>Your may also like</h1>
            
            <div className="md:flex mb-24 flex-col items-center justify-center md:flex-row mt-10 flex-wrap gap-5 ">

            <div className="md:flex flex-col items-center justify-center flex-wrap  md:flex-row mt-10 gap-5 ">
                {products.map(product => (
                <ProductItems
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    link={"./products"}
                />
                ))}
            </div>



                


            </div>
        </section>
    </section>
  )
}

export default page
