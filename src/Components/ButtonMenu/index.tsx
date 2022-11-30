import * as S from './style'


type Prop={
    src:string
}


export const ButtonMenu=({src}:Prop)=>{
    return <S.ContainerButtonMenu >
        <S.ButtonIcon src={src}/>
    </S.ContainerButtonMenu>
}