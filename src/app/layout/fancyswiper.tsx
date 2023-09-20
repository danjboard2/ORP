import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
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
interface totalSlides {
  numberSlides: number;
}

const FancySwiper: React.FC<PageContentProps & totalSlides> = ({ pages, numberSlides }) => {
  
    const [swiperInstance, setSwiperInstance] = useState<OriginalSwiper | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    let numberOfSlides = numberSlides;
  
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
    <div className={`curvedbg absolute w-[2400px] h-[865px] sm:h-[1300px] top-0 right-0 bottom-0 -left-[1620px] sm:-left-[1420px] lg:-left-[1220px] xl:-left-[1000px] ${page.name}`} style={{
        background : page.bg,
      }}></div>
    <Swiper
    onSwiper={(swiper: OriginalSwiper) => setSwiperInstance(swiper)}
    className={`w-full sm:w-[300px] lg:w-[600px] sm:!ml-[5%]  h-[865px] sm:min-h-[965px] sm:h-[100vh] max-h-[1100px]  ${page.name}`}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      rewind={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      allowTouchMove={true}
      pagination={false}
    >     
       {page.sections.map((section: Section, sectionIndex: number) => (
        <div key={sectionIndex}>
          <SwiperSlide className="swiper-slide-first"><div className=" flex px-10 sm:px-0 flex-col xl:ml-[10%] w-full sm:w-[300px] lg:w-[600px] sm:min-h-[900px] sm:max-h-[1000px] h-full justify-end sm:justify-center"><div className="sm-title pb-20 sm:pb-0 text-base sm:text-xl xl:text-3xl my-6  lg:pr-32" style={{
        color: page.color,
      }} dangerouslySetInnerHTML={{ __html: section.content }}></div></div></SwiperSlide>
          </div>
          ))}
                <div className="cust-sw block absolute top-[250px] xl:left-[10%]">
      <h1 className="hidden sm:block text-2xl sm:text-4xl xl:text-5xl text-[#73CD4A] font-bold uppercase" style={{
        color: page.color,
      }}>{page.pagetitle}</h1>
      </div>
        <div className={`custom-navigation z-10 flex flex-row w-[120px] sm:w-[180px] justify-between ${page.name} ${numberOfSlides == 1 ? 'hidden' : ''}`} >
          <div className="swiper-button-prev"><FaCircleChevronLeft size={50} className=" text-gray-400 sm:text-[#D9D9D9]"/></div>
          <div className="swiper-button-next"><FaCircleChevronRight size={50} className="text-gray-400 sm:text-[#D9D9D9]"/></div>
      </div>
    </Swiper>
    <Image src={`${page.smallimage1}`} priority={true} width={191} height={191} alt="Organic Remediation Products" className={`smallimg smallimage1 sm:w-[191px] absolute right-[20px] ${page.name}   ${activeIndex === 0 ? 'active' : activeIndex === 1 ? 'queue-top' : 'queue-mid'}`}/>
    <Image src={`${page.smallimage2}`} priority={true} width={218} height={218} alt="Organic Remediation Products" className={`smallimg smallimage2 sm:w-[218px] absolute right-[100px] ${page.name}  ${activeIndex === 1 ? 'active' : activeIndex === 2 ? 'queue-top' : 'queue-mid'}`}/>
    <Image src={`${page.smallimage3}`} priority={true} width={304} height={304} alt="Organic Remediation Products" className={`smallimg smallimage3 sm:w-[304px] absolute right-[180px]  ${page.name}  ${activeIndex === 2 ? 'active' : activeIndex === 0 ? 'queue-top' : 'queue-mid'} `}/>
    <div className="absolute top-0 left-0 right-0 bottom-0 h-[925px] -z-[1]">  { /* background images and small bubble images */}

        <div className={`item absolute top-0 left-0 right-0 bottom-0 sm:h-[100vh] h-[680px] sm:min-h-[965px] max-h-[1200px] bg-cover bg-right ${activeIndex === 0 ? 'active' : ''}`} onClick={() => goToSlide(0)} style={{
        backgroundImage: activeIndex === 0 ? page.image1 : '',
      }}>
        </div>
        <div className={`item absolute top-0 left-0 right-0 bottom-0 sm:h-[100vh] h-[680px] sm:min-h-[965px] max-h-[1200px] bg-cover bg-right  ${activeIndex === 1 ? 'active' : ''}`} onClick={() => goToSlide(1)} style={{
        backgroundImage: activeIndex === 1 ? page.image2 : '',
      }}>
          </div>
        <div className={`item absolute top-0 left-0 right-0 bottom-0 sm:h-[100vh] h-[680px] sm:min-h-[965px] max-h-[1200px] bg-cover bg-right  ${activeIndex === 2 ? 'active' : ''}`} onClick={() => goToSlide(2)} style={{
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