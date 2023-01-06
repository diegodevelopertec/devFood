import React, { createContext, useState } from "react";
import {initialStateProductBad, useProductBadReducer} from './reducers/badProduct'
import { Product } from "../Types/Products";
import { ActionTypeGeral } from "../Types/TypeAction";
import {initialStateAddress,useProductAddressReducer} from './reducers/addressReducer'
import { AddressType } from "../Types/AddressType";
import {UserTypeReducer,userInitialState,userReducer} from './reducers/userReducer'
import {useRequestReducer,initialStateRequest} from "./reducers/requestReducer";
import { RequestType } from "../Types/RequestType";


type ContextTypeState={
    products:Product[],
    address:AddressType[],
     //requestDelivery:RequestType  ,
    user:UserTypeReducer 
   
}
type ContextType={
    state:ContextTypeState,
    dispatch:React.Dispatch<any>
}


export const initialStateContext={
    products:initialStateProductBad,
     address:initialStateAddress,
    //requestDelivery:initialStateRequest,
    user:userInitialState
 
   
}

export const mainReducer=(state:ContextTypeState,action:ActionTypeGeral)=>({
     products : useProductBadReducer(state.products,action),
     address : useProductAddressReducer(state.address,action),
    // requestDelivery:useRequestReducer(state.requestDelivery,action),
     user:userReducer(state.user,action)
    
})

export const Context=createContext<ContextType>({
    state:initialStateContext,
    dispatch:()=>null
})