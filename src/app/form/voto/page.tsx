"use client";
import Box from "@/components/box";
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
  <div className=" grid grid-cols-3 grid-rows-[auto]">
   {data.map(box=>{
    console.log(box)
      return <Box nome={box.Nome} color={box.color} img={box.Img}/>
   })}
  </div>
  </>
  )
}
