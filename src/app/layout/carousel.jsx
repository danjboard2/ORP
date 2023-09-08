import Link from 'next/link'
import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';


export default function Carousel() {

    return (
        <>
        <section className="w-full flex h-[100vh] justify-center items-center flex-col">
        <h1 className="text-6xl mb-10 text-[#3AAA01] font-bold uppercase">Projects</h1>
        <Swiper id="projects" className="w-full max-w-[2000px] !overflow-y-visible"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, EffectFade]}
        effect={"coverflow"}
        spaceBetween={-50}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          slidesPerView={5}
        centeredSlides={true}
        grabCursor={true}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop={true}
      >
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/soil-circle.jpg" width={500} height={500} alt="Soil Remediation"/></SwiperSlide>
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/sulphur-circle.jpg" width={500} height={500} alt="Sulphur Remediation"/></SwiperSlide>
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/flooding-circle.jpg" width={500} height={500} alt="Flooding"/></SwiperSlide>
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/mold-circle.webp" width={500} height={500} alt="Mold Remediation"/></SwiperSlide>
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/heating-circle.webp" width={500} height={500} alt="Heating Oil"/></SwiperSlide>
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/soil-circle.jpg" width={500} height={500} alt="Soil Remediation"/></SwiperSlide>
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/sulphur-circle.jpg" width={500} height={500} alt="Sulphur Remediation"/></SwiperSlide>
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/flooding-circle.jpg" width={500} height={500} alt="Flooding"/></SwiperSlide>
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/mold-circle.webp" width={500} height={500} alt="Mold Remediation"/></SwiperSlide>
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/heating-circle.webp" width={500} height={500} alt="Heating Oil"/></SwiperSlide>
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/soil-circle.jpg" width={500} height={500} alt="Soil Remediation"/></SwiperSlide>
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/sulphur-circle.jpg" width={500} height={500} alt="Sulphur Remediation"/></SwiperSlide>
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/flooding-circle.jpg" width={500} height={500} alt="Flooding"/></SwiperSlide>
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/mold-circle.webp" width={500} height={500} alt="Mold Remediation"/></SwiperSlide>
        <SwiperSlide className=""><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/heating-circle.webp" width={500} height={500} alt="Heating Oil"/></SwiperSlide>

        <div className={`custom-navigation z-10 flex flex-row w-[180px] m-auto justify-between`} >
          <div className="swiper-button-prev"><FaCircleChevronLeft size={50} className="text-[#000]"/></div>
          <div className="swiper-button-next"><FaCircleChevronRight size={50} className="text-[#000]"/></div>
      </div>
      </Swiper>
      </section>
      </>
    )
}