import styled from "styled-components";

type Props={
    image:string,
    height:string,
    width:string,
    unity:'px' | '%'
}

export const bannercontainer=styled.div<Props>`
    background-image: url(${props=>props.image ? props.image : null});
    background-repeat:none;
    background-size:cover;
    height:${props=>props.height ? `${props.height}${props.unity ==='px' ? 'px' : '%'}` : '300px'};
    width:${props=>props.width? `${props.width}${props.unity ==='px' ? 'px' : '%'}`: '300px'};
    border-radius:5px;
  
`