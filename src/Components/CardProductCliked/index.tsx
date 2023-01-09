import * as S from './style'
import {useEffect, useState } from 'react'
import { Product } from '../../Types/Products';
import { useContextApp } from '../../hooks/useContextApp';
import { toast } from "react-toastify"

type Props={
    funcOffModal:()=>void;
     data:Product ,
 
}

export const CardCliked=({funcOffModal,data}:Props)=>{
    
    const [qdtProduct,setQdtProduct]=useState(1)
    const [priceModal,setPriceModal]=useState(data.price)
    const {state,dispatch}=useContextApp()

   
 

const actionsModal={
    addQdtProduct:()=>{
        setQdtProduct(prev=>prev + 1) 
        setPriceModal(data.price + priceModal) 
    } ,
    minusQdtProduct:()=>{
        if(qdtProduct > 1){
           setQdtProduct(prev=>prev-1)  
           setPriceModal(priceActual=>priceActual - data.price) 
        }
    }
    
}

const setData=()=>{

   let newProduct:Product | null = {
        id: data.id,
        category: data.category,
        name: data.name,
        imageProduct: data.imageProduct,
        ingredientes: data.ingredientes,
        qdt:qdtProduct, 
        price: priceModal,
        priceDefault:data.price
    }
    
    dispatch({
        type:'addProduct',
        payload:{
           data: newProduct
        }
    })
    newProduct=null
     funcOffModal()
     toast.success(`você adicionou novo produto na sacola`)

}


    return <S.Container>
        <S.ContainerImage>
           <img src={`${data?.imageProduct}`} alt="" />
        </S.ContainerImage>
        <S.ContainerData>
            <div className="data-top">
                <div className="cx-name">
                   <span className='name'> {data.name} </span><small className="category">{data.category}</small>
                </div>
                <div className="ingredientes">
                   <p> {data.ingredientes}</p>
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
                    <p>Você está adicionando <span className='qdt-modal'>{qdtProduct} {qdtProduct === 1 ? data.category.replace('s','') : data.category}</span></p>
               </div>
               <div className="cx-buttons">
                    <button className='btn-cancel' onClick={funcOffModal}>voltar</button>
                    <button className='btn-save' onClick={()=>setData()}>adicionar á sacola</button> 
            </div>
            </div>
        </S.ContainerData>
    </S.Container>
}