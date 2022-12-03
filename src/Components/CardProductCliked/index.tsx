import * as S from './style'
import Bg from '../../assets/imgs/bg1.png'
import { useState } from 'react'


type Props={
    funcOffModal:()=>void;
}

export const CardCliked=({funcOffModal}:Props)=>{

    const [qdtProduct,setQdtProduct]=useState( 1 )
    const [priceModal,setPriceModal]=useState(23)


const actionsModal={
    addQdtProduct:()=>{
        setQdtProduct(prev=>prev+1) 
        setPriceModal(priceActual=>priceActual+priceModal)  
    }
    ,
    minusQdtProduct:()=>{
        if(qdtProduct > 1){
            setQdtProduct(prev=>prev-1)  
           setPriceModal(priceActual=>priceActual-priceModal) 
        }
    }
}







    return <S.Container>
        <S.ContainerImage>
           <img src={Bg} alt="" />
        </S.ContainerImage>
        <S.ContainerData>
            <div className="data-top">
                <div className="cx-name">
                   <span className='name'> Burguer X </span><small className="category">lanches</small>
                </div>
                <div className="ingredientes">
                   <p> ovo,tomate,bacon,alface,queijo,mostarda</p>
                </div>
                <div className="cx-price">
                    <div className="price-modal">
                        R$ {priceModal.toFixed(2)}
                    </div>
                </div>
            </div>
            <div className="data-bottom">
               <div className="cx-qdt">
                    <p>Selecione uma quantidade desejada:</p>
                    <div className='area-btn-qdt'>
                        <div className='container-btn-add'>
                            <button className='btn-minus' onClick={actionsModal.minusQdtProduct}> - </button>
                            <div className='btn-qdt'> {qdtProduct} </div>
                            <button className='btn-add' onClick={actionsModal.addQdtProduct}> + </button>
                        </div>
                    </div>
                    <p>Você está adicionando {qdtProduct} produtos</p>
               </div>
               <div className="cx-buttons">
                    <button className='btn-cancel' onClick={funcOffModal}>cancelar</button>
                    <button className='btn-save'>adicionar ao carrinho</button>
               </div>
            </div>
        </S.ContainerData>
    </S.Container>
}