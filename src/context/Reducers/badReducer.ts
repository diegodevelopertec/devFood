import { Product } from "../../Types/Products";
import { AdressType } from "../../Types/AdressType";
import { ActionTypeGeral } from "../../Types/TypeAction";


export type badType={
    product:Product[] | any,
    address:AdressType[] | any
}


export const initialStateBad={
    product:[
        {
            id: 1,
            name: '',
            category: '',
            price:7,
            imageProduct: '',
            igredientes:'',
            qdt: ''
        
        }
    ],
    address:[
        {
            rua: '',
            numero: '',
            bairro: '',
            complemento:''
        }
    ]
}


export const badReducer=(state:badType,action:ActionTypeGeral)=>{
    switch(action.type){

        case 'addProduct':{
            let product=[...state.product]
            let id=action.payload?.id
            let index=product.findIndex(item=>action.payload?.id === id)
            if(index > -1){
                return {...state}
            }else{
               product.push(
                {
                    ...action.payload?.data,
                    ...action.payload?.qdt
                }
               )
               return state
            }
        }

    }

    return state

}