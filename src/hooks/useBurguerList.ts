import { dataBurguer } from "../data/Product"
import { useState } from "react"
import { Product } from "../Types/Products"


export const useBurguerData=()=>{
     const [burguerProductList,setBurguerProductList]=useState<Product[] >(dataBurguer)
     
}