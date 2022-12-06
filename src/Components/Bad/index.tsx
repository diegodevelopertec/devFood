import * as S from './style'
import BadIcon from '../../assets/imgs/sacola.png'

export const Bad=()=>{
    return <S.Container>
        <S.BadHeader>
            <div className="header--text">
                <img src={BadIcon} alt="" /><span>Sacola[0]</span>
            </div>
            
            <S.NotificationBad>
            2
        </S.NotificationBad>
        </S.BadHeader>
        <S.BadBody>

        </S.BadBody>
        
    </S.Container>



}