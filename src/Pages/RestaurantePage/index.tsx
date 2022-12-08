import * as S from './style'
import RestauranteImage from '../../assets/imgs/resturanteImage.png'
export const RestaurantePage=()=>{
    return <S.Container>
       <S.Containercardápio>
            <h3>
                Bem vindo á area de Resturante
            </h3>
            <div className='cx-img'>
                <img src={RestauranteImage} height='300' width="800" alt="" />
            </div>
            <span className='cardapio-text'>
                <h3>CARDÀPIO</h3>
                <p>Marque o tipo de marmita e monte sua marmita no campo ao lado :</p>
                <div className="check">
                    <input type="radio" name="type" id="" value={'p'}/> P - R$24.00
                    <input type="radio" name="type" id="" value={'m'} /> M - R$25.00
                </div>
               <span className="area-cardapio" >
                     <div className='left-top' >
                        <ul>
                                <li>Farofa</li>
                                <li>Feijaoada</li>
                                <li>Macarronada</li>
                                <li>Farofa</li>
                                <li>Farofa</li>
                                <li>Farofa</li>
                                <li>Farofa</li>
                                <li>Feijaoada</li>
                                <li>Macarronada</li>
                                <li>Farofa</li>
                                <li>Farofa</li>
                                <li>Farofa</li>
                            </ul>
                     </div>
                     <div className="right-bottom">
                        <textarea name="" id="" placeholder='Digite o seu pedido aqui...' ></textarea>
                        <button>Enviar</button>
                     </div>

               </span>
            </span>
        
        
        </S.Containercardápio>
    </S.Container>
}