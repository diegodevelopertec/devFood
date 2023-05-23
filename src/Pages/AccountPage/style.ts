import styled from "styled-components";
import { ThemeStyle } from "../../styled";


export const Box=styled.div`
background-color: #FFF;
padding: 35px 12px;


@media screen and (max-width:950px) {
    
}


`

export const BoxContent=styled.div`
margin: 85px 0;



`

export const HeaderBoxContext=styled.div`
display: flex;
align-items: center;
h2{
    color: #0f0f0f;
    font-size: 21px;
    text-shadow: 0 0  5px #AAA;
}
img{
    padding: 6px;
    height: 55px;
    box-shadow: 0 0  7px #000;
    width: 55px;
    border-radius: 100%;
    margin-right: 10px;
    background-color: ${ThemeStyle.bgTheme};
}

`

