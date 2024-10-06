import { NextRequest, NextResponse } from "next/server";
import { users } from "../votos";
export const config = {
  api: {
    bodyParser: false,
  },
};
export async function POST(req: NextRequest) {
  const form: FormData = await req.formData();
  const Nome: string = <string>form.get("Nome") || "";
  
  if (
    !users.every((index) => {
      return index !== Nome && Nome !== "";
    })
  )
    return new NextResponse("Usuario já existe", { status: 500 });
  return new NextResponse("Novo Usuario", { status: 200 });
}
