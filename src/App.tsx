import * as S from './styled'
import { Routes } from './Routes'
import { ButtonMenu } from './Components/ButtonMenu'
import BurguerImage from '.././src/assets/imgs/burguer.png'
import PizzaImage from '.././src/assets/imgs/pizzas.png'
import UserImage from '.././src/assets/imgs/user.png'


const App=()=>{
  return <S.Body>
    <S.LeftContent>
      <div>
        <ButtonMenu src={BurguerImage}/>
        <ButtonMenu src={PizzaImage}/>
        <ButtonMenu src={UserImage}/>
      
      </div>
    </S.LeftContent>
    <S.RightContent>
      <Routes/>
    </S.RightContent>
  </S.Body>
}

export default App