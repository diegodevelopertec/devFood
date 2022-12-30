import { AdressType } from "../../Types/AdressType"
import { Product } from "../../Types/Products"
import { ActionTypeGeral } from "../../Types/TypeAction"



export type RequestType={
    products:Product[] ,
    address:AdressType[] 
}

export const initialStateRequest={
    products:[
        {
            id:3,
            category:'Hamburguers',
            name:'X-Salada',
            price:7,
            imageProduct:'../../../src/assets/imgs/bg3.png',
            ingredientes:'Milho,Hamburguer,Maionese,Tomate,Alface,Queijo',
            qdt:1},
            
     
    ],
    address:[]
}

export const useRequestReducer=(state:RequestType, action:ActionTypeGeral)=>{
    switch(action.type){
        case 'setDataRequest':{
            let productsRequest=[...state.products]
            let addressRequest=state.address.filter(item=>item.state === true)
            return {productsRequest,addressRequest}
        }
    }




    return state
}