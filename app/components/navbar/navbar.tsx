// import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import menuImage from "/public/menu-regular-36.png";
import banner from "/public/banner.png";
import { Tourney } from "next/font/google";

import styles from "./navbar.module.css";

const tourney = Tourney({ subsets: ["latin"] });

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  function handleNav() {
    setShowNav(!showNav);
  }

  return (
    <div className={styles.div}>
      <div className={styles.head}>
        <Image src={banner} alt="banner" className={styles.banner} />
        <h1 className={`${tourney.className} ${styles.title}`}>
          RAUM ARQUITECTURA
        </h1>
      </div>
      <button onClick={handleNav} className={styles.button}>
        <Image alt="menu button" src={menuImage} />
      </button>
      <nav className={styles.nav}>
        {showNav === true ? (
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="/" className={styles.li}>
                &gt; INICIO
              </Link>
            </li>
            <li>
              <Link href="/galeria" className={styles.li}>
                &gt; GALERIA DE PROYECTOS
              </Link>
            </li>

            <li>
              <Link href="/contacto" className={styles.li}>
                &gt; CONTACTANOS!¡
              </Link>{" "}
            </li>
            <li>
              <Link href="/about" className={styles.li}>
                &gt; SOBRE NOSOTRAS
              </Link>
            </li>
          </ul>
        ) : null}
      </nav>
    </div>
  );
}

// if (!showNav) {
//   return (
//     <button onClick={handleNav} className={styles.button}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="16"
//         height="16"
//         fill="currentColor"
//         className="bi bi-list"
//         viewBox="0 0 16 16"
//       >
//         <path
//           fill-rule="evenodd"
//           d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
//         />
//       </svg>
//     </button>
//   );
// }

// if (showNav) {
//   return (
//     <section className={styles.nav}>
//       <button onClick={handleNav} className={styles.button}>
//         <h1>X</h1>
//       </button>
//       <ul className={styles.ul}>
//         <li>
//           <Link href="/">-INICIO</Link>
//         </li>
//         <li>
//           <Link href="/galeria">-GALERIA DE PROYECTOS</Link>
//         </li>

//         <li>
//           <Link href="/contacto">-CONTACTANOS!¡</Link>{" "}
//         </li>
//         <li>
//           <Link href="/about">-SOBRE NOSOTRAS</Link>
//         </li>
//       </ul>
//     </section>
//   );
// }

// return (
//   <button onClick={handleNav}>
//     {showNav === false ? (
//       <i className="bi bi-list"></i>
//     ) : (
//       <section className={styles.nav}>
//         <button onClick={handleNav}>X</button>
//         <ul>
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>Nosotras</li>
//           <li>Contacto</li>
//         </ul>
//       </section>
//     )}
//   </button>
// );
