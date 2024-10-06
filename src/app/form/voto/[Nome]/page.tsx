/* eslint-disable padded-blocks */
"use client";
import { Candidato } from "@/app/api/votos";
import "@/assets/styles/global.css";
import Box from "@/components/box";
import { useEffect, useState } from "react";

export default function Voto({ params }: any) {
  const { Nome } = params;
  const [data, setData] = useState<Candidato[]>([]);
  async function opcoes() {
    setData(
      await fetch(`${process.env.NEXT_PUBLIC_api}/voto`, {
        method: "GET",
      })
        .then((data) => {
          if (data.ok) return data.json();
          return console.log(data);
        })
        .catch((err) => {
          if (err) return console.log(err);
        })
    );
  }
  useEffect(() => {
    if (data.length < 1) {
      opcoes();
    }
  });

  return (
    <>
      <h1 className=" text-center text-[120%] md:text-[150%] xl:text-[200%]">
        Vote em qual você mais gostou
      </h1>
      <div className=" gap-y-[50px] pt-[10px] grid grid-cols-1  grid-rows-[auto] justify-between w-[100%] justify-items-center xl:grid-cols-3 md:grid-cols-2">
        {data.map((box, index) => {
          return (
            <Box
              key={index}
              Param={Nome}
              Nome={box.Nome}
              Color={box.Color}
              Img={box.Img}
              Votos={box.Votos}
            />
          );
        })}
      </div>
    </>
  );
}
