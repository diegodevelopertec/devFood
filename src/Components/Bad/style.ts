import styled from "styled-components";
import {ThemeStyle} from './../../styled'
import { Context } from "../../Context/Context"
import { useContext } from "react";

type Props={
  displayBad:boolean,
 
}
export const Container=styled.div<Props>`
   
    background-color: ${ThemeStyle.bgCardProductBottom};
    position: absolute;
    color:white;
    opacity:1;
    z-index:1;
    bottom: 0;
    right:25px;
    width: 390px;
    padding:10px;
    box-shadow: 0 0 5px #aaa;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    margin-top:12px;
    transition:all ease  2;
    @media screen and (max-width:912px){
   
         position:${props=>props.displayBad === true ? 'absolute' : 'fixed'};
         height:${props=>props.displayBad === true ? '100vh' : '60px'};
         display:${props=>props.displayBad === true ? 'block' : 'flex'};
         justify-content:center;
         align-items:center;
         width:${props=>props.displayBad === true ? '100vw' : '60px'};
         margin:${props=>props.displayBad === true ? '0' : '0'};
         margin-bottom:${props=>props.displayBad === true ? '0' : '30vh'};
         top:${props=>props.displayBad === true ? '0' : '76vh'};
         bottom:${props=>props.displayBad === true ? '0' : '150px'};
         right:${props=>props.displayBad === true ? '0' : '8px'};
         border-radius:${props=>props.displayBad === true ? '0' : '60px'};
         overflow:hidden;
         
        
      
    }
`

export const BadHeader=styled.div<Props>`
  display: flex;
  justify-content:space-between;
  align-items:center;
  font-size:14px;
  padding: 10px 0;
  .header--text{
      display: flex;
      justify-content:center;
      align-items:center;

      .qdt-sacola{
        color: ${ThemeStyle.bgTheme};
        font-weight:bold;
      }
  }
  .close--bad{
      display:${props=>props.displayBad === false ? 'flex' : 'flex'};
      cursor: pointer;
  }
  img{
      height: 20px;
      width:20px;
      margin-right:5px;
  }

    @media screen and (max-width:920px){
      .header--text span{
        display: ${props=>props.displayBad === true ? 'flex' : 'none'};
      }
      .open-icon{
        display: none;
        
      }
    }
`
export const BadBody=styled.div<Props>`
  display:${props=>props.displayBad ? 'flex' : 'none'};
  background-color: ${ThemeStyle.bgCardProductBottom};
  flex-direction:column;
  margin: 20px 0;
  transition: all ease 0.3s;
  max-height:500px;
  .error-bad{
    height: 100%;
    display: flex;
    justify-content:center;
    flex-direction:column;
    height: 300px;
    align-items:center;
    font-size:13px;
    opacity:0.5;
    img{
      margin: 30px 0;
      
    }
        
  }
    .area-listproduct{
      height: 290px;
      box-shadow: 0 0 1px #eee;
      padding: 10px 9px;
      overflow-y:auto;
      margin-bottom:12px;
      ::-webkit-scrollbar{
        border-radius:3px;
        margin: 5px;
        width: 2px;
        background: ${ThemeStyle.bgTheme};
      }
    
    }
    .area-address{
      font-size:13px;
      background-color: ${ThemeStyle.bgAppSystem};
      em{
        display: block;
      }
      height: 80px;
      border-radius:2px;
      padding: 10px 5px;
      border: 0;
    
    }
  .area-final-cupom{
        flex:1;
        display: flex;
        flex-direction:column;
        padding: 12px 20px;
        input{
          border: 0;
          outline:0;
        }
          input,button{
            padding: 12px;
            border-radius:5px;
          }
              button{
                margin: 12px 0;
                background: ${ThemeStyle.bgTheme};
                border: none;
                color: ${ThemeStyle.bgAppSystem};
                font-size:14px;
                text-transform:uppercase;
                  &:hover{
                    cursor:pointer;
                    background: green;
                    
                  }
              }
              .data-item{
                  font-size:13px;
                  margin: 5px 0;
                  display: flex;
                  justify-content:space-between;
                }
  }
 

  
 //375,360,540,
 @media screen and (max-width:920px){
  .area-listproduct{
      height:80vh;
      padding: 30px 5px;
     }

     height:100vh;
     overflow: none;
     
    .error-bad{
      
      display: flex;
      justify-content:center;
      align-items:center;
      font-size:19px;
      height:100%;
  }
    
 }


`
export const NotificationBad=styled.div<Props>`
    position: absolute;
    right:2px;
    background:red;
    color:white;
    height: 20px;
    border-radius:100%;
    width: 20px;
    font-size:12px;
    display:${props=>props.displayBad ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    @media screen and (max-width:920px){
        top:1px;
    }
`
