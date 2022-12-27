import React, { createContext, useState } from "react";
import {initialStateProductBad, useProductBadReducer} from './reducers/badProduct'
import { Product } from "../Types/Products";
import { ActionTypeGeral } from "../Types/TypeAction";
import {initialStateAddress,useProductAdressReducer} from './reducers/addressReducer'
import { AdressType } from "../Types/AdressType";
import {UserTypeReducer,userInitialState,userReducer} from './reducers/userReducer'

type ContextTypeState={
    products:Product[],
    address:AdressType[],
    //userAuth:UserTypeReducer
}
type ContextType={
    state:ContextTypeState,
    dispatch:React.Dispatch<any>
}


export const initialStateContext={
    products:initialStateProductBad,
    address:initialStateAddress,
   // userAuth:userInitialState,
   
}

export const mainReducer=(state:ContextTypeState,action:ActionTypeGeral)=>({
     products : useProductBadReducer(state.products,action),
     address : useProductAdressReducer(state.address,action),
     //userAuth : userReducer(state.userAuth,action)
})

export const Context=createContext<ContextType>({
    state:initialStateContext,
    dispatch:()=>null
})