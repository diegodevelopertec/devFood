import { AddressType as AddressType } from "../../Types/AddressType"
import { Product } from "../../Types/Products"
import { ActionTypeGeral} from "../../Types/TypeAction"
import { RequestType } from "../../Types/RequestType"
import {v4 as uuid} from 'uuid'


export const initialStateRequest=[]

export const useRequestReducer=(state:RequestType , action:ActionTypeGeral)=>{
    

        switch(action.type){
            case 'setDataRequest':{
                let productsPayload=action.payload?.products
                let addressPayload=action.payload?.address
                let totalPricePayload=action.payload?.totalPrice
                let idPayload=action.payload?.id
                let statePayload=action.payload?.state
                let stateProducts=[...state]

                let newData={
                    id:idPayload,
                    state:statePayload,
                    products:productsPayload,
                    address:addressPayload,
                    totatValueProduct:totalPricePayload
                }

                let id=newData.id
                let index=stateProducts.findIndex(item=>item.id === id)
                if(index >  -1){
                    return [...stateProducts]
                }else{
                     stateProducts.unshift(newData)
                     return stateProducts
                }
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