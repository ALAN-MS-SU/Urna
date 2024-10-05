import { NextRequest,NextResponse } from "next/server";
import { User,users, canditados } from "../votos";
 export const config = {
   api:{
     bodyParser: false
   }  
 }
export async function POST(req:NextRequest){ 
       const form = await req.formData()
       const data:User = {
         Nome: <string>form.get("Nome"),
         Titulo:  Number.parseInt(<string>form.get("Titulo"))
       }
       if(!users.every(index=>{
         return index.Titulo !== data.Titulo
       })){
        
         return new NextResponse(JSON.stringify({err:"USUARIO JÁ EXISTE"}))
       }
       
       users.push(data)
       console.log("NOVO USUARIO")
         return new NextResponse(JSON.stringify({}))  
}
export async function GET(req:NextRequest) {
  return new NextResponse(JSON.stringify(canditados))
}