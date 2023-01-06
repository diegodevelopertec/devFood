import { ActionTypeGeral } from "../../Types/TypeAction";
import { AddressType } from "../../Types/AddressType";



export const initialStateAddress=[]

export const useProductAddressReducer=(state:AddressType[],action:ActionTypeGeral)=>{

    switch(action.type){
        case 'addAddress':{
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