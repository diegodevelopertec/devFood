import styled from "styled-components";
import { ThemeStyle } from "../../styled";

type Props={
    stateMenu:boolean;
}

export const Box=styled.header`
display: none;

@media screen and (max-width:950px) {
    display: flex;
    padding: 12px;
    position: absolute;
    right: 0;
    height: 70px;
    width: 100%;
    background-color: ${ThemeStyle.bgTheme};
    justify-content: space-between;
    align-items: center;
}
`

export const BoxLeft=styled.div`

h3{
    font-family: Roboto;
    color: #FFF;
    font-weight: 700;
}
`


export const BoxRight=styled.div<Props>`

button{
    display: ${Props=>Props.stateMenu ? 'hidden' : 'flex'};
    height: 35px;
    width: 35px;
    border: none;
    border-radius:3px;
    img{
        height: 100%;
        width: 100%;
    }
}


.menu-nav{
    display: ${Props=>Props.stateMenu ? 'flex' : 'hidden'};
    background-color: ${ThemeStyle.bgCardProductBottom};
    width: ${Props=>Props.stateMenu ? '60vw' : '0'};
    position: fixed;
    flex-direction: column;
    justify-content: center;
    right: 0;
    height: 100%;
    bottom: 0;
    top: 0;
    transition:all ease .5s;

    .cx-btn{
            display: flex;
            justify-content: flex-end;
            position: absolute;
            width: 100%;
            padding: 12px;
             top: 0;
        button{
             border: none;
             background-color: transparent;
             height: 25px;
             width: 25px;
             img{
                height: 100%;
                width:100%;
             }
        }
    }
    nav {
        display: ${Props=>Props.stateMenu ? 'flex' : 'none'};
        width: 100%;
        flex-direction: column;
        justify-content: center;
        a{
            margin-top: 20px;
            font-size: 18px;
            text-align: center;
            width: 100%;
            text-decoration: none;
            color: #eee;
        }
    }
}


`