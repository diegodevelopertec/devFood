import * as S from './style'
import { Requests } from '../../Components/Requests'
import { useContextApp } from '../../hooks/useContextApp'
import { ProductRequest } from '../../Components/ProductRequest'

export const DeliveryPage=()=>{
  const {state,dispatch}=useContextApp()

  const requestStateDelivered=state.requests.filter((item,index)=>{item.state === 'entregue'})
  const requestStatePending=state.requests.filter((item,index)=>{item.state === 'pendende'})
 //const {user}=state.user


    return <S.Container>
          <div className="intro">
             <h3>Histórico de Pedidos</h3>
             <p>Bem vindo {},Confira aqui os estado dos seus pedidos</p> 
          </div>
          <div className="requests-container">
              <div>
                { state.requests.length > 0 &&
                          state.requests.map((item,index)=>(
                            <Requests dataRequests={item} key={index} />
                          ))
                          
                }
              </div>
           
           <div>
               {  requestStatePending.length > 0 &&
                       requestStatePending.map((item,index)=>(
                        <Requests dataRequests={item} key={index} />
                       ))
                }
           </div>
            
          </div>


    </S.Container>
}