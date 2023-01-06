import { AdressType } from "./AddressType"

export type UserType={
    name:string,
    photoUser?:string,
    email:string,
    password:string,
    token:string
    adress?:AdressType[],


}