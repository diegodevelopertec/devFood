import { ReactNode, useState ,createContext, useEffect } from "react";
import { UserType } from "../Types/UserType";
import {v4 as uuid} from 'uuid'
import { useModalLogin } from "../hooks/useModeLogin";
import { AddressType } from "../Types/AddressType";
import { RequestType } from "../Types/RequestType";






type Props={
    children:ReactNode
}



type AuthType={
    user:UserType | null,
    address:AddressType | null,
    requestsHistory:RequestType | [],
    LoginAuth:(email:string,password:string)=>boolean,
    registerUser:(name:string,email:string,password:string,telefone:string)=>boolean,
    Logout:()=>void
}

export const AuthContext=createContext<AuthType >(null!)

export const AuthProvider=({children}:Props)=>{

    useEffect(()=>{

        //Pegando token e dados do usuario do localstorage
        let userStorage =JSON.parse(localStorage.getItem('u') as string)
        let tokenStorage=localStorage.getItem('token') as string
        let addressRequests=JSON.parse(localStorage.getItem('addressRequests') as string)
        let requestsHistoryStorage=JSON.parse(localStorage.getItem('requestsHistory') as string)
    
    
    
        //setando dados do localStorage
        if(userStorage ||  tokenStorage || addressRequests || requestsHistoryStorage){
          setUser(userStorage)
          setAddress(addressRequests)
          setToken(tokenStorage)
          handleStateModal(false)
          setRequestHistory(requestsHistoryStorage)
        }
      
        
        console.log(requestsHistory);
        console.log(userStorage);
        console.log(tokenStorage);
       
       
    },[])

    const {handleStateModal}=useModalLogin()
    const [user,setUser]=useState<UserType | null>(null)
    const [address,setAddress]=useState<AddressType | null>(null)
    const [token,setToken]=useState<string | null>()
    const [requestsHistory,setRequestHistory]=useState<RequestType >([])
 


    const registerUser=(name:string,email:string,password:string,telefone:string)=>{

        let userdata={name,email,password,telefone}
        
        if(userdata){
             const tokenJson=uuid()
             setUser(userdata)
             setToken(tokenJson)
           
            localStorage.setItem('u',JSON.stringify(userdata))
            localStorage.setItem('token',JSON.stringify(tokenJson))
            let addressRequests=JSON.parse(localStorage.getItem('addressRequests') as string)
            setAddress(addressRequests)
            
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
    




return <AuthContext.Provider value={{requestsHistory, address,LoginAuth,Logout,registerUser,user}}>
    {children}
</AuthContext.Provider>

}