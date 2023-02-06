import styled from "styled-components";
import { ThemeStyle } from "../../styled";



export const Container=styled.div`
    width:100%;
    padding:20px;
   @media screen and (max-width:950px){
       margin-bottom:100px;
      
   }
    
`

export const dataUser=styled.div`

form{
    display: flex;
    flex-direction:column;
        h3{
            color:  ${ThemeStyle.bgTheme};
            margin:20px 0;
           
        }
        .data-address{
                display:grid;
                gap:10px;
                grid-template-columns:repeat(2,5fr);
                .cx-input{
                    input{
                        width: 100%;
                       
                    }
                }
                @media screen and (max-width:950px){
                    display: flex;
                    flex-direction:column;
                   
                  
                   
               }
      }
                
        }
        .cx-input{
            display: flex;
            flex-direction:column;
            justify-content:center;
                .error-msg{
                        color: #bd411e;
                        font-size:12px;
                }
                input{
                  
                    padding: 15px ;
                    margin:10px 0;
                    border-radius:5px;
                    border: none;
                    &:focus{
                        outline:2px solid ${ThemeStyle.bgTheme};
                    }
                }
        }
        .cx-button{
            margin: 70px 0;
            display: flex;
            justify-content:center;
            align-items:center;

            button,input[type='submit']{
                width: 30%;
                padding: 15px 0;
                margin: 10px;
                border-radius:12px;
                background:#1f7d3d;
                color: #eee;
                border: none;
                display: flex;
                justify-content:center;
                align-items:center;

                &:hover{
                    cursor:pointer;
                    background:#11632b;
                }
            }
            @media screen and (max-width:950px){
          
                button,input{
                    width:70%
                }
            }
        }
       



`
