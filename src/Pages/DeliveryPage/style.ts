import styled from "styled-components";
import { ThemeStyle } from "../../styled";

export const  Container=styled.div`
    width:100%;
    margin-bottom:70px;
    overflow:auto;
    height:max-content;
    background:${ThemeStyle.bgAppSystem};
    padding:0px 10px;
    .intro{
        margin:20px 0;
        h3{
            margin:12px 0;
        }
    }


    @media screen and (max-width:950px){
        margin-bottom:130px;
    }


`