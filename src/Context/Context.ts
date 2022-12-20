import React, { createContext } from "react";
import {initialStateProductBad, useProductBadReducer} from './reducers/badProduct'
import { Product } from "../Types/Products";
import { ActionTypeGeral } from "../Types/TypeAction";
import {initialStateAddress,useProductAdressReducer} from './reducers/addressReducer'
import { AdressType } from "../Types/AdressType";



type ContextTypeState={
    products:Product[],
    address:AdressType[]
}
type ContextType={
    state:ContextTypeState,
    dispatch:React.Dispatch<any>
}

export const initialStateContext={
    products:initialStateProductBad,
    address:initialStateAddress
}

export const mainReducer=(state:ContextTypeState,action:ActionTypeGeral)=>({
    products : useProductBadReducer(state.products,action),
     address : useProductAdressReducer(state.address,action)
})

export const Context=createContext<ContextType>({
    state:initialStateContext,
    dispatch:()=>null
})