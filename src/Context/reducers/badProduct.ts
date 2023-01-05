
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
            let listproducts=[...state]
            let idCart=action.payload?.data.id
            let index=listproducts.findIndex(item=>item.id === idCart)
            if(index > -1 ){
                
                listproducts[index].qdt +=action.payload?.qdt
                listproducts[index].qdt +=action.payload?.qdt
           

            }else{
                listproducts.push({
                    ...action.payload?.data
                })
            }
                return listproducts
        }
       

}

return state 

}