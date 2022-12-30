import { Product } from "../../Types/Products";
import { ActionTypeGeral } from "../../Types/TypeAction";



export const initialStateProductBad=[]
export const useProductBadReducer=(state:Product[],action:ActionTypeGeral)=>{

    switch(action.type){
        case 'addProduct':{
         
              let products=[...state]
               let idItem=products.findIndex(item=>item.id === action.payload?.data.id)
               if(idItem  > -1 ){
                let newQdt=action.payload?.data.qdt
                let newPrice=action.payload?.data.price
                    products[idItem].qdt+=newQdt 
                    products[idItem].price+=newPrice
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