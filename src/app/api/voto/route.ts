import { NextRequest, NextResponse } from "next/server";
import { canditados, users } from "../votos";
export async function POST(req: NextRequest) {
  const form: FormData = await req.formData();
  const User: string = <string>form.get("Nome");
  const Candidato: string = <string>form.get("Candidato")
  console.log(canditados);
  if (
    !users.every((index) => {
      return index !== User && User !== "" ;
    })
  ) {
    return new NextResponse("Usuario já existe", { status: 500 });
  }
  users.push(User);
  canditados.forEach(candidato=>{
    if(candidato.Nome === Candidato)
      return candidato.Votos++
  })
  return new NextResponse("Novo Usuario", { status: 200 });
}
export async function GET(req: NextRequest) {
  return new NextResponse(JSON.stringify(canditados));
}
