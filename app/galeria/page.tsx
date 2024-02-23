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

// const proyectos = [
//   {
//     id: "2",
//     name: "Ferrada",
//     image: "/miniaturas/MINIATURA ferrada2.png",
//   },
//   {
//     id: "3",
//     name: "Gabi",
//     image: "/miniaturas/MINIATURA GABI 2.jpeg",
//   },
//   {
//     id: "4",
//     name: "Saracatunga",
//     image: "/miniaturas/MINIATURA.png",
//   },
//   {
//     id: "5",
//     name: "Gabi12",
//     image: "/miniaturas/MINIAUTRUA GABI 12.jpeg",
//   },
//   {
//     id: "6",
//     name: "Gabi12",
//     image: "/miniaturas/MINIATURA BOVEDAS.PNG",
//   },
//   {
//     id: "7",
//     name: "Gabi12",
//     image: "/miniaturas/MINIATURA CASA 1 BOSQUE.jpg",
//   },
//   {
//     id: "8",
//     name: "Gabi12",
//     image: "/miniaturas/MINIATURA CASA 2 BOSQUE.jpg",
//   },
//   {
//     id: "9",
//     name: "Gabi12",
//     image: "/miniaturas/MINIATURA ferrada.png",
//   },
//   {
//     id: "10",
//     name: "Gabi12",
//     image: "/miniaturas/MINIATURA LESA.jpg",
//     ficha: "",
//   },
//   {
//     id: "11",
//     name: "Gabi12",
//     image: "/miniaturas/MINIATURA MARIANO.jpg",
//   },
//   {
//     id: "12",
//     name: "Gabi12",
//     image: "/miniaturas/miniatura martin.png",
//   },
//   {
//     id: "13",
//     name: "Gabi12",
//     image: "/miniaturas/MINIATURA OCHOA byn.jpeg",
//   },
//   {
//     id: "14",
//     name: "Gabi12",
//     image: "/miniaturas/MINIATURAEGIPTO.jpeg",
//   },
//   {
//     id: "15",
//     name: "Gabi12",
//     image: "/miniaturas/MINIAUTRUA GABI 1.jpeg",
//   },
// ];

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
              <Image
                alt={proyecto.name}
                src={proyecto.image}
                className={styles.imagen}
                width={300}
                height={300}
                objectFit="cover"
              />
              {/* <img alt="" src="/miniaturas/MINIATURA ferrada2.png" /> */}
              <h1 className={styles.titulos}>
                {" "}
                <Link href={`/galeria/${proyecto.id}`}> {proyecto.name} </Link>
              </h1>
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
