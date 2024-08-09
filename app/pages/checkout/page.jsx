'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import TrashIcon from '@/public/images/trash.png'
import Link from 'next/link'
import Tshirt from '@/public/images/t-shirt.png'
import Plus from '@/public/images/plus.png'
import Moins from '@/public/images/moins.png'
import Header from '@/app/components/header'
import RootLayout from '@/app/layout'
import CreditCard from '@/public/images/card.png'
import Bank from '@/public/images/bank.png'
import Lock from '@/public/images/lock.png'
import axios from 'axios';

function page() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://mon-serveur.vercel.app/products/");
      setProducts(response.data);
      console.log(response.data)
      
    } catch (error) {
      console.error('Erreur au dela recuperation des donnees:', error);
    }
  };
    // Utiliser useEffect pour récupérer les produits lorsque le composant se monte
    useEffect(() => {
      fetchProducts();
    }, []);

  return (
    <section className='className=mt-[50px] flex-col lg:flex-row mt-10 flex gap-16 px-[5%]'>
            
            <div className='w-full lg:w-1/2'>

                <h1 className='text-noir font-chillax-semibold font-bold text-2xl md:text-3xl'>Checkout</h1>
                <div className='mt-5'>
                    <h3 className='text-noir font-bold text-sm md:text-1xl'>Your Order</h3>
                    <h3 className='text-gris3 text-sm md:text-1xl '>
                        By placing your Order, you agree to agree to Ballamas <a href="#" className='text-noir'><strong>Privacy</strong></a> and  <a href="#" className='text-noir decoration-8'><strong>Policy</strong>.</a> 
                    </h3>
                </div>
                
                {products.map(product => (
                <div key={product.id} className="flex justify-between pb-5 border-b border-gris2 items-center mt-5">
                  <div className="flex gap-2 md:gap-3">
                    <Image src={product.imageUrl} width={50} height={50} className='rounded-lg' />
                    <div className='text-sm w-[90px] md:text-1xl'>
                      <h3 className='text-noir font-bold text-sm md:text-1xl'>{product.title}</h3>
                      <h3 className='text-noir font-bold text-sm md:text-1xl'>${product.price}</h3>
                    </div>
                  </div>

                  <h3 className='text-noir font-bold text-sm md:text-1xl'>
                    ${(typeof product.totalPrice === 'number' ? product.totalPrice : 0).toFixed(2)}
                  </h3>
                </div>
              ))}

                  <div className="mt-5">
                    <h3 className='text-gris3 font-bold text-sm md:text-1xl'>Discount</h3>

                    <form className='flex w-full lg:w-4/5 flex-row gap-2'>
                      <input
                        type="email"
                        placeholder='Add discount code'
                        className='p-3 rounded-full w-2/3 bg-transparent border-2 border-noir placeholder:text-noir outline-none'
                      />
                      <input
                        type="submit"
                        value="Apply"
                        className='border-2 w-1/3 outline-none p-3 rounded-full bg-noir text-blanc hover:bg-blanc hover:border-noir hover:text-noir  border-blanc'
                      />
                    </form>

                    <h3 className='text-gris3 text-sm md:text-1xl mt-2 '>
                      <a href="#" className='text-gris3'><strong className='text-noir'>New customer ? Sign in</strong> to get better offer.</a>
                    </h3>

                    <div className='mt-5'>
                            
                        <div className="flex justify-between items-center mt-5">
                          <h3 className='text-gris3 text-1xl'>Subtotal</h3>
                          <h3 className='text-gris3 text-1xl'>${(typeof products.reduce((acc, product) => acc + (typeof product.totalPrice === 'number' ? product.totalPrice : 0), 0) === 'number' ? products.reduce((acc, product) => acc + (typeof product.totalPrice === 'number' ? product.totalPrice : 0), 0) : 0).toFixed(2)}</h3>
                        </div>

                        <div className="flex justify-between items-center pb-5 border-gris2 border-b">
                          <h3 className='text-gris3 text-1xl'>Discount</h3>
                          <h3 className='text-gris3 text-1xl'>$0</h3>
                        </div>

                        <div className="flex justify-between font-bold items-center mt-5">
                          <h3 className='text-noir text-1xl'>Order total</h3>
                          <h3 className='text-noir text-1xl'>${(typeof products.reduce((acc, product) => acc + (typeof product.totalPrice === 'number' ? product.totalPrice : 0), 0) === 'number' ? products.reduce((acc, product) => acc + (typeof product.totalPrice === 'number' ? product.totalPrice : 0), 0) : 0).toFixed(2)}</h3>
                        </div>

                    </div>

                    <div className="mt-5">

                      <h3 className='text-noir font-bold text-1xl'>Shippind method</h3>

                        <form className='flex flex-col gap-5 w-full mt-5'>

                            <div className='flex justify-between items-center rounded-lg   border p-3 border-gris2'>
                              <div>
                                <div className='flex justify-center items-center gap-2'>
                                  <input type="radio" name="Method"value={23344} id="1" />
                                  
                                  <label className='text-noir text-1xl'htmlFor="1">
                                    <h3 className='text-noir font-bold text-1xl'>Free Shipping</h3>
                                    <h3 className='text-gris3 text-1xl'>7-30 buisness days</h3>
                                  </label>
                                </div>
                              </div>
                              <h3 className='text-noir text-1xl'>$0</h3>
                            </div>

                            <div className='flex justify-between items-center rounded-lg   border p-3 border-gris2'>
                              <div>
                                <div className='flex justify-center items-center gap-2'>
                                  <input type="radio" name="Method"value={23344} id="2" />
                                  
                                  <label className='text-noir text-1xl'htmlFor="2">
                                    <h3 className='text-noir font-bold text-1xl'>Regular Shipping</h3>
                                    <h3 className='text-gris3 text-1xl'>3-4 buisness days</h3>
                                  </label>
                                </div>
                              </div>
                              <h3 className='text-noir text-1xl'>$7,50</h3>
                            </div>

                            <div className='flex justify-between items-center rounded-lg   border p-3 border-gris2'>
                              <div>
                                <div className='flex justify-center items-center gap-3'>
                                  <input type="radio" name="Method"value={23344} id="3" />
                                  
                                  <label className='text-noir text-1xl'htmlFor="3">
                                    <h3 className='text-noir font-bold text-1xl'> Express Shipping</h3>
                                    <h3 className='text-gris3 text-1xl'>1-3 jours buisness days</h3>
                                  </label>
                                </div>
                              </div>
                              <h3 className='text-noir text-1xl'>$22,50</h3>
                            </div>

                        </form>
                    </div>

                  </div>
            </div>

            {/* la section demimoitie */}

            <div className='w-full lg:w-1/2' >

              <div>
                <h3 className='text-noir font-bold text-sm md:text-1xl'>Payments Details</h3>
                <h3 className='text-gris3 text-sm md:text-1xl '>
                  Complete your Purchase by providing details payments.
                </h3>
              </div>
                  
                <div className="mt-5">

                  <h3 className='text-noir font-bold text-1xl'>Shipping Address</h3>

                  <div className='flex flex-col gap-5 w-full mt-5'>

                      <div className='flex w-full md:gap-5 gap-2 justify-between'>
                        <div className='flex flex-col w-1/2  '>
                          <label htmlFor="Nom" className='text-noir '>
                            First Name
                          </label>
                          <input
                          id='Nom'
                          type="text"
                          placeholder='Enter your First Name'
                          className='p-3 rounded-full  bg-transparent border-2 border-noir placeholder:text-noir outline-none'
                          />
                        </div>

                        <div className='flex flex-col w-1/2 '>
                          <label htmlFor="Prenom" className='text-noir '>
                            Last Name
                          </label>
                          <input
                          id='Prenom'
                          type="text"
                          placeholder='Enter your Last Name'
                          className='p-3 rounded-full  bg-transparent border-2 border-noir placeholder:text-noir outline-none'
                          />
                        </div>
                      </div>

                      <div className='flex w-full md:gap-5 gap-2 justify-between'>
                        <div className='flex flex-col w-1/2  '>
                          <label htmlFor="Email" className='text-noir '>
                            Email Address
                          </label>
                          <input
                          id='Email'
                          type="email"
                          placeholder='Enter your Email Address'
                          className='p-3 rounded-full  bg-transparent border-2 border-noir placeholder:text-noir outline-none'
                          />
                        </div>

                        <div className='flex flex-col w-1/2 '>
                          <label htmlFor="Number" className='text-noir '>
                            Phone Number
                          </label>
                          <input
                          id='Number'
                          type="number"
                          placeholder='Enter your Phone Number'
                          className='p-3 rounded-full  bg-transparent border-2 border-noir placeholder:text-noir outline-none'
                          />
                        </div>
                      </div>

                      <div className='flex w-full md:gap-5 gap-2 justify-between'>
                        <div className='flex flex-col w-1/2  '>
                          <label htmlFor="Adress" className='text-noir '>
                            Address
                          </label>
                          <input
                          id='Adress'
                          type="text"
                          placeholder='Enter your Address'
                          className='p-3 rounded-full  bg-transparent border-2 border-noir placeholder:text-noir outline-none'
                          />
                        </div>

                        <div className='flex flex-col w-1/2 '>
                          <label htmlFor="City" className='text-noir '>
                            City
                          </label>
                          <input
                          id='City'
                          type="text"
                          placeholder='City'
                          className='p-3 rounded-full  bg-transparent border-2 border-noir placeholder:text-noir outline-none'
                          />
                        </div>
                      </div>

                      <div className='flex w-full md:gap-5 gap-2 justify-between'>
                        <div className='flex flex-col w-1/2  '>
                          <label htmlFor="Region" className='text-noir '>
                            Region
                          </label>
                          <input
                          id='Region'
                          type="text"
                          placeholder='Select Region'
                          className='p-3 rounded-full  bg-transparent border-2 border-noir placeholder:text-noir outline-none'
                          />
                        </div>

                        <div className='flex flex-col w-1/2 '>
                          <label htmlFor="Code" className='text-noir '>
                            Postal Code
                          </label>
                          <input
                          id='Code'
                          type="text"
                          placeholder='Enter your Postal Code'
                          className='p-3 rounded-full  bg-transparent border-2 border-noir placeholder:text-noir outline-none'
                          />
                        </div>
                      </div>

                  </div>
              </div>

              <div className="mt-5">
                  
                <h3 className='text-noir font-bold text-1xl'>Select Payment Methods</h3>
                <div>
                  <div>
                    <div className="flex mt-3 gap-5">
                      <div className='w-1/2 border rounded-lg p-2 border-gris2'>
                        <Image
                        src={CreditCard}/>
                        <h3 className='text-gris3 text-sm md:text-1xl'>
                          Debit/Credi Card
                        </h3>
                      </div>
                      <div className='w-1/2 border rounded-lg p-2 border-gris2'>
                        <Image
                        src={Bank}/>
                        <h3 className='text-gris3 text-sm md:text-1xl'>
                          Virtual Account
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className='mt-5'>
                      <div className='border border-gris2 flex justify-between items-center p-3 rounded-full'>
                        <input type="text"
                        placeholder='Card Number' 
                        className='outline-none h-full w-full placeholder:text-noir' />
                        <Image src={Lock}/>
                      </div>

                      <div className='flex w-full justify-between mt-5 md:gap-5 gap-2'>
                        <div className='flex flex-col  w-1/2  '>
                          
                          <input
                          id='ExpiryDate'
                          type="text"
                          placeholder='Expiration Date (MM/YY)'
                          className='p-3 rounded-full  bg-transparent border-2 border-noir placeholder:text-noir outline-none'
                          />
                        </div>

                        <div className='flex flex-col w-1/2 '>
                          
                          <input
                          id='Security'
                          type="text"
                          placeholder='Security Code'
                          className='p-3 rounded-full  bg-transparent border-2 border-noir placeholder:text-noir outline-none'
                          />
                        </div>
                      </div>

                      <div className='flex gap-1 mt-2'>
                        <input type="checkbox" name="BillingAddress" id="BillingAddress"/>
                        <label htmlFor="BillingAddress" className='text-noir '>
                            Use the shopping address as the billing address 
                          </label>
                      </div>

                      <div className="mt-3">
                      <Link href="./payment" className='w-1/2'>
                        <button className='bg-noir flex justify-center items-center p-3 rounded-full w-full md:w-1/2 lg:w-2/3 md:mx-auto
                        hover:bg-blanc hover:text-noir hover:border-2 hover:border-noir text-blanc'>
                            Pay ${(typeof products.reduce((acc, product) => acc + (typeof product.totalPrice === 'number' ? product.totalPrice : 0), 0) === 'number' ? products.reduce((acc, product) => acc + (typeof product.totalPrice === 'number' ? product.totalPrice : 0), 0) : 0).toFixed(2)} →
                        </button>
                      </Link>
                      </div>
                  </div>
                </div>


              </div>

            </div>
    </section>
  )
}

export default page
