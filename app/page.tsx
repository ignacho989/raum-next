import Image from "next/image";
import background from "../public/chapa_perforada.png";
import portada from "../public/imagen-portada.png";
import logo from "../public/LOGO PRINCIPAL.png";
import { Tourney } from "next/font/google";
import Link from "next/link";

// col-1 d-flex flex-column align-items-center

const tourney = Tourney({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container-fluid">
      <main className="main-body ">
        <div className="portada-titulo d-flex justify-content-center">
          <div className="div-portada">
            <Image className="back-img" src={portada} alt="dibujo" />
          </div>
          <div className="contenedor-titulo">
            <h1 className={`${tourney.className} titulo`}>RAUM ARQUITECTURA</h1>
          </div>
        </div>
        <div className="logo-contactos ">
          <Image src={logo} alt="logo raum" className="logo-raum row" />
          <a href="" className="">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a
            className=""
            href="https://www.instagram.com/raum.arq?igshid=MzMyNGUyNmU2YQ%3D%3D"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a className="" href="mailto:hola@raum-arq.com">
            <i className="bi bi-envelope"></i>
          </a>
          <a
            className=""
            href="https://www.linkedin.com/company/raum-arquitectura/about/"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="div-botones">
          <Link
            href="/galeria"
            className={`${tourney.className} boton btn-galeria`}
          >
            GALERIA
          </Link>
          <Link
            href="/gallery"
            className={`${tourney.className} boton btn-nosotras`}
          >
            NOSOTRAS
          </Link>
          <Link
            href="/gallery"
            className={`${tourney.className} boton btn-contacto`}
          >
            CONTACTO
          </Link>
        </div>
      </main>
    </div>
  );
}
