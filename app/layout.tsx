import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAUM Arq",
  description: "Principal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="main-layout">
          <button className="">ES/EN</button>
          {children}
          <footer className="footer">
            <a href="">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/raum.arq?igshid=MzMyNGUyNmU2YQ%3D%3D">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="mailto:hola@raum-arq.com">
              <i className="bi bi-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/company/raum-arquitectura/about/">
              <i className="bi bi-linkedin"></i>
            </a>
          </footer>
        </main>
      </body>
    </html>
  );
}
