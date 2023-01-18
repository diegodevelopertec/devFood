import { ActionTypeGeral } from "../../Types/TypeAction";
import { AddressType } from "../../Types/AddressType";
import {v4 as uuid} from 'uuid'



export const initialStateAddress=[]

export const useProductAddressReducer=(state:AddressType[],action:ActionTypeGeral)=>{

    switch(action.type){
        case 'setAddress':{
        let addressList=[...state]
        let addressListPay=action.payload?.address
        addressList.push(addressListPay)

         return addressList
          
        }

 
    }



    return state
}