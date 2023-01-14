import styled from "styled-components";
import { ThemeStyle } from "../../styled";

export const  Container=styled.div`
    width: 100%;
    margin-bottom:70px;
    overflow:auto;
    min-height:100vh;
    background:${ThemeStyle.bgAppSystem};
    padding:0px 10px;
    overflow: auto;
 
    .intro{
        margin:20px 0;
        h3{
            margin:12px 0;
        }
    }

    .requests-container{
        display:block;
    }


    .error-requests{
       opacity:0.7;
       color:#6d6d6e;
        flex:  1;
        height:80vh;
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }

    @media screen and (max-width:950px){
        margin-bottom:130px;
        width: 100vw;
    }



  
`