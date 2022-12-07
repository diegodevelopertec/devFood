
import { redirect } from "react-router-dom";
import styled from "styled-components";

type Props={
  displayBad:boolean,
 
}
export const Container=styled.div<Props>`
 background: #f06c0e;
 //background:#c98e0e;
background: #2f302f;
position: absolute;
color:white;
bottom: 0;
right:10px;
width: 360px;
padding:10px;
box-shadow: 0 0 5px #aaa;
border-top-left-radius:5px;
margin-top:12px;

    @media screen and (max-width:920px){
   
         position:absolute;
         height:60px;
         display:block;
         justify-content:center;
         align-items:center;
         width:60px;
         height:60px
         margin:0;
         top:80vh;
         bottom:10px;
         right:5px;
         border-radius:100%;
         
         
        
      
    }
`

export const BadHeader=styled.div<Props>`
display: flex;
justify-content:space-between;
align-items:center;
font-size:14px;
  .header--text{
      display: flex;
      justify-content:center;
      align-items:center;
  }
.close--bad{
    display:${props=>props.displayBad === false ? 'none' : 'flex'};
}
img{
    height: 30px;
    width:30px;
    margin-right:5px;
}

@media screen and (max-width:920px){
 .header--text span{
  display: none;
 }
}
`
export const BadBody=styled.div<Props>`
  display:${props=>props.displayBad ? 'flex' : 'none'};
  flex-direction:column;
  margin: 20px 0;
  height:300px;

  @media screen and (max-width:950px){
    display:none;
  }
`
export const NotificationBad=styled.div<Props>`
    position: absolute;
    right:2px;
    background:red;
    color:white;
    height: 20px;
    border-radius:100%;
    width: 20px;
    font-size:12px;
    display:${props=>props.displayBad ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    @media screen and (max-width:920px){
        top:1px;
    }
`
