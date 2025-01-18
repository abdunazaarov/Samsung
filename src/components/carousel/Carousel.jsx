import "./Carousel.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import phone1 from "../../assets/phone1.png"
import phone2 from "../../assets/phone2.png"
import phone3 from "../../assets/phone3.png"
import phone4 from "../../assets/phone4.png"
import phone5 from "../../assets/galaxy1.jpg"

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

function Carousel() {
    return (
      <>
        <Swiper 
        navigation={true} 
        loop={true} 
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]} 
        className="carousel container">
          <SwiperSlide><img className="carousel__img" src={phone5} alt="" /></SwiperSlide>
          <SwiperSlide><img className="carousel__img" src={phone5} alt="" /></SwiperSlide>
          <SwiperSlide><img className="carousel__img" src={phone5} alt="" /></SwiperSlide>
          <SwiperSlide><img className="carousel__img" src={phone5} alt="" /></SwiperSlide>
          <SwiperSlide><img className="carousel__img" src={phone5} alt="" /></SwiperSlide>
        </Swiper>
      </>
    );
}

export default Carousel;
  