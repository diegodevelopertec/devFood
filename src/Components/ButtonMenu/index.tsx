import * as S from './style'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import  useHistory  from 'react-router'


type Prop={
    src:string,
    bg?:string,
    marginvertical:string,
    marginhorizontal:string,
    iconActive:boolean;
    onClick?:(e:any)=>void,
    link?:string,
    text?:string,
    width?:string,
    id?:string
   
    
}


export const ButtonMenu=({src,bg,marginhorizontal,marginvertical,onClick,iconActive,link,text,width,id}:Prop)=>{
 


    
   

    return  <S.ContainerButtonMenu  href={link}  id={id} bgColor={bg} mh={marginhorizontal} mv={marginvertical} bgColorActive={iconActive} onClick={onClick} >
        <S.ButtonIcon src={src} />   
        <S.TextButton>
        {text}
      </S.TextButton>
    </S.ContainerButtonMenu>
  
}  