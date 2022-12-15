import styled from "styled-components";


type Props={
    image:string,
    height:string,
    width:string,
    
}

export const bannercontainer=styled.div`
      margin:24px;
      width: 100%;
      height: 200px;
      width: 320px;
      display:flex;
      flex-direction:column;
     justify-content:center;
`
  /*background-image: url(${props=>props.image ? `${props.image}`: null});
    background-repeat:none;
    background-size:cover;
    height:${props=>props.height ? `${props.height}px` : '300px'};
    width:${props=>props.width ? `${props.width}px` : '300px'};
    border-radius:5px;
  


  @media screen and (max-width:920px){
   width:100%;
   height:100%;
  }
  */