import styled from "styled-components";
import { ThemeStyle } from "../../styled";


export const Container=styled.div`
    width: 100%;
    margin: 19px 0;

`
export const  RequestHeader=styled.div`
    background: ${ThemeStyle.bgTheme};
    color:${ThemeStyle.bgAppSystem};
    padding: 20px 12px;
    border-radius:5px;
    display:flex;
    justify-content:space-between;

`
export const  RequestBody=styled.div`
    background:#cccfc6;
    color:${ThemeStyle.colorTextCard};
    padding: 20px 12px;
    height:200px;
    overflow: auto;
    ::-webkit-scrollbar{
        width: 2px;
      }
    
    
    
    
    `