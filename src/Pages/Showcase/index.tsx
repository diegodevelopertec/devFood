import { useState,useEffect } from "react"
import { BannerPromotion } from "../../Components/BannerPromotions"
import bannerImage from '../../assets/imgs/banner.jpg'
import * as S from './style'
import { CardProduct } from "../../Components/CardProduct"
import { Product } from "../../Types/Products"
import { dataBurguer } from "../../data/Product"
import BebidasIcon from '../../assets/imgs/iconBebida.png'
import PizzaIcon from '../../assets/imgs/iconspizza.png'
import LanchesIcon from '../../assets/imgs/iconhamburguer.png'
import { ButtonMenu } from "../../Components/ButtonMenu"
import { CardCliked } from "../../Components/CardProductCliked"

export const Showcase=()=>{
    const [listProduct,setListProduct]=useState<Product[]>(dataBurguer)
    const [onModal,setOnModal]=useState(false)

const clikedOnModal=()=>{
    setOnModal(true)
}
const closeModal=()=>{
    setOnModal(false)
}

    return <S.Container>
    <S.ContainerBanner>
       <BannerPromotion unity="%" widthBanner="100" heightBanner="400" imageBanner={bannerImage} />
    </S.ContainerBanner>
    <S.CategorySectionProducts>
        <p>Selecione uma categoria :</p>
        <div>
            <ButtonMenu bg='#f06c0e' src={BebidasIcon} marginhorizontal='10' marginvertical='10' />
            <ButtonMenu bg='#f06c0e' src={PizzaIcon} marginhorizontal='10' marginvertical='10' />
            <ButtonMenu  bg='#f06c0e' src={LanchesIcon} marginhorizontal='10' marginvertical='10' />
        </div>
        <p>Produtos:</p>
    </S.CategorySectionProducts>
  
    <S.ShowcaseProduct>
     {listProduct && listProduct.map((item,index)=><CardProduct clikedStartModal={clikedOnModal} data={item} />)}
     {onModal && <S.ContainerModal>
        <CardCliked  funcOffModal={closeModal}/>
     </S.ContainerModal>}
    </S.ShowcaseProduct>
     
    
   
    </S.Container>
}