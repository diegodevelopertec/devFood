import { Product } from "./Products"
import { AddressType } from "./AddressType"


export type RequestType=[
    products:Product[]  ,
    address:AddressType
]
