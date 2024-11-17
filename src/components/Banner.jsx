
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='mb-12'>
      <Swiper 
      navigation={false} 
      modules={[Navigation,Autoplay]} 
      className="mySwiper"
      autoplay={{
          delay: 3000,  
          disableOnInteraction: false, 
      }}
      speed={1000} 
      >
        
        <SwiperSlide>
        <div className='mt-12 flex flex-col h-[400px] lg:h-[700px]'
           style={{
             backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co/j3mfF6L/banner4.jpg")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             width: '100%',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
           }}
         >
          <h1 className="mb-4 text-4xl md:text-6xl text-center font-bold text-white">Give a Little Help a Lot</h1>
          <p className="w-full text-center text-gray-300 lg:w-6/12">even small acts of kindness, generosity, or support can have a significant, positive impact on others. It encourages people to contribute, even if they feel their resources or efforts are limited, because every little bit counts and can make a big difference in someone elses life.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className='mt-12 flex flex-col h-[400px] lg:h-[700px]'
           style={{
             backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co.com/dGD0mZQ/banner3.jpg")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             width: '100%',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
           }}
         >
          <h1 className="mb-4 text-4xl md:text-6xl text-center font-bold text-white">Small Efforts, Big Impact</h1>
          <p className="w-full text-center text-gray-300 lg:w-6/12">even small acts of kindness, generosity, or support can have a significant, positive impact on others. It encourages people to contribute, even if they feel their resources or efforts are limited, because every little bit counts and can make a big difference in someone elses life.</p>
        </div></SwiperSlide>
        <SwiperSlide><div className='mt-12 flex flex-col h-[400px] lg:h-[700px]'
           style={{
             backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co.com/ZfhLfjj/banner2.jpg")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             width: '100%',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
           }}
         >
          <h1 className="mb-4 text-4xl md:text-6xl text-center font-bold text-white">Small Contributions, Big Results</h1>
          <p className="w-full text-center text-gray-300 lg:w-6/12">even small acts of kindness, generosity, or support can have a significant, positive impact on others. It encourages people to contribute, even if they feel their resources or efforts are limited, because every little bit counts and can make a big difference in someone elses life.</p>
        </div></SwiperSlide>
        <SwiperSlide><div className='mt-12 flex flex-col h-[400px] lg:h-[700px]'
           style={{
             backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co.com/mRhwD5N/banner1.jpg")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             width: '100%',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
           }}
         >
          <h1 className="mb-4 text-4xl md:text-6xl text-center font-bold text-white">Little Actions, Great Outcomes</h1>
          <p className="w-full text-center text-gray-300 lg:w-6/12">even small acts of kindness, generosity, or support can have a significant, positive impact on others. It encourages people to contribute, even if they feel their resources or efforts are limited, because every little bit counts and can make a big difference in someone elses life.</p>
        </div></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;