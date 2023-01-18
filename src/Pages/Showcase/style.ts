import styled from "styled-components";
import { ThemeStyle } from "../../styled";

type Props={
    stateDisplay:boolean;
}
export const Container=styled.div`
    width: 100%;
    font-size:20px;
    overflow-x:hidden;
  
  .cx-logado{
    padding: 12px 30px;
    color: #8e9294;
  }
  
  @media screen and   (max-width:950px){
     padding-bottom:50px;
   }
`


export const ContainerBanner=styled.div`
    display:flex;
    justify-content:center;
  
  @media screen and (max-width:950px){
    width: 100vw;
  }
`
export const CategorySectionProducts=styled.div`
    margin: 20px 0 0 ;
    color:${ThemeStyle.colorTitleCard};
    font-weight:bold;
    background-color:${ThemeStyle.bgAppSystem};
    flex-direction:columns;
    font-size:15px;


    .category-title{
       padding-top:15px;
        display: flex;
        span{
            margin-left:10px;
            text-decoration:underline;
            color: ${ThemeStyle.colorTitleCard};
        }
    }
   .cx-btn-icons{
        display: flex;
        margin: 20px 0 0px 80px;
       
    }
    padding: 20px 10px;

    @media screen and (max-width:950px){
        justify-content:center;
        text-align:center;
        .cx-btn-icons{
            justify-content:center;
            margin: 0;
        }
        .category-title{
       
        justify-content:center;
    }
}


`


export const ShowcaseProduct=styled.div<Props>`
    display: ${props=>props.stateDisplay === false ? 'grid' : 'block'};
    grid-template-columns:repeat(4,1fr);
    gap:10px;
    transition: all ease 0.2;
    padding-bottom:50px;
    padding: 30px 10px;
    margin-bottom:90px;
    background-color:${ThemeStyle.bgAppSystem};
    @media screen and (max-width:920px){
      grid-template-columns:repeat(2,1fr);
      padding-bottom:50px;
    }
`

export const ContainerModal=styled.div`
    left:0;
    right: 0;
    bottom: 0;
    top: 0;
    position: absolute;
    background: rgba(179, 179, 179, 0.45);
    display: flex;
    justify-content:center;
    align-items:center;
    transition:all ease 0.8s;
 

`

