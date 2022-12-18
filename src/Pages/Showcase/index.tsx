import { useState,useEffect } from "react"
import { BannerPromotion } from "../../Components/BannerPromotions"
import * as S from './style'
import { CardProduct } from "../../Components/CardProduct"
import { Product } from "../../Types/Products"
import { dataBurguer } from "../../data/Product"
import BebidasIcon from '../../assets/imgs/iconBebida.png'
import ResturantIcon from '../../assets/imgs/restaurante.png'
import PizzaIcon from '../../assets/imgs/iconspizza.png'
import LanchesIcon from '../../assets/imgs/iconhamburguer.png'
import { ButtonMenu } from "../../Components/ButtonMenu"
import { CardCliked } from "../../Components/CardProductCliked"
import { dataPizza } from "../../data/Product"
import { dataDrinks } from "../../data/Product"
import { RestaurantePage } from "./../RestaurantePage"
import { Bad } from "../../Components/Bad"
import { ProductBad } from "../../Components/ProductBad"
import { toast } from "react-toastify"
import { ThemeStyle } from "../../styled"
import { ApiProduct } from "../../Services/ProductActions"
import { useBurguerData } from "../../hooks/useBurguerList"


export const Showcase=()=>{
    const [burguerProductList,setBurguerProductList]=useState<Product[] >(dataBurguer)
    const [pizzaProductList,setPizzaProductList]=useState<Product[]>(dataPizza)
    const [drinksProductList,setDrinksProductList]=useState<Product[] >(dataDrinks)
    const [dataProductCliked,setDataProductCliked]=useState<Product | any>()
    const [displayBurguer,setDisplayBurguer]=useState<boolean>(true)
    const [displayPizzas,setDisplayPizzas]=useState<boolean>(false)
    const [displayRestaurant,setDisplayRestaurant]=useState<boolean>(false)
    const [displayDrinks,setDisplayDrinks]=useState<boolean>(false)
    const [onModal,setOnModal]=useState(false)
    const [productbad,setProductBad]=useState([17])

    
    /*const loadBurguers=async()=>{
        let dataApiBurguer=await ApiProduct.getProducts()
       setBurguerProductList(dataApiBurguer)
    }

    useEffect(()=>{
        
        setTimeout(()=>loadBurguers(),1000)
    },[])

*/

    const clikedOnModal=()=>setOnModal(true)
    const closeModal=()=>setOnModal(false)


    const actionDisplayBurguers=()=>{
        setDisplayBurguer(true)
        setDisplayPizzas(false)
        setDisplayDrinks(false)
        setDisplayRestaurant(false)
    }
    const actionDisplayPizzas=()=>{
        setDisplayBurguer(false)
        setDisplayPizzas(true)
        setDisplayDrinks(false)
        setDisplayRestaurant(false)
    }
    const actionDisplayDrinks=()=>{
        setDisplayBurguer(false)
        setDisplayPizzas(false)
        setDisplayDrinks(true)
        setDisplayRestaurant(false)
    }
    const actionDisplayRestaurante=()=>{
        setDisplayRestaurant(true)
        setDisplayBurguer(false)
        setDisplayPizzas(false)
        setDisplayDrinks(false)
    }

    const returnDataClikedProduct=(data:Product)=>{
        setDataProductCliked(data)
        clikedOnModal()
    }

    const setDataBad=()=>{
        toast.success(`você adicionou novo produto na sacola`)
        closeModal()
    }

    const conditionCategoryTitle=()=>{
        if(displayBurguer){
            return 'Hamburguers'
        }else if(displayDrinks){
            return 'Bebidas'
        }else if(displayPizzas){
            return 'Pizzas'
        }else{
            return 'Marmita'
        }
    }

  

    return <S.Container>
    
  
   
    <S.CategorySectionProducts>
      <>
      <p>Selecione uma categoria :</p>
        <div className="cx-btn-icons">
            <ButtonMenu  bg={ThemeStyle.bgTheme} 
                 iconActive={displayBurguer ? true : false} src={LanchesIcon} 
                 marginhorizontal='10' marginvertical='10'  
                 onClick={actionDisplayBurguers}
                
            />
            <ButtonMenu bg={ThemeStyle.bgTheme} 
                iconActive={displayDrinks ? true : false} src={BebidasIcon} 
                marginhorizontal='10' 
                marginvertical='10'  
                onClick={actionDisplayDrinks} 
            />
            <ButtonMenu bg={ThemeStyle.bgTheme} 
                iconActive={displayPizzas ? true : false} src={PizzaIcon} 
                marginhorizontal='10' 
                marginvertical='10' 
                onClick={actionDisplayPizzas} 
            />
              <ButtonMenu bg={ThemeStyle.bgTheme} 
                iconActive={displayRestaurant} src={ResturantIcon} 
                marginhorizontal='10' 
                marginvertical='10' 
                onClick={actionDisplayRestaurante} 
            />
           
        </div>
        <p className="category-title">Produtos: <span>{conditionCategoryTitle()}</span> </p>
      </>
    </S.CategorySectionProducts>
  
    <S.ShowcaseProduct stateDisplay={displayRestaurant}> 
        { displayBurguer ? burguerProductList && burguerProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct} data={item} />) : null}
        { displayPizzas ? pizzaProductList && pizzaProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
        { displayDrinks ? drinksProductList && drinksProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
        { displayRestaurant  && <RestaurantePage/>}
        <Bad >
          {productbad.map((item,index)=>(
            <ProductBad key={index} />
           
          ))}
        </Bad>
    </S.ShowcaseProduct>
    {onModal && <S.ContainerModal>
        <CardCliked  onClick={setDataBad} data={dataProductCliked} funcOffModal={closeModal}/>
     </S.ContainerModal>}
     
    
   
    </S.Container>
}