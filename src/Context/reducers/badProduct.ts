import { Product } from "../../Types/Products";
import { ActionTypeGeral } from "../../Types/TypeAction";



export const initialStateProductBad=[]
export const useProductBadReducer=(state:Product[],action:ActionTypeGeral)=>{

    switch(action.type){
        case 'addProduct':{
         


              let products=[...state]
               let idItem=products.findIndex(item=>item.id === action.payload?.id)
               if(idItem < -1 ){
                    products[idItem].qdt+= action.payload?.data.qdt
                    products[idItem].price+= action.payload?.data.price
               }else{
                products.unshift({...action.payload?.data,qdt:action.payload?.qdt})
               }
                return [...products]
               
    
        }
        case 'setData':{
            if(action.payload?.data){
                return {...action.payload?.data}
            }
        }
        

    }

    return state
}