// import "bootstrap/dist/css/bootstrap.css";
// next/dist/compiled/@next/font/dist/local
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/navbar/navbar";
import { useState } from "react";
import Script from "next/script";

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
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-2MSQZ12ZP6`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2MSQZ12ZP6');
  `}
        </Script>
      </head>
      <body className={`${stolzl.className} main-layout`}>
        <header>
          {/* <button className="boton-idioma">ES / EN</button> */}
        </header>
        {children}
      </body>
    </html>
  );
}
