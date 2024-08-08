// app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import "./chillax.css";
import "./archivo.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Ballamas",
//   description: "Site E-commerce pour Ballamas",
// };

export default function RootLayout({ children, }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} /> */}
      </head>
      <body className='font-archivo-regular text-noir'>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
