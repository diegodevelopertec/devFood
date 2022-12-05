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
    const [dataProductCliked,setDataProductCliked]=useState<Product | any>()
    const [displayBurguer,setDisplayBurguer]=useState<boolean>(true)
    const [displayPizzas,setDisplayPizzas]=useState<boolean>(false)
    const [displayDrinks,setDisplayDrinks]=useState<boolean>(false)
    const [onModal,setOnModal]=useState(false)

    const clikedOnModal=()=>setOnModal(true)
    const closeModal=()=>setOnModal(false)


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

    const returnDataClikedProduct=(data:Product)=>{
    setDataProductCliked(data)
    clikedOnModal()
    }

    const conditionCategoryTitle=()=>{
        if(displayBurguer){
            return 'Hamburguers'
        }else if(displayDrinks){
            return 'Bebidas'
        }else if(displayPizzas){
            return 'Pizzas'
        }
    }


    return <S.Container>
    <S.ContainerBanner>
      <BannerPromotion  widthBanner="900" heightBanner="350" imageBanner={bannerImage} />
    </S.ContainerBanner>
    <S.CategorySectionProducts>
      <>
      <p>Selecione uma categoria :</p>
        <div className="cx-btn-icons">
            <ButtonMenu  bg='#f06c0e' 
                  iconActive={displayBurguer ? true : false} src={LanchesIcon} 
                 marginhorizontal='10' marginvertical='10'  
                 onClick={actionDisplayBurguers}
                 />
            <ButtonMenu bg='#f06c0e' 
                iconActive={displayDrinks ? true : false} src={BebidasIcon} 
                marginhorizontal='10' 
                marginvertical='10'  
                onClick={actionDisplayDrinks} />
            <ButtonMenu bg='#f06c0e' 
                iconActive={displayPizzas ? true : false} src={PizzaIcon} 
                marginhorizontal='10' 
                marginvertical='10' 
                onClick={actionDisplayPizzas} />
           
        </div>
        <p className="category-title">Produtos: <span>{conditionCategoryTitle()}</span> </p>
      </>
    </S.CategorySectionProducts>
  
    <S.ShowcaseProduct> 
        {displayBurguer ? burguerProductList && burguerProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct} data={item} />) : null}
        { displayPizzas ? pizzaProductList && pizzaProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
        { displayDrinks ? drinksProductList && drinksProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
    </S.ShowcaseProduct>
    {onModal && <S.ContainerModal>
        <CardCliked data={dataProductCliked} funcOffModal={closeModal}/>
     </S.ContainerModal>}
     
    
   
    </S.Container>
}