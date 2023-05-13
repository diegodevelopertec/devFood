import { createContext,useContext,ReactNode, Children, useState } from "react";
import { create } from "yup/lib/Reference";

type Props={
    children:ReactNode
}

type ContextMenuMobile={
    stateMenu:boolean;
     setStateMenuMobile:(state:boolean)=>void
}

const Context=createContext<ContextMenuMobile>({
    stateMenu:false,
    setStateMenuMobile:(state:boolean)=>{}
})


export const MenuMobileProvider=({children}:Props)=>{
    const [stateMenu,setStateMenuMobile]=useState(false)
    return <Context.Provider value={{stateMenu,setStateMenuMobile}}>
        {children}
    </Context.Provider>
}

export const useMenuMobile=()=>useContext(Context)