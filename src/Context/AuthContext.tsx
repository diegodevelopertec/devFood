import { ReactNode, useState ,createContext } from "react";
import { UserType } from "../Types/UserType";
import {v4 as uuid} from 'uuid'

type Props={
    children:ReactNode
}

type AuthType={
    user:UserType | null,
    LoginAuth:(email:string,password:string)=>boolean,
    registerUser:(name:string,email:string,password:string)=>boolean
}

export const AuthContext=createContext<AuthType >(null!)



export const AuthProvider=({children}:Props)=>{



    const [user,setUser]=useState<UserType | null>(null)

    const LoginAuth=(email:string,password:string)=>{
        let token=localStorage.getItem('token')
            if(email && token){

                return true
            }
        


            return false
    }
    const registerUser=(name:string,email:string,password:string)=>{

    
        if(user?.email === email && password === user.password){

            return false
        }
        
        setUser({name,email,password})
        localStorage.setItem('token',uuid())
        return true

    }


return <AuthContext.Provider value={{user,LoginAuth,registerUser}}>
    {children}
</AuthContext.Provider>

}