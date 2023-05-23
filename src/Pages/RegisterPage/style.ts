import styled from "styled-components";
import { ThemeStyle } from "../../styled";



export const Box=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0;

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
padding: 12px 20px;
width: 800px;

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

export const FormInputs=styled.div`
   display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 10px;

    @media screen and (max-width:800px) {
        display: flex;
        flex-direction: column;
}

`

export const  BoxInputs=styled.div`
margin: 10px 0;
input{
    width:100%;
    border: none;
    padding: 19px;
    font-size: 15px;
    border-radius: 3px;
    box-shadow: 0 0 5px #000;
    background-color: #e3e1e1;
   outline: 2px solid ${ThemeStyle.bgTheme};
    
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

export const BoxFile=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 100px 0;
`
export const  CardInputFile=styled.div`
width: 300px;
height: 300px;
background-color: #FFFF;
margin-left: 20px;
border: 2px dashed ${ThemeStyle.bgTheme};
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
position: relative;
  overflow: hidden;
span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: #f1f1f1;
        cursor: pointer;
       font-family: Poppins;
        font-style: Medium;
        font-size: 14px;
        line-height: 21px;
        line-height: 150%;
    }

input{
    position: absolute;
    top: 0;
    left: 0;
     opacity: 0;
    width: 100%;
     height: 100%;
     cursor: pointer;
    &:focus{
        transition: all ease .2s;
        outline: 2px solid ${ThemeStyle.bgTheme};
        
    }
}

label{
    margin: 6px;
    color:#9B9393;
    display:flex;
    justify-content:flex-start;
}
p{
    font-size: 15px;
    color: #C02F2F;
    text-align: center;
}


`
