import { useRouter } from "next/navigation";
export default function Box(props: any) {
  const router = useRouter()
  console.log(props)
  return (
    <div
      className="box overflow-hidden rounded-[10px] w-[300px] h-[400px] flex flex-col items-center xl:w-[400px]"
      style={{ border: `solid 3px ${props.Color}` }}
    >
      <img className=" object-fill w-[100%] h-[80%]" src={props.Img} />
      <h1 className=" text-[150%]">{props.Nome}</h1>
      <button
        type="submit"
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = props.Color;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
        }}
        className={` transition-all ease-in  cursor-pointer bg-transparent text-[var(--font-color-1)] p-[1%] w-[50%] rounded-[30px] text-[120%] hover:text-[var(--font-color-2)] `}
        style={{ border: `${props.Color} 2px solid` }}
        onClick={async (e) => {
          e.preventDefault();
          const data = new FormData()
          data.append("Nome",props.Param)
          data.append("Candidato",props.Nome)
          await fetch(`${process.env.NEXT_PUBLIC_api}/voto`,{method:"POST",body:data}).then(data=>{
            if(data.ok)
              return 
            return console.log(data)
          }).catch(err=>{
            if(err)
              return console.log(err)
          })
          router.push("/")
        }}
      >
        Votar
      </button>
    </div>
  );
}
