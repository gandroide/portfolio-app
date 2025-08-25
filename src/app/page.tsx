import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full h-screen">
      <div className="flex items-start justify-between p-2">
        <div className="text-2xl p-4">Alejandro Ontiveros</div>
        <Navbar />
      </div>
      <section className="flex-1 flex flex-col items-center px-4 text-center">
        <h1 className="text-5xl py-8  font-bold">Últimos trabajos</h1>
        <p>
          Una seccion de mis fotografias mas recientes, explorando la relacion
          entre el cuerpo y la roca, la memoria y el territorio.
        </p>
      </section>
    </div>
  );
}
