import { Api } from "./ApiConfig"
import { Product } from "../Types/Products"


export const ApiProduct={

    getProducts:async(category:string):Promise<Product[]>=>{
        let res=await Api.get(`products/${category}`)
        return res.data
    },
    getOneProduct:async(id:string):Promise<Product>=>{
        let res=await Api.get(`products/${id}`)
        let data=res.data
        return data
    },
    postProduct:async(imageProduct:string,name:string,category:string,igredientes:string,price:number):Promise<Product>=>{
        let res=await Api.post('products',{
            imageProduct,name,category,igredientes,price
        })
        let data=res.data
        return data
        
    }

}