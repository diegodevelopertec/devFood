import styled from "styled-components";
import { ThemeStyle } from "../../styled";


export const Box=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
`

export const BoxSearch=styled.div`
display: flex;
align-items: center;
height:30px;
input{
    height: 100%;
    width: 370px;
    border: none;
    padding: 25px;
    box-shadow: 0 0 5px #000;
    transition: all ease .2s;
    &:focus{
        outline: 2px solid ${ThemeStyle.bgTheme};
    }
}
span{
    display: flex;
    height: fit-content;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    padding:10px 15px;
    background-color: ${ThemeStyle.bgTheme};
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
}
img{
   height: 35px;
}


@media screen and (max-width:950px) {
    width: 85%;
    margin: 20px 0;
    input::placeholder{
        font-size: 12px;
    }

    
}
`