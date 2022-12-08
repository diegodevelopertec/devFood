import { Product } from '../../Types/Products'
import * as S from './style'

type Props={
    data?:Product,
    clikedStartModal?:()=>void
    onClick:(dataCard:any)=>void
}
export const CardProduct=({data,clikedStartModal,onClick}:Props)=>{

const ClikeData=()=>onClick(data)
   
    return <S.Container >
        <S.ContainerImage>
            <img src={`./../../assets/imgs/${data?.imageProduct}`}/>
        </S.ContainerImage>
        <S.DataProduct>
            <div className='info-product'>
                <p className='category--name'>{data?.category}</p>
                <h4>{data?.name} </h4>
                <p className='ingredientes-text'>
                  {data?.igredientes}  
                </p>
                <p className="price">
                    R$ {data?.price.toFixed(2)}
                </p>
            </div>
            <div className="cx-btn-product">
               <button onClick={ClikeData}>fazer pedido</button>
            </div>
        </S.DataProduct>
    </S.Container>
}