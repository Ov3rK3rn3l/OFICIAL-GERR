import Heru from "@/components/main/Heru";
import Treinos from "@/components/main/Treinos";
import Jogos from "@/components/main/Jogos";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Heru />
        <Jogos />
        <Treinos />
      </div>
    </main>
  );
}
