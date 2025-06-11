import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCards } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const testimonialsData = [
    {
      img: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Mayuri Samanta',
      role: 'Freelancer to SDE at LoyWinfTech Pvt. Ltd.',
      description:
        "Facing pressure to marry, Mayuri felt trapped and kept her desire for a different career path hidden. To delay marriage, she pretended to have completed a course in banking and government exams, all while working in low-paying jobs. Her life took a turn when a friend suggested Masai. Even though Mayuri was sceptical of the pay-after-placement model, she was determined to pursue a career in tech. After convincing her parents, she saw Masai as her last chance before agreeing to an arranged marriage. Mayuri excelled in the Masai School Admission Test (MSAT) and thrived in Masai's intense II–II–6 routine and updated curriculum, mastering Java and improving her English skills. Her hard work paid off when she landed a position as a JAVA Developer at LowvirTech Pvt. Ltd.",
    },
    {
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'Rahul Sharma',
      role: 'Frontend Developer',
      description:
        'This platform helped me transition into a successful web developer. The learning path was clear and practical. The instructors were knowledgeable and always available to help. The projects were challenging but rewarding, and I felt prepared for job interviews right after completing the course.',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Anjali Verma',
      role: 'UI/UX Designer',
      description:
        'Excellent course structure and very supportive mentors. Highly recommended for design enthusiasts. The curriculum covered both theory and practical applications, and the portfolio projects helped me showcase my skills to potential employers. I landed my dream job within two months of completing the program!',
    },
    {
      img: 'https://randomuser.me/api/portraits/men/51.jpg',
      name: 'Vikas Mehta',
      role: 'Full Stack Developer',
      description:
        'The projects and assignments gave me real-world experience that was crucial for landing my first job. The code reviews were particularly valuable, helping me improve my coding standards. The career support team was exceptional in preparing me for interviews and salary negotiations.',
    },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      setSwiperReady(true);
    }
  }, []);

  const handlePrev = () => {
    if (swiperReady && swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperReady && swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
            Shaping Success Stories Since 2024
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-600">
            Your Goal. Our Mission
          </p>
        </div>

        <div className="relative h-[550px] flex flex-col items-center justify-center">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, EffectCards]}
            effect={'cards'}
            grabCursor={true}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
              bulletClass: 'w-2 h-2 inline-block rounded-full bg-gray-300 mx-1',
              bulletActiveClass: '!bg-blue-600'
            }}
            cardsEffect={{
              perSlideOffset: 15,
              perSlideRotate: 1,
              slideShadows: true,
            }}
            loop={true}
            className="w-full max-w-4xl h-[450px]"
            onSwiper={(swiper) => {
              // This callback ensures Swiper is fully initialized
              swiperRef.current = swiper;
              setSwiperReady(true);
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 h-full flex flex-col relative">
                  <div className="absolute inset-0 rounded-lg shadow-blue-500/20 shadow-lg"></div>

                  <div className="mb-6 flex-grow px-6 z-10">
                    <p className="text-gray-600 italic">
                      {testimonial.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-4 z-10">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                    />
                    <div>
                      <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className='flex items-center gap-1 mt-5'>
            <button className="testimonial-prev mx-4 bg-blue-600 p-3 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none text-white">
              <FaChevronLeft className="text-lg" />
            </button>
            <div className="testimonial-pagination flex justify-center gap-1 mx-4 cursor-pointer"></div>
            <button
              className="testimonial-next mx-4 bg-blue-600 p-3 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none text-white"
              onClick={handleNext}
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}