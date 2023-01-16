import {  useEffect } from 'react'
import {   useState } from 'react'
import { ProductBad } from '../ProductBad'
import { useContextApp } from '../../hooks/useContextApp'
import { Product } from '../../Types/Products'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import  {v4 as uuid} from 'uuid'
import BadIcon from '../../assets/imgs/sacola.png'
import  openBadIcon from '../../assets/imgs/setbaixo.png'
import CloseBadIcon from '../../assets/imgs/close.png'
import ErrorIcon from '../../assets/imgs/erroricon.png'
import { useModalLogin } from '../../hooks/useModeLogin'
import { useAuthContext } from '../../hooks/useContextAuth'

type Props={
    onClick:()=>void
}
let date=new Date()

export const Bad=()=>{
    const {state,dispatch}=useContextApp()
    const addressDefault=state.address.find(item=>item.state === true)
    let   [products,setProducts]=useState<Product[]>(state.products)
    const [total,setTotalValues]=useState(0)
    const [displayBad,setDisplayBad]=useState(false)
    const [notification,setNotification]=useState(false)
    const navigate=useNavigate()
    let {stateModal,handleStateModal}=useModalLogin()
    const {user}=useAuthContext()

    

   
    // Effects 

    useEffect(()=>{
      setProducts(state.products) 
      setTotalValues(state.products.reduce((prevPrice:any,nextPrice:Product)=>prevPrice + nextPrice.price , 0 ) )
    },[state.products])

 
 const clickDisplayBad=()=>{
       if(!displayBad){
           setDisplayBad(true)
           setNotification(false)
       }else{
         setDisplayBad(false)
      }
   }


 const setDataToRequests=()=>{
 
   
  let data={
     id: uuid(),
     dateRequest:date.toLocaleDateString(),
    state: 'entregue',
    products: products,
    address: addressDefault,
    totalValueProduct:total
}
    if(user === null){
        handleStateModal(true)
       
        
    }else{
  
        dispatch({
            type:'setDataToRequest',
            payload:{data}
        })
        navigate('/pedidos')
        state.products=[]
}
 }
    




    return <S.Container displayBad={displayBad}>
        <S.BadHeader displayBad={displayBad} onClick={ !displayBad  ? clickDisplayBad : ()=> null}>
            <div className="header--text">
                <img src={BadIcon} alt="" /><span>Sacola[<span className='qdt-sacola'>{state.products.length}</span>]</span>
            </div>
            <div  onClick={clickDisplayBad}  className='close--bad'>
             {displayBad ? <img src={CloseBadIcon}  alt="" /> : <img className='open-icon' src={openBadIcon}  alt="" />} 
             
            </div>
            <S.NotificationBad displayBad={notification}>  2 </S.NotificationBad >
        </S.BadHeader>

        <S.BadBody displayBad={displayBad}>
             
           {products.length > 0  ? <> 
               <div className="area-listproduct">
                  {state.products.length  &&  state.products.map((item,index)=>(
                         <ProductBad key={index} data={item} />)) 
                         
                 }
               </div>
                <div className='area-address'>
                   <em>Rua {addressDefault?.rua} </em> 
                   <em>Bairro  {addressDefault?.bairro} </em>  
                   <em>numero {addressDefault?.numero} </em>                     
                </div>
                <div className="area-final-cupom">
                    <input type="text" />
                    <div className="data-compra">
                        <div className="data-item">
                            <span>Desconto</span>
                            <span>R$ 00</span>
                        </div>
                        <div className="data-item">
                            <span>Taxa de Entrega</span>
                            <span>R$ 00</span>
                        </div>
                        <div className="data-item">
                            <span>Total</span>
                            <span>R$ {total.toFixed(2)}</span>
                        </div>
                    </div>
                <button onClick={()=>setDataToRequests()}>finalizar compra</button>
                </div>
              </>  : <div className='error-bad'>
                        <h3>Nenhum pedido adicionado ainda </h3>
                        <img  src={ErrorIcon} />
              </div>
           }
            
        </S.BadBody>
        
    </S.Container>



}