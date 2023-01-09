import * as S from './style'
import { Requests } from '../../Components/Requests'
import { useContextApp } from '../../hooks/useContextApp'
import { ProductRequest } from '../../Components/ProductRequest'


export const DeliveryPage=()=>{
  const {state,dispatch}=useContextApp()

 //const {user}=state.user

const FilterRequestsPending=state.requests.filter(item=>item.state === 'pendente')
const FilterRequestsDelivered=state.requests.filter(item=>item.state === 'entregue')

    return <S.Container>
          <div className="intro">
             <h3>Histórico de Pedidos</h3>
             <p>Bem vindo {}<br/>Confira aqui os estado dos seus pedidos:</p> 
          </div>
          <div className="requests-container">
            {FilterRequestsPending.map((item,index)=>(
                <Requests dataRequests={item} key={index} />
            ))}

          </div>
          <div className="requests-delivered-cx">
              <h4>Entregues</h4>
              {
                FilterRequestsDelivered.map((item,index)=>(
                  <Requests dataRequests={item} key={index} />
                ))
              }
          </div>


    </S.Container>
}