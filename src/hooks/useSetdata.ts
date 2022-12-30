import { Product } from "../Types/Products"

type Props={
    data:Product
    onClick:(data:Product)=>any
}



export const useSetData=({data,onClick}:Props)=>onClick(data)