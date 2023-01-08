import { AddressType as AddressType } from "../../Types/AddressType"
import { Product } from "../../Types/Products"
import { ActionTypeGeral} from "../../Types/TypeAction"
import { RequestType } from "../../Types/RequestType"
import {v4 as uuid} from 'uuid'
import staticMethods from "antd/es/message"

export const initialStateRequest=[]

export const useRequestReducer=(state:RequestType , action:ActionTypeGeral)=>{
    

        switch(action.type){
            case 'setDataRequest':{
                let productsPayload=action.payload?.products
                let addressPayload=action.payload?.address
                let totalPricePayload=action.payload?.totalPrice
                let idPayload=action.payload?.id
                let stateProducts=[...state]

                let newData={
                    id:idPayload,
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
        }
    return state
}