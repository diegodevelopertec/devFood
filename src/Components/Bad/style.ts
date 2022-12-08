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
    transition:ease all 0.2s;
    @media screen and (max-width:920px){
   
         position:${props=>props.displayBad === true ? 'absolute' : 'fixed'};
         height:${props=>props.displayBad === true ? '100vh' : '60px'};
         display:${props=>props.displayBad === true ? 'block' : 'flex'};
         justify-content:center;
         align-items:center;
         width:${props=>props.displayBad === true ? '100vw' : '60px'};
         margin:${props=>props.displayBad === true ? '0' : '0px'};
         margin-bottom:${props=>props.displayBad === true ? '0' : '130px'};
         top:${props=>props.displayBad === true ? '0' : '76vh'};
         bottom:${props=>props.displayBad === true ? '0' : '150px'};
         right:${props=>props.displayBad === true ? '0' : '8px'};
         border-radius:${props=>props.displayBad === true ? 'noneh' : '60px'};

         
        
      
    }
`

export const BadHeader=styled.div<Props>`
  display: flex;
  justify-content:space-between;
  align-items:center;
  font-size:14px;
  padding: 10px 0;
  .header--text{
      display: flex;
      justify-content:center;
      align-items:center;
  }
  .close--bad{
      display:${props=>props.displayBad === false ? 'flex' : 'flex'};
  }
  img{
      height: 20px;
      width:20px;
      margin-right:5px;
  }

    @media screen and (max-width:920px){
      .header--text span{
        display: ${props=>props.displayBad === true ? 'flex' : 'none'};
      }
      .open-icon{
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
