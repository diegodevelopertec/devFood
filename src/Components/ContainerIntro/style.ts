import styled from "styled-components";
import { ThemeStyle } from "../../styled";



export const  Container=styled.div`
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