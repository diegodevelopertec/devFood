import styled from "styled-components";
import {ThemeStyle} from './../../styled'

export const Container=styled.div`
    display: flex;
    width:700px;
    box-shadow:0 0 5px #141413;
    border-radius:6px;
    background: ${ThemeStyle.bgCardProductBottom};
 

   @media screen and (max-width:600px){
        position: absolute;
        top:0;
        left:0;
        bottom: 0;
        right:0;
        z-index:1;
        width: 100vw;
        height: 100vh;
        flex-direction:column;
        align-items:center;
        overflow:hidden;
        border-radius:0;
        margin: 0;
       
       
   }

   @media screen and (max-width:280px){
         *{
            font-size:12px; }
         .area-btn-qdt{
            margin: 10px 0;
         }
        }
 
`

export const ContainerImage=styled.div`
    width:35%;
    background: ${ThemeStyle.bgTheme};
    display: flex;
    justify-content:center;
    align-items:center;
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
    img{
        width: 180px;
        height: 180px;
       
    }
        @media screen and (max-width:600px){
            width: 100%;
            height: 170px;
            margin-bottom:35px;
            border-radius:0;
            img{
                margin-top:100px;
                margin-bottom:20px;
            }
        }
        
       
        
      
`

export const ContainerData=styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    padding: 0 5px;
   

 .data-top{
    margin: 15px 0;
    padding: 0 5px;
    
    .cx-name{
        .name{
            margin-right:5px;
            font-weight:bold;
            font-size:23px;
            text-shadow: 0 0 3px #FFF;

        }
        .category{
            color:${ThemeStyle.colorIngredientsCategory};
            font-size:13px;
           
        }
        padding: 10px 0;
        display: flex;
        justify-content:center;
       
    }
   
.ingredientes{
    font-style:italic;
   font-size:13px;
   color:${ThemeStyle.colorIngredientsCategory};
   word-break:break-all;
   text-align:justify;
}
    .cx-price{
        padding: 12px 0;
        color: ${ThemeStyle.bgTheme};
        font-size:2rem;
      
    }
 }

 .data-bottom{
    font-size:14px;
    p{
            color: ${ThemeStyle.colorIngredientsCategory};
            font-size:15px;
    }
    .qdt-modal{
        color: ${ThemeStyle.bgTheme};
    }

    .container-btn-add{
        display: flex;
        justify-content:center;
        margin:15px 0;
        font-size:2em;
        div{
            height: 50px;
            width: 50px;
            display: flex;
            justify-content:center;
            align-items:center;
            background: white;
            font-size:14px;
        }
        button{
            height: 50px;
            width: 50px;
            background: ${ThemeStyle.bgTheme};
            color: white;
            border:0;
            font-size:14px;
            &:hover{
                cursor: pointer;
            }
        }
        .btn-minus{
            border-top-left-radius:5px;
            border-bottom-left-radius:5px;
        }
        .btn-add{
            border-top-right-radius:5px;
            border-bottom-right-radius:5px;
        }
    }

    .cx-buttons{
        margin: 20px 0;
      display: flex;
      justify-content:center;
      align-items:center;
   
       
        button{
            padding: 17px 5px;
            display: flex;
            justify-content:center;
            align-items:center;
            border: 2px solid transparent;
            color: #e6e5e3;
            border-radius:6px;
            font-size:13px;
            &:hover{
                cursor:pointer;
            }
        }
        .btn-save{
            height: 50px;
            background: ${ThemeStyle.bgTheme};
            &:hover{
               color: ${ThemeStyle.bgTheme};
               border: 2px solid  ${ThemeStyle.bgTheme};
               background: transparent;
            }
        }
        .btn-cancel{
           margin-right:20px;
            height: 20px;
            width: 120px;
            background: #d66956;
            &:hover{
               color:#cc4f39;
               border: 2px solid  #cc4f39;
               background: transparent;
            }
        }
    }


 }

  

@media screen and (max-width:600px){
    padding: 10px;
   .cx-qdt{
        align-items:center;
        text-align:center;
      
   }
    .cx-price{
        display: family;
        justify-content:center;
        
    }
    .price-modal{
        text-align:center;
        margin: 20px 0;
        background: #eee;
        padding: 12px 5px;
        border-radius:5px;
        width:70vw;
        
    }
    
}

@media screen and (max-width:300px){
    padding: 12px;
    p{
        text-align:center;
      font-size:12px;
    }

   }



`