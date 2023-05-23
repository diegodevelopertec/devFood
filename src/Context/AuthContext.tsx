import { ReactNode, useState ,createContext, useEffect, useCallback, useContext } from "react";
import { UserType } from "../Types/UserType";
import {v4 as uuid} from 'uuid'
import { useModalLogin } from "../hooks/useModeLogin";
import { AddressType } from "../Types/AddressType";
import { RequestType } from "../Types/RequestType";
import { toast } from "react-toastify";

type PaymentType={
    id:number,
    titular:string,
    validateCode:string,
    dateValidity:string,
    nameCard:string,
    numberCard:string,
    passwordCard:string,
    type:string,
}




type Props={
    children:ReactNode
}


type AuthType={
    user:UserType | null,
    address:AddressType | null,
    addAddress:(data:AddressType)=>void,
    ClearAddress:()=>void,
    requestsHistory:RequestType | [],
    LoginAuth:(email:string,password:string)=>boolean,
    registerUser:(data:UserType)=>boolean,
    Logout:()=>void,
    updateUser:(data:UserType)=>void,
    payments:PaymentType[],
    //  setPayment:(payList:PaymentType[])=>void,
      addPayCard:(data:PaymentType)=>void,
      removePayCard:(id:number)=>void
}

export const AuthContext=createContext<AuthType >(null!)

export const AuthProvider=({children}:Props)=>{
    const {handleStateModal}=useModalLogin()
    const [user,setUser]=useState<UserType | null>(null)
    const [address,setAddress]=useState<AddressType | null>(null)
    const [token,setToken]=useState<string | null>()
    const [requestsHistory,setRequestHistory]=useState<RequestType >([])
    const [payments,setPayment]=useState<PaymentType[]>([] as PaymentType[])



    useEffect(()=>{

        //Pegando token e dados do usuario do localstorage
        let userStorage =JSON.parse(localStorage.getItem('u') as string)
        let tokenStorage=localStorage.getItem('token') as string
        let addressStorage=JSON.parse(localStorage.getItem('address') as string)
        let requestsHistoryStorage=JSON.parse(localStorage.getItem('requestsHistory') as string)
       

    
    
        //setando dados do localStorage
        if(userStorage ||  tokenStorage || addressStorage || requestsHistoryStorage){
          setUser(userStorage)
          setAddress(addressStorage)
          setToken(tokenStorage)
          handleStateModal(false)
          setRequestHistory(requestsHistoryStorage)
        }
      
        
        console.log(addressStorage);
        console.log(userStorage);
        console.log(tokenStorage);
       
       
    },[])

   


    const registerUser=(data:UserType)=>{

        
        
        if(data){
             const tokenJson=uuid()
             setUser(data)
             setToken(tokenJson)
           
            localStorage.setItem('u',JSON.stringify(data))
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
    
    const  ClearAddress=()=>{
        setAddress(null)
        localStorage.setItem('address',JSON.stringify(null))
    }

    const addAddress=(data:AddressType)=>{
        setAddress({...data})
        localStorage.setItem('address',JSON.stringify(data))
     
    
    }
    const updateUser=()=>{

    }

    const addPayCard=(data:PaymentType)=>{
        setPayment([data,...payments])
        toast.success('cartao adicionado')
    
    }
    const removePayCard=(id:number | string)=>{
        let newList=payments.filter(i=>i.id !== id)
        setPayment(newList)
        toast.success('cartao deletado')
    }
    


return <AuthContext.Provider value={{addAddress,ClearAddress,addPayCard,removePayCard,payments,updateUser,requestsHistory, address,LoginAuth,Logout,registerUser,user}}>
    {children}
</AuthContext.Provider>

}

export const useGlobalContext=()=>useContext(AuthContext)