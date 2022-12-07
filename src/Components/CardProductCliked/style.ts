import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    width:640px;
    background-color:#e6e5e3;
    box-shadow:0 0 5px #aaa;
   border-radius:6px;
   background: #2f302f;

   @media screen and (max-width:600px){
        position: absolute;
        top:0;
        left:0;
        bottom: 0;
        right:0;
        width: 100vw;
        height: 100vh;
       flex-direction:column;
       align-items:center;
       overflow-x:none;
       border-radius:0;
       margin: 0;
       
   }
 
`

export const ContainerImage=styled.div`
    width:35%;
    background: #f06c0e;
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
  height: 150px;
  margin-bottom:20px;
  border-radius:0;
  img{
    margin-top:50px;
  }
   }
`

export const ContainerData=styled.div`
    display:flex.
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
        }
        .category{
            color:#c4c3c2;
        }
        padding: 20px 0;
        display: flex;
        justify-content:center;
       
    }
   
.ingredientes{
   font-size:1rem;
   color:#c4c3c2;
  word-break:break-all;
  text-align:justify;
}
    .cx-price{
        padding: 12px 0;
        color: #f06c0e;
        font-size:2rem;
    }
 }

 .data-bottom{
    font-size:14px;







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
            background: #f06c0e;
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
            background: #f06c0e;
            &:hover{
               color:  #f06c0e;
               border: 2px solid  #f06c0e;
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
   
    .price-modal{
        text-align:center;
        margin: 20px 0;
        background: #eee;
        padding: 12px 5px;
        border-radius:5px
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