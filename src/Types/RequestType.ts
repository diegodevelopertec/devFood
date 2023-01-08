import { Product } from "./Products"
import { AddressType } from "./AddressType"



 export type RequestDataType={
    id:string,
    state:'pendende' | 'entregue',
    products:Product[]  ,
    address:AddressType,
    totatValueProduct:number
}
export type RequestType=RequestDataType[]