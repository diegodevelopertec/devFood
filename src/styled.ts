import styled from 'styled-components'
import BgImage from '.././src/assets/imgs/bg.jpg'



export const Body=styled.div`
background-color: #eee;
display:flex;
min-height:100vh;
width: 100%;

`

export const LeftContent=styled.div`
background: #f06c0e;
width: 10%;
display: flex;
justify-content:center;
align-items:center;

`

export const RightContent=styled.div`
flex: 1;
background-image:url(${BgImage}) ;
background-size: contains ;
background-color:#eee;
opacity:0.5

`