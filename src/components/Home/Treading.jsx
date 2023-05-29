import React, { useContext, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Bookjson from "../../data/book.json";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";
import BookCard from "../utils/BookCard";
import HomeTitle from "../title/HomeTitle";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../utils/Loading";


export default function Trending() {
  // const {loading,setLoading} = useContext(AuthContext)
  const [loading,setLoading] = useState(false)
    const [treading,setTreading] = useState([])
    const getBooks = async () => {
      
        try {
          setLoading(true)
          const response = await axios.get(process.env.REACT_APP_API_URL + '/books/mostLike/');
          setTreading(response.data.books);
          setLoading(false)
        }
        catch (error) {
          console.log(error);
        }
      }
      useEffect(()=>{
        getBooks();
      },[])
  return (
    <div className="relative min-h-[300px]">
      <HomeTitle title="Treading " subtitle="top #10"/>
      {loading?<Loading />:
      <Swiper
        slidesPerView={2}
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
            1350: {
                slidesPerView: 4,
            },
            1536: {
                slidesPerView: 6,
            },
            1792: {
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
        {treading && treading.map((book,index) => (
                index > 10 ? null : 
                <SwiperSlide className="mt-5 mb-5" key={index}>
                    <BookCard key={book._id} book={book} boxShadow={true} />
                </SwiperSlide>
            ))}
      </Swiper>
}
    </div>
  );
}
