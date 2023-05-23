import { Link } from 'react-router-dom'
import LojaIcon from '../../assets/imgs/logo.png'
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import '../../helpers/msgsYup'
import { useAuthContext } from '../../hooks/useContextAuth';
import iconLogo  from './../../assets/imgs/iconhamburguer.png'
import {Box,BoxBottom,BoxInputs,BoxText,FormBox, FormInputs,BoxFile,CardInputFile} from './style'

type InputTypes={
    email:string,
    password:string,
    name:string,
    photo?:string,
    cpf:string,
    telefone?:string

}


export const RegisterPage=()=>{
   

    const schema=yup.object({
        email:yup.string().email().required(),
        password:yup.string().required(),
        name:yup.string().required(),
        photo:yup.string(),
        cpf:yup.string().required(),
        telefone:yup.string().required(),
    }).required()
    
    
    const {register,handleSubmit,formState:{errors}}=useForm<InputTypes>({ resolver:yupResolver(schema) })
    
    
    
    const submitForm=(data:InputTypes)=>{
      
        
    }
     
    return <Box>
        <FormBox>
            <BoxText>
                <h2>Cadastro| DevFood</h2>
                <p>Preencha o formulário para criar com sua conta :</p>
            </BoxText>

          <form action="" onClick={handleSubmit(submitForm)}>
            <BoxFile>
                <CardInputFile>
                                <span>Selecione uma foto de perfil</span>
                                <input type="file" {...register('photo')} />
                                <p>{errors.photo?.message}</p>
                </CardInputFile>
            </BoxFile>
            <FormInputs>
                <BoxInputs>
                    <input type="text" {...register('name')} placeholder='Digite seu nome'/>
                    <p>{errors.name?.message}</p>
                </BoxInputs>
                <BoxInputs>
                    <input type="text" {...register('email')} placeholder='Digite seu email'  />
                    <p>{errors.email?.message}</p>
                </BoxInputs>
                <BoxInputs>
                    <input type="text" {...register('telefone')} placeholder='Digite uma senha'/>
                    <p>{errors.telefone?.message}</p>
                </BoxInputs>
                <BoxInputs>
                    <input type="text" {...register('cpf')} placeholder='Digite seu CPF' />
                    <p>{errors.cpf?.message}</p>
                </BoxInputs>
                <BoxInputs>
                    <input type="text" {...register('password')} placeholder='Digite uma senha'/>
                    <p>{errors.password?.message}</p>
                </BoxInputs>
            </FormInputs>
            <div className="cx-btn">
             <button type='submit'>Cadastrar</button>
           </div>
          </form>
          <BoxBottom>
    
            <p>Já tem uma conta?<Link to='/login' >Clique aqui</Link></p>
        </BoxBottom>
        </FormBox>
    </Box>
}