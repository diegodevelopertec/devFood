import axios from 'axios'
import { Product } from "../Types/Products"


export const  api=axios.create({
    baseURL:' http://localhost:3000/'
})
export const ApiProduct={

    getProducts:async():Promise<Product[]>=>{
        let res=await api.get('products')
       let data=res.data
       return data
    },
    getOneProduct:async(id:string):Promise<Product>=>{
        let res=await api.get(`products/${id}`)
        let data=res.data
        return data
    },
    postProduct:async(imageProduct:string,name:string,category:string,igredientes:string,price:number):Promise<Product>=>{
        let res=await api.post('products',{
            imageProduct,name,category,igredientes,price
        })
        let data=res.data
        return data
        
    }

}