import styled from "styled-components";
import { ThemeStyle } from "../../styled";


export const Container=styled.div`
display: flex;
justify-content:space-between;
padding:10px 5px;
font-size:15px;
margin: 5px 0px;
border: 2px solid ${ThemeStyle.bgTheme};
border-radius:5px;
    .area--image{
        margin-right:10px;
    }
    .area-left{
    display: flex;
    font-weight: 700;
      img{
        height:30px;
        width:30px;
      }
      .price{
        color: ${ThemeStyle.bgTheme};
        font-weight: 700;
      }
      .area-text{
        display: flex;
        flex-direction:column;
        align-content:center;
        .name{
          margin-right: 10px;
        }
      }

      @media screen and (max-width:950px){
         img{
              width:25px;
              height: 25px;
        }
      }
  }

  .area-right{
    .counter{
        display: flex;
        
        button{
            padding: 14px;
            border: none;
            display:flex;
            justify-content:center;
            width: 30px;
            cursor:pointer;
            
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