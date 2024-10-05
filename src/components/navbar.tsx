'use client'
import React from "react";
import Link from "next/link";
import '../assets/styles/nav.css'
export default function Navbar(){

    return(
    <nav className="navbar flex flex-row items-center justify-between ">
      <h1 className=" relative left-40">Bem-vindo á votação!</h1>
      <ul className=" gap-6 relative right-40 list-none flex flex-row items-center justify-between w-40">
        <li><Link href={{pathname:"/voto"}} className="nav-button">Votar</Link></li>
        <li><Link href={{}} className="nav-button">Ver votos</Link></li>
      </ul>
    </nav>
    )
}