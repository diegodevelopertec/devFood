import styled from "styled-components";



export const Container=styled.div`
  
    background-color: #e3e8e4;
    box-shadow: 0 0 7px #aaa;
    margin:12px 5px;
    border-radius:5px;
   
    @media screen and (max-width:600px){
    
        margin: 5px;
      
       
        
    }
   
`

export const  ContainerImage=styled.div`
    background: #f06c0e;
    height: 100px;
    display: flex;
    padding: 12px 0;
    justify-content:center;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    
    width:100%;
    img{
        max-width:120px;
        height:120px;
        margin-top:20px;
        @media screen and (max-width:600px){
        width: 60px;
        height: 60px;
    }
    }


`

export const DataProduct=styled.div`

    display:flex;
    padding: 18px 10px;
    margin-top:12px;
    flex-direction:column;
  
        .info-product{
            margin: 15px 0;
            
            .category--name:{
                    color: #aaa;
                    padding: 5px 0;
                    text-transform: capitalize;
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
                    font-weight:bold;
                }


                @media screen and (max-width:600px){
                        font-size:1rem;
                        flex-wrap:wrap;
                        .ingredientes-text{
                            display:none;
                        }

        }
    }

    .cx-btn-product{
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 15px 5px;
        width: 100%;
        margin: 13px 0;
      
        button{
            font-family:Arial;
            font-weight:bold;
            text-transform:uppercase;
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
         @media screen and (max-width:600px){
              padding:0;
         }
    }

    @media screen and (max-width:600px){
      padding: 0 5px;
      width: 100%;
    }
`