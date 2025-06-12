import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCreative, Parallax } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

export default function ExpoSwiper() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    { title: 'Hartron Advance Skill Center', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/I-15.png' },
    { title: 'Hartron Advance Skill Center', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/I-29.png' },
    { title: 'Hartron Advance Skill Center', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/I-18.png' },
    { title: 'Hartron Advance Skill Center', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/I-6.png' },
    { title: 'Hartron Advance Skill Center', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/I-3.png' },
    { title: 'Hartron Advance Skill Center', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/I-17.png' },
    { title: 'Hartron Advance Skill Center', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/I-29.png' },
    { title: 'Hartron Advance Skill Center', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/I-25.png' },
    { title: 'Hartron Advance Skill Center', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/I-22.png' },
  ];

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative py-10 md:px-4 px-0 ">

      <button
        ref={prevRef}
        className={`expo-arrow left-2 ${isBeginning ? 'opacity-30 cursor-default' : 'hover:bg-indigo-100'}`}
        aria-label="Previous slide"
        disabled={isBeginning}
      >
        <FaArrowLeft />
      </button>
      <button
        ref={nextRef}
        className={`expo-arrow right-2 ${isEnd ? 'opacity-30 cursor-default' : 'hover:bg-indigo-100'}`}
        aria-label="Next slide"
        disabled={isEnd}
      >
        <FaArrowRight />
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectCreative, Parallax]}
        centeredSlides
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        speed={800}
        slidesPerView={1.2}
        spaceBetween={60}
        grabCursor
        effect="creative"
        creativeEffect={{
          limitProgress: 4,
          perspective: true,
          prev: {
            shadow: true,
            translate: ['-120%', 0, -400],
            rotate: [0, 60, -10],
            opacity: 0.5,
            scale: 0.7,
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -400],
            rotate: [0, -60, -10],
            opacity: 0.5,
            scale: 0.7,
          },
        }}
        parallax
        pagination={{
          clickable: true,
          renderBullet: (_, className) =>
            `<span class="${className} expo-bullet"></span>`,
        }}
        onSlideChange={handleSlideChange}
        onInit={handleSlideChange}
        className="w-full md:h-[550px] "
      >
        {slides.map(({ title, img },index) => (
          <SwiperSlide key={index} className="expo-slide">
            <div className="relative md:h-full w-full">
              <img
                data-swiper-parallax="-15%"
                src={img}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2
                  data-swiper-parallax="-100%"
                  className="expo-caption text-white text-2xl font-bold"
                >
                  {title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}