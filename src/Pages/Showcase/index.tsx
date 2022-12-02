import { BannerPromotion } from "../../Components/BannerPromotions"
import bannerImage from '../../assets/imgs/banner.jpg'
import bg from '../../assets/imgs/bg1.png'
import * as S from './style'
import { CardProduct } from "../../Components/CardProduct"


export const Showcase=()=>{
    return <S.Container>
    <S.ContainerBanner>
       <BannerPromotion unity="%" widthBanner="100" heightBanner="400" imageBanner={bannerImage} />
    </S.ContainerBanner>
    <S.ShowcaseProduct>
       <CardProduct imageProduct={bg} />
       <CardProduct imageProduct={bg} />
       <CardProduct imageProduct={bg} />
       <CardProduct imageProduct={bg} />
       <CardProduct imageProduct={bg} />
       <CardProduct imageProduct={bg} />
       <CardProduct imageProduct={bg} />
       <CardProduct imageProduct={bg} />
       <CardProduct imageProduct={bg} />
       <CardProduct imageProduct={bg} />
       <CardProduct imageProduct={bg} />
       <CardProduct imageProduct={bg} />
    </S.ShowcaseProduct>
     
    
      
    </S.Container>
}