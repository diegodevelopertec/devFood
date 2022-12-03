import { Product } from '../../Types/Products'
import * as S from './style'


type Props={
    data?:Product,
    clikedStartModal:()=>void
   
}
export const CardProduct=({data,clikedStartModal}:Props)=>{

    



    return <S.Container >
        <S.ContainerImage>
            <img src={data?.imageProduct}/>
        </S.ContainerImage>
        <S.DataProduct>
            <div className='info-product'>
                <p className='category--name'>{data?.category}</p>
                <h4>{data?.name} </h4>
                <p>
                  {data?.igredientes}  
                </p>
                <p className="price">
                    R$ {data?.price}
                </p>
            <div className="cx-btn-product">
               <button onClick={clikedStartModal}>fazer pedido</button>
            </div>
            </div>
        </S.DataProduct>
    </S.Container>
}