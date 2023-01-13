import { AddressType as AddressType } from "../../Types/AddressType"
import { Product } from "../../Types/Products"
import { ActionTypeGeral} from "../../Types/TypeAction"
import { RequestType } from "../../Types/RequestType"
import {v4 as uuid} from 'uuid'


export const initialStateRequest=[]

export const useRequestReducer=(state:RequestType , action:ActionTypeGeral)=>{
    

        switch(action.type){
            case 'setDataToRequest':{
            let newData=action.payload?.data
            return [...state,newData]
               
            }

            case 'removeRequest':{
                let data=action.payload?.data
                let stateProducts=[...state]
                stateProducts=stateProducts.filter(item=>item.id !== data.id)
                return stateProducts
            }        
    }
    return state
}