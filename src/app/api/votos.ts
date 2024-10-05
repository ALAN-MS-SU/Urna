
import { StaticImageData } from 'next/image'
export interface User{
    Nome:string
    Titulo:number
}
export interface Candidato{
    Img:string
    Nome:string,
    Votos:number,
    color:string
}
export const users:User[] = []
export const canditados:Candidato[] = [{Nome:"sonic",Votos:0,color:"red",Img:"public/sonic2.jpg"}]
