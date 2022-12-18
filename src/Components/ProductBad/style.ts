import styled from "styled-components";
import { ThemeStyle } from "../../styled";


export const Container=styled.div`
display: flex;
justify-content:space-between;
padding:10px 5px;
font-size:13px;
width: 100%;
border: 1px solid ${ThemeStyle.bgTheme};
border-radius:5px;
    .area--image{
        margin-right:10px;
        img{
            width: 100%;
        }
    }
    .area-left{
    display: flex;
      img{
        height:30px;
        width:30px;
      }
      .price{
        color: ${ThemeStyle.bgTheme};
      }
      .area-text{
        display: flex;
        flex-direction:column;
        align-content:center;
            .name{
                font-weight:bold;
            }
      }

      @media screen and (max-width:950px){
        img{
            height: 60px;
            width:60px;
        }
      }
  }

  .area-right{
    .counter{
        display: flex;
        
        button{
            padding: 10px;
            border: none;
            display:flex;
            justify-content:center;
            width: 30px;
        }
        .btn-minus{
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;

        }
        .btn-add{
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        .cx-qdt{
            display:flex;
            justify-content:center;
            align-items:center;
            border: none;
            padding:10px;
            background: white;
            color: ${ThemeStyle.bgTheme};
            width: 30px;
        }
    }

  
  }

  @media screen and (max-width:950px){
    align-items:center;
    *{
      button{
        width: 60px;
        height: 50px;
        display: flex;
        justify-content:center;
        align-items:center;
      }
    }
   
  }

 


`