import styled from "styled-components";



export const Container=styled.div`
  
    background-color: #e3e8e4;
    box-shadow: 0 0 7px #aaa;
    margin:12px 5px;
    border-radius:5px;
    width: 320px;
`

export const  ContainerImage=styled.div`
    background: #f06c0e;
    width: 100%;
    height: 100px;
    display: flex;
    padding: 12px 0;
    justify-content:center;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    img{
        width:90px;
        height:90px;
        margin-top:30px;
    }


`

export const DataProduct=styled.div`

    display:flex;
    padding: 18px 10px;
    margin-top:12px;
        .info-product{
            margin: 15px 0;
            
            .category-name:{
                opacity:0.5;
                    color: #aaa;
                    padding: 5px 0;
                }
                h3{
                    font-size:1rem;
                    color: black;
                }
                p{
                    color: #aaa;
                    margin: 10px 0;
                    font-size:1rem;
                }
                .price{
                    color: #f06c0e;
                    font-family:Arial;
                }
        }

    .cx-btn-product{
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 15px 5px;
      
        button{
            padding: 12px 20px;
            background: #f06c0e;
            color: white;
            border: 2px solid #e3e8e4;
            border-radius:5px;
            &:hover{
                cursor:pointer;
                background:transparent;
                color: #f06c0e;
                border: 2px solid  #f06c0e;
            }
        }
    }
`