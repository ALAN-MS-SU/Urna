"use client";
import { useRouter } from "next/navigation";
import { LegacyRef, useRef } from "react";
import "../../assets/styles/form.css";
import "../../assets/styles/global.css";
export default function Votar() {
  const router = useRouter();
  const input:LegacyRef<any> = useRef()
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
        <input ref={input}
        placeholder="Nome"
          id="Nome"
          name="Nome"
          className=" w-[210px] h-[30px] relative right-[30px] outline-none"
          type="text"
        />
        <button type="reset">Limpar</button>
        <button
          type="submit"
          onClick={async (e) => {
            e.preventDefault();
            const data = new FormData(form.current);
            if (data.get("Nome")) {
              const user = await fetch(`${process.env.NEXT_PUBLIC_api}/user`,{method:"POST",body:data}).then(data=>{
                if(data.ok)
                  return true
                return false
              }).catch(err=>{
                if(err)
                  return console.log(err)
              })
              if(user)
              return router.push(`/form/voto/${data.get("Nome")}`);
            }
              
            input.current.style.borderBottom = 'red solid 2px'
            
          }}
        >
          Continuar
        </button>
      </form>
    </div>
  );
}
