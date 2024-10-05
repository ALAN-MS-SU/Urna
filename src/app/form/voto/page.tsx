"use client";
import Box from "@/components/box";
import '@/assets/styles/global.css'
import { Candidato } from "@/app/api/votos";
import React, { useEffect, useState } from "react";


export default function Voto() {
    
    const [data,setData] = useState<Candidato[]>([])
  async function opcoes() {
       setData(await fetch(`${process.env.NEXT_PUBLIC_api}/voto`, {
      method: "GET",
    }).then(data =>{
        if(data.ok)
            return data.json()
        return console.log(data)
    }).catch(err=>{
        if(err)
            return console.log(err)
    }))
  }
  useEffect(() => {
   
        if(data.length < 1){
            opcoes()
        }
  });
  
  return( 
  <>
  <h1 className=" text-center">Vote em qual você mais gostou</h1>
  <div className=" gap-y-[50px] pt-[10px] grid grid-cols-3 grid-rows-[auto] justify-between w-[100%] justify-items-center">
   {data.map(box=>{
    console.log(box)
      return <Box Nome={box.Nome} Color={box.Color} Img={box.Img} Votos={box.Votos}/>
   })}
  </div>
  </>
  )
}
