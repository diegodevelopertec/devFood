
import { useEffect } from "react";
import { ProductBad } from "../../Components/ProductBad";
import { Product } from "../../Types/Products";
import { ActionTypeGeral } from "../../Types/TypeAction";
import Item from "antd/es/list/Item";
import axios from "axios";



export const initialStateProductBad=[]
export const useProductBadReducer=(state:Product[] ,action:ActionTypeGeral)=>{

    switch(action.type){
        case 'addProduct':{
            let listProducts = [...state]
            
            listProducts.push({
                ...action.payload?.data
            })
            
            return listProducts
        }
       

}

return state 

}