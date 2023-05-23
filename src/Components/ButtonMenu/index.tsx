import * as S from './style'
import {  Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import  useLocation from 'react-router'


type Prop={
    src:string,
    bg?:string,
    marginvertical:string,
    marginhorizontal:string,
 // iconActive:boolean;
    link?:string,
    text?:string,
    width?:string,
    id?:string
   
    
}


export const ButtonMenu=({src,bg,marginhorizontal,marginvertical,link,text,width,id}:Prop)=>{
 
  let navigate=useNavigate()
  let isActive=location.pathname === link
  const handleClick=(e:any)=>{
    e.preventDefault()
    navigate(`${link}`)
}


    return  <S.ContainerButtonMenu  href={link}  id={id} bgColor={bg} mh={marginhorizontal} mv={marginvertical} bgColorActive={isActive} onClick={handleClick} >
        <S.ButtonIcon src={src} />   
        <S.TextButton>
        {text}
      </S.TextButton>
    </S.ContainerButtonMenu>
  
}  