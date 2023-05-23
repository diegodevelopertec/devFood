import { Box,CardInput,BoxFormButtons, BoxCardInputs, AddressDelete } from "./style"
import React, { FormEvent, useEffect, useState } from "react"
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
    rua:string,
    numero:string,
    bairro:string,
    logradouro:string,
    cep:string,
    cidadeEstado:string
   
}
export const FormDataAddress=()=>{
    const {address,ClearAddress,addAddress}=useGlobalContext()
    const [disabled,setDisabled]=useState(address === null ? false : true)
    const [openFormAddress,setOpenFormAddress]=useState(address === null ? false : true)

    const schema=yup.object({
        rua:yup.string().required(),
        bairro:yup.string().required(),
        numero:yup.string().required(),
        logradouro:yup.string().required(),
        cidadeEstado:yup.string().required(),
        cep:yup.string().required('CEP é obrigatório').matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
       
    }).required()


    const {register,handleSubmit,formState:{errors},reset}=useForm<InputTypes>({ 
        resolver:yupResolver(schema),
        defaultValues:{
            rua:address?.rua ? address.rua : '',
            bairro:address?.bairro ? address.bairro : '',
            cep:address?.cep ? address.cep : '',
            numero:address?.numero ? address.numero : '',
            logradouro:address?.logradouro? address.logradouro : '',
            cidadeEstado:address?.cidadeEstado ? address.cidadeEstado : '',
          
          
    } })

    useEffect(()=>{
        if(address === null && openFormAddress){
            setDisabled(false)
            setOpenFormAddress(false)
        }
    },[])


    const onSubmit:SubmitHandler<InputTypes>=(data:InputTypes)=>{
        console.log(data);
        addAddress(data)
        setDisabled(true)
        localStorage.setItem('address',JSON.stringify(data))
    }


    const deleteAddress=()=>{
        ClearAddress()
        setOpenFormAddress(false)
    }

    return <Box>
      {address === null && !openFormAddress && <div className="new-address" onClick={()=>setOpenFormAddress(true)}>Adicionar um Endereço <button >+</button><hr /></div>}

{openFormAddress &&   <form action="" onSubmit={handleSubmit(onSubmit)} >
            <BoxCardInputs>
                <CardInput state>
                    <label htmlFor="">Rua:</label>
                    <input type="text" {...register('rua')} disabled={disabled} />
                    <p>{errors.rua?.message}</p>
                </CardInput>
                <CardInput state>
                    <label htmlFor="">Bairro:</label>
                    <input type="text" {...register('bairro')}  disabled={disabled} />
                    <p>{errors.bairro?.message}</p>
                </CardInput>
                <CardInput state>
                    <label htmlFor="">CEP:</label>
                    <input type="text" disabled={disabled} {...register('cep')}  />
                    <p>{errors.cep?.message}</p>
                </CardInput>
                <CardInput state>
                    <label htmlFor="">Cidade/Estado:</label>
                    <input type="text" disabled={disabled}   {...register('cidadeEstado')} />
                    <p>{errors.cidadeEstado?.message}</p>
                </CardInput>
                <CardInput state>
                    <label htmlFor="">Nùmero:</label>
                    <input type="text" disabled={disabled} {...register('numero')}  />
                    <p>{errors.numero?.message}</p>
                </CardInput>
                <CardInput state>
                    <label htmlFor="">Logradouro:</label>
                    <input type="text" disabled={disabled} {...register('logradouro')}  />
                   <p>{errors.logradouro?.message}</p>
                </CardInput>
            </BoxCardInputs>
            <BoxFormButtons>
                {!disabled && <div className="cx-btns">
                      <button className="save" type="submit" onClick={()=>onSubmit}><img src={SaveIcon} alt="" />Salvar</button>
                      <button className="cancel"  onClick={()=>address === null ? setOpenFormAddress(false) :setDisabled(true)} >Cancelar</button>
                   </div> 
                }
                {disabled && <div className="cx-btns">
                    <button className="edit" onClick={()=>setDisabled(false)} ><img src={LapisIcon} alt="" /> Editar</button>
                  </div>
                }
            </BoxFormButtons>
        </form>
        }
   {address !== null &&  <AddressDelete>
        <button onClick={deleteAddress}>Clique Aqui para deletar esse Endereço</button>
    </AddressDelete>}

    
    
    </Box>
}