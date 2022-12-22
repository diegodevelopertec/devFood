import { Product } from "../../Types/Products";
import { ActionTypeGeral } from "../../Types/TypeAction";




export const initialStateProductBad:Product[]=[]

export const useProductBadReducer=(state:Product[],action:ActionTypeGeral)=>{

    switch(action.type){
        case 'addProduct':{
           
               let products=[...state]
               let idItem=products.findIndex(item=>item.id === action.payload?.data.id)
               if(idItem < -1){
                    products[idItem].qdt+=action.payload?.data.qdt
               }else{
                products.unshift(action.payload?.data)
               }
                return [...products]
    
        }
        

    }

    return state
}