import * as S from './style'


type Prop={
    src:string,
    bg?:string,
    marginvertical:string,
    marginhorizontal:string
}


export const ButtonMenu=({src,bg,marginhorizontal,marginvertical}:Prop)=>{
    return <S.ContainerButtonMenu bgColor={bg} mh={marginhorizontal} mv={marginvertical} >
        <S.ButtonIcon src={src}/>
    </S.ContainerButtonMenu>
}