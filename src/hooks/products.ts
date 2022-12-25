import { useContext } from "react";
import { Context } from "../Context/Context";

export const useProductBad=()=>{
    const {state,dispatch}=useContext(Context)
   const productList=state.products
    return productList
}