import styled from "styled-components";
import { ThemeStyle } from "../../styled";
import { theme } from "antd";

type Props={
    stateDisplay:boolean;
}
export const Container=styled.div`
    width: 100%;
    font-size:20px;
    overflow-x:hidden;
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

    margin: 60px 0 0 ;
    padding: 15px;
    color:${'#171716'};
    font-weight:700;
    background-color:${ThemeStyle.bgAppSystem};
    flex-direction:columns;
    font-size:16px;

    .category-title{
       padding-top:15px;
        display: flex;
        span{
            margin-left:10px;
            text-decoration:underline;
            color: ${ThemeStyle.bgTheme};
        }
    }

    .cx-filter-btns{
        display: flex;
        justify-content: space-between;
    }

   .cx-btn-icons{
        display: flex;
        margin: 20px 0;
    
     }
   
   

    @media screen and (max-width:950px){
        justify-content:center;
        text-align:center;
        margin-top: 160px;

        .cx-filter-btns{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
    }
        .cx-btn-icons{
            justify-content:center;
            margin: 0;
        }
        .category-title{
       
        justify-content:center;
    }
}


`


export const ShowcaseProduct=styled.div`
    display: grid;
    grid-template-columns:repeat(4,1fr);
    gap:10px;
    transition: all ease 0.2;
    padding-bottom:50px;
    padding: 30px 10px;
    margin-bottom:90px;
    background-color:${ThemeStyle.bgAppSystem};
    @media screen and (max-width:920px){
      grid-template-columns:repeat(2,1fr);
    justify-content:center;
    align-items:center;
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


export const ContainerCaseLogged=styled.div`
  display: flex;
  align-items:center;
  margin: 60px 20px;
  background: ${ThemeStyle.bgTheme};
  height:450px;
  color: #dadfe6;


  .area-text{
    display: flex;
    justify-content:center;
    flex-direction:column;
   
    .txt{
      display:flex;
     align-items:center;
      flex-direction:column;
      margin: 12px;
    }
        .cx-spans{
          display: flex;
         
         span{
            display: flex;
            justify-content:center;
             align-items:center;
             background: ${ThemeStyle.bgCardProductBottom};
             padding: 40px;
             max-width: 120px;
           
          }
        }
  }
  .area-img{
    height: 100%;
    img{
      height: 100%;
    }
  }



@media screen and (max-width:950px){

  display:none;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 100%;
  margin: 90px 0;
 
    
    .area-img{
      width: 100%;
      display: flex;
      justify-content:center;
      align-items:center;
      height: 300px;
      img{
        height: 100%;
      }
    }

    .cx-spans{
      display: flex;
      padding:  20px 22px;
      justify-content:center;
       align-items:center;
      margin: 13px;
       span{
        padding: 10px;
         padding: 20px;
        border-radius:5px;
      }
  }
}


  

`
