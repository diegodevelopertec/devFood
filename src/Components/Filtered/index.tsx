import { Box, BoxSearch } from "./style"
import Lupa from './../../assets/imgs/lupa.png'

export const Filtered=()=>{
    return <Box>
            <BoxSearch>
               <input type="text" placeholder="Pesquise por um produto..." />
              <span><img src={Lupa} alt="" /></span>
            </BoxSearch>
        </Box>
}