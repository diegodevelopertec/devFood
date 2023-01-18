import * as S from './style'
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useState } from 'react';
import './../../helpers/msgsYup'
import { useAuthContext } from '../../hooks/useContextAuth';
import { useContextApp } from '../../hooks/useContextApp';
import {v4 as uuid} from 'uuid'
import { useModalLogin } from '../../hooks/useModeLogin';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LapisIcon from './../../assets/imgs/lapis.png'
import LixeiraIcon from './../../assets/imgs/lixeira.png'


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
    const {user,registerUser,Logout}=useAuthContext()
    const {handleStateModal}=useModalLogin()
    const [disabledState,setDisabledState]=useState(true)
    const {state,dispatch}=useContextApp()
    const addressState=state.address
    let addressDefault=addressState.find(item=>item.state === true)
    const navigate=useNavigate()



    const [nameIn,setNameIn]=useState(user ? user?.name : '')
    const [emailIn,setEmailIn]=useState(user ? user?.email :'')
    const [passwordIn,setPasswordIn]=useState(user ? user?.password : '')
    const [telephoneIn,setTelephoneIn]=useState(user ? user?.telefone : '')
    const [ruaIn,setRuaIn]=useState(addressDefault?.rua)
    const [bairroIn,setBairroIn]=useState(addressDefault?.bairro)
    const [numeroIn,setNumeroIn]=useState(addressDefault?.numero)
    const [complementoIn,setComeplementoIn]=useState(addressDefault?.complemento)

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
            name:nameIn,
            email:emailIn,
            rua:ruaIn,
            numeroCasa:numeroIn,
            complemento:complementoIn,
            bairro:bairroIn,
            telefone:telephoneIn,
            password:passwordIn,
            
          }
    })
 

    
    
  
    

    
    const SubmitForm: SubmitHandler<InputTypes>=(data:InputTypes)=>{
   

        let {name,email,password,telefone}=data
        let dataUser={name,email,password,telefone}
        registerUser(name,email,password,telefone)
        localStorage.setItem('user',JSON.stringify(dataUser))
      
       


        if(user !== null ){
            setDisabledState(true)
             dispatch({
                type: 'setAddress',
                payload:{
                    address:{
                        id:uuid(),
                        rua:ruaIn,
                        state:true,
                        numero:numeroIn,
                        bairro: bairroIn,
                        complemento:complementoIn
                    }
                }
             })
        }
       handleStateModal(false)
       toast.success('registrado e logado com sucesso 🙂')
       navigate('/')
       
    }



    const isLogout=()=>{
        Logout()
        navigate('/')
        toast.success('conta deletada 😪')
    }
   
   
    
    return <S.Container  onSubmit={handleSubmit(SubmitForm)}>
    
       <div className="cx-title">
                <p>Aqui você pode editar e alterar dados da sua conta</p>
       </div>
       <S.dataUser>
            <form action="" >
                <h3>Seus dados :</h3>
              <div className="cx-input">
                 <input  
                       placeholder='seu Nome' 
                         {...register('name')} 
                        disabled={disabledState}
                 />
                 <p className="error-msg">{errors.name?.message}</p>
              </div>
              <div className="cx-input">
                 <input 
                      
                        placeholder='seu email' 
                        {...register('email')} 
                        disabled={disabledState}
                /> 
                 <p className="error-msg">{errors.email?.message}</p>
              </div>
              <div className="cx-input">
                 <input
                       type={'password'}
                       placeholder='sua senha' 
                       {...register('password')}  
                       disabled={disabledState}
                /> 
                 <p className="error-msg">{errors.password?.message}</p>
              </div>
              <div className="cx-input">
                 <input  
                    type={'tel'}
                     placeholder='seu telefone' 
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
                 {!user && disabledState &&   <button type='button'  onClick={()=>setDisabledState(false)}>cadastrar </button>}
                  {!disabledState && <button   type={'submit'}> salvar</button> }
                  {user && disabledState && <button onClick={()=>setDisabledState(false)} type='button'>Editar <img height={30} width={30} src={LapisIcon} alt="" /></button> }
                  {user && disabledState && <button onClick={isLogout} type='button'>deletar conta<img  height={30} width={30} src={LixeiraIcon} alt="" /></button> }
               </div>
            </form>
       </S.dataUser>
    </S.Container>
}