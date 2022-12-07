import styled from "styled-components";

type Props={
    bgColor?:string,
    bgColorActive:boolean,
    mv:string,
    mh:string,
}

export const ContainerButtonMenu=styled.a<Props>`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    padding:6px;
    text-decoration:none;
    margin: ${props=>props.mv && props.mh ? `${props.mv}px ${props.mh}px` : '10px 20'};
    //background: ${props=>props.bgColor ? props.bgColor : '#e38f4b'};
    background:${props=>props.bgColorActive === true ? '#e6b72c' :  props.bgColor };
    &:hover{
        cursor:pointer;
        background:${props=>props.bgColorActive === true ? '#d4ae3bc' :  '#e8b376' };
    }
`

export const ButtonIcon=styled.img`
    height: 50px;
    width: 50px;
    @media screen and (max-width:600px){
     height: 33px;
     width: 33px;
    }
`

export const TextButton=styled.span`
    display: none;
    color:#e8e8e8;
   
    @media screen and (max-width:920px){
        display: flex;
    }
`