import * as S from './style'


type Prop={
    src:string,
    bg?:string,
    marginvertical:string,
    marginhorizontal:string,
    iconActive:boolean;
    onClick?:()=>void
}


export const ButtonMenu=({src,bg,marginhorizontal,marginvertical,onClick,iconActive}:Prop)=>{
    return <S.ContainerButtonMenu bgColor={bg} mh={marginhorizontal} mv={marginvertical} bgColorActive={iconActive} onClick={onClick} >
        <S.ButtonIcon src={src}/>
    </S.ContainerButtonMenu>
}