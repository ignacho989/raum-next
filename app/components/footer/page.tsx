import Link from "next/link";
import instagram from "/public/footer/instagram-alt-logo-24.png";
import linkedin from "/public/footer/linkedin-square-logo-24.png";
import whatsapp from "/public/footer/whatsapp-logo-24.png";
import email from "/public/footer/envelope-solid-24.png";
import raumLogo from "/public/footer/LOGO PRINCIPAL.png";
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={raumLogo} alt="logo raum" className={styles.logo} />
      <div className={styles.media}>
        <Link href="https://wa.me/5492996347335" target="_blank">
          <Image src={whatsapp} alt="whatsapp" />
        </Link>
        <Link
          href="https://www.instagram.com/raum.arq?igshid=MzMyNGUyNmU2YQ%3D%3D"
          target="_blank"
        >
          <Image src={instagram} alt="instagram" />
        </Link>
        <Link href="mailto:hola@raum-arq.com">
          <Image src={email} alt="e-mail" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/raum-arquitectura/about/"
          target="_blank"
        >
          <Image src={linkedin} alt="linkedin" />
        </Link>
      </div>
    </footer>
  );
}
