
import { UserType } from "../../Types/UserType";
import { ActionTypeGeral } from "../../Types/TypeAction";
import { ActionFunction } from "react-router-dom";


export type UserTypeReducer={
    user:UserType | null,
    login:(email:string,password:string)=>boolean
    register: (email:string,password:string)=>void,
  
}

export  const userInitialState={
    user:{
        name: 'Diego',
       photoUser: '',
       email:'diegodev@gmail.com',
       password: 'senha123',
       token: 'string',
       adress:[]
    },
    login:(email:string,password:string)=>{
        return true
    },
    register:(email:string,password:string)=>{

    }
}

export const userReducer=(state:UserTypeReducer ,action:ActionTypeGeral)=>{
    switch(action.type){
        case  'register':{
            let dataPayload=action.payload?.data
            let token=localStorage.getItem('token')
            if(token !== ' '){
                return false
            }else{
                let user={...state.user}
                user=dataPayload
            }


            break;
        }
        case 'login':{
            let dataPayload=action.payload?.data
            let userState={...state.user}
            if(userState.email === dataPayload.email && userState.password === dataPayload.password){
                return false

            }else{
                return true
            }


            break;
        }


    }
    return state
}