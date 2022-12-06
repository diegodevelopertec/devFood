import styled from "styled-components";

export const Container=styled.div`
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
  position: absolute;
  border-radius:100%;
  right: 3px;
  top: 70vh;
  bottom:auto;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content:center;
  align-items:center;
bottom:20px;
}
`

export const BadHeader=styled.div`
display: flex;
justify-content:space-between;
align-items:center;
font-size:14px;
.header--text{
    display: flex;
    justify-content:center;
    align-items:center;
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
export const BadBody=styled.div`
display:none;
`
export const NotificationBad=styled.div`
    position: absolute;
    right:2px;
    background:red;
    color:white;
    height: 20px;
    border-radius:100%;
    width: 20px;
    font-size:12px;
    display: flex;
    justify-content:center;
    align-items:center;
    @media screen and (max-width:920px){
        top:1px;
    }
`