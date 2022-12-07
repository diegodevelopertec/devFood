import { ReactNode, useReducer } from "react";
import { context,mainReducer,initialStateContext } from "./context";


type Props={
    children:ReactNode
}

export const ContextProvider=({children}:Props)=>{

const [state,dispatch]=useReducer(mainReducer,initialStateContext)

    return <context.Provider value={{state,dispatch}}>
        {children}
    </context.Provider>

}