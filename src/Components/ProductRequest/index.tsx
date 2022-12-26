import * as S from './style'
import { Product } from '../../Types/Products'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../Context/Context'



type Props={
    data:Product
}



export const ProductRequest=({data}:Props)=>{
    const {state,dispatch}=useContext(Context)
    const [qdtProduct,setQdtProduct]=useState(data.qdt)
    const [priceProduct,setPriceProduct]=useState(data.price)


   const  actionsBadCard={
        add:()=>{
           setPriceProduct(prev=>prev + data.price)
           setQdtProduct(qdtProduct+1)
        },
        minus:()=>{
            setPriceProduct(prev=>prev - data.price)
            setQdtProduct(qdtProduct -1)
        }
    }

  
  


    return <S.Container>
        <div className="area-left">
            <div className='area--image'>
                <img src={data.imageProduct} alt="" />
            </div>
            <div className="area-text">
                <span className='name'>
                    {data.name}
                </span>
                <span className='price'>
                    R$ {priceProduct.toFixed(2)}
                </span>
            </div>
        </div>
        <div className="area-right">
            <div className="counter">
               
                <div className="cx-qdt"> {qdtProduct} </div>
                
            </div>
        </div>
    </S.Container>
}