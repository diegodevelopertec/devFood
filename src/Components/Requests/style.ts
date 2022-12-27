import styled from "styled-components";
import { ThemeStyle } from "../../styled";

type Props={
    openBody:boolean
}

export const Container=styled.div`
    width: 100%;
    min-height: 100%;
    margin: 19px 0;

`
export const  RequestHeader=styled.div`
    background: #aaa;
    color:${ThemeStyle.bgTheme};
    padding: 20px 12px;
    font-size:12px;
    border-radius:5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    button{
        padding: 12px ;
        border-radius:5px;
        margin:0 5px;
        border: none;
        width: 100px;
        &:hover{
            cursor: pointer;
        }
    }

`
export const  RequestBody=styled.div<Props>`
    background:#cccfc6;
    color:${ThemeStyle.colorTextCard};
    padding: 20px 12px;
    height:200px;
    flex-direction:column;
    transition:all ease 0.5s;
    display: ${props=>props.openBody === false ? 'none' : 'flex'};
    overflow: auto;
    ::-webkit-scrollbar{
        width: 2px;
      }
    
    
    
    
    `