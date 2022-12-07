import * as S from './style'
import BadIcon from '../../assets/imgs/sacola.png'
import CloseBadIcon from '../../assets/imgs/setbaixo.png'
import { Children, ReactNode, useState } from 'react'

type Props={
   children:ReactNode
}

export const Bad=({children}:Props)=>{
    const [displayBad,setDisplayBad]=useState(false)
    const clickDisplayBad=()=>{
    if(!displayBad){
        setDisplayBad(true)
        setNotification(false)
    }else{
       setDisplayBad(false)
    }
}
    const [notification,setNotification]=useState(true)

        
    


    return <S.Container >
        <S.BadHeader displayBad={displayBad} onClick={ !displayBad  ? clickDisplayBad : ()=> null}>
            <div className="header--text">
                <img src={BadIcon} alt="" /><span>Sacola[0]</span>
            </div>
            <div  onClick={clickDisplayBad}  className='close--bad'>
              <img src={CloseBadIcon}  alt="" /> 
            </div>
            <S.NotificationBad displayBad={notification}>  2 </S.NotificationBad >
        </S.BadHeader>
        <S.BadBody displayBad={displayBad}>
             <>
             {children}
             </>
        </S.BadBody>
        
    </S.Container>



}