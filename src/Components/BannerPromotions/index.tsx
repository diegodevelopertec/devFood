import { BannerImgs } from '../../data/bannerData';
 import { Carousel } from 'antd';
 import  './style.css'




 export const BannerPromotions=() => {
  
 
   return (
     <Carousel className='container-slide' autoplay>
        {BannerImgs.map((item,key)=>(
             <div key={key}   >
               <div className='container-image-banner' >
                  <img  className='img-banner' src={item.img} />
                
              </div>
             </div>
        ))}
     </Carousel>
   );
 };

