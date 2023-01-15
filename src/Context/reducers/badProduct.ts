import { toast } from "react-toastify";
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
                    toast.success('novo produto adicionado')
                       return [dataPay,...listProducts]
                     
                    }
           
           
            
        }
        case 'changeProducts':{
            let indexItem=listProducts.findIndex(item=>item.id === action.payload?.key)
           let data=listProducts[indexItem]
            if(indexItem > -1){
                switch(action.payload?.typeAction){
                  
                    case '-':
                            data.qdt--
                            data.price-=listProducts[indexItem].priceDefault
                         if(listProducts[indexItem].qdt == 0){
                             listProducts=listProducts.filter((item,index)=>index !== indexItem)
                             toast.success('removido da sacola')
                            
                            }
                            
                        break;
                    case '+':
                      
                           data.qdt++
                           data.price +=listProducts[indexItem].priceDefault
                        
                       break;
                }
               
            }

            return  listProducts
        }
     }

  return state

}