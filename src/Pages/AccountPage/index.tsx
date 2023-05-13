import * as S from './style'
import {  SubmitHandler,useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react';
import './../../helpers/msgsYup'
import { useAuthContext } from '../../hooks/useContextAuth';
import { useContextApp } from '../../hooks/useContextApp';
import {v4 as uuid} from 'uuid'
import { useModalLogin } from '../../hooks/useModeLogin';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LapisIcon from './../../assets/imgs/lapis.png'
import LixeiraIcon from './../../assets/imgs/lixeira.png'
import SaveIcon from './../../assets/imgs/save.png'




type InputTypes={
    name:string,
    rua:string,
    numeroCasa:string
    complemento:string,
    bairro:string,
    email:string,
    telefone:string,
    password:string
   
}





export const AccountPage=()=>{
    const Redirect=useNavigate()
    const {user,registerUser,Logout,address}=useAuthContext()
    const {handleStateModal}=useModalLogin()
    const [disabledState,setDisabledState]=useState(true)
    const {state,dispatch}=useContextApp()
    let [userState,setUserState]=useState(user)
    let [addressState,setAddressState]=useState(address)
   

    useEffect(()=>{
        setUserState(user)
        setAddressState(address)
    },[])
   

    const schema=yup.object({
       name:yup.string().required(),
       rua:yup.string().required(),
       numeroCasa:yup.string().required(),
       complemento:yup.string().required(),
       bairro:yup.string().required(),
       email:yup.string().email().required(),
       password:yup.string().required(),
       telefone:yup.string().required(),
    }).required()
    
    
    const {register,handleSubmit,formState:{errors}}=useForm<InputTypes>({
        resolver:yupResolver(schema),
        defaultValues: {
            name:userState?.name,
            email:userState?.email,
            telefone:userState?.telefone,
            password:userState?.password,
            rua:addressState?.rua,
            numeroCasa:addressState?.numero,
            complemento:addressState?.complemento,
            bairro:addressState?.bairro
         
            
          }
    })
 

    
    
  
    

    
    const SubmitForm: SubmitHandler<InputTypes>=(data:InputTypes)=>{
   

        let {name,email,password,telefone}=data  //pegando dados de usuario
        let {bairro,complemento,numeroCasa,rua}=data //pegando dados de endereco
        registerUser(name,email,password,telefone)
       
      
       
        let newAddress={
            id:uuid(),
            rua:rua,
            state:true,
            numero:numeroCasa,
            bairro: bairro,
            complemento:complemento
        }

      
            setDisabledState(true)

             dispatch({
                type: 'setAddress',
                payload:{
                    address:address
                }
             })
        
        localStorage.setItem('addressRequests',JSON.stringify(newAddress))
       handleStateModal(false)
       document.location.href='/'

    }

    const isLogout=()=>{
        Logout()
        localStorage.removeItem('addressRequests')
        toast.success('conta deletada 😪')
     document.location.href='/'
    
    }
   
   
    
    return <S.Container onSubmit={handleSubmit(SubmitForm)}>
    
       <div className="cx-title">
                <p>Aqui você pode editar e alterar dados da sua conta</p>
       </div>
       <S.Form  active={disabledState} >
            <form action="" >
                <h3>Seus Dados :</h3>
              <div className="cx-input"> 
                 <input  
                       placeholder='Digite seu Nome' 
                         {...register('name')} 
                        disabled={disabledState}
                       
                 />
                 <p className="error-msg">{errors.name?.message}</p>
              </div>
              <div className="cx-input">
                 <input 
                      
                        placeholder='Digite seu email' 
                        {...register('email')} 
                        disabled={disabledState}     
                /> 
                 <p className="error-msg">{errors.email?.message}</p>
              </div>
              <div className="cx-input">
                 <input
                       type={'password'}
                       placeholder='Digite sua senha' 
                       {...register('password')}  
                       disabled={disabledState}  
                /> 
                 <p className="error-msg">{errors.password?.message}</p>
              </div>
              <div className="cx-input">
                 <input  
                    type={'tel'}
                     placeholder='Digite seu telefone' 
                     {...register('telefone')}   
                     disabled={disabledState}
                /> 
                 <p className="error-msg">{errors.telefone?.message}</p>
              </div>
              <div >
                <h3>Seu Endereço:</h3>
                   <div className="data-address">
                        <div className="cx-input">
                            <input  
                                placeholder='Digite  o nome da sua rua'  
                                {...register('rua')}   
                                disabled={disabledState}
                              
                            /> 
                            <p className="error-msg">{errors.rua?.message}</p>
                        </div>
                        <div className="cx-input">
                            <input 
                             
                                placeholder='Digite o número' 
                                {...register('numeroCasa')}    
                                disabled={disabledState} 
                                
                            /> 
                            <p className="error-msg">{errors.numeroCasa?.message}</p>
                        </div>
                        <div className="cx-input">
                            <input 
                               
                                 placeholder='Digite  o nome do seu bairro' 
                                {...register('bairro')}  
                                disabled={disabledState}
                              
                            /> 
                            <p className="error-msg">{errors.bairro?.message}</p>
                        </div>
                        <div className="cx-input">
                            <input  
                                  placeholder='complemento' 
                                   {...register('complemento')}   
                                   disabled={disabledState} 
                                 
                           /> 
                            <p className="error-msg">{errors.complemento?.message}</p>
                        </div>
                   </div>
              </div>
               
               <div className="cx-button">
                 {!user && disabledState &&   <button type='button'  onClick={()=>setDisabledState(false)}> cadastrar </button>}
                  {!disabledState && <button   type={'submit'}> Salvar<img  height={30} width={30} src={SaveIcon} /></button> }
                  {user && disabledState && <button onClick={()=>setDisabledState(false)} type='button'>Editar <img height={30} width={30} src={LapisIcon} alt="" /></button> }
                  {user && disabledState && <button onClick={isLogout} type='button'>Deletar conta<img  height={30} width={30} src={LixeiraIcon} alt="" /></button> }
               </div>
            </form>
       </S.Form>
    </S.Container>
}