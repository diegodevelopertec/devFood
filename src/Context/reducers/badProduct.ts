import { Product } from "../../Types/Products";
import { ActionTypeGeral } from "../../Types/TypeAction";





export const initialStateProductBad=[]
export const useProductBadReducer=(state:Product[] ,action:ActionTypeGeral)=>{
    
    let listProducts = [...state]
    switch(action.type){
        case 'addProduct':{
            let dataPay=action.payload?.data
            let index=listProducts.findIndex(item=>item.id === dataPay.id)
            if(index > - 1){
                let dataItem=listProducts[index]
                dataItem.qdt+=dataPay.qdt
                dataItem.price+=dataPay.price
               
            }else{
                    listProducts.unshift({
                        ...action.payload?.data
                    })
                }
          
            return [...listProducts]
            
        }
        case 'changeProducts':{
            
            let indexItem=listProducts.findIndex(item=>item.id === action.payload?.key)
            if(indexItem){
                switch(action.payload?.typeAction){
                    case '-':
                        listProducts[indexItem].qdt--
                        listProducts[indexItem].price-=listProducts[indexItem].priceDefault
                        if(listProducts[indexItem].qdt <= 0){
                            listProducts=listProducts.filter((item,index)=>index !== indexItem)
                           }
                        return listProducts

                        break;
                    case '+':
                      
                           listProducts[indexItem].qdt++
                           listProducts[indexItem].price +=listProducts[indexItem].priceDefault
                        break;
                       





                }
               
            }

            return [...listProducts]
        }
       

    }

return state 

}