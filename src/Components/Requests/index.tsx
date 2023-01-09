import { useState } from 'react'
import * as S from './style'
import { Context } from '../../Context/Context'
import { useContext } from 'react'
import { ProductBad } from '../ProductBad'
import { ProductRequest } from '../ProductRequest'
import { Product } from '../../Types/Products'
import { RequestDataType, RequestType } from '../../Types/RequestType'
import { useContextApp } from '../../hooks/useContextApp'
import openIcon from './../../assets/imgs/setbaixo.png'
import closeIcon from './../../assets/imgs/close.png'
import lixeiraIcon from './../../assets/imgs/lixeira.png'


type Props={
    dataRequests:RequestDataType
}

export const Requests=({dataRequests}:Props)=>{
    const {state,dispatch}=useContextApp()
    const [openBody,setOnBody]=useState(false)
     let [requests]=state.requests
     let address=state.address.find(item=>item.state === true)

    const setBodyRequest=()=>{
        !openBody  ? setOnBody(true) : setOnBody(false)
    }
    const removeRequestData=()=>{
        dispatch({
            type:'removeRequest',
            payload:{data:dataRequests}
        })
    }

    return <S.Container>
        <S.RequestHeader>
           <div className="info">
                <span> data</span>
                <span>{dataRequests.state}</span>
           </div>
           <div className="cx-btns">
                <button className="apagar" onClick={removeRequestData}>
                    <img src={lixeiraIcon} />
                    <span>apagar</span>
                </button>
                <button className="abrir" onClick={setBodyRequest}>
                     <img src={!openBody ? openIcon : closeIcon}/>
                     <span>{!openBody ? 'Detalhes' : 'fechar'}</span>
                </button>
           </div>
        </S.RequestHeader>
        <S.RequestBody openBody={openBody}>
             <S.AreaProduct>
                <h4>Produtos</h4>
                <div className='cx-products'>
                    {requests.products.map((item,index)=>(
                           <ProductRequest data={item} key={index} />
                    ))}
                </div>
              </S.AreaProduct>
               
              <S.AreaAdress>
                    <h4>Endereço</h4>
                   <p><strong>Rua</strong>{address?.rua}</p>
                   <p><strong>Bairro</strong>:{address?.bairro}</p>
                   <p><strong>numero</strong>:{address?.numero}</p>
                   <p><strong>complemento</strong>:{address?.complemento}</p>
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
                       <span>Total</span> <span> R$ {requests.totatValueProduct.toFixed(2)}</span>
                    </div>
                  
              
              </S.AreaDetails>
           
        </S.RequestBody>
    
    
    </S.Container>

}