import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    title: 'Hartron Advance Skill Center',
    Video: 'https://res.cloudinary.com/dnpn8ljki/video/upload/v1749911808/ai_jxyyzn.mp4' // replace with your own .mp4 video URL
  },
];

export default function HeroSwiper() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-h-[550px] overflow-hidden relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <video
                  src={slide.Video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-[550px] object-cover"
                />
                {/* Optional overlay title */}
                {/* {slide.title && (
                  <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-lg font-semibold">
                    {slide.title}
                  </div>
                )} */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
