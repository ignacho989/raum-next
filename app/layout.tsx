// import "bootstrap/dist/css/bootstrap.css";
// next/dist/compiled/@next/font/dist/local
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/navbar/navbar";
import { useState } from "react";

const stolzl = localFont({
  src: "../public/fonts/Stolzl Book.ttf",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAUM",
  description: "arquitectura",
  openGraph: {
    title: "RAUM",
    description: "arquitectura",
    url: "https://raum-arq.com",
    siteName: "Raum Arq",
    images: "public/LOGO PRINCIPAL.png",
    locale: "es-ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${stolzl.className} main-layout`}>
        <header>
          {/* <button className="boton-idioma">ES / EN</button> */}
        </header>
        {children}
      </body>
    </html>
  );
}
