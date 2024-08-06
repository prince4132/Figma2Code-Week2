import { Inter } from "next/font/google";
import "./globals.css";
import "./chillax.css";
import "./archivo.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ballamas",
  description: "Site E-commerce por Ballamas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
