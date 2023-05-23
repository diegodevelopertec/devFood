import { Box, BoxContent, HeaderBoxContext } from "./style"
import PayIcon from './../../assets/imgs/pay.png'
import UserIcon from './../../assets/imgs/login.png'
import AddressIcon from './../../assets/imgs/address.png'
import { useGlobalContext } from "../../Context/AuthContext"

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

const {Logout}=useGlobalContext()
    return <Box>
        <BoxContent>
           <HeaderBoxContext>
              <img src={UserIcon} alt="" />
              <h2>Dados de Usuário</h2>

           </HeaderBoxContext>
        </BoxContent>
        <BoxContent>
           <HeaderBoxContext>
              <img src={AddressIcon} alt="" />
              <h2>Dados de Endereço</h2>
           </HeaderBoxContext>
        </BoxContent>
        <BoxContent>
           <HeaderBoxContext>
              <img src={PayIcon} alt="" />
              <h2>Dados de Pagamentos</h2>
           </HeaderBoxContext>
        </BoxContent>



    </Box>
}