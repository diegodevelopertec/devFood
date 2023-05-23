import { Box, BoxLeft, BoxRight } from "./style"
import OpenMenu from './../.../../../assets/imgs/iconsmenu.png'
import CloseMenu from './../.../../../assets/imgs/close.png'
import { useMenuMobile } from "../../Context/menuMobileContext"
import { Link } from "react-router-dom"


export const HeaderMobile=()=>{
    const {stateMenu,setStateMenuMobile}=useMenuMobile()

    return <Box>
        <BoxLeft>
            <h3>Bão Lanche</h3>
        </BoxLeft>
        <BoxRight stateMenu={stateMenu}>
            <div className="btn-menu">
                <button onClick={()=>setStateMenuMobile(true)}>
                    <img src={OpenMenu} alt="" />
                </button>
            </div>
            <div className="menu-nav">
                 <div className="cx-btn">
                  <button onClick={()=>setStateMenuMobile(false)}>
                     <img src={CloseMenu} alt="" />
                 </button>
                </div>
                <nav>
                    <Link to={'/'} onClick={()=>setStateMenuMobile(false)}>Inicio</Link>
                    <Link to={''} onClick={()=>setStateMenuMobile(false)}>Sacola</Link>
                    <Link to={'pedidos'} onClick={()=>setStateMenuMobile(false)}>Compras</Link>
                    <Link to={'/user'} onClick={()=>setStateMenuMobile(false)}>Conta</Link>
                    <Link to={'/sobre'} onClick={()=>setStateMenuMobile(false)}>Sobre</Link>
                </nav>
            </div>
        </BoxRight>
    </Box>

}