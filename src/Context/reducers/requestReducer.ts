import { AddressType as AddressType } from "../../Types/AddressType"
import { Product } from "../../Types/Products"
import { ActionTypeGeral} from "../../Types/TypeAction"
import { RequestType } from "../../Types/RequestType"
import {v4 as uuid} from 'uuid'


export const initialStateRequest=[]

export const useRequestReducer=(state:RequestType , action:ActionTypeGeral)=>{
    

        switch(action.type){
            case 'setDataRequest':{
               let stateProducts=[...state]
               let newData=action.payload?.data
               let index=stateProducts.findIndex(item=>item.id === newData.id)
               if(index <= -1){
                    stateProducts.unshift(newData)
                    return stateProducts
               }
             
               return stateProducts


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