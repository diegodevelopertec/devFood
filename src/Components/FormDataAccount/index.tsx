import { Box,CardInput,BoxFormButtons, BoxCardInputs } from "./style"
import {useState } from "react"
import LapisIcon from './../../assets/imgs/lapis.png'
import LixeiraIcon from './../../assets/imgs/lixeira.png'
import SaveIcon from './../../assets/imgs/save.png'
import { useGlobalContext } from "../../Context/AuthContext"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


type InputTypes={
    name:string,
    email:string,
    password:string,
    photo?:string,
    phone:string,
    cpf:string


}

export const FormDataAccount=()=>{
    const navigate=useNavigate()
    const [disabled,setDisabled]=useState(true)
    const {user,Logout,updateUser}=useGlobalContext()


    const schema=yup.object({
        email:yup.string().email().required(),
        password:yup.string().required().min(6, 'Senha deve ter no mínimo 6 caracteres'),
        name:yup.string().required(),
        phone:yup.string().required().matches(/^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/, 'Telefone inválido'),
        cpf:yup.string().required('CPF inválido').matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido'),
       
    }).required()


    const {register,handleSubmit,formState:{errors},reset}=useForm<InputTypes>({ 
        resolver:yupResolver(schema),
        defaultValues:{
            name:user?.name ? user.name : '',
            email:user?.email ? user.email : '',
            password:user?.password ? user.password : '',
            photo:user?.photo ? user.photo : '',
            phone:user?.phone? user.phone : '',
            cpf:user?.cpf ? user.cpf : '',
    } })



const onSubmit:SubmitHandler<InputTypes>=(data:InputTypes)=>{
 console.log(data);
 updateUser(data)
 setDisabled(true)
 

}


const LogoutAccount=()=>{
    Logout()
    navigate('/')
    toast.success('Conta deletada')
 
}

    return <Box>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <BoxCardInputs>
                <CardInput state>
                    <label htmlFor="">Nome:</label>
                    <input type="text " {...register('name')} disabled={disabled} />
                    <p>{errors.name?.message}</p>
                </CardInput>
                <CardInput state>
                    <label htmlFor="">Email:</label>
                    <input type="text" {...register('email')} disabled={disabled} />
                    <p>{errors.email?.message}</p>
                </CardInput>
                <CardInput state>
                    <label htmlFor="">Telefone:</label>
                    <input type="text" {...register('phone')} disabled={disabled} />
                    <p>{errors.phone?.message}</p>
                </CardInput>
                <CardInput state>
                    <label htmlFor="">Senha:</label>
                    <input type="text" disabled={disabled}  {...register('password')}/>
                    <p>{errors.password?.message}</p>
                </CardInput>
                <CardInput state>
                    <label htmlFor="">CPF:</label>
                    <input type="text" disabled={disabled}  {...register('cpf')} />
                    <p>{errors.cpf?.message}</p>
                </CardInput>
            </BoxCardInputs>
            <BoxFormButtons>
                {!disabled && <div className="cx-btns">
                      <button type="submit" className="save"><img src={SaveIcon} alt="" />Salvar</button>
                      <button className="cancel" >Cancelar</button>
                    </div>
                }
                {disabled && <div className="cx-btns">
                    <button className="edit" onClick={()=>setDisabled(false)}><img src={LapisIcon} alt="" /> Editar</button>
                 </div>
                }
            </BoxFormButtons>
        </form>
    
    <div>
        <button className="account-delete" onClick={LogoutAccount} >Clique aqui para deletar conta</button>
    </div>
    
    
    </Box>
}