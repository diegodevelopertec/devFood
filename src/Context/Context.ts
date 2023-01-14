import React, { createContext, useState } from "react";
import {initialStateProductBad, useProductBadReducer} from './reducers/badProduct'
import { Product } from "../Types/Products";
import { ActionTypeGeral } from "../Types/TypeAction";
import {initialStateAddress,useProductAddressReducer} from './reducers/addressReducer'
import { AddressType } from "../Types/AddressType";
import {useRequestReducer,initialStateRequest} from "./reducers/requestReducer";
import { RequestType } from "../Types/RequestType";


type ContextTypeState={
    products:Product[],
    requests:RequestType,
    address:AddressType[],
    
   
}
type ContextType={
    state:ContextTypeState,
    dispatch:React.Dispatch<any>
}



export const initialStateContext={
    products:initialStateProductBad,
    requests:initialStateRequest,
    address:initialStateAddress,
   
 
   
}

export const mainReducer=(state:ContextTypeState,action:ActionTypeGeral)=>({
     products : useProductBadReducer(state.products,action),
     address : useProductAddressReducer(state.address,action),
     requests:useRequestReducer(state.requests,action),
  
    
    
})

export const Context=createContext<ContextType>({
    state:initialStateContext,
    dispatch:()=>null
})