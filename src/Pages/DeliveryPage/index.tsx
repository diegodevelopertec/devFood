import * as S from './style'
import { Requests } from '../../Components/Requests'
import { useContextApp } from '../../hooks/useContextApp'
import ErrorIcon from './../../assets/imgs/erroricon.png'
import {useAuthContext} from './../../hooks/useContextAuth'
import { useEffect, useState } from 'react'
import { RequestType } from '../../Types/RequestType'
import { UserType } from '../../Types/UserType'


export const DeliveryPage=()=>{
 
 
  const {state,dispatch}=useContextApp()
  const {address,requestsHistory}=useAuthContext()
  const userStorage:UserType=JSON.parse(localStorage.getItem('u') as string)

  const FilterRequestsPending= state.requests.filter(item=>item.state === 'pendente')
  const FilterRequestsDelivered=state.requests.filter(item=>item.state === 'entregue') 




useEffect(()=>{
  localStorage.setItem('requestsHistory',JSON.stringify(FilterRequestsDelivered))
  
  console.log(requestsHistory);

},[state.requests])




    return <S.Container>
       <div className="intro">
                <h3>Histórico de Pedidos</h3>
                <p>Bem vindo {userStorage?.name}<br/>Confira aqui os estado dos seus pedidos:</p> 
              </div>
         {userStorage !== null && FilterRequestsDelivered.length > 0 ? <>
             
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
         </> :
         <div className='error-requests'>
        <p>Nenhum pedido feito</p>
        <img src={ErrorIcon} alt="" />
        
        </div>}


    </S.Container>
}