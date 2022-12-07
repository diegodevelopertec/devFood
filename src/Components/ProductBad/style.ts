import styled from "styled-components";

export const Container=styled.div`
display: flex;
justify-content:space-between;
padding:10px 5px;
font-size:13px;
width: 100%;
border: 1px solid orange;
    .area--image{
        margin-right:10px;
        img{
            width: 100%;
        }
    }
    .area-left{
    display: flex;
      img{
        height:30px;
        width:30px;

      }
      .area-text{
        display: flex;
        flex-direction:column;
        align-content:center;
            .name{
                font-weight:bold;
            }
      }
  }

  .area-right{
    .counter{
        display: flex;
        button{
            padding: 10px;
            border: none;
            display:flex;
            justify-content:center;
        }
        .btn-minus{
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;

        }
        .btn-add{
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        .cx-qdt{
            display:flex;
            justify-content:center;
            align-items:center;
            border: none;
            padding:10px;
            background: white;
            color: orange;
        }
    }
  }


`