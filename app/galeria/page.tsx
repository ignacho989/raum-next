"use client";
// import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import styles from "../galeria/styles.module.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/page";
import { useState } from "react";
import Image from "next/image";
import banner from "/public/banner.png";
import { Tourney } from "next/font/google";
import proyectos from "../data";

// import api from "../api";

export default function Gallery() {
  console.log(proyectos);

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.spacing}></div>
      {/* <h1 className={styles.styles}>Proyectos</h1> */}
      <ul className={styles.proyectos}>
        {proyectos.map((proyecto) => {
          return (
            <li key={proyecto.id} className={styles.container}>
              {/* <p>{proyecto.id}</p> */}
              <Link href={`/galeria/${proyecto.id}`} className={styles.links}>
                <Image
                  alt={proyecto.name}
                  src={proyecto.minImg}
                  className={styles.imagen}
                  width={400}
                  height={400}
                  // objectFit="cover"
                />
                {/* <img alt="" src="/miniaturas/MINIATURA ferrada2.png" /> */}
                <h1 className={styles.titulos}>
                  {" "}
                  {proyecto.name.toUpperCase()}{" "}
                </h1>
              </Link>
            </li>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
}

// function Proyecto() {
//   return (
//     <li>
//       <Image
//         src={proyectoObj.image}
//         alt={proyectoObj.name}
//         width={500}
//         height={500}
//       />
//       <h2>{proyectoObj.name}</h2>
//     </li>
//   );
// }
