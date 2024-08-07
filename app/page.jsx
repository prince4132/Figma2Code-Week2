"use client"
import Image from "next/image";
import Hero from "./components/hero";
import Products_home from "./components/products_home";
import Collection from "./components/collection";


export default function Home() {
  return (
   <div>
    <h1 className="text-vert font-chillax-semibold text-xl">
    </h1>
    <Hero/>
    <Products_home/>
    <Collection/>
    {/* <List/> */}
   </div>
  );
}
