import styled from 'styled-components'
import BgImage from '.././src/assets/imgs/bg.jpg'

export const ThemeStyle={
    //bgTheme:'#f06c0e',
     bgTheme:'#991d08',
    bgAppSystem:'#eee',
   bgCardProductBottom:'#2f302f' ,
    colorTitleCard: 'black',
    colorIngredientsCategory:' #aaa',
    colorTextCard: '',
    //bgHoverIcon:'#eb8c2d',
    bgHoverIcon:'#941c07',
    bgActiveIconMenu:'#e6b72c'

}

export const Body=styled.div`
    background-color: #eee;
    display:flex;
    height:100vh;
    width: 100vw;
    overflow:hidden;
    background-color: #dadce0;


`

export const LeftContent=styled.div`
    background: ${ThemeStyle.bgTheme};
    width: 10%;
    display: flex;
    justify-content:center;
    align-items:center;
   
    @media screen  and (max-width:950px){
     position:fixed;
     bottom:0;
     top: 90;
     left:0;
     right:0;
     width: 100%;
     box-shadow:0 0 5px #aaa;
   }
 
`

export const HeaderApp=styled.header`
    display: flex;
    justify-content:center;



`
export const CardLoja=styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color: ${ThemeStyle.bgTheme};
    width: 95%;
    height: 80px;
    margin:30px 15px;
    min-height: 100px;
    border-radius:10px;
    box-shadow: 0 0 5px #000;
.logo{
    font-size:2rem;
    color: white;
    display: flex;
    justify-content:center;
    align-items:center;
    img{
        height: 80px;
        width: 80px;
        margin-right:12px;
    }
}



@media screen and (max-width:950px){
    flex-direction:column;
    padding: 10px 0;
}

`
export const Menu=styled.div`
@media screen and (max-width:950px){
 display: flex;

 a{
    margin:15px;
 }
}
`

export const RightContent=styled.div`
    flex: 1;
    //background-image:url(${BgImage}) ;
    background-size: contains ;
    background-color:${ThemeStyle.bgAppSystem};
    overflow-y:auto;
    ::-webkit-scrollbar{
        width: 8px;
      }
    @media screen  and (max-width:950px){
     flex-direction:column;
   }
    
`
