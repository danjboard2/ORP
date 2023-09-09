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
    <div className={`curvedbg opacity-[90%] sm:opacity-100 absolute w-[2400px] h-[1300px] top-0 right-0 bottom-0 -left-[1620px] sm:-left-[1420px] lg:-left-[1220px] xl:-left-[1000px] ${page.name}`} style={{
        background : page.bg,
      }}></div>
    <Swiper
    onSwiper={(swiper: OriginalSwiper) => setSwiperInstance(swiper)}
    className={`w-[260px] sm:w-[300px] lg:w-[600px] !ml-[5%] min-h-[965px] h-[100vh] max-h-[1200px]  ${page.name}`}
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
          <SwiperSlide className="swiper-slide-first"><div className="flex flex-col xl:ml-[10%] w-[260px] sm:w-[300px] lg:w-[600px] min-h-[900px] max-h-[1000px] h-full justify-center"><div className="pb-20 sm:pb-0 text-lg sm:text-xl xl:text-2xl my-6  lg:pr-32" style={{
        color: page.color,
      }} dangerouslySetInnerHTML={{ __html: section.content }}></div></div></SwiperSlide>
          </div>
          ))}
                <div className="cust-sw block absolute top-[250px] xl:left-[10%]">
      <h1 className="text-2xl sm:text-4xl xl:text-5xl text-[#73CD4A] font-bold uppercase" style={{
        color: page.color,
      }}>{page.pagetitle}</h1>
      </div>
        <div className={`custom-navigation z-10 flex flex-row w-[120px] sm:w-[180px] justify-between ${page.name} ${numberOfSlides == 1 ? 'hidden' : ''}`} >
          <div className="swiper-button-prev"><FaCircleChevronLeft size={50} className=" text-gray-400 sm:text-[#D9D9D9]"/></div>
          <div className="swiper-button-next"><FaCircleChevronRight size={50} className="text-gray-400 sm:text-[#D9D9D9]"/></div>
      </div>
    </Swiper>
    <Image src={`${page.smallimage1}`} priority={true} width={191} height={191} alt="Organic Remediation Products" className={`smallimage1 w-[100px] sm:w-[191px] absolute bottom-[20px] sm:bottom-auto right-[20px] sm:top-[170px] sm:left-[445px] lg:left-[645px] xl:left-[870px] ${page.name}`}/>
    <Image src={`${page.smallimage2}`} priority={true} width={218} height={218} alt="Organic Remediation Products" className={`smallimage2 w-[100px] sm:w-[218px] absolute bottom-[20px] sm:bottom-auto right-[100px] sm:top-[408px] sm:left-[400px] lg:left-[600px] xl:left-[820px] ${page.name}`}/>
    <Image src={`${page.smallimage3}`} priority={true} width={304} height={304} alt="Organic Remediation Products" className={`smallimage3 w-[100px] sm:w-[304px] absolute bottom-[20px] sm:bottom-auto right-[180px] sm:top-[665px] sm:left-[240px] lg:left-[440px] xl:left-[660px] ${page.name}`}/>
    <div className="absolute top-0 left-0 right-0 bottom-0 h-[925px] -z-[1]">  { /* background images and small bubble images */}

        <div className={`item absolute top-0 left-0 right-0 bottom-0 h-[100vh] min-h-[965px] max-h-[1200px] bg-cover bg-right ${activeIndex === 0 ? 'active' : ''}`} onClick={() => goToSlide(0)} style={{
        backgroundImage: activeIndex === 0 ? page.image1 : '',
      }}>
        </div>
        <div className={`item absolute top-0 left-0 right-0 bottom-0 h-[100vh] min-h-[965px] max-h-[1200px] bg-cover bg-right  ${activeIndex === 1 ? 'active' : ''}`} onClick={() => goToSlide(1)} style={{
        backgroundImage: activeIndex === 1 ? page.image2 : '',
      }}>
          </div>
        <div className={`item absolute top-0 left-0 right-0 bottom-0 h-[100vh] min-h-[965px] max-h-[1200px] bg-cover bg-right  ${activeIndex === 2 ? 'active' : ''}`} onClick={() => goToSlide(2)} style={{
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