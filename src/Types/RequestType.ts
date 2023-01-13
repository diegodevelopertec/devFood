import { Product } from "./Products"
import { AddressType } from "./AddressType"



 export type RequestDataType={
    id:string,
    dateRequest:string,
    state:'pendente' | 'entregue',
    products:Product[]  ,
    address:AddressType,
    totalValueProduct:number
}
export type RequestType=RequestDataType[]