import { redirect } from "next/navigation";
import Image from "next/image";

export default function Home() {
  redirect("/dashboard/products");
  return (
    <>
      <span className="text-5xl">Hola Mundo</span>
    </>
  );
}
