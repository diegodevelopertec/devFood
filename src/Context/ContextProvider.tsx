import { useReducer } from "react";
import {Context,initialStateContext,mainReducer} from './Context'
import { ReactNode } from "react";



type Props={
    children:ReactNode
}


export const ContextProvider=({children}:Props)=>{

    const [state,dispatch]=useReducer(mainReducer,initialStateContext)

    return <Context.Provider value={{state,dispatch}}>
        {children}
    </Context.Provider>

}