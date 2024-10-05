import React from 'react'
interface Box {
    img:string,
    nome:string,
    color:string
}
export default function Box(props:Box){

    return(
    <>
    <div style={{border:`solid 3px ${props.color}`}}>
        <img src={props.img}/>
        <h1>{props.nome}</h1>
    </div>
    </>
    )
}