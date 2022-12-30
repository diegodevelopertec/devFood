import * as S from './style'
import { Requests } from '../../Components/Requests'
import { useContextApp } from '../../hooks/useContextAp.p'
import { ProductRequest } from '../../Components/ProductRequest'

export const DeliveryPage=()=>{
  const {state,dispatch}=useContextApp()



    return <S.Container>
          <div className="intro">
             <h3>Histórico de Pedidos</h3>
             <p>Confira aqui os estado dos seus pedidos</p> 
          </div>
          <div className="requests-container">
        
              {
                state.requestDelivery.products.map((item,index)=>(
                 <Requests data={item} key={index} /> 
              ))
           }
          </div>


    </S.Container>
}