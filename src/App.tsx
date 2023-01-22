import React, { useEffect } from 'react';
import { useState } from 'react'
import * as S from './styled'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes } from './Routes'
import { ButtonMenu } from './Components/ButtonMenu'
import BurguerImage from '.././src/assets/imgs/burguer.png'
import UserIcon from '.././src/assets/imgs/user.png'
import LojaIcon from '.././src/assets/imgs/lojaicon.png'
import MotoIcon from '.././src/assets/imgs/moto.png'
import LogoIcon from '../src/assets/imgs/logo.png'
import { useNavigate } from 'react-router-dom';
import  useHistory from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const App=()=>{
  let location=useLocation()

  const [viewHome,setViewHome]=useState(true)
  const [viewAccount,setViewAccount]=useState(false)
  const [viewDelivery,setViewDelivery]=useState(false)
  const navigate=useNavigate()
 

  
 useEffect(()=>{
    if(location.pathname  ===''){
      setViewHome(true)
      setViewAccount(false)
      setViewDelivery(false)
    }else if(  location.pathname ==='/user'){
      setViewHome(false)
      setViewAccount(true)
      setViewDelivery(false)
    }else if( location.pathname  ==='/pedidos'){
      setViewHome(false)
      setViewAccount(false)
      setViewDelivery(true)

    }

  },[viewHome])



  const ClickViewHome=(e:any)=>{
    e.preventDefault()
    navigate('')
    setViewHome(true)
    setViewAccount(false)
    setViewDelivery(false)
   
      
  
  }
  const ClickViewDelivery=(e:any)=>{
    e.preventDefault()
   setViewDelivery(true)
      navigate('/pedidos')
      setViewDelivery(true)
      setViewHome(false)
      setViewAccount(false)
   
  }
  
  const ClickViewAccount=(e:any)=>{
    e.preventDefault()
      navigate('/user')
      setViewAccount(true)
      setViewHome(false)
      setViewDelivery(false)
  
   
  }

  return <S.Body>
        <S.LeftContent>
            <S.Menu>
              <ButtonMenu link='/'
                  onClick={ClickViewHome} 
                  iconActive={viewHome} 
                  src={LojaIcon}  
                  marginhorizontal='10' 
                  text='inicio'
                  marginvertical='10' />
              <ButtonMenu 
                  link='pedidos' 
                  onClick={ClickViewDelivery}  
                  iconActive={viewDelivery} 
                  src={MotoIcon} 
                  marginhorizontal='10' 
                  marginvertical='10' 
                  text='pedidos'/>
                    
              <ButtonMenu  
                 onClick={ClickViewAccount} 
                iconActive={viewAccount} 
                 src={UserIcon} 
                 link='user'
                 marginhorizontal='10' 
                 marginvertical='10' 
                 text='conta'/>
            </S.Menu>
        </S.LeftContent>

        <S.RightContent>
          <S.HeaderApp>
            <S.CardLoja>
              <div className="logo">
                   <img src={LogoIcon} alt="" /> <span>BãoLanche</span>
              </div>
             
            </S.CardLoja>
          </S.HeaderApp>
          <Routes/>
         <ToastContainer />
        </S.RightContent>
  </S.Body>
}

export default App