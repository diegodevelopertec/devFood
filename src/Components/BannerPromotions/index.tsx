import * as S from './style'

type Props={
    imageBanner:string,
    widthBanner:string,
    heightBanner:string,
    
}
export const BannerPromotion=({imageBanner,widthBanner,heightBanner}:Props)=>{
    return <S.bannercontainer  image={imageBanner} height={heightBanner} width={widthBanner} ></S.bannercontainer>
}