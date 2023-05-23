import styled from "styled-components";

type Props={
    state:boolean;

}


export const Box=styled.div`
width: auto;
margin: 35px 0;


.account-delete{
    border: none;
    background-color: transparent;
    font-family: Poppins;
    cursor: pointer;
    transition:all ease .3s;

    &:hover{
        text-decoration:underline; 
        
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

export const BoxFormButtons=styled.div`
display: flex;
justify-content: center;
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
    margin: 35px 0;
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