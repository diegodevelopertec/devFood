import { Link } from 'react-router-dom'
import LojaIcon from '../../assets/imgs/logo.png'
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import '../../helpers/msgsYup'
import { useAuthContext } from '../../hooks/useContextAuth';
import iconLogo  from './../../assets/imgs/iconhamburguer.png'
import {Box,BoxBottom,BoxInputs,BoxText,FormBox} from './style'


type InputTypes={
    email:string,
    password:string
}



export const LoginPage=()=>{
    const {LoginAuth}=useAuthContext()

    const schema=yup.object({
        email:yup.string().email().required(),
        password:yup.string().required(),
    }).required()
    
    
    const {register,handleSubmit,formState:{errors}}=useForm<InputTypes>({ resolver:yupResolver(schema) })
    
    
    
    const submitForm=(data:InputTypes)=>{
        LoginAuth(data.email,data.password)
        
    }
     
    return <Box>
        <FormBox>
            <BoxText>
                <h2>Entrar | DevFood</h2>
                <p>Preencha o formulário para entrar com sua conta :</p>
            </BoxText>

          <form action="" onClick={handleSubmit(submitForm)}>
            <BoxInputs>
                <input type="text" {...register('email')} placeholder='Digite seu email' />
                <p>{errors.email?.message}</p>
            </BoxInputs>
            <BoxInputs>
                <input type="text" {...register('password')} placeholder='Digite sua senha'/>
                <p>{errors.password?.message}</p>
            </BoxInputs>
           <div className="cx-btn">
             <button type='submit'>Entrar</button>
           </div>
          </form>
          <BoxBottom>
            <p>Não  tem uma conta?<Link to='/register' >Clique aqui</Link></p>
        </BoxBottom>
        </FormBox>
    </Box>

}