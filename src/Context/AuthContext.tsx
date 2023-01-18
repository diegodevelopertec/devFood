import { ReactNode, useState ,createContext, useEffect } from "react";
import { UserType } from "../Types/UserType";
import {v4 as uuid} from 'uuid'
import { useModalLogin } from "../hooks/useModeLogin";






type Props={
    children:ReactNode
}

type AuthType={
    user:UserType | null,
    LoginAuth:(email:string,password:string)=>boolean,
    registerUser:(name:string,email:string,password:string,telefone:string)=>boolean
    Logout:()=>void
}

export const AuthContext=createContext<AuthType >(null!)



export const AuthProvider=({children}:Props)=>{
    const {handleStateModal}=useModalLogin()
    const [user,setUser]=useState<UserType | null>(null)
    const  [token,setToken]=useState<string | null>()

    useEffect(()=>{

        //Pegando token e dados do usuario do localstorage
        let userStorage =JSON.parse(JSON.stringify(localStorage.getItem('u')))
        let tokenStorage=localStorage.getItem('token')

        //setando dados do localStorage
        if(userStorage && tokenStorage){
          setUser(JSON.parse(userStorage))
          setToken(tokenStorage)
          handleStateModal(false)
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
            localStorage.removeItem('u')
            localStorage.removeItem('token')
        }

    }
    


   


return <AuthContext.Provider value={{user,Logout,LoginAuth,registerUser}}>
    {children}
</AuthContext.Provider>

}