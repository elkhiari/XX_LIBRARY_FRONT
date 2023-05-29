import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import HomeTitle from '../title/HomeTitle'
import Bookjson from '../../data/book.json'
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../utils/Loading';

function MostPublished() {
    const [loading,setLoading] = useState(false)
    const [treading,setTreading] = useState([])
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/profile/${id}`)
    }
    const getMostPublisher = async () => {
        setLoading(true)
        try {
          const response = await axios.get(process.env.REACT_APP_API_URL + '/books/MostPublisher');
          setTreading(response.data.users);
          setLoading(false)
        }
        catch (error) {
          console.log(error);
        }
      }
      useEffect(()=>{
        getMostPublisher();
    },[])


  return (
    <div className='mt-5 relative min-h-[300px]'>
        <HomeTitle title="Most published " subtitle="Top #20"/>

        {loading ?<Loading />:<Swiper
        slidesPerView={3}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
            640: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 4,
            },
            1280: {
                slidesPerView: 5,
            },
            1536: {
                slidesPerView: 5,
            },
            1792: {
                slidesPerView: 5,
            },
            2048: {
                slidesPerView: 5,
            },
            2304: {
                slidesPerView: 7,
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
        {treading && treading.map((users,index) => (
                index > 10 ? null : 
                <SwiperSlide className="mt-5 mb-5 syne " key={index}>
                    <div className="flex items-center justify-center flex-col p-5 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]  space-y-5 cursor-pointer hover:scale-110 hover:lg:scale-105  hover:hue-rotate-15 duration-700 ease-in-out hover:rounded-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" >
                        <img src={users.avatar} alt="avatar" className="w-20 h-20 lg:w-28 object-cover lg:h-28 z-10 rounded-lg " onClick={()=>handleClick(users._id)} />
                        <div className="px-3 py-1 text-[5px] md:text-[7px] lg:text-[10px] font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full  dark:bg-blue-900 dark:text-blue-200">{users.name}</div>
                    </div>
                </SwiperSlide>
            ))}
      </Swiper>
}
    </div>
  )
}

export default MostPublished