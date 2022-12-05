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
import { dataPizza } from "../../data/Product"
import { dataDrinks } from "../../data/Product"

export const Showcase=()=>{
    const [burguerProductList,setBurguerProductList]=useState<Product[]>(dataBurguer)
    const [pizzaProductList,setPizzaProductList]=useState<Product[]>(dataPizza)
    const [drinksProductList,setDrinksProductList]=useState<Product[]>(dataDrinks)
    const [displayBurguer,setDisplayBurguer]=useState<boolean>(true)
    const [displayPizzas,setDisplayPizzas]=useState<boolean>(false)
    const [displayDrinks,setDisplayDrinks]=useState<boolean>(false)
    const [onModal,setOnModal]=useState(false)

const clikedOnModal=()=>{
    setOnModal(true)
}
const closeModal=()=>{
    setOnModal(false)
}

const actionDisplayBurguers=()=>{
    setDisplayBurguer(true)
    setDisplayPizzas(false)
    setDisplayDrinks(false)
}
const actionDisplayPizzas=()=>{
    setDisplayBurguer(false)
    setDisplayPizzas(true)
    setDisplayDrinks(false)
}
const actionDisplayDrinks=()=>{
    setDisplayBurguer(false)
    setDisplayPizzas(false)
    setDisplayDrinks(true)
}


    return <S.Container>
    <S.ContainerBanner>
       <BannerPromotion unity="%" widthBanner="100" heightBanner="400" imageBanner={bannerImage} />
    </S.ContainerBanner>
    <S.CategorySectionProducts>
        <p>Selecione uma categoria :</p>
        <div className="cx-btn-icons">
            <ButtonMenu bg='#f06c0e' src={BebidasIcon} marginhorizontal='10' marginvertical='10'  onClick={actionDisplayDrinks} />
            <ButtonMenu bg='#f06c0e' src={PizzaIcon} marginhorizontal='10' marginvertical='10' onClick={actionDisplayPizzas} />
            <ButtonMenu  bg='#f06c0e' src={LanchesIcon} marginhorizontal='10' marginvertical='10'  onClick={actionDisplayBurguers}/>
        </div>
        <p>Produtos:</p>
    </S.CategorySectionProducts>
  
    <S.ShowcaseProduct> 
        {displayBurguer ? burguerProductList && burguerProductList.map((item,index)=>< CardProduct  key={index} clikedStartModal={clikedOnModal} data={item} />) : null}
        { displayPizzas ? pizzaProductList && pizzaProductList.map((item,index)=>< CardProduct  key={index} clikedStartModal={clikedOnModal} data={item} />) : null}
        { displayDrinks ? drinksProductList && drinksProductList.map((item,index)=>< CardProduct  key={index} clikedStartModal={clikedOnModal} data={item} />) : null}
    </S.ShowcaseProduct>
    {onModal && <S.ContainerModal>
        <CardCliked  funcOffModal={closeModal}/>
     </S.ContainerModal>}
     
    
   
    </S.Container>
}