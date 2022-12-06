import { ActionTypeGeral } from "../../Types/TypeAction";
import { Product } from "../../Types/Products";
import { AdressType } from "../../Types/AdressType";

type ProductsBadType={
    products:Product[] ,
    adress:AdressType[] | null
}

export const initialState={}

export const reducer=(state:ProductsBadType,action:ActionTypeGeral)=>{
    switch (action.type){
        case 'addProduct':{
          const products=[...state.products]
            let id=action.payload?.data.id
            let index=products.findIndex(item=>item.id === id)
            if(index > -1){
                    products[index].qdt +=action.payload?.qtproduct
            }else{
                products.push({
                    ...action.payload?.data,
                    ...action.payload?.qtproduct
                })
            }






        }

    }



    return state
}