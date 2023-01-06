import { useState } from 'react'
import * as S from './style'
import { Context } from '../../Context/Context'
import { useContext } from 'react'
import { ProductBad } from '../ProductBad'
import { ProductRequest } from '../ProductRequest'
import { Product } from '../../Types/Products'
import { RequestType } from '../../Types/RequestType'
import { useContextApp } from '../../hooks/useContextApp'

type Props={
    dataRequests:RequestType
}

export const Requests=({dataRequests}:Props)=>{
    const {state,dispatch}=useContextApp()
    const [openBody,setOnBody]=useState(false)


    const setBodyRequest=()=>{
        !openBody  ? setOnBody(true) : setOnBody(false)
    }

    return <S.Container>
        <S.RequestHeader>
           <div>
              Pedido feito em :data
           </div>
           <div>
                estado:entregue
           </div>
           <div className="cx-btns">
                <button className="abrir">apagar</button>
                <button className="abrir" onClick={setBodyRequest}>{!openBody ? 'detalhes' : 'fechar'}</button>
           </div>
        </S.RequestHeader>
        <S.RequestBody openBody={openBody}>
             <div className="cx-produtos">
               
              </div>
              <div className="cx-address">

              </div>
           
        </S.RequestBody>
    
    
    </S.Container>

}