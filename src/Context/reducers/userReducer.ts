
import { UserType } from "../../Types/UserType";
import { ActionTypeGeral } from "../../Types/TypeAction";
import { ActionFunction } from "react-router-dom";


export type UserTypeReducer={
    user:UserType | null,
  
  
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

            return state
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

            return state
            break;
        }


    }
    return state
}