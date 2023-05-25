import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Bookjson from "../../data/book.json";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";
import BookCard from "../utils/BookCard";
import HomeTitle from "../title/HomeTitle";


export default function Trending() {
  return (
    <div>
    <HomeTitle title="Trending " subtitle="top #20"/>
      <Swiper
        slidesPerView={2}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
            640: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 5,
            },
            1024: {
                slidesPerView: 5,
            },
            1280: {
                slidesPerView: 6,
            },
            1536: {
                slidesPerView: 7,
            },
            1792: {
                slidesPerView: 8,
            },
            2048: {
                slidesPerView: 9,
            },
            2304: {
                slidesPerView: 10,
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
        {Bookjson.map((book,index) => (
                index > 20 ? null : 
                <SwiperSlide className="mt-5 mb-5" key={index}>
                    <BookCard key={book._id} book={book} boxShadow={true} />
                </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
