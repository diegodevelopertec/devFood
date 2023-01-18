import { ReactNode, useState ,createContext, useEffect } from "react";
import { UserType } from "../Types/UserType";
import {v4 as uuid} from 'uuid'
import { useModalLogin } from "../hooks/useModeLogin";
import { AddressType } from "../Types/AddressType";






type Props={
    children:ReactNode
}



type AuthType={
    user:UserType | null,
   address:AddressType | null,
    LoginAuth:(email:string,password:string)=>boolean,
    registerUser:(name:string,email:string,password:string,telefone:string)=>boolean
    Logout:()=>void
}

export const AuthContext=createContext<AuthType >(null!)



export const AuthProvider=({children}:Props)=>{
    const {handleStateModal}=useModalLogin()
    const [user,setUser]=useState<UserType | null>(null)
    const [address,setAddress]=useState<AddressType | null>(null)
    const  [token,setToken]=useState<string | null>()

    useEffect(()=>{

        //Pegando token e dados do usuario do localstorage
        let userStorage =JSON.parse(localStorage.getItem('u') as string)
        let tokenStorage=JSON.parse(localStorage.getItem('token') as string)
        let requestsHistory=JSON.parse(localStorage.getItem('historyRequests') as string)
    



        //setando dados do localStorage
        if(userStorage && tokenStorage){
          setUser(userStorage)
          setAddress(requestsHistory)
          setToken(tokenStorage)
          handleStateModal(false)
        }
      
        console.log(userStorage);
        console.log(tokenStorage);
        console.log(requestsHistory)
        console.log(user);
   
        
        if(userStorage ){
            setUser(userStorage)
        }
       
    },[])


    const registerUser=(name:string,email:string,password:string,telefone:string)=>{

        let userdata={name,email,password,telefone}
        
        if(userdata){
             const tokenJson=uuid()
             setUser(userdata)
             setToken(tokenJson)
           
            localStorage.setItem('u',JSON.stringify(userdata))
            localStorage.setItem('token',JSON.stringify(tokenJson))
            let requestsHistory=JSON.parse(localStorage.getItem('historyRequests') as string)
            setAddress(requestsHistory)
          
          
            return true
        }

        return false
    }

   const LoginAuth=(email:string,password:string)=>{
      
            if(token && user){
                return true
            }
            return false
    }

    const Logout=()=>{
        if(user){
            setUser(null)
            localStorage.clear()
        }

    }
    


   


return <AuthContext.Provider value={{address,user,Logout,LoginAuth,registerUser}}>
    {children}
</AuthContext.Provider>

}