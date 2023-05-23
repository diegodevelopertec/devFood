import styled from "styled-components";
import { ThemeStyle } from "../../styled";

type Props={
    state:boolean;
}

type PropsForm={
    display:boolean;
}

export const Box=styled.div`
width: auto;
margin: 35px 0;

.new-pay{
    font-size: 18px;
    margin: 35px 0;
    color: #424242;
    
    hr{
        margin: 12px 0;
    }
    button{
        margin-left: 6px;
        height: 45px;
        width: 45px;
        background-color: #777378;
        color: #FFF;
        border-radius: 100%;
        border: none;
        font-size: 25px;
        font-weight: 700;
        cursor: pointer;
    }
}

`

export const BoxCardInputs=styled.div`
    display: grid;
    gap: 12px;
    width: auto;
    grid-template-columns: repeat(2,1fr);


@media screen and (max-width:760px){
    display: flex;
    flex-direction: column;
}
`


export const CardInput=styled.div<Props>`
width:auto;
label{
    color: #262626;
    font-weight: 700;
}
input{
    width: 100%;
    padding: 12px;
    font-size: 15px;
    margin-top: 6px;

}

p{
    color:#d12d11 ;
}

`

export const BoxForm=styled.div<PropsForm>`
display: ${PropsForm=>PropsForm.display ? 'auto' : 'none'};


`

export const BoxCard=styled.div`
display: flex;
justify-content: center;
margin-right: 150px;
margin: 20px 0;


@media screen and (max-width:780px) {
    display: none;
}

`

export const CardImage=styled.div`
    width: 560px;
    margin: 0 5px;
    padding: 30px 20px ;
    box-shadow: 0 0 5px #000;
    background-color: ${ThemeStyle.bgTheme};
    height: 250px;
    border-radius: 4px;

    .card-top{
          height: 80%;
          color: #aaa;
        .number{
            font-family: 'Roboto Mono', monospace;
            font-size: 18px;
        }     
         .codes{

            .codes-code{
                display: flex;
                span{
                    font-size: 15px;
                    margin: 0 5px;
                }
            }
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin:30px 25px;
            img{
                height: 80px;
                width: 80px;
            }
         }
    }
    .card-bottom{
        flex: 1;

        .name-titular{
            font-size: 18px;
            font-family: Poppins;
            color: #c28d11;
            text-shadow: 0 0 5px orange;
        }
    }



`

export const CardImageVersus=styled.div`
    width: 560px;
    padding: 30px 20px ;
    box-shadow: 0 0 5px #000;
    background-color: ${ThemeStyle.bgTheme};
    height: 250px;
    border-radius: 4px;
    margin: 0 5px;


`


export const BoxFormButtons=styled.div`
display: flex;
justify-content: center;
margin: 45px 0;

button{
    padding: 12px 36px;
    color: #FFF;
    border: none;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin: 12px;
    cursor: pointer;
    box-shadow: 0 0 5px #000;
    transition: all ease .2s;
    img{
        height: 25px;
        width: 25px;
    }
}

.save{
    background-color: #237d22;
    &:hover{
        background-color: #26bd24;
    }
}
.cx-btns{
    display: flex;
    width: 100%;
    justify-content: center;
    
    .edit{
        background-color:#20638c;
        &:hover{
            background-color: #2a8cc9;
        }
    }
    .cancel{
        background-color:#b32810;
        &:hover{
            background-color: #d12d11;
        }
    }
}
`

export const CardSelect=styled.div`
max-width: 250px;
box-sizing: 0 0 15px #000;
select{
        width: 100%;
        padding: 20px;
        border-radius: 5px;
    option{
        color: #EEE;
        font-size: 16px;
        font-weight: bold;
        padding: 5px;
        background-color: #262526;
    }
}


`

export const BoxPayments=styled.div`
padding: 0 5px;

@media screen and (max-width:950px) {
    padding: 0;
}


`