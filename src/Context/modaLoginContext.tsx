import { ReactNode, useState ,createContext } from "react";
import { UserType } from "../Types/UserType";

type Props={
    children:ReactNode
}

type stateModalType={
    stateModal:boolean,
    handleStateModal:(state:boolean)=>void
}



export const modalLoginContext=createContext<stateModalType >(null!)



export const ModalLoginProvider=({children}:Props)=>{
    let [stateModal,handleStateModal]=useState(false)
  
   
 



return <modalLoginContext.Provider value={{stateModal,handleStateModal}}>
    {children}
</modalLoginContext.Provider>

}