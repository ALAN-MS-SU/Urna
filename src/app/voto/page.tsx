import '../../assets/styles/global.css'
import '../../assets/styles/form.css'
import React from 'react'
export default function Votar(){

    return(
        <div className=' flex flex-col items-center justify-center h-[100dvh] w-[100%]'>
        <form className='form grid grid-cols-2 w-[600px]  justify-center h-[400px]'>
             <label className=' w-[200px] h-[30px] relative left-[10px] '>Nome: </label>
             <input className=' w-[200px] h-[30px] ' type='text'/>
             <label className=' w-[200px] h-[30px] relative left-[10px] '>Número do titulo</label>
             <input className=' w-[200px] h-[30px]  ' type='number'/>
        </form>
        </div>
    )
}