import styled from "styled-components";
import { ThemeStyle } from "../../styled";

export const Container=styled.div`
    width:680px;
    background-color:${ThemeStyle.bgAppSystem};
    padding:30px 20px;
    box-shadow:0 0 10px #aaa;
    border-radius:15px;

    .header-container{
        button{
            color: ${ThemeStyle.bgTheme};
            padding: 7px 20px;
            border-radius:5px;
            border: none;
            background: ${ThemeStyle.colorTitleCard};
            &:hover{
                background: ${ThemeStyle.bgTheme};
                color: ${ThemeStyle.bgAppSystem};
                border: none;
                cursor: pointer;
            }
        }
    }

.text{
   .cx-login{
    display: flex;
    justify-content:space-around;
    align-items:center;
   .cx-logo{
        margin:20px 0;
        display: flex;
        justify-content:space-around;
        align-items:center;
        h2{
            color:  ${ThemeStyle.bgHoverIcon};
            font-size:14px;
            margin-left:10px;
        }

        img{
            background: ${ThemeStyle.bgHoverIcon};
            height: 80px;
            width: 80px;
            padding: 10px;
            border-radius:100%;
        }
   }
        h3{
            margin: 15px 0;
            color: ${ThemeStyle.bgTheme};
        }
   }
    p{
        font-size:15px;
        margin: 0 0 20px 0;
    }
}
    .form{
        width: 100%;
        .erros-form{
            color: #7a3b41;
            font-size:13px;
        }
        input{
            width: 100%;
            color: ${ThemeStyle.bgTheme};
            font-size: 16px;
            padding: 15px;
            margin:10px 0;
            border-radius:5px;
            border:none;
            &:focus{
                outline:2px solid ${ThemeStyle.bgTheme};
            }
        }
        input[type='submit']{
            background: ${ThemeStyle.bgTheme};
            color: ${ThemeStyle.bgAppSystem};

    }



    .create-account{
        font-size:15px;
        margin: 25px ;
        a{
            text-decoration:none;
            &:hover{
                cursor:pointer;
                text-decoration:underline;
            }
        }
    }
}


@media screen and (max-width:600px){
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right: 0;
    height:100%;
    display:flex;
    flex-direction:column;
    border-radius:0;
    align-items:center;
    justify-content:center;
    *{
        text-align:center;
    }

    .header-container{
        button{
            position:absolute;
            left:5px;
            top:25px;
            background: ${ThemeStyle.bgTheme};
            color: ${ThemeStyle.bgAppSystem};
        }
    }
    .cx-logo{
        h2{
            margin-right:10px;
        }
    }
    .cx-login{
        display: flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        margin:20px 0;
    
        img{
           order:1;
           height:290px;
           width: 290px;
        }
        h3{
            order:2;
        }
        
        
}



`