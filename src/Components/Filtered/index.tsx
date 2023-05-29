import { Box, BoxSearch } from "./style"
import Lupa from './../../assets/imgs/lupa.png'
import { useGlobalContext } from "../../Context/AuthContext"
import { ChangeEvent, useState } from "react"

export const Filtered=()=>{
  const {setFilter,filterData}=useGlobalContext()
  const [filterString,setFilterString]=useState<string>('')


 

  const setStringToFilter=()=>{
    setFilter(filterString)
    setFilterString('')
  }

    return <Box>
            <BoxSearch>
               <input type="text" onChange={e=>setFilter(e.target.value)} value={filterData}  placeholder="Pesquise por um produto..." />
              <span onClick={setStringToFilter} ><img src={Lupa} alt="" /></span>
            </BoxSearch>
        </Box>
}