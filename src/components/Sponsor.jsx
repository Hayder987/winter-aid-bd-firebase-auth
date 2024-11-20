import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const Sponsor = ({allData}) => {

    return (
        <div className="my-20">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 ">TRUSTED BY</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-500">THE BIGGEST BRANDS</h2>
            <div className="">
               <Swiper 
                 navigation={false} 
                 slidesPerView={3}
                 breakpoints={{
                    640: { spaceBetween: 350 }, 
                    768: { spaceBetween: 100 }, 
                    1260: { spaceBetween: 120 },
                  }}
                 modules={[Navigation,Autoplay]} 
                 className="mySwiper"
                 autoplay={{
                     delay: 500,  
                     disableOnInteraction: false, 
                 }}
                 speed={1000} 
                 > 
                      {
                        allData.map(item=>(
                            <SwiperSlide key={item.id}>
                      <div className='p-6 md:p-12'>
                        <img src={item.imgPath} alt="" className="max-w-[100px] md:max-w-[200px] lg:max-w-[600px] h-[50px] md:h-[80px] lg:h-[120px]" />
                      </div>
                      </SwiperSlide>
                        ))
                      }
               </Swiper>
            </div>
        </div>
    );
};

export default Sponsor;