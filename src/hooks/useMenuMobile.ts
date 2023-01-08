import { createContext,useContext } from "react"



let  initialState={
        stateMenuMobile:false,
        setMenuMobile:(state:boolean)=>{
                stateModal:state
        }
    }

let contextMenu=createContext(initialState)

export const useMenuMobile=()=>{
    return useContext(contextMenu)
}