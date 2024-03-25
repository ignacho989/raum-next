"use client";
import proyectos from "@/app/data";
import styles from "./proyecto.module.css";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/page";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { stolzl } from "@/app/fonts";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Project({ params }: { params: { proyectId: number } }) {
  const [activeTab, setActiveTab] = useState("tab1");

  function handleTab(tab: string) {
    setActiveTab(tab);
    // console.log(activeTab);
  }

  const num = params.proyectId;
  const proyecto = proyectos[num - 1];

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={`${styles.proyecto} ${stolzl.className}`}>
        <div className={styles.buttonsContainer}>
          <button className={styles.buttons} onClick={() => handleTab("tab1")}>
            <h1 className={`${styles.title1} ${stolzl.className}`}>
              {proyecto.name.toUpperCase()}
            </h1>
          </button>
          <button className={styles.buttons} onClick={() => handleTab("tab2")}>
            <h1 className={`${styles.title1}  ${stolzl.className}`}>
              FICHA TÉCNICA
            </h1>
          </button>
          <Link
            className={`${styles.title2} ${stolzl.className}`}
            href="/galeria"
          >
            VOLVER
          </Link>
        </div>
        {activeTab === "tab1" ? (
          <Swiper
            // slidesPerView={1}
            // slidesPerGroup={1}
            loop={true}
            navigation
            pagination={{ type: "fraction" }}
            modules={[Navigation, Pagination]}
            className={styles.swiper}
          >
            {proyecto.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className={styles.imageContainer}>
                  <Image
                    alt={proyecto.name}
                    src={image}
                    width={800}
                    height={800}
                    quality={100}
                    className={styles.image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}

        {activeTab === "tab1" ? (
          <ul className={styles.proyectos}>
            {proyecto.images.map((image, index) => {
              return (
                <li key={index} className={styles.container}>
                  <Image
                    alt={proyecto.name}
                    src={image}
                    className={styles.imagen}
                    width={800}
                    height={800}
                    quality={60}
                    // objectFit="cover"
                  />
                  <h1 className={styles.titulos}></h1>
                </li>
              );
            })}
          </ul>
        ) : null}

        {activeTab === "tab2" ? (
          <div className={styles.textContainer}>
            <p className={styles.text}>{proyecto.text}</p>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
}
