import {  useEffect } from 'react'
import {  useState } from 'react'
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
import { useAuthContext } from '../../hooks/useContextAuth'
import { toast } from 'react-toastify'




type Props={
     onClick:()=>void
 } 

 let date=new Date()

export const Bad=()=>{
    const {state,dispatch}=useContextApp()
    let   [products,setProducts]=useState<Product[]>(state.products)
    const [total,setTotalValues]=useState(0)
    const [displayBad,setDisplayBad]=useState(false)
    const [notification,setNotification]=useState(false)
    const navigate=useNavigate()
    const {user,address}=useAuthContext()
 
 

    useEffect(()=>{
      setProducts(state.products) 
      setTotalValues(state.products.reduce((prevPrice:any,nextPrice:Product)=>prevPrice + nextPrice.price , 0 ) )
     
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
        dateRequest:date.toLocaleDateString(),
        state: 'entregue',
        products: products,
        address: address,
        totalValueProduct:total
    }

    if(user === null){
        toast.error(('Faça Login e/ou crie uma conta'));
        setDisplayBad(false)
        
    }else if(address === null){
        toast.error(('Adicione um endereço'));
        setDisplayBad(false)
    }else{
        dispatch({   
            type:'setDataToRequest',
            payload:{data}
        })  
       state.products=[]
       navigate('/pedidos')
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
            <S.NotificationBad displayBad={notification}> 2 </S.NotificationBad >
        </S.BadHeader>

        <S.BadBody displayBad={displayBad}>
              {products.length > 0  ? <> 
               <S.BoxListProducts>
                  {state.products.length  &&  state.products.map((item,index)=>(
                         <ProductBad key={index} data={item} />)) 
                  }
               </S.BoxListProducts>
               <S.BoxAddress>
                    {user  &&  address !== null ?
                       <>
                         <em>Rua {address?.rua} </em>  
                         <em>Bairro {address?.bairro} </em>  
                         <em>numero {address?.numero} </em> 
                       </>
                          :'Faça Login/Cadastro para adicionar um endereço'
                    }
                                    
                </S.BoxAddress>
                <S.BoxBodyBottom>
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
                </S.BoxBodyBottom>
              </>  : <div className='error-bad'>
                        <h3>Nenhum pedido adicionado ainda </h3>
                        <img  src={ErrorIcon} />
              </div>}
          
            
        </S.BadBody>
        
    </S.Container>



}