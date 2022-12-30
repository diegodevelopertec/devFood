import React, { createContext, useState } from "react";
import {initialStateProductBad, useProductBadReducer} from './reducers/badProduct'
import { Product } from "../Types/Products";
import { ActionTypeGeral } from "../Types/TypeAction";
import {initialStateAddress,useProductAdressReducer} from './reducers/addressReducer'
import { AdressType } from "../Types/AdressType";
import {UserTypeReducer,userInitialState,userReducer} from './reducers/userReducer'
import { RequestType,useRequestReducer,initialStateRequest} from "./reducers/requestReducer";



type ContextTypeState={
    products:Product[],
    address:AdressType[],
    requestDelivery:RequestType
   
}
type ContextType={
    state:ContextTypeState,
    dispatch:React.Dispatch<any>
}


export const initialStateContext={
    products:initialStateProductBad,
    address:initialStateAddress,
    requestDelivery:initialStateRequest
 
   
}

export const mainReducer=(state:ContextTypeState,action:ActionTypeGeral)=>({
     products : useProductBadReducer(state.products,action),
     address : useProductAdressReducer(state.address,action),
    requestDelivery:useRequestReducer(state.requestDelivery,action)
    
})

export const Context=createContext<ContextType>({
    state:initialStateContext,
    dispatch:()=>null
})