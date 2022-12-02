import * as S from './styled'
import { Routes } from './Routes'
import { ButtonMenu } from './Components/ButtonMenu'
import BurguerImage from '.././src/assets/imgs/burguer.png'
import UserIcon from '.././src/assets/imgs/user.png'
import LojaIcon from '.././src/assets/imgs/lojaicon.png'
import MotoIcon from '.././src/assets/imgs/moto.png'
import LogoIcon from '.././src/assets/imgs/logo.png'


const App=()=>{
  return <S.Body>
        <S.LeftContent>
            <S.Menu>
              <ButtonMenu src={LojaIcon} />
              <ButtonMenu src={MotoIcon}/>
              <ButtonMenu src={UserIcon}/>
            </S.Menu>
        </S.LeftContent>

        <S.RightContent>
          <S.HeaderApp>
            <S.CardLoja>
              <div className="logo">
              <img src={LogoIcon} alt="" /> <span>Rangoo</span>
              </div>
              <div className="search-loja">
                  <input type="search" name="" id="" />
              </div>
            </S.CardLoja>
          </S.HeaderApp>
          <Routes/>
        </S.RightContent>
  </S.Body>
}

export default App