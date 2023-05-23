import LojaIcon from './assets/imgs/lojaicon.png'
import MotoIcon from './assets/imgs/moto.png'
import UserIcon from './assets/imgs/user.png'
import Inter from './assets/imgs/intericon.png'
import * as S from './styled'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes } from './Routes'
import { ButtonMenu } from './Components/ButtonMenu'
import { HeaderMobile } from './Components/HeaderMobile';

const App=()=>{

  return <S.Body>
        <S.LeftContent>
            <S.Menu>
              <ButtonMenu 
                  src={LojaIcon}
                  link={'/'}  
                  marginhorizontal='10' 
                  text='inicio'
                  marginvertical='10' />
              <ButtonMenu 
                  link={'/pedidos'}  
                  src={MotoIcon} 
                    marginhorizontal='10' 
                  marginvertical='10' 
                  text='pedidos'/>
                    
              <ButtonMenu  
                 src={UserIcon} 
                 link={'/user' }
                 marginhorizontal='10' 
                 marginvertical='10' 
                 text='conta'
              />
                <ButtonMenu  
                 src={Inter} 
                 link={'/sobre' }
                 marginhorizontal='10' 
                 marginvertical='10' 
                 text='conta'/>
           </S.Menu>
        </S.LeftContent>

        <S.RightContent>
          <HeaderMobile />
          <Routes/>
         <ToastContainer />
        </S.RightContent>
  </S.Body>
}

export default App