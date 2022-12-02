import * as S from './style'

type Props={
    imageBanner:string,
    widthBanner:string,
    heightBanner:string,
    unity:'px' | '%'
}
export const BannerPromotion=({imageBanner,widthBanner,heightBanner,unity}:Props)=>{
    return <S.bannercontainer unity={unity} image={imageBanner} height={heightBanner} width={widthBanner} ></S.bannercontainer>
}