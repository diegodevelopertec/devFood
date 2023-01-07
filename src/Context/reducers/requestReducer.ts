import { AddressType as AddressType } from "../../Types/AddressType"
import { Product } from "../../Types/Products"
import { ActionTypeGeral} from "../../Types/TypeAction"
import { RequestType } from "../../Types/RequestType"
import {v4 as uuid} from 'uuid'
import staticMethods from "antd/es/message"

export const initialStateRequest={
    products:[],
    address:[],
    totatValueProduct:0
}

export const useRequestReducer=(state:RequestType , action:ActionTypeGeral)=>{
    

        switch(action.type){
            case 'setDataRequest':{
                let productsPayload=action.payload?.products
                let addressPayload=action.payload?.address
                let totalPricePayload=action.payload?.totalPrice
                state.products=productsPayload
                state.address=addressPayload
                state.totatValueProduct=totalPricePayload




            }
        }
    return state
}