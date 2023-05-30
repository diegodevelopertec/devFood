import { useGlobalContext } from '../../Context/AuthContext'
import {Container} from './style'
import  womanBurguer from './../../assets/imgs/banner_main_rf.png'
import  womanBurguerMain from './../../assets/imgs/banner_main2.png'

export const ContainerIntroHome=()=>{

    const {user}=useGlobalContext()
    return   <Container>
            <div className="area-img">
                <img src={user?.name ? womanBurguerMain : womanBurguer} alt="" />
            </div>
            <div className="area-text">
                    <div className="txt">
                        <h4>Bem vindo {user?.name}</h4>
                        <p>Aqui com a gente é :</p>
                    </div>
                <div className="cx-spans">
                            <span>Pediu</span>
                            <span>Logou</span>
                            <span>Chegou</span>  
                    </div> 
            </div>

    </Container>
   

}