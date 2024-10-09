"use client";
import { Candidato } from "@/app/api/votos";
import Chart from "chart.js/auto";
import { LegacyRef, useEffect, useRef, useState } from "react";
export default function Table() {
  const [table, setTable] = useState<Candidato[]>();
  async function votos() {
    setTable(
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
  const chart: LegacyRef<any> = useRef();
  useEffect(() => {
    if(!table){
      votos()
    }
    if (table) {
      chart.current.style.width = "100%";
      chart.current.style.height = "100%";
      new Chart(chart.current, {
        type: "bar",
        data: {
          labels: table.map((candidato) => {
            return candidato.Nome;
          }),
          datasets: [
            {
              label: "Votos",
              data: table.map((candidato) => {
                return candidato.Votos;
              }),

              backgroundColor: table.map((candidato) => {
                return candidato.Color;
              }),
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              max: 10,
            },
          },
        },
      });
    }
  });
  return (
    <div className=" w-[100%]  h-[800px] ">
      <canvas className=" relative top-[50px]" ref={chart}></canvas>
    </div>
  );
}
