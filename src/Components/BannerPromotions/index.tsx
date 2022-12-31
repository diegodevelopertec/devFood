import { BannerImgs } from '../../data/bannerData';
 import { Carousel } from 'antd';
 import  './style.css'




 export const BannerPromotions=() => {
  
 
   return (
     <Carousel className='container-slide' autoplay>
        {BannerImgs.map((item,key)=>(
             <div key={key}   >
               <div className='container-image' >
                  <img  src={item.img} />
                
              </div>
             </div>
        ))}
     </Carousel>
   );
 };

