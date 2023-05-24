import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Bookjson from "../book.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import BookCard from "../BookCard";

export default function Trending() {
  return (
    <div>
    <div className="mt-8">
        <div className="flex justify-center items-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-50 syne mb-4">
                Trending <span className="text-sm md:text-xl text-gray-500">top #20</span>
            </h1>
        </div>
        <div className="flex justify-center items-center">
            <div className="w-16 h-1 bg-blue-500 rounded-full mr-1"></div>
            <div className="w-16 h-1 bg-blue-500 rounded-full mr-1"> </div>
            <div className="w-16 h-1 bg-blue-500 rounded-full"> </div>
        </div>
    </div>
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
                <SwiperSlide className="mt-5 mb-5">
                    <BookCard key={book._id} book={book} boxShadow={true} />
                </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
