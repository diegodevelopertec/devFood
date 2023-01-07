import { Product } from '../../Types/Products'
import * as S from './style'


type Props={
    data?:Product,
    onClick:(dataCard:any)=>void
}
export const CardProduct=({data,onClick}:Props)=>{

 

const ClickData=()=>onClick(data)

    return <S.Container >
        <S.ContainerImage>
            <img src={`${data?.imageProduct}`}/>
        </S.ContainerImage>
        <S.DataProduct>
            <div className='info-product'>
                <p className='category--name'>{data?.category}</p>
                <h4>{data?.name} </h4>
                <p className='ingredientes-text'>
                  {data?.ingredientes ? data?.ingredientes : null }  
                </p>
                <p className="price">
                    R$ {data?.price.toFixed(2)}
                </p>
            </div>
            <div className="cx-btn-product">
               <button onClick={ClickData}>fazer pedido</button>
            </div>
        </S.DataProduct>
    </S.Container>
}