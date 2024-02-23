// "use client";
import proyectos from "@/app/data";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/page";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";

// console.log(proyectos);

export default function Project({ params }: { params: { proyectId: number } }) {
  // const router = useRouter();
  const num = params.proyectId;
  const proyecto = proyectos[num - 2];

  // console.log(proyecto.name);
  console.log(num);

  // console.log(proyectos);

  return (
    <div>
      <h1>ID: {proyecto.name}</h1>
      <Image
        alt={proyecto.name}
        src={proyecto.image}
        width={500}
        height={500}
      />
      <Link href="/galeria">volver</Link>
    </div>
  );
}
