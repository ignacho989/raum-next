"use client";
import logo from "../public/LOGO PRINCIPAL.png";
import Link from "next/link";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/navbar";

export default function NotFound() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="not-found-container">
        <h2>Pagina No Encontrada</h2>
        <Link href="/" className="not-found-links">
          <h3>VOLVER A INICIO</h3>
        </Link>
        <Link href="galeria" className="not-found-links">
          <h3>IR A PROYECTOS</h3>
        </Link>
        {/* <Image
          src="../public/LOGO PRINCIPAL.png"
          alt="logo raum"
          width={100}
          height={100}
          className="logo-raum"
        /> */}
      </div>
      <Footer />
    </div>
  );
}
