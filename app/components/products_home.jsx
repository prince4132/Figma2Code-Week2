import { useEffect, useState } from 'react'; // Ajout des imports nécessaires
import Image from 'next/image';
import React from 'react';
import ProductAir from "@/public/images/nike-air.png";
import Cart2 from "@/public/images/cart.png";
import Link from 'next/link';
import ProductItem from './ProductItem'; // Vérifie le nom du fichier pour correspondre à l'import

function ProductsHome() { // Capitalisation du nom du composant

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://mock.shop/api?query=%7B%20products(first%3A%209)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20images(first%3A%201)%20%7B%20edges%20%7B%20node%20%7B%20url%20%7D%20%7D%20%7D%20variants(first%3A%201)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D');
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
    <section className='mt-[50px] px-[5%]'>
      <h1 className='font-chillax-semibold text-noir text-xl text-center md:text-3xl'>
        Discover the latest trends in summer fashion. Show now and refresh
        your wardrobe with our stylish summer shirt.
      </h1>

      <div className='mt-10 flex-grow-0 flex gap-2 md:gap-5 mx-auto w-full flex-wrap md:w-[600px]'>
        <button className='text-blanc flex-grow-0 hover:bg-blanc hover:text-noir hover:border-noir hover:border-2 bg-noir transition-all p-3 md:p-5 rounded-full'>
          All 132
        </button>

        <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc transition-all p-1 flex-grow-0 md:p-5 rounded-full'>
          Accessories 13
        </button>

        <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc transition-all flex-grow-0 p-1 md:p-5 rounded-full'>
          Featured 67
        </button>

        <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc transition-all flex-grow-0 p-1 md:p-5 rounded-full'>
          Unisex 52
        </button>
      </div>

      <div className="md:flex flex-col items-center justify-center md:flex-row mt-10 flex-wrap gap-5 ">
        {products.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            link={"./pages/products"}
          />
        ))}
      </div>

      <div className='mt-20 md:mt-32 w-[100px] md:w-[140px] mx-auto'>
        <button className='text-noir border-2 border-noir hover:bg-noir hover:text-blanc bg-blanc transition-all p-1 flex-grow-0 md:p-5 rounded-full'>
          View more
        </button>
      </div>
    </section>
  )
}

export default ProductsHome;
