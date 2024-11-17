
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
      <Swiper 
      navigation={false} 
      modules={[Navigation,Autoplay]} 
      className="mySwiper"
      autoplay={{
          delay: 3000,  
          disableOnInteraction: false, 
      }}
      >
        
        <SwiperSlide>
        <div className='mt-12'
           style={{
             backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co/j3mfF6L/banner4.jpg")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             height: '500px',
             width: '100%',
             display: 'flex', // Center the content
             justifyContent: 'center',
             alignItems: 'center',
           }}
         >
      
        </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;