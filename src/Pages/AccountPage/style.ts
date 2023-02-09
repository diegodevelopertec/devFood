import styled from "styled-components";
import { ThemeStyle } from "../../styled";

type Props={
    active:boolean
}

export const Container=styled.div`
    width:100%;
    padding:20px;
   @media screen and (max-width:950px){
       margin-bottom:100px;
      
   }
    
`

export const Form=styled.div<Props>`
  form{
    margin: 100px 0;
            h3{
                    color:  ${ThemeStyle.bgTheme};
                    margin:20px 0;
            }
            .data-address{
                display:grid;
                gap:10px;
                grid-template-columns:repeat(2,5fr);
                    .cx-input{
                        input{ width: 100%; }
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
                        color: #d43d1c;
                        font-size:12px;
                }
                input{
                  
                    font-size: 15px;
                    background-color: ${props=>props.active === false ? '#ede9e8' : 'transparent'};
                    color: ${props=>props.active === false ? '#000' : ThemeStyle.colorIngredientsCategory};
                    padding: 15px ;
                    margin:5px 0;
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
