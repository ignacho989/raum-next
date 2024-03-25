"use client";
import { useState } from "react";
import Footer from "../components/footer/page";
import Navbar from "../components/navbar/navbar";
import styles from "../nosotras/styles.module.css";
import { stolzl } from "@/app/fonts";
import Image from "next/image";
import nosotras from "/public/imagen-nosotras.png";

export default function Nosotras() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.contenedor}>
        <Image
          src={nosotras}
          alt="Imagen de nosotras"
          className={styles.imagen}
        />
        <p className={styles.parrafo}>
          Raum arquitectura © es un estudio de arquitectura con más de 10 años
          de trayectoria bi-radicado en las ciudades de Neuquén y El Bolsón,
          Patagonia, Argentina. Brindamos servicios de arquitectura integral,
          abarcando todos los campos de la construcción:
          <ul className={styles.ul}>
            <li>Desarrollo de ideas </li>
            <li>Proyecto</li>
            <li>Dirección de obra </li>
            <li>Gestión municipal y habilitaciones</li>
            <li>
              Remodelación / Refuncionalización / Restauración de espacios
            </li>
            <li>Interiorismo / Diseño de muebles</li>
            <li>Paisajismo</li>
            <li>Experiencia en trabajo remoto</li>
          </ul>
        </p>
      </div>
      <Footer />
    </div>
  );
}
