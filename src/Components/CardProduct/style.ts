import styled from "styled-components";
import {ThemeStyle} from './../../styled'


export const Container=styled.div`
  
    box-shadow: 0 0 7px #aaa;
    margin:12px 5px;
    border-radius:5px;
    background: ${ThemeStyle.bgCardProductBottom};
  
    @media screen and (max-width:600px){
      font-size:10px;
     
    }
   
`

export const  ContainerImage=styled.div`
    background: ${ThemeStyle.bgTheme};
    height: 100px;
    display: flex;
    padding: 12px 0;
    justify-content:center;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    width:100%;
  
    img{
        max-width:120px;
        height:120px;
        margin-top:20px;
        @media screen and (max-width:600px){
        width: 70px;
        height: 70px;
        }
    }

    @media screen and (max-width:600px){
      height: 70px;
     
    }


`

export const DataProduct=styled.div`

    display:flex;
    padding: 18px 10px;
    margin-top:12px;
    flex-direction:column;

        .info-product{
            margin: 15px 0;
            
            .category--name:{
                    color: ${ThemeStyle.colorIngredientsCategory};
                    padding: 5px 0;
                    font-size:12px;
                    text-transform: capitalize;
                }
                h4{
                    font-size:1rem;
                    color: ${ThemeStyle.colorTitleCard};
                   
                }
                p{
                    color: ${ThemeStyle.colorIngredientsCategory};
                    margin: 10px 0;
                    font-size:1rem;
                }
                .price{
                    color: ${ThemeStyle.bgTheme};
                    font-family:Arial;
                    font-weight:bold;
                    width: 100px;
                }
                .ingredientes-text{
                    word-break:break-all;
                    font-size:13px;
                    height: 20px;
                    color: ${ThemeStyle.colorIngredientsCategory};
                }

                @media screen and (max-width:600px){
                        font-size:1rem;
                        flex-wrap:wrap;
                        .ingredientes-text{
                            display:none;
                        }
                    
                }
                
                @media screen and (max-width:280px){
                      height: 80px;
                    
                }
    }

    .cx-btn-product{
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 15px 5px;
        width: 100%;
        margin: 13px 0;
      
        button{
            font-family:Arial;
            font-weight:bold;
            text-transform:uppercase;
            padding: 12px 20px;
            background:  ${ThemeStyle.bgTheme};
            color: white;
            border: 2px solid  ${ThemeStyle.bgAppSystem};
            border-radius:5px;
            &:hover{
                cursor:pointer;
                background:transparent;
                color:  ${ThemeStyle.bgTheme};
                border: 2px solid ${ThemeStyle.bgTheme};
            }
         }
         @media screen and (max-width:600px){
              padding:0;
         }
    }

    @media screen and (max-width:600px){
      padding: 0 5px;
      width: 100%;
    }
`