import styled from "styled-components"
import { ThemeStyle } from "../../styled"



export const Container=styled.div`
  
    background-color:${ThemeStyle.bgAppSystem};
    width: 100%;
`

export const Containercardápio=styled.div`
display: flex;
align-items:center;
flex-direction:column;

.check{
        input{
            margin: 20px;
            margin-right:5px;
        }
    }

    .cx-img{
        display:flex;
        justify-content:center;
        padding:20px 0;
        margin:30px 0;
        img{
        border-radius:5px;
        background: #475fa1;
    }
}

.area-cardapio{
    display: flex;
    width: 100%;
    padding: 25px 5px;
    border: 2px solid  ${ThemeStyle.bgTheme};
    margin: 12px 0;
    border-radius:15px;

    .left-top{
        width:30%;
        list-style:inside;
        padding: 20px;

    }
    .right-bottom{
        display: flex;
        justify-content:center;
        align-items:center;
        flex:1;
        max-width: 620px;
        margin-left:130px;
        padding: 20px 0;
       
        textarea{
            resize:none;
            border: none;
            border-radius:5px;
            width:320px;
            height: 230px;
            padding: 12px ;
            &:focus{
                outline:2px solid ${ThemeStyle.bgTheme};
            }
        }

        button{
            margin: 0 20px ;
            height: 55px;
            width: 110px;
            border-radius:12px;
            background: ${ThemeStyle.bgTheme};
            color:${ThemeStyle.bgAppSystem};
            border: none;
            &:hover{
                cursor:pointer;
            }
        }
    }
}



@media screen and (max-width:920px){
    width: 100%;
    padding: 12px;
    .check{
     justify-content:center;
     font-size:13px;
    }
        .cx-img{
            display:flex;
            justify-content:center;
            padding:20px 0;
            margin:30px 0;
            img{
                width: 90vw;
                height: auto;
            }
            

    }


    .area-cardapio{
        display: flex;
        width: 100%;
        align-items:center;
        flex-direction:column;
        .left-top{
             width: auto;
        }
        .right-bottom{
            
            width: auto;
            margin:30px 0;
            flex-direction:column;
            textarea{
                resize:none;
                min-width:50vw;
                max-width:80vw;
                height: 230px;
                margin: 25px 0;
                
            }
        }
    }
}
`

