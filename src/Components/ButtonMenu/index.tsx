import * as S from './style'


type Prop={
    src:string,
    bg?:string,
    marginvertical:string,
    marginhorizontal:string,
    onClick?:()=>void
}


export const ButtonMenu=({src,bg,marginhorizontal,marginvertical,onClick}:Prop)=>{
    return <S.ContainerButtonMenu bgColor={bg} mh={marginhorizontal} mv={marginvertical} onClick={onClick} >
        <S.ButtonIcon src={src}/>
    </S.ContainerButtonMenu>
}