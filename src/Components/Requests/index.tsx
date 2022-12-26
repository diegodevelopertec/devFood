import { useState } from 'react'
import * as S from './style'
import { Context } from '../../Context/Context'
import { useContext } from 'react'
import { ProductBad } from '../ProductBad'
import { ProductRequest } from '../ProductRequest'

export const Requests=()=>{
    const {state,dispatch}=useContext(Context)

    return <S.Container>
        <S.RequestHeader>
           <div>
              Pedido feito em :data
           </div>
           <div>
                estado:entregue
           </div>
           <div className="cx-btns">
                <span className="abrir">ver detalhes</span>
           </div>
        </S.RequestHeader>
        <S.RequestBody>
           <div className="cx-produtos">
            {
                state.products.map((item,key)=>(
                    <>
                        <ProductRequest data={item} />
                      
                    </>
                ))
            }
             <div className='total'><span>Total</span> <span>R${}</span></div>
           </div>
        </S.RequestBody>
    
    
    </S.Container>

}