import * as S from './style'
import { Product } from '../../Types/Products'
import { useContext, useState } from 'react'
import { Context } from '../../Context/Context'




type Props={
    data:Product
}

export const ProductRequest=({data}:Props)=>{
    const {state,dispatch}=useContext(Context)
    const [qdtProduct,setQdtProduct]=useState()
    const [priceProduct,setPriceProduct]=useState()

    return <S.Container>
            <>
            <div className="area-left">
                <div className='area--image'>
                    <img src={`${data.imageProduct}`} alt="" />
                </div>
                <div className="area-text">
                    <span className='name'>
                        {data.name}
                    </span>  
                    <span className='price'>
                        R$ {data.price.toFixed(2)}
                    </span>
         </div>
     </div>
     <div className="area-right">
         <div className="counter">
            <div className="cx-qdt"> Qdt {data.qdt} </div>
         </div>
     </div>
            
            </>
      
    </S.Container>
}