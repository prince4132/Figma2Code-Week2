'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrashIcon from '@/public/images/trash.png';
import Tshirt from '@/public/images/t-shirt.png';
import Plus from '@/public/images/plus.png';
import Moins from '@/public/images/moins.png';
import Link from 'next/link';

function Cart() {
  const [products, setProducts] = useState([]);

  // Fonction pour récupérer les produits depuis l'API
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
      setProducts(response.data);
      console.log(response.data)
      
    } catch (error) {
      console.error('Erreur au dela recuperation des donnees:', error);
    }
  };
  
  // Fonction pour incrémenter la quantité d'un produit
  const increment = async (id) => {
    const product = products.find(p => p.id === id);
    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}${id}`, {
        quantity: product.quantity + 1,
        totalPrice: (product.quantity + 1) * product.price
      });
      fetchProducts(); // Récupère les produits mis à jour
    } catch (error) {
      console.error('Erreur lors de lintcrementation:', error);
    }
  };

  // Fonction pour décrémenter la quantité d'un produit
  const decrement = async (id) => {
    const product = products.find(p => p.id === id);
    if (product.quantity > 1) {
      try {
        await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}${id}`, {
          quantity: product.quantity - 1,
          totalPrice: (product.quantity - 1) * product.price
        });
        fetchProducts(); // Récupère les produits mis à jour
      } catch (error) {
        console.error('Erreur lors de la decrementation:', error);
      }
    }
  };

  // Fonction pour supprimer un produit du panier
  const removeProduct = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}${id}`);
      console.log('Deleting product with ID:', id); 
      fetchProducts(); // Récupère les produits mis à jour
    } catch (error) {
      console.error('Erreur lors de la suppression des produits:', error);
    }
  };

  // Utiliser useEffect pour récupérer les produits lorsque le composant se monte
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className='mt-[50px] flex-col lg:flex-row flex gap-10 px-[5%]'>
      <div className='w-full lg:w-2/3 '>
        <div className="flex justify-between">
          <h1 className='text-noir font-chillax-semibold text-1xl md:text-2xl'>Cart({products.length})</h1>

          <div className='bg-gris1 cursor-pointer p-2 flex gap-2 justify-center items-center rounded-full w-[120px]'>
            <Image src={TrashIcon} />
            <h3 onClick={() => setProducts([])}>Clear All</h3>
          </div>
        </div>

        <div className="flex justify-between pb-5 border-b border-gris2 items-center mt-5 ">
          <h3 className='text-gris3 text-1xl'>Product</h3>
          <h3 className='text-gris3 text-1xl'>Quantity</h3>
          <h3 className='text-gris3 text-1xl'>Price</h3>
        </div>

        {/* Affichage des produits */}
        {products.map(product => (
          <div key={product.id} className="flex justify-between pb-5 border-b border-gris2 items-center mt-5">
            <div className="flex gap-2 md:gap-3">
              <Image src={product.imageUrl} width={50} height={50} className='rounded-lg' />
              <div className='text-sm w-[90px] md:text-1xl'>
                <h3 className='text-noir font-bold text-sm md:text-1xl'>{product.title}</h3>
                <h3 className='text-noir font-bold text-sm md:text-1xl'>${product.price}</h3>
              </div>
            </div>

            <div className='flex justify-center items-center gap-2 md:gap-10'>
              <div className='bg-gris1 cursor-pointer p-2 flex gap-2 justify-between items-center rounded-full w-[100px] md:w-[120px]'>
                <Image src={Moins} onClick={() => decrement(product.id)} />
                <h3>{product.quantity}</h3>
                <Image src={Plus} onClick={() => increment(product.id)} />
              </div>

              <Image src={TrashIcon} width={30} height={30} className='cursor-pointer w-5 h-5' onClick={() => removeProduct(product.id)} />
            </div>

            <h3 className='text-noir font-bold text-sm md:text-1xl'>
              ${(typeof product.totalPrice === 'number' ? product.totalPrice : 0).toFixed(2)}
            </h3>
          </div>
        ))}
      </div>

      <div className='w-full md:w-[400px] md:mx-auto lg:w-1/3 border border-gris2 rounded-xl p-5 '>
        <h3 className='text-noir font-bold text-1xl'>Order Summary</h3>

        <div className="flex justify-between items-center mt-5">
          <h3 className='text-gris3 text-1xl'>Subtotal</h3>
          <h3 className='text-gris3 text-1xl'>
            ${(typeof products.reduce((acc, product) => acc + (typeof product.totalPrice === 'number' ? product.totalPrice : 0), 0) === 'number' ? products.reduce((acc, product) => acc + (typeof product.totalPrice === 'number' ? product.totalPrice : 0), 0) : 0).toFixed(2)}
          </h3>
        </div>

        <div className="flex justify-between items-center pb-5 border-gris2 border-b">
          <h3 className='text-gris3 text-1xl'>Discount</h3>
          <h3 className='text-gris3 text-1xl'>$0</h3>
        </div>

        <div className="flex justify-between font-bold items-center mt-5">
          <h3 className='text-noir text-1xl'>Order total</h3>
          <h3 className='text-noir text-1xl'>
            ${(typeof products.reduce((acc, product) => acc + (typeof product.totalPrice === 'number' ? product.totalPrice : 0), 0) === 'number' ? products.reduce((acc, product) => acc + (typeof product.totalPrice === 'number' ? product.totalPrice : 0), 0) : 0).toFixed(2)}
          </h3>
        </div>

        <Link href="./checkout" className='w-full'>
          <button className='text-blanc flex-grow-0 hover:bg-blanc hover:text-noir w-full mt-10 hover:border-noir hover:border-2 bg-noir p-3 md:p-3 rounded-full'>
            Checkout now
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Cart;
