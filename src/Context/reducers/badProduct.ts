import { Product } from "../../Types/Products";
import { ActionTypeGeral } from "../../Types/TypeAction";




export const initialStateProductBad:Product[]=[]

export const useProductBadReducer=(state:Product[],action:ActionTypeGeral)=>{

    switch(action.type){
        case 'addProduct':{
           let id=action.payload?.data.id


              let products=[...state]
               let idItem=products.findIndex(item=>item.id === id)
               if(idItem < -1 ){
                    products[idItem].qdt+= action.payload?.data.qdt
               }else{
                products.unshift({...action.payload?.data,qdt:action.payload?.qdt})
               }
                return [...products]
               
    
        }
        

    }

    return state
}