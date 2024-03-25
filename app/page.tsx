import Image from "next/image";
import background from "../public/chapa_perforada.png";
import portada from "../public/imagen-portada.png";
import logo from "../public/LOGO PRINCIPAL.png";
import { Tourney } from "next/font/google";
import Link from "next/link";
import instagram from "/public/iconos/instagram-alt-logo-60.png";
import linkedin from "/public/iconos/linkedin-square-logo-60.png";
import whatsapp from "/public/iconos/whatsapp-logo-60.png";
import email from "/public/iconos/envelope-solid-60.png";

// col-1 d-flex flex-column align-items-center

const tourney = Tourney({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container-fluid">
      <main className="main-body ">
        <div className="portada-titulo d-flex justify-content-center">
          <div className="div-portada">
            <Image
              className="back-img"
              src={portada}
              alt="dibujo"
              priority={true}
              placeholder="blur"
            />
          </div>
          <div className="contenedor-titulo">
            <h1 className={`${tourney.className} titulo`}>RAUM ARQUITECTURA</h1>
          </div>
        </div>
        <div className="logo-contactos ">
          <Image src={logo} alt="logo raum" className="logo-raum" />
          <Link href="https://wa.me/5492996347335" target="_blank">
            <Image src={whatsapp} alt="whatsapp" className="iconos-img" />
          </Link>
          <Link
            href="https://www.instagram.com/raum.arq?igshid=MzMyNGUyNmU2YQ%3D%3D"
            target="_blank"
          >
            <Image src={instagram} alt="instagram" className="iconos-img" />
          </Link>
          <Link href="mailto:hola@raum-arq.com">
            <Image src={email} alt="e-mail" className="iconos-img" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/raum-arquitectura/about/"
            target="_blank"
          >
            <Image src={linkedin} alt="linkedin" className="iconos-img" />
          </Link>
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
