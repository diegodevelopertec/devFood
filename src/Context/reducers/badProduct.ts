
import { useEffect } from "react";
import { ProductBad } from "../../Components/ProductBad";
import { Product } from "../../Types/Products";
import { ActionTypeGeral } from "../../Types/TypeAction";
import axios from "axios";
import staticMethods from "antd/es/message";



export const initialStateProductBad=[]
export const useProductBadReducer=(state:Product[] ,action:ActionTypeGeral)=>{

    switch(action.type){
        case 'addProduct':{
            let listProducts = [...state]
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
       

}

return state 

}