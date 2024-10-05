"use client";
import React from "react";
import { LegacyRef, useRef } from "react";
import "../../assets/styles/form.css";
import "../../assets/styles/global.css";
import { useRouter } from "next/navigation";
export default function Votar() {
    const router = useRouter();
    const form: LegacyRef<any> = useRef();
  return (
    <div className=" flex flex-col items-center justify-center h-[100dvh] w-[100%]">
      <form
        ref={form}
        className="form grid grid-cols-2 w-[500px] items-center justify-items-center  justify-center h-[400px]"
      >
        <label
          htmlFor="Nome"
          className="w-[90%] h-[30px] text-end relative right-[50px]"
        >
          Nome:
        </label>
        <input
          id="Nome"
          name="Nome"
          className=" w-[210px] h-[30px] relative right-[30px] outline-none"
          type="text"
        />
        <label
          htmlFor="Titulo"
          className=" w-[90%] h-[30px] text-end relative right-[50px]"
        >
          Número do titulo:{" "}
        </label>
        <input
          id="Titulo"
          name="Titulo"
          className=" w-[210px] h-[30px] relative right-[30px] outline-none"
          type="number"
        />
        <button type="reset">Limpar</button>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            router.push("/form/voto")
            //  const data = new FormData(form.current)
            //  console.log(form)
            //  fetch("http://localhost:3000/api/voto",{method:"POST",body:data}).then(data=>{
            //     if(data.ok)
            //         return
            //     return console.log(data)
            //  }).catch(err=>{
            //     if(err)
            //         return console.log(err)
            //  })
          }}
        >
          Continuar
        </button>
      </form>
    </div>
  );
}
