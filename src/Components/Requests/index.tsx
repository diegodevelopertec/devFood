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

    let address=state.address.find(item=>item.state === true)

    const setBodyRequest=()=>{
        !openBody  ? setOnBody(true) : setOnBody(false)
    }

    return <S.Container>
        <S.RequestHeader>
           <div className="info">
            <div>
                Pedido feito em :data
            </div>
            <div>
                    estado:entregue
            </div>
           </div>
           <div className="cx-btns">
                <button className="abrir">apagar</button>
                <button className="abrir" onClick={setBodyRequest}>{!openBody ? 'detalhes' : 'fechar'}</button>
           </div>
        </S.RequestHeader>
        <S.RequestBody openBody={openBody}>
             <S.AreaProduct>
                <h4>Produtos</h4>
                <div className='cx-products'>
                    {state.requests.products.map((item,index)=>(
                            <ProductRequest data={item} key={index} />
                    ))}
                </div>
              </S.AreaProduct>
               
              <S.AreaAdress>
                    <h4>Endereço</h4>
                   <span> Rua :{address?.rua}</span>
                   <span>Bairro:{address?.bairro}</span>
                   <span>numero:{address?.numero}</span>
                   <span>complemento:{address?.complemento}</span>
              </S.AreaAdress>
              <S.AreaDetails>
                <h4>Detalhes</h4>

                    <div className="linha">
                       <span>Desconto </span> <span> 00 </span>
                    </div>
                    <div className="linha">
                       <span>taxa de Entrega</span> <span> 00 </span>
                    </div>
                    <div className="linha">
                       <span>Total</span> <span> R$ {state.requests.totatValueProduct.toFixed(2)}</span>
                    </div>
                  
              
              </S.AreaDetails>
           
        </S.RequestBody>
    
    
    </S.Container>

}