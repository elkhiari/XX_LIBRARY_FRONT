import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import HomeTitle from '../title/HomeTitle'
import Bookjson from '../../data/book.json'
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from 'react-router-dom';

function MostPublished() {
    const navigate = useNavigate()
    const handleClick = (link) => {
        navigate(`/author/${link}`)
    }

  return (
    <div className='mt-5'>
        <HomeTitle title="Most published " subtitle="Top #20"/>

        <Swiper
        slidesPerView={3}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
            640: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 5,
            },
            1024: {
                slidesPerView: 6,
            },
            1280: {
                slidesPerView: 7,
            },
            1536: {
                slidesPerView: 10,
            },
            1792: {
                slidesPerView: 11,
            },
            2048: {
                slidesPerView: 13,
            },
            2304: {
                slidesPerView: 16,
            }
        }}
        centeredSlides={true}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {Bookjson.map((users,index) => (
                index > 20 ? null : 
                <SwiperSlide className="mt-5 mb-5" key={index}>
                    <div className="flex items-center justify-center w-20 h-20 lg:w-28 lg:h-28 cursor-pointer hover:scale-110 hover:lg:scale-125 duration-200 ease-in-out border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" >
                        <img src={users.publisher.avatar} alt="avatar" className="w-20 h-20 lg:w-28 lg:h-28 absolute z-10 rounded-lg " onClick={()=>handleClick(users.author)} />
                        <div className="px-3 py-1 text-[5px] md:text-[7px] lg:text-[10px] font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
                    </div>
                </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}

export default MostPublished