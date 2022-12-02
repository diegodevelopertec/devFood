import { Product } from '../../Types/Products'
import * as S from './style'


type Props={
    imageProduct:string,
    data?:Product
}
export const CardProduct=({imageProduct}:Props)=>{
    return <S.Container>
        <S.ContainerImage>
            <img src={imageProduct}/>
        </S.ContainerImage>
        <S.DataProduct>
            <div className='info-product'>
                <small className='category-name'>categoria</small>
                <h4>Name Product</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repellendus ab tenetur laudantium deleniti a quia eveniet, suscipit nulla  
                </p>
                <p className="price">
                    R$23,50
                </p>
            <div className="cx-btn-product">
               <button>fazer pedido</button>
            </div>
            </div>
        </S.DataProduct>
    </S.Container>
}