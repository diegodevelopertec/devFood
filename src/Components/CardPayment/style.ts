import styled from "styled-components";
import { ThemeStyle } from "../../styled";


export const Box=styled.div`
    background-color:'#FFFF';
    display: flex;
    justify-content: space-around;
    margin: 12px 10px;
    box-shadow: 0 0 12px #787878;
    padding: 25px;
  

    @media screen and (max-width:760px) {
        justify-content: space-between;
        padding: 5px;
        font-size: 12px;
        width: auto;
       
    }
`

export const BoxLeft=styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
gap: 12px;
justify-content: center;
align-items: center;
color: #0d0c0c;
flex: 1;


@media screen and (max-width:760px) {
        display: flex;
        flex-direction: column;
        margin: 0;
      
    }

`

export const BoxRight=styled.div`
display: flex;
align-items: center;
justify-content: center;
width: max-content;
button{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 30px;
    margin: 6px;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 2px #FFF;
    cursor: pointer;
    &:nth-child(1){
        background-color:#b33024;
        color: #FFF;
    }
    &:nth-child(2){
        background-color:#389126;
        color: #FFF;
    }

    @media screen and (max-width:760px) {
        padding: 3px 12px;
        font-size: 10px;
    }
}

`