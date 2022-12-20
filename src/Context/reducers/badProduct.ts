import { Product } from "../../Types/Products";
import { ActionTypeGeral } from "../../Types/TypeAction";




export const initialStateProductBad:Product[]=[
    {
       
            id:2,
            name: 'contextApi',
            category: '2sddd',
            price: 4,
            imageProduct: 'string',
            ingredientes: ' ',
            qdt: 34
    },
    {
       
        id:2,
        name: 'contextApi',
        category: '2sddd',
        price: 4,
        imageProduct: 'string',
        ingredientes: ' ',
        qdt: 34
},
{
       
    id:2,
    name: 'contextApi',
    category: '2sddd',
    price: 4,
    imageProduct: 'string',
    ingredientes: ' ',
    qdt: 34
},
{
       
    id:2,
    name: 'contextApi',
    category: '2sddd',
    price: 4,
    imageProduct: 'string',
    ingredientes: ' ',
    qdt: 34
},
{
    id:9,
    category:'Bebidas',
    name:'Coca Cola 2L',
    price:3.50,
    imageProduct: '../../src/assets/imgs/coca2l.png',
    qdt:1
    
},
{
    id:10,
    category:'Bebidas',
    name:'Coca Cola 2L',
    price:3.50,
    imageProduct: '../../src/assets/imgs/coca2l.png',
    qdt:1
    
}
]

export const useProductBadReducer=(state:Product[],action:ActionTypeGeral)=>{

    switch(action.type){
        case 'addProduct':{
            return state
        }
    }


    return state
}