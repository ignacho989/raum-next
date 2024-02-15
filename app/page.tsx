import Image from "next/image";
import background from "../public/chapa_perforada.png";
import portada from "../public/imagen-portada.png";
import { Tourney } from "next/font/google";

const tourney = Tourney({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="main-body">
      <div className="div-portada">
        <Image className="bg-img" src={portada} alt="dibujo" />
        <h1 className={`${tourney.className} titulo`}>RAUM ARQUITECTURA</h1>
      </div>
    </main>
  );
}
