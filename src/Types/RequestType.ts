import { Product } from "./Products"
import { AddressType } from "./AddressType"



 export type RequestDataType={
    id:string,
    products:Product[]  ,
    address:string,
    totatValueProduct:number
}
export type RequestType=RequestDataType[]