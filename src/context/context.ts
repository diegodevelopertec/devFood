import React, { Context, createContext, useReducer } from "react";
import { ActionTypeGeral } from "../Types/TypeAction";
import {badReducer,badType,initialStateBad} from  './Reducers/badReducer'

type initialStateType={
    badproduct:badType
}
type ContextType={
    state:initialStateType,
    dispatch:React.Dispatch<any>
}


export const initialStateContext={
    badproduct:initialStateBad
}

export const  context=createContext({
    state:initialStateContext,
    dispatch:()=>null
})

export const mainReducer=(state:initialStateType,action:ActionTypeGeral)=>({
    badproduct:useReducer(state.badproduct.product,initialStateBad),
   
})