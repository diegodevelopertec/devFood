import * as S from './style'
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useState } from 'react';
import './../../helpers/msgsYup'



type InputTypes={
    name:string,
    rua:string,
    numeroCasa:number,
    complemento:string,
    bairro:string,
    email:string,
    tel:string,
    password?:string
}





export const AccountPage=()=>{
    const [disabledState,setDisabledState]=useState(true)

    const schema=yup.object({
        name:yup.string().required(),
       rua:yup.string().required(),
       numeroCasa:yup.string().required(),
       complemento:yup.string().required(),
       bairro:yup.string().required(),
        email:yup.string().email().required(),
        password:yup.string().required(),
        tel:yup.string().required(),
    }).required()
    
    
    const {register,handleSubmit,formState:{errors}}=useForm<InputTypes>({
        resolver:yupResolver(schema)
    })
    
    const handleTypeForm=()=>{
       setDisabledState(false)
    }
    
 
    const submitForm=(data:InputTypes)=>{
        console.log(data); 
    }


    
    return <S.Container  onSubmit={handleSubmit(submitForm)}>
       <div className="cx-title">
                <p>Aqui você pode editar e alterar dados da sua conta</p>
       </div>
       <S.dataUser>
            <form action="" >
                <h3>Seus dados :</h3>
              <div className="cx-input">
                 <input type="text" placeholder='seu Nome' {...register('name')} disabled={disabledState}/>
                 <p className="error-msg">{errors.name?.message}</p>
              </div>
              <div className="cx-input">
                 <input type="text" placeholder='seu email' {...register('email')}  disabled={disabledState}/> 
                 <p className="error-msg">{errors.email?.message}</p>
              </div>
              <div className="cx-input">
                 <input type="text" placeholder='seu telefone' {...register('tel')}  disabled={disabledState}/> 
                 <p className="error-msg">{errors.tel?.message}</p>
              </div>
              <div >
                <h3>Seu Endereço:</h3>
                   <div className="data-address">
                    <div className="cx-input">
                            <input type="text" placeholder='Digite  o nome da sua rua' {...register('rua')}  disabled={disabledState}/> 
                            <p className="error-msg">{errors.rua?.message}</p>
                        </div>
                        <div className="cx-input">
                            <input type="number" placeholder='Digite o número' {...register('numeroCasa')}  disabled={disabledState} /> 
                            <p className="error-msg">{errors.numeroCasa?.message}</p>
                        </div>
                        <div className="cx-input">
                            <input type="text" placeholder='Digite  o nome do seu bairro' {...register('bairro')}  disabled={disabledState}/> 
                            <p className="error-msg">{errors.bairro?.message}</p>
                        </div>
                        <div className="cx-input">
                            <input type="text" placeholder='complemento' {...register('complemento')}  disabled={disabledState} /> 
                            <p className="error-msg">{errors.complemento?.message}</p>
                        </div>
                   </div>
              </div>
               
               <div className="cx-button">
                 {disabledState &&   <button type='button' 
                    onClick={handleTypeForm}>Editar
                    </button>
                 }
                  {!disabledState && <input type={'submit'} />}
               </div>
            </form>
       </S.dataUser>
    </S.Container>
}