import * as S from './style'
import { Requests } from '../../Components/Requests'



export const DeliveryPage=()=>{
    return <S.Container>
          <div className="intro">
             <h3>Histórico de Pedidos</h3>
             <p>Confira aqui os estado dos seus pedidos</p> 
          </div>
          <div className="requests-container">
            <Requests />
            <Requests />
            <Requests />
            <Requests />
            <Requests />
            <Requests />
            <Requests />
            <Requests />
            <Requests />
            <Requests />
          </div>


    </S.Container>
}