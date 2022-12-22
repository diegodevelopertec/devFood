import * as S from './style'
import BadIcon from '../../assets/imgs/sacola.png'
import  openBadIcon from '../../assets/imgs/setbaixo.png'
import CloseBadIcon from '../../assets/imgs/close.png'
import { useContext } from 'react'
import { Context } from '../../Context/Context'
import {  ReactNode, useState } from 'react'
import { ProductBad } from '../ProductBad'





export const Bad=()=>{
    const {state,dispatch}=useContext(Context)
    const [displayBad,setDisplayBad]=useState(false)
    const [notification,setNotification]=useState(true)


    const clickDisplayBad=()=>{
       if(!displayBad){
           setDisplayBad(true)
           setNotification(false)
       }else{
         setDisplayBad(false)
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
             
           {state.products.length > 0 && <> 
           <div className="area-listproduct">
                    {
                    state.products.map((item,index)=>(
                        <ProductBad key={index} data={item} />
                    )) }
                </div>
                <div className='area-address'>
                    
                </div>
                <div className="area-final-cupom">
                    <input type="text" />
                    <div className="data-compra">
                        <div className="data-item">
                            <span>Desconto</span>
                            <span>$ 00</span>
                        </div>
                        <div className="data-item">
                            <span>Taxa de Entrega</span>
                            <span>$ 00</span>
                        </div>
                        <div className="data-item">
                            <span>Total</span>
                            <span>$ 00</span>
                        </div>
                    </div>
                <button>finalizar compra</button>
                </div>
           
           </> 
}
            
        </S.BadBody>
        
    </S.Container>



}