import { useEffect, useState } from "react" 
import * as S from './style'
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
import  womanBurguer from './../../assets/imgs/banner_main_rf.png'
import  womanBurguerMain from './../../assets/imgs/banner_main2.png'
import { Filtered } from "../../Components/Filtered"
import { data } from "../../database/data"



export const Showcase=()=>{
   
    const {stateModal,handleStateModal}=useModalLogin()
    const {state,dispatch}=useContextApp()
    const [dataProductCliked,setDataProductCliked]=useState<Product | any>()
    const [stateModalToCard,setModalToCard]=useState(false)
    const [productsList,setProductsList]=useState<Product[] | []>(data)
    const [clickCategory,setClickCategory]=useState('Hamburguers')
    const[load,setLoad]=useState(false)
    const isLogged=stateModal
    let {user,filterData}=useAuthContext()
  
    //função de setar dados de cada car para o card modal
    const returnDataClikedProduct=(data:Product)=>{
        setDataProductCliked(data)
        setModalToCard(true)
   
    }


 useEffect(()=>{
        if(filterData !== ''){
            let listFilter=data.filter(i=>i.name.includes(`${filterData}`))
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
 

  
return <S.Container>
         
         {
          <S.ContainerCaseLogged className="cx-logado">
                <div className="area-img">
                    <img src={user?.name ? womanBurguerMain : womanBurguer} alt="" />
                </div>
                <div className="area-text">
                        <div className="txt">
                            <h4>Bem vindo {user?.name}</h4>
                            <p>Aqui com a gente é :</p>
                        </div>
                    
                      <div className="cx-spans">
                                <span>Pediu</span>
                                <span>Logou</span>
                                <span>Chegou</span>  
                        </div>
                  
                       
                </div>
            </S.ContainerCaseLogged>
         }

    <S.CategorySectionProducts>
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
    </S.CategorySectionProducts>
        
    <S.ShowcaseProduct > 
        <>
            {productsList.map((i,k)=>(
                    <CardProduct data={i} onClick={returnDataClikedProduct}  key={k} />
                ))
              }
          <Bad />
        </>
     
    </S.ShowcaseProduct>
   
    {stateModalToCard && <S.ContainerModal>
        <CardCliked   data={dataProductCliked} funcOffModal={()=>setModalToCard(false)}/>
     </S.ContainerModal>
     }


   
    </S.Container>
     
 
}