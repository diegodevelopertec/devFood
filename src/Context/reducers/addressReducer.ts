import { ActionTypeGeral } from "../../Types/TypeAction";
import { AdressType } from "../../Types/AdressType";



export const initialStateAddress:AdressType[]=[{
    id: 1,
    rua: 'generoso Pinto',
    numero:'335',
    bairro: 'conceição do Itaguá',
    complemento: 'em frnente ao campo'
}]

export const useProductAdressReducer=(state:AdressType[],action:ActionTypeGeral)=>{

    switch(action.type){
        case 'addAdress':{
            return state
        }
    }


    return state
}