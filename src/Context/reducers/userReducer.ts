import { Action } from "@remix-run/router";
import { UserType } from "../../Types/UserType";
import { ActionTypeGeral } from "../../Types/TypeAction";


export type UserTypeReducer={
    user:UserType | null,
    login:(email:string,password:string)=>void,
    register: (email:string,password:string)=>void,
  
}

export  const userInitialState={
    user:null,
    login:(email:string,password:string)=>{
        return true
    },
    register:(email:string,password:string)=>{

    }
}

export const userReducer=(state:UserTypeReducer,action:ActionTypeGeral)=>{
    switch(action.type){
        case  'register':{


            break;
        }
        case 'login':{


            break;
        }


    }
}