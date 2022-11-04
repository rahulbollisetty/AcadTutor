import React from 'react'
import './Semester.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation , Mousewheel} from "swiper";
import Subject from '../Subject/Subject';
const Semester = (props) => {
  return (
    <div className='semester'>
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