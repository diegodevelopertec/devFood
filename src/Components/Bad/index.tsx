import * as S from './style'
import  {v4 as uuid} from 'uuid'
import BadIcon from '../../assets/imgs/sacola.png'
import  openBadIcon from '../../assets/imgs/setbaixo.png'
import CloseBadIcon from '../../assets/imgs/close.png'
import { useContext, useEffect } from 'react'
import { Context } from '../../Context/Context'
import {  ReactNode, useState } from 'react'
import { ProductBad } from '../ProductBad'
import { useContextApp } from '../../hooks/useContextApp'
import { Product } from '../../Types/Products'
import { NavigationContext } from 'react-router/dist/lib/context'
import { useNavigate } from 'react-router-dom'
import { RequestDataType } from '../../Types/RequestType'
import { useMenuMobile } from '../../hooks/useMenuMobile'


type Props={
    onClick:()=>void
}

export const Bad=({onClick}:Props)=>{
    const {state,dispatch}=useContextApp()
    let [products,setProducts]=useState(state.products)
    const [total,setTotalValues]=useState(0)
    const [displayBad,setDisplayBad]=useState(false)
    const [notification,setNotification]=useState(false)
    const navigate=useNavigate()
    

 
   
    // Effects 

    useEffect(()=>{
        setProducts(state.products)
        let total=state.products.reduce((prevPrice:any,nextPrice:Product)=>prevPrice + nextPrice.price , 0 )  
        setTotalValues(total)
    
    },[state.products,state.requests])

 
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
        products: state.products,
        address: '',
        totatValueProduct: total,
    }

    dispatch({
        type:'setDataRequest',
        payload:{
            id:data?.id,
            products:data?.products,
            totalPrice:data?.totatValueProduct,
            address:data?.address       
        }
    })
   
   
    navigate('/pedidos')
    state.products=[]
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
                <button onClick={setDataToRequests}>finalizar compra</button>
                </div>
              </>  : <div className='error-bad'>Nenhum pedido adicionado ainda </div>
           }
            
        </S.BadBody>
        
    </S.Container>



}