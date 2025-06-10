import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCreative, Parallax } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import './Swiper.css';

export default function ExpoSwiper() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    { title: 'Captain America: Brave New World', img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1748723343/captain_america_brave_new_world_ver2_qgl4de.jpg' },
    { title: 'Chhaava', img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1748723343/chhaava_afninc.jpg' },
    { title: 'Companion', img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1748723343/companion_qn8fak.jpg' },
    { title: 'Sinners', img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1748723343/sinners_ver4_jp4v3l.jpg' },
    { title: 'Avatar: The Way of Water', img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1748724801/avatar_the_way_of_water_ver2_sepwem.jpg' },
    { title: 'Black Panther: Wakanda Forever', img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1748724778/black_panther_wakanda_forever_ver2_zpnpvj.jpg' },
    { title: 'Top Gun: Maverick', img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1748724768/top_gun_maverick_ver3_yyc67d.jpg' },
    { title: 'Jurassic World Dominion', img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1748724758/jurassic_world_rebirth_ver2_doxjuz.jpg' },
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
    <div className="relative max-w-7xl mx-auto py-10 px-4">
      {/* Navigation Arrows */}
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
        className="expo-wrapper"
      >
        {slides.map(({ title, img }) => (
          <SwiperSlide key={title} className="expo-slide">
            <div className="relative h-full w-full">
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