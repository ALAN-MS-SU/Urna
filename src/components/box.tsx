import { Candidato } from "@/app/api/votos";
export default function Box(props: Candidato) {
  return (
      <div
        className="box overflow-hidden rounded-[10px] w-[400px] h-[400px] flex flex-col items-center"
        style={{ border: `solid 3px ${props.Color}` }}
      >
        <img className=" object-fill w-[100%] h-[80%]" src={props.Img} />
        <h1 className=" text-[150%]">{props.Nome}</h1>
        <button
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = props.Color;
          }}
          onMouseLeave={(e)=>{
            e.currentTarget.style.backgroundColor='transparent'
          }}
          className={` transition-all ease-in  cursor-pointer bg-transparent text-[var(--font-color-1)] p-[1%] w-[50%] rounded-[30px] text-[120%] hover:bg-[red] `}
          style={{ border: `${props.Color} 2px solid` }}
          onClick={(e) => {}}
        >
          Votar
        </button>
      </div>
  );
}
