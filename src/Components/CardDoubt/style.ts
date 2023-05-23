import styled from "styled-components";
import { ThemeStyle } from "../../styled";

type Props={
    stateBody:boolean;
}

export const Box=styled.div`
margin: 30px 0;

`

export const BoxHeader=styled.div`
display: flex;
border-radius: 6px;
justify-content: space-between;
align-items: center;
padding: 12px;
box-shadow:0 0 5px #000;
background-color: ${ThemeStyle.bgTheme};
color: #FFFF;

img{
    height: 35px;
    width: 35px;
    cursor: pointer;
    padding: 8px;
    transition: all ease .2s;
    background-color: #FFF2;
    border-radius: 100%;
    &:hover{
        background-color: ${ThemeStyle.bgCardProductBottom};
    }
}
`

export const BoxBody=styled.div<Props>`
display: ${Props=>Props.stateBody ? 'flex' : 'none'};
transition: all ease .3s;
background-color: ${ThemeStyle.bgCardProductBottom};
padding: 14px;
color: #e3e3e3;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
`