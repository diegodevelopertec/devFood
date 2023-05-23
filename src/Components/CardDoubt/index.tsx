import { Box, BoxBody, BoxHeader } from "./style"
import openIcon from './../../assets/imgs/setbaixo.png'
import closeicon from './../../assets/imgs/close.png'
import { useState } from "react"

type doubtsType={
    id:number,
    title:string,
    response:string
}
type props={
    doubt:doubtsType
}

export const CardDoubt=({doubt}:props)=>{
    const [onBodyCard,setBodyCard]=useState(false)

    return <Box>
        <BoxHeader >
            <p>{doubt.title}</p>   
            <img src={!onBodyCard ? openIcon : closeicon} alt="" onClick={()=>!onBodyCard ? setBodyCard(true) : setBodyCard(false) }  />
        </BoxHeader>
        <BoxBody stateBody={onBodyCard}>
            {doubt.response}
        </BoxBody>
    </Box>
}