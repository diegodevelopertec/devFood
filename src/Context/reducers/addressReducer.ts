import { ActionTypeGeral } from "../../Types/TypeAction";
import { AdressType } from "../../Types/AdressType";



export const initialStateAddress:AdressType[]=[]

export const useProductAdressReducer=(state:AdressType[],action:ActionTypeGeral)=>{

    switch(action.type){
        case 'addAdress':{
            let products=[...state]

            let id=action.payload?.id
            let index=products.findIndex(item=>item.id === id)
                if(index > -1){
                   products[index]
                }else{

                    
                }
        }
    }


    return state
}