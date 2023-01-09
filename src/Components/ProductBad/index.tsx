import * as S from './style'
import { Product } from '../../Types/Products'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../Context/Context'
import { useContextApp } from '../../hooks/useContextApp'



type Props={
    data:Product
}



export const ProductBad=({data}:Props)=>{
    const {state,dispatch}=useContextApp()
    const [qdtProduct,setQdtProduct]=useState(data.qdt)
    const [priceProduct,setPriceProduct]=useState(data.price)

    useEffect(()=>{
        setQdtProduct(data.qdt)
        setPriceProduct(data.price)
        
     },[state.products])

   const  HandleQdtBadCard=(key:string | number,typeAction:string)=>{
          dispatch({
            type:'changeProducts',
            payload:{key,typeAction}
          })
     }



    return <S.Container>
        <div className="area-left">
            <div className='area--image'>
                <img src={`${data?.imageProduct}`} alt="" />
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
                <button className="btn-minus" onClick={()=>HandleQdtBadCard(data.id,'-')}> - </button>
                <div className="cx-qdt"> {qdtProduct} </div>
                <button className="btn-add" onClick={()=>HandleQdtBadCard(data.id,'+')}>  + </button>
            </div>
        </div>
    </S.Container>
}