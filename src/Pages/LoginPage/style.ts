import styled from "styled-components";
import { ThemeStyle } from "../../styled";



export const Box=styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;

@media screen and (max-width:800px) {
    padding: 12px;
    margin-top: 80px;
}
`

export const BoxText=styled.div`
margin: 25px 0;
width: 100%;
h2{
margin: 25px 0;
}
p{
margin: 10px 0;
}


`

export const FormBox=styled.div`
box-shadow: 0 0 5px #000;
padding: 12px 80px;
width: 750px;


.cx-btn{
    display: flex;
    margin: 20px 0;
    justify-content: center;

    button{
        padding: 16px 25px;
        width: 180px;
        border: none;
        border-radius: 3px;
        background-color: green;
        font-size: 19px;
        box-shadow:0 0 5px #000;
        color: #FFFF;
        cursor: pointer;
    }
}

@media screen and (max-width:800px) {
  width: 100%;
  padding: 12px;
  box-shadow: none;
}

`

export const  BoxInputs=styled.div`
margin: 10px 0;
input{
    width:100%;
    border: none;
    outline: 2px solid ${ThemeStyle.bgTheme};
    padding: 19px;
    font-size: 15px;
    border-radius: 3px;
    box-shadow: 0 0 5px #000;
    background-color: #cccaca;
}
p{
    color: #a82413;
    font-size: 13px;
    text-align: center;
    margin: 5px 0;
}
`


export const BoxBottom=styled.div`
margin: 85px 0;
transition: all ease 0.5s;
a{
    text-decoration: none;
    color: #000;
    &:hover{
        text-decoration: underline;
    }
}
`
