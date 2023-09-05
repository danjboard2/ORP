import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Swiper as OriginalSwiper } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/effect-fade';

interface Section {
  title: string;
  content: string;
}

interface Pages {
  name: string;
  pagetitle: string;
  image1: string;
  image2: string;
  image3: string;
  smallimage1: string;
  smallimage2: string;
  smallimage3: string;
  bg: string;
  color: string;
  sections: Section[];
}

interface PageContentProps {
  pages: Pages[];
}

const FancySwiper: React.FC<PageContentProps> = ({ pages }) => {
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
    <div className="w-full relative overflow-y-clip"> { /* sliding text wrapper */}
    {pages.map((page: Pages, pageIndex:number) => (
      <div key={pageIndex}>
    <div className={`curvedbg absolute w-[2400px] h-[1200px] top-0 right-0 bottom-0 -left-[1000px] ${page.name}`} style={{
        background : page.bg,
      }}></div>
    <Swiper
    onSwiper={(swiper: OriginalSwiper) => setSwiperInstance(swiper)}
    className="w-[600px] !ml-[5%] h-[925px] "
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
       {page.sections.map((section: Section, sectionIndex: number) => (
        <div key={sectionIndex}>
          <SwiperSlide className="swiper-slide-first"><div className="flex flex-col ml-[10%] w-[600px] h-full justify-center"><h2 className="text-4xl font-bold uppercase" style={{
        color: page.color,
      }}>{section.title}</h2><p className="text-xl my-6  pr-32" style={{
        color: page.color,
      }}>{section.content}</p></div></SwiperSlide>
          </div>
          ))}
                <div className="block absolute top-[250px] left-[10%]">
      <h1 className="text-5xl text-[#73CD4A] font-bold uppercase">{page.pagetitle}</h1>
      </div>
        <div className={`custom-navigation z-10 flex flex-row w-[180px] justify-between ${page.name}`}>
          <div className="swiper-button-prev"><FaCircleChevronLeft size={50} className="text-[#D9D9D9]"/></div>
          <div className="swiper-button-next"><FaCircleChevronRight size={50} className="text-[#D9D9D9]"/></div>
      </div>
    </Swiper>
    <div className="absolute top-0 left-0 right-0 bottom-0 h-[925px] -z-[1]">  { /* background images */}
        <div className={`item absolute top-0 left-0 right-0 bottom-0 h-[925px]  bg-cover bg-right ${activeIndex === 0 ? 'active' : ''}`} onClick={() => goToSlide(0)} style={{
        backgroundImage: activeIndex === 0 ? page.image1 : '',
      }}>
        </div>
        <div className={`item absolute top-0 left-0 right-0 bottom-0 h-[925px] bg-cover bg-right  ${activeIndex === 1 ? 'active' : ''}`} onClick={() => goToSlide(1)} style={{
        backgroundImage: activeIndex === 1 ? page.image2 : '',
      }}>
          </div>
        <div className={`item absolute top-0 left-0 right-0 bottom-0 h-[925px] bg-cover bg-right  ${activeIndex === 2 ? 'active' : ''}`} onClick={() => goToSlide(2)} style={{
        backgroundImage: activeIndex === 2 ? page.image3 : '',
      }}>
          </div>
    </div>
           </div>
                      ))}
        </div>
    </section>
    </>
  );
};
export default FancySwiper