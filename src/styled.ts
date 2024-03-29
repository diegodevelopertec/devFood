import styled from 'styled-components'
import BgImage from '.././src/assets/imgs/bg.jpg'

export const ThemeStyle={
    bgTheme:'orange',
     bgAppSystem:'#FFFF',
    bgCardProductBottom:'#2f302f' ,
    colorTitleCard: 'black',
    colorIngredientsCategory:' #aaa',
    colorTextCard: '#171716',
    bgHoverIcon:'#e3b944',
    bgActiveIconMenu:'#bf7813'

}

export const Body=styled.div`
    display:flex;
    height:100vh;
    overflow:hidden;
    background-color:${ThemeStyle.bgAppSystem};
  

`

export const LeftContent=styled.div`
    background: ${ThemeStyle.bgTheme};
    width: 10%;
    display: flex;
    justify-content:center;
    align-items:center;
    @media screen  and (max-width:950px){
     position:fixed;
     display: none;
     z-index:1;
     bottom:0;
     top: 90;
     left:0;
     right:0;
     width: 100%;
     box-shadow:0 0 5px #aaa;
     padding: 7px 0;
   
     
   }
 
`

export const HeaderApp=styled.header`
    display: flex;
    justify-content:center;
    width: 100%;


`
export const CardLoja=styled.div`
    display:flex;
    justify-content:start;
    width: 100%;
    height: 80px;
    margin:30px 15px;
    min-height: 100px;
    border-radius:10px;
    color: ${ThemeStyle.bgTheme};
        .logo{
            font-size:25px;
            display: flex;
            justify-content: start;
            align-items: center;
            img{
                height: 80px;
                width: 80px;
                margin-right:12px;
            }
        }



    @media screen and (max-width:950px){
        flex-direction:column;
        padding: 10px 0;
        display: none;
       
      
    }

`
export const Menu=styled.div`
  box-shadow: 0 0 35px #343634;
  padding: 100px 12px;
  border-radius:12px;
    @media screen and (max-width:950px){
        display: flex;
        padding: 0;
        box-shadow: none;
        border-radius:0;
            a{
                margin:15px;
                font-size:11px;
            }
    }
`

export const RightContent=styled.div`
    flex: 1;
    background-color:${ThemeStyle.bgAppSystem};
    overflow-y:auto;
    ::-webkit-scrollbar{
        width: 8px;
      }
    @media screen  and (max-width:950px){
     flex-direction:column;
     width: 100%;
   }
    
`
