import { ReactNode } from "react"
import { useAuthContext } from "../../hooks/useContextAuth"
import { useModalLogin } from "../../hooks/useModeLogin"
import { useSearchParams } from "react-router-dom"


type Props={
    children:JSX.Element
}
export const PrivateRoute=({children}:Props)=>{

    const {handleStateModal}=useModalLogin()
    const {user}=useAuthContext()
   
    if(user==null){
        handleStateModal(true)
    }

    return children

}