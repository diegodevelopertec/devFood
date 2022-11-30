import * as S from './styled'
import { Routes } from './Routes'

const App=()=>{
  return <S.Body>
    <S.LeftContent>
  hi
    </S.LeftContent>
    <S.RightContent>
      <Routes/>
    </S.RightContent>
  </S.Body>
}

export default App