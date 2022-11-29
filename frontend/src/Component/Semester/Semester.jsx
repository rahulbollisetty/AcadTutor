import React,{useEffect}from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import { Keyboard, Pagination, Navigation , Mousewheel} from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Semester.css'
import Subject from '../Subject/Subject';
const Semester = (props) => {
  useEffect(() => {
    AOS.init(
      {
        offset:180, 
        duration:500,
        easing:"linear",
        delay:100,
      }
    );
  }, [])
  return (
    <div data-aos={props.fade} className='semester'>
        <h2 className='sem-heading'>{props.sem} semester</h2>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={2}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
      {
      props.subData.map((val,index) => {
               return <SwiperSlide><Subject key={index} img={val.img} name={val.Name} desc={val.Desc}/></SwiperSlide>
      })
      }
      </Swiper>
     
    </div>
  )
}

export default Semester