'use client'
import React from "react";
import Link from "next/link";
import '../assets/styles/nav.css'
export default function Navbar(){

    return(
    <nav className="navbar flex flex-row items-center justify-between ">
      <h1 className=" relative xl:left-40 md:left-20">Bem-vindo á votação!</h1>
      <ul className=" relative xl:right-40 list-none md:right-20">
        <li><Link href={{pathname:"/form"}} className="nav-button">Votar</Link></li>
      </ul>
    </nav>
    )
}