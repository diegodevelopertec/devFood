import * as S from './style'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import bannerImage from '../../assets/imgs/banner2.jpg'

/*
type Props={
    imageBanner:string,
    widthBanner:string,
    heightBanner:string,
    
}
*/

export const BannerPromotion=()=>{
    return <S.bannercontainer  >
 <Swiper slidesPerView={1}  >
      <SwiperSlide><img src={bannerImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={bannerImage} alt="" /></SwiperSlide>
      <SwiperSlide><img src={bannerImage} alt="" /></SwiperSlide>
      
      
    </Swiper>


    </S.bannercontainer>
}