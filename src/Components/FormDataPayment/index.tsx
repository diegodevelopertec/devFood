
import { Box,CardInput,BoxFormButtons, BoxCardInputs,CardSelect, BoxPayments, BoxForm, BoxCard, CardImage, CardImageVersus } from "./style"
import React, { useState } from "react"
import LapisIcon from './../../assets/imgs/lapis.png'
import LixeiraIcon from './../../assets/imgs/lixeira.png'
import SaveIcon from './../../assets/imgs/save.png'
import { CardPayments } from "../CardPayment"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useForm, SubmitHandler } from "react-hook-form";
import {useGlobalContext } from "../../Context/AuthContext"


type FormPay={
    titular:string,
    validateCode:string,
    dateValidity:string,
    nameCard:string,
    numberCard:string,
    passwordCard:string,
    type:string,

}


export const FormDataPayments=()=>{
    const [disabled,setDisabled]=useState(false)
    const [formPay,setFormPay]=useState()
    
    const schema=yup.object({
        titular:yup.string().required(),
        validateCode:yup.string().required().max(3),
        dateValidity:yup.string().required('somente mês e ano').max(6),
        nameCard:yup.string().required(),
        numberCard:yup.string().matches(/^\d{16}$/, 'Número de cartão inválido').required('Número de cartão é obrigatório'),
        passwordCard:yup.string().required().min(6),
        type:yup.string().required(),
    }).required()


    const {register,handleSubmit,formState:{errors},reset}=useForm<FormPay>({ 
        resolver:yupResolver(schema),
        defaultValues:{
            titular:'',
            validateCode:'',
            nameCard:'',
            numberCard:'',
            passwordCard:'',
            type:'',
          
          
    } })
    
    const [newPaymentForm,setNewPaymentForm]=useState(false)
    const {payments,addPayCard}=useGlobalContext()



    const onSubmit:SubmitHandler<FormPay>=(data:FormPay)=>{
      addPayCard({
        id:Math.floor(Math.random() * 999),
        ...data
      })

        setDisabled(true)
        setNewPaymentForm(false)
        reset()
    }


  
    return <Box>
        {!newPaymentForm && <div className="new-pay">Adicionar novo Pagamento <button onClick={()=>setNewPaymentForm(true)}>+</button><hr /></div>}
       <BoxForm display={newPaymentForm}>
           { /*<BoxCard>
                <CardImage>
                    <div className="card-top">
                        <div className="number">
                            <span></span>
                        </div>
                        <div className="codes">
                            <div className="codes-code">
                                <span>{formPay.dateCreate}</span>
                                <span>{formPay.dateValidate}</span>
                            </div>
                            <div className="bandeira">
                               <img width="48" height="48" src="https://img.icons8.com/color/48/visa.png" alt="visa"/>
                            </div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <span className="name-titular">{formPay.titular ? formPay.titular : 'Titular'}</span>
                    </div>
                </CardImage>
                <CardImageVersus>
                    dd
                </CardImageVersus>
</BoxCard> */}
            <form onSubmit={handleSubmit(onSubmit)} method="POST">
                    <BoxCardInputs>
                        <CardInput state>
                            <label htmlFor="">Nome do Titular:</label>
                            <input type="text" {...register('titular')} disabled={disabled} />
                            <p>{errors.titular?.message}</p>
                        </CardInput>
                        <CardInput state>
                            <label htmlFor="">Número do cartão:</label>
                            <input type="text" {...register('numberCard')} disabled={disabled} />
                            <p>{errors.numberCard?.message}</p>
                        </CardInput>
                        <CardInput state>
                            <label htmlFor="">Nome do cartão:</label>
                            <input type="text" disabled={disabled} {...register('nameCard')} />
                            <p>{errors.nameCard?.message}</p>
                        </CardInput>
                        <CardInput state>
                            <label htmlFor="">Código de segurança (CVV/CVC):</label>
                            <input type="text" disabled={disabled} {...register('validateCode')} />
                            <p>{errors.validateCode?.message}</p>
                        </CardInput>
                        <CardInput state>
                            <label htmlFor="">Data de validade:</label>
                            <input type="text" disabled={disabled} {...register('dateValidity')} />
                            <p>{errors.dateValidity?.message}</p>
                        </CardInput>
                        <CardInput state>
                            <label htmlFor="">Senha:</label>
                            <input type="text" disabled={disabled} {...register('passwordCard')} />
                            <p>{errors.passwordCard?.message}</p>
                        </CardInput>
                        <CardSelect>
                            <select  {...register('type')}>
    
                                <option value="credito">Crédito</option>
                                <option value="debito">Débito</option>
                            </select>
                        </CardSelect>
                    </BoxCardInputs>
                    <BoxFormButtons>
                        {!disabled && < div className="cx-btns">
                            <button type="submit" className="save" ><img src={SaveIcon} alt="" />Salvar</button>
                            <button className="cancel" onClick={()=>setNewPaymentForm(false)} >Cancelar</button>
                        </div>
                    
                    }
                        
                        {disabled && <div className="cx-btns">
                            <button className="edit" onClick={()=>setDisabled(false)}><img src={LapisIcon} alt="" /> Editar</button>
                        
                        
                        </div>}
                    </BoxFormButtons>
                </form>
       </BoxForm>
    
    <BoxPayments>
        <h3>Seus Cartões</h3>
        {
            payments.length > 0 ? payments.map((i,k)=>(
                <CardPayments pay={i} key={k} />
            )) : <div>Nenhum cartão adicionado</div>
        }
    </BoxPayments>
    
    
    </Box>
}