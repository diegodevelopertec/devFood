import styled from "styled-components";
import { ThemeStyle } from "../../styled";

export const  Container=styled.div`
    width: 100%;
     margin:70px 0;
    overflow-y:scroll;
    background:${ThemeStyle.bgAppSystem};
    padding:0px 30px;
    overflow: auto;
 
    .intro{
       padding: 30px 0;
        h3{
            margin:12px 0;
            font-size: 25px;
            text-shadow: 0 0 5px #000;
        }
    }

    .requests-container{
        display:block;
        flex:1;
    }


    .error-requests{
       color:#6d6d6e;
     margin-top:100px;
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }

    @media screen and (max-width:950px){
        margin-bottom:130px;
        width: 100vw;
        height: 100vh;
        padding:0px 10px
    }



  
`