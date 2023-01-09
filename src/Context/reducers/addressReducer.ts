import { ActionTypeGeral } from "../../Types/TypeAction";
import { AddressType } from "../../Types/AddressType";




export const initialStateAddress=[
    {
        id: 1,
        rua: 'generoso pinto',
        state: true,
        numero: '124',
        bairro: 'curitiba',
        complemento: 'casa',
       
    },
    {
        id: 2,
        rua: 'alameda',
        state: false,
        numero: '144',
        bairro: 'alterosa',
        complemento: 'casa',
       
    }




]

export const useProductAddressReducer=(state:AddressType[],action:ActionTypeGeral)=>{

    switch(action.type){
        case 'setAddress':{
            let addressList=[...state]
            let addressDefault=addressList.find(item=>item.state === true)
            return state
        }
    }


    return state
}