import * as S from './style'





export const ProductBad=()=>{
    return <S.Container>
        <div className="area-left">
            <div className='area--image'>
                <img src={ '../../src/assets/imgs/pz1.png'} alt="" />
            </div>
            <div className="area-text">
                <span className='name'>
                    Burguer X
                </span>
                <span>
                    r$23,54
                </span>
            </div>
        </div>
        <div className="area-right">
            <div className="counter">
                <button className="btn-minus">
                    -
                </button>
                <div className="cx-qdt">
                    8
                </div>
                <button className="btn-add">
                    +
                </button>
            </div>
        </div>
    </S.Container>
}