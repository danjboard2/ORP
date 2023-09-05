import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Swiper as OriginalSwiper } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function FancySwiper() {
    const [swiperInstance, setSwiperInstance] = useState<OriginalSwiper | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const numberOfSlides = 3;
  
    useEffect(() => {
        if (swiperInstance) {
          swiperInstance.on('slideChange', function (this: any) {
            // Calculate the corrected index based on the internal activeIndex property
            let correctedIndex = swiperInstance.activeIndex % numberOfSlides;
      
            // Check if we are at a loop boundary
            if (this.isEnd && this.loop) {
              correctedIndex = numberOfSlides - 1;
            }
            if (this.isBeginning && this.loop) {
              correctedIndex = 0;
            }
            setActiveIndex(correctedIndex);
          });
        }
      }, [swiperInstance]);
  
    const goToSlide = (index: number) => {
      if (swiperInstance) {
        swiperInstance.slideTo(index);
      }
    };
  

  return (
    <>
<section id="fancyswiper" className="overflow-hidden"> {/* page wrapper */}
    <div className="pl-20 w-[800px] relative overflow-y-clip"> { /* sliding text wrapper */}
    <div className="curvedbg absolute w-[2400px] h-[1200px] top-0 right-0 bottom-0 -left-[1000px] bg-[#F6F6F6]"></div>
    <Swiper
    onSwiper={(swiper: OriginalSwiper) => setSwiperInstance(swiper)}
    className="w-full h-[925px] "
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={true}
      rewind={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      allowTouchMove={true}
      data-swiper-autoplay={5000}
      pagination={false}
    >
      <SwiperSlide className="swiper-slide-first"><div className="flex flex-col ml-[10%] h-full justify-center"><h2 className="text-4xl font-bold uppercase text-black">Soil Remediation</h2><p className="text-xl my-6 text-black pr-32" >Due to the wide usage of petroleum products in our world every day, our land has become saturated with contaminates. Our products safely remove all signs of the contamination leaving you with lush, fertile soil.</p></div></SwiperSlide>
      <SwiperSlide><div className="flex flex-col ml-[10%] h-full justify-center"><h2 className="text-4xl font-bold uppercase text-black" >Adding Value</h2><p className="text-xl my-6 text-black pr-32" >Often contaminated sites remain untouched for years because of the elevated cost of remediation. The use of microorganisms is a fraction of the cost. These microorganisms feed off of the pollutants, break them down and eliminate them.</p></div></SwiperSlide>
      <SwiperSlide><div className="flex flex-col ml-[10%] h-full justify-center"><h2 className="text-4xl font-bold uppercase text-black">Breathe Easy</h2><p className="text-xl my-6 text-black pr-32" >The soil will become usable land at the end of the treatment. This land can now be used for urban development without the risk of spreading contaminates. Our products are 100% non-toxic, safe to use and extremely effective.</p></div></SwiperSlide>
      <div className="custom-navigation z-10 flex flex-row w-1/5 justify-between">
        <div className="swiper-button-prev"><FaCircleChevronLeft size={50} className="text-[#D9D9D9] hover:text-[#404041]"/></div>
        <div className="swiper-button-next"><FaCircleChevronRight size={50} className="text-[#D9D9D9] hover:text-[#404041]"/></div>
      </div>
    </Swiper>
    </div>
    <div className="absolute top-0 left-0 right-0 bottom-0 h-[925px] -z-[1]">  { /* background images */}
        <div className={`item absolute top-0 left-0 right-0 bottom-0 h-[925px]  bg-[url('/media/images/soil-remediation.jpg')] bg-cover bg-right ${activeIndex === 0 ? 'active' : ''}`} onClick={() => goToSlide(0)}>
         this
        </div>
        <div className={`item absolute top-0 left-0 right-0 bottom-0 h-[925px] bg-[url('/media/images/adding-value.jpg')] bg-cover bg-right  ${activeIndex === 1 ? 'active' : ''}`} onClick={() => goToSlide(1)}>
        this
          </div>
        <div className={`item absolute top-0 left-0 right-0 bottom-0 h-[925px] bg-[url('/media/images/breathe-easy.jpg')] bg-cover bg-right  ${activeIndex === 2 ? 'active' : ''}`} onClick={() => goToSlide(2)}>
        this
          </div>
    </div>
    </section>
    </>
  );
};