import styled from "styled-components";
import { ThemeStyle } from "../../styled";

type Props={
    openBody:boolean
}

export const Container=styled.div`
    width: 100%;
    min-height: 100%;
    margin: 19px 0;

`
export const  RequestHeader=styled.div`
    background: #aaa;
    border-radius:5px; 
    color:${ThemeStyle.bgTheme};
    padding: 20px 12px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .info{
        display: flex;
        justify-content:space-between;
        width: 50%;
    }
    button{
        text-transform:uppercase;
        padding: 12px ;
        font-size:13px;
        border-radius:5px;
        margin:0 5px;
        border: none;
        width: 100px;
        &:hover{
            background-color:${ThemeStyle.bgTheme};
             cursor: pointer;
             color: white;
        }
    }


@media screen and (max-width:700px){
    display: flex;
    flex-direction:column;
    .info{
        margin: 16px 0;
        flex-direction:column;
        align-items:center;
    }
}
`
export const  RequestBody=styled.div<Props>`
    background:#cccfc6;
    color:${ThemeStyle.colorTextCard};
    padding: 20px 12px;
    height:auto;
    grid-template-columns:repeat(3,1fr);
    gap:10px;
    transition:all ease 0.5s;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    display: ${props=>props.openBody === false ? 'none' : 'grid'};
    overflow: auto;
    

    @media screen and (max-width:700px){
        display: ${props=>props.openBody === false ? 'none' : 'flex'};
        flex-direction:column;
        width: 100%;

    }

 `

export const AreaProduct=styled.div`
   .cx-products{
       height: 200px;
       overflow: auto;
        ::-webkit-scrollbar{
            width: 2px;
        }
     }
`

export const AreaAdress=styled.div`
    display: flex;
    flex-direction:column;
    h4{  margin-bottom:20px; }
    
`
export const AreaDetails=styled.div`
    .linha{
        display: flex;
        justify-content:space-between;
        padding: 12px ;
    }
`