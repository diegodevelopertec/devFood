import { useEffect, useState } from "react" 
import {CategorySectionProducts,Container,ContainerBanner,ContainerModal,ShowcaseProduct} from './style'
import { CardProduct } from "../../Components/CardProduct"
import { Product } from "../../Types/Products"
import BebidasIcon from '../../assets/imgs/iconBebida.png'
import PizzaIcon from '../../assets/imgs/iconspizza.png'
import LanchesIcon from '../../assets/imgs/iconhamburguer.png'
import { ButtonMenuCategory } from "../../Components/ButtonMenuCategory"
import { CardCliked } from "../../Components/CardProductCliked"
import { Bad } from "../../Components/Bad"
import { ThemeStyle } from "../../styled"
import { useContextApp } from "../../hooks/useContextApp"
import { useModalLogin } from "../../hooks/useModeLogin"
import { useAuthContext } from "../../hooks/useContextAuth"
import { Filtered } from "../../Components/Filtered"
import { data } from "../../database/data"
import { ContainerIntroHome } from "../../Components/ContainerIntro"



export const Showcase=()=>{
   
    const {stateModal,handleStateModal}=useModalLogin()
    const {state,dispatch}=useContextApp()
    const [dataProductCliked,setDataProductCliked]=useState<Product | any>()
    const [stateModalToCard,setModalToCard]=useState(false)
    const [productsList,setProductsList]=useState<Product[] | []>(data)
    const [clickCategory,setClickCategory]=useState('Hamburguers')
    const isLogged=stateModal
    let {user,filterData}=useAuthContext()
  
    //função de setar dados de cada car para o card modal
    const returnDataClikedProduct=(data:Product)=>{
        setDataProductCliked(data)
        setModalToCard(true)
   
    }


 useEffect(()=>{
        if(filterData !== ''){
            let listFilter=data.filter(i=>i.name.includes(`${filterData[0].toUpperCase()}`))
            setProductsList(listFilter) 
        }
    
        if(filterData === ''){
            setProductsList(data)
        }
 },[filterData])

 useEffect(()=>{
    if(clickCategory){
        let listCategory=data.filter(i=>i.category === clickCategory)
        setProductsList(listCategory)      
    }
 },[clickCategory])
 

  
return <Container>
    
    <ContainerIntroHome />
    <CategorySectionProducts>
      <>
      <p>Selecione uma categoria :</p>
        <div className="cx-filter-btns">
           <div className="cx-btn-icons">
           <ButtonMenuCategory  
                 bg={ThemeStyle.bgTheme} 
                 iconActive={clickCategory === 'Hamburguers' ? true : false} 
                 src={LanchesIcon} 
                 marginhorizontal='10' marginvertical='10'  
                 onClick={()=>setClickCategory('Hamburguers')} 
                 id='btnHome'
                
            />
            <ButtonMenuCategory bg={ThemeStyle.bgTheme} 
                iconActive={clickCategory === 'Bebidas' ? true : false} src={BebidasIcon} 
                marginhorizontal='10' 
                marginvertical='10'  
                onClick={()=>setClickCategory('Bebidas')} 
                id='btnHome'
            />
            <ButtonMenuCategory bg={ThemeStyle.bgTheme} 
                iconActive={clickCategory === 'Pizzas' ? true : false} src={PizzaIcon} 
                marginhorizontal='10' 
                marginvertical='10' 
                onClick={()=>setClickCategory('Pizzas')} 
                id='btnHome'
            />
           </div>
          <Filtered /> 
        </div>
        <p className="category-title">Produtos: <span>{clickCategory}</span> </p>
      </>
    </CategorySectionProducts>
        
    <ShowcaseProduct> 
        <>
            {productsList.map((i,k)=>(  <CardProduct data={i} onClick={returnDataClikedProduct}  key={k} />))}
            <Bad />
        </>
     
    </ShowcaseProduct>
   
    {stateModalToCard && <ContainerModal>
        <CardCliked   data={dataProductCliked} funcOffModal={()=>setModalToCard(false)}/>
     </ContainerModal>
     }


   
    </Container>
     
 
}