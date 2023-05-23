import { useGlobalContext } from "../../Context/AuthContext"
import { Box,BoxLeft,BoxRight } from "./style"

type PaymentsType={
    
    id:number,
    titular:string,
    validateCode:string,
    dateValidity:string,
    nameCard:string,
    numberCard:string,
    passwordCard:string,
    type:string,

}


type Props={
    pay:PaymentsType
}

export const CardPayments=({pay}:Props)=>{
    const {removePayCard}=useGlobalContext()



    return <Box>
    <BoxLeft>
        <span>{pay.titular}</span>
        <span>{pay.numberCard.padEnd(4,'****')}</span>
        <span>{pay.type}</span>
        <span>{pay.nameCard}</span>
    </BoxLeft>
    <BoxRight>
        <button onClick={()=>removePayCard(pay.id)}>Deletar</button>
        <button >Editar</button>
    </BoxRight>
    
    </Box>
}