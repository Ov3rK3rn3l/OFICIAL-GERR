import React from "react";
import TreinoCard from "../sub/TreinoCard";

const Treinos = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="Treinos"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Treinamentos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <TreinoCard
          src="/Grupo1.png"
          title="Especificações de classes"
          description="Conheça a classe que você mais gosta de jogar, melhore sua habilidades e obtenha experiência."
        />
        <TreinoCard
          src="/Grupo2.png"
          title="Básico de mapas e comunicações"
          description="Leitura de mapa, marcações e triangulação de objetivos leva qualquer equipe ao sucesso."
        />
        <TreinoCard
          src="/Grupo3.png"
          title="Veículos aéreos, leves e pesados"
          description="Tenha conhecimento geral sobre blindados e seus pontos fortes e fracos."
        />
      </div>
    </div>
  );
};

export default Treinos;
