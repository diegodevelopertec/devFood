import { AddressType as AddressType } from "../../Types/AddressType"
import { Product } from "../../Types/Products"
import { ActionTypeGeral} from "../../Types/TypeAction"
import { RequestType } from "../../Types/RequestType"
import {v4 as uuid} from 'uuid'

export const initialStateRequest={
    products:[
        {
            id:uuid(),
            category:'Hamburguers',
            name:'X-Burguer',
            price:6,
           
            imageProduct: `/imgs/bg3.png`,
            ingredientes:'Hamburguer,Queijo,Presunto e Maionese',
            qdt:1,
        
        }
    ],
    address:[{
        id: uuid,
        rua: 'generoso pinto',
        state: true,
        numero: '156',
        bairro: 'conceição do itaguá',
        complemento: 'casa'
    }]
}

export const useRequestReducer=(state:RequestType , action:ActionTypeGeral)=>{
    switch(action.type){
        case 'setDataRequest':{
        
        }
    }




    return state
}