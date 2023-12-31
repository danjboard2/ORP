import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Swiper as OriginalSwiper } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaCircleChevronLeft, FaCircleChevronRight} from 'react-icons/fa6'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function HomepageSwiper() {

  
  function getCurrentDimension() {
    if (typeof window !== 'undefined') {
      // Check if the 'window' object is defined (client-side)
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    } else {
      // Provide a fallback value or handle the case when 'window' is not available
      return {
        width: 0,
        height: 0
      };
    }
  }
const [screenSize, setScreenSize] = useState(getCurrentDimension());

    const [swiperInstance, setSwiperInstance] = useState<OriginalSwiper | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const numberOfSlides = 3;

    useEffect(() => {
      const updateDimension = () => {
        setScreenSize(getCurrentDimension())
      }
      window.addEventListener('resize', updateDimension);
      return(() => {
          window.removeEventListener('resize', updateDimension);
      })
    }, [screenSize])

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
    }
      const handlePrev = () => {
        if (swiperInstance) {
          const currentIndex = swiperInstance.activeIndex;
          const newIndex = currentIndex === 0 ? numberOfSlides - 1 : currentIndex - 1;
          swiperInstance.slideTo(newIndex);
        }
      };
    
      const handleNext = () => {
        if (swiperInstance) {
          const currentIndex = swiperInstance.activeIndex;
          const newIndex = currentIndex === numberOfSlides - 1 ? 0 : currentIndex + 1;
          swiperInstance.slideTo(newIndex);
        }
      };
  

  return (
    <>
    <Swiper
    onSwiper={(swiper: OriginalSwiper) => setSwiperInstance(swiper)}
    className="w-full h-[500px] md:h-[925px]"
    id="homeswiper"
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      rewind={true}
      allowTouchMove={true}
      data-swiper-autoplay={5000} 
    >
      <SwiperSlide className="!flex flex-col justify-center px-4 lg:px-32"><Image src="/media/images/soil.jpg" id="swiperimage" className="absolute object-cover object-left block -z-[1] top-0 left-0 right-0 bottom-0 min-w-[100%] min-h-[505px] md:min-h-[965px] w-auto h-auto" width={3000} height={3000} alt="Soil"></Image><div className="flex flex-col w-full max-w-[2000px] md:text-center lg:text-left m-auto 3xl:px-32 pt-[20px] md:pt-[100px]"><h1 className="text-4xl xl:text-7xl font-bold uppercase text-white [text-shadow:_0_5px_6px_rgb(0_0_0_/_80%)]">Hydrocarbon</h1><h2 className="text-2xl xl:text-4xl my-2 md:my-6 font-bold text-white [text-shadow:_0_5px_6px_rgb(0_0_0_/_80%)]">ORP-SR1 & ORP-SR2</h2><Link href="/soil" className="inline-block md:m-auto mt-2 lg:ml-0 w-fit text-lg xl:text-2xl rounded-full border-[1px] md:border-4 border-[#3AAA01] px-10 xl:px-20 md:py-2 font-bold text-[#3AAA01] md:mt-24 bg-[#3AAA01] bg-transparent hover:bg-[#3AAA01] hover:text-white">Learn more...</Link></div></SwiperSlide>
      <SwiperSlide className="!flex flex-col justify-center px-4 lg:px-32"><Image src="/media/images/mold.jpg" id="swiperimage" className="absolute object-cover object-left block -z-[1] top-0 left-0 right-0 bottom-0 min-w-[100%]  min-h-[505px] md:min-h-[965px] w-auto h-auto" width={3000} height={3000} alt="Soil"></Image><div className="flex flex-col w-full max-w-[2000px] md:text-center lg:text-left m-auto 3xl:px-32 pt-[20px] md:pt-[100px]"><h1 className="text-4xl xl:text-7xl font-bold uppercase text-white [text-shadow:_0_5px_6px_rgb(0_0_0_/_80%)]">Mold</h1><h2 className="text-2xl xl:text-4xl my-2 md:my-6 font-bold text-white [text-shadow:_0_5px_6px_rgb(0_0_0_/_80%)]">ORP-MT1 & ORP-MT2</h2><Link href="/mold" className="inline-block md:m-auto mt-2 lg:ml-0 w-fit text-lg xl:text-2xl rounded-full border-[1px] md:border-4 border-[#3AAA01] px-10 xl:px-20 md:py-2 font-bold  text-[#3AAA01] md:mt-24 bg-[#3AAA01] bg-transparent hover:bg-[#3AAA01] hover:text-white">Learn more...</Link></div></SwiperSlide>
      <SwiperSlide className="!flex flex-col justify-center px-4 lg:px-32"><Image src="/media/images/sewage.jpg" id="swiperimage" className="absolute object-cover object-left block -z-[1] top-0 left-0 right-0 bottom-0 min-w-[100%] min-h-[505px]  md:min-h-[965px] w-auto h-auto" width={3000} height={3000} alt="Soil"></Image><div className="flex flex-col w-full max-w-[2000px] md:text-center lg:text-left m-auto 3xl:px-32 pt-[20px] md:pt-[100px]"><h1 className="text-4xl xl:text-7xl font-bold uppercase text-white [text-shadow:_0_5px_6px_rgb(0_0_0_/_80%)]">Sewage</h1><h2 className="text-2xl xl:text-4xl my-2 md:my-6 font-bold text-white [text-shadow:_0_5px_6px_rgb(0_0_0_/_80%)]">ORP-WS1 & ORP-WS2</h2><Link href="/sewage" className="inline-block  md:m-auto mt-2  lg:ml-0 w-fit text-lg xl:text-2xl rounded-full border-[1px] md:border-4 border-[#3AAA01] px-10 xl:px-20 md:py-2 font-bold text-[#3AAA01] md:mt-24 bg-[#3AAA01] bg-transparent hover:bg-[#3AAA01] hover:text-white">Learn more...</Link></div></SwiperSlide>
    </Swiper>
    <div className="navigate w-full relative max-w-[2000px] flex flex-col lg:flex-row justify-between m-auto px-12 xl:px-10 2xl:px-32 !mb-12">
    <button className="mobile-nav left absolute left-2 bottom-0 top-0" onClick={handlePrev}><FaCircleChevronLeft size={30} color={'#404041'}/></button>
      <button  className="mobile-nav right absolute right-2 bottom-0 top-0"  onClick={handleNext}><FaCircleChevronRight size={30} color={'#404041'}/></button>
        <div className={`item bg-white z-10 flex flex-col relative text-center [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] p-4 xl:p-10 rounded-lg rounded-t-none w-full lg:w-[32%] 2xl:w-[30%] ${activeIndex === 0 ? 'active' : ''}`} onClick={() => goToSlide(0)}>
          <div className="h-[120px] -mb-[50px]">
            <Image src={activeIndex === 0 && screenSize.width < 1023 ? '/media/images/plant-active-mobile.gif' : activeIndex === 0 && screenSize.width > 1023  ? '/media/images/plant-active.gif' : '/media/images/plant-static.png'} width={80} height={80} alt="Soil" className={`round-image ${activeIndex === 0 ? 'active' : ''} block m-auto -mt-[120px] p-[10px] w-[150px] bg-white rounded-full [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]`}/>
            </div>
            <h3 className="text-xl xl:text-3xl uppercase font-bold mb-2">Hydrocarbon</h3>
            <h4 className="text-lg xl:text-2xl text-[#5E5E5E] font-bold mb-4">ORP-SR1 & ORP-SR2</h4>
            <p className="text-base sm:text-base text-left sm:text-center xl:text-xl flex-auto">Hydrocarbon contamination in soil is a very serious and expensive problem throughout the world. ORP Soil Treatment 1 was launched after years of R&D to target, break and transform this type of pollution into a harmless byproduct. A revolution in the industry, fully organic and simple to inject. The results speak for themselves, SR1 & SR2 have helped reshape the reality of soil remediation.</p>
            <Link href="/soil" className="item-button  block w-4/5 m-auto border-solid border-[1px] sm:border-2 color-[#404041] rounded-full text-lg xl:text-2xl px-10 md:py-2 border-[#404041] mt-6 font-bold">Learn more...</Link>
        </div>
        <div className={`item bg-white z-10 flex flex-col relative text-center [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]  p-4 xl:p-10 rounded-lg rounded-t-none w-full lg:w-[32%] 2xl:w-[30%]  ${activeIndex === 1 ? 'active' : ''}`} onClick={() => goToSlide(1)}>
        <div className="h-[120px] -mb-[50px]">
            <Image src={activeIndex === 1 && screenSize.width < 1023 ? '/media/images/mold-active-mobile.gif' : activeIndex === 1 && screenSize.width > 1023  ? '/media/images/mold-active.gif' : '/media/images/mold-static.png'} width={80} height={80} alt="Mold" className={`round-image ${activeIndex === 1 ? 'active' : ''} block m-auto -mt-[120px] p-[10px] w-[150px] bg-white rounded-full [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]`}/>
            </div>
          <h3 className="text-xl xl:text-3xl uppercase font-bold mb-2">Mold</h3>
          <h4 className="text-lg xl:text-2xl text-[#5E5E5E] font-bold mb-4">ORP-MT1 & ORP-MT2</h4>
          <p className="text-base sm:text-base text-left sm:text-center xl:text-xl  flex-auto">Mold due to moisture events is extremely hazardous to people and employees. Mold Treatment 1&2 are ORP’s flagship product category that target and eliminate surface mold on contact. Developed as an alternative to harmful chemical options, it can be applied throughout structures and buildings simply and safely without added health risk.</p>
          <Link href="/mold" className="item-button block w-4/5 m-auto border-solid border-2 color-[#404041] rounded-full  text-lg xl:text-2xl px-10 md:py-2 border-[#404041] mt-6 font-bold">Learn more...</Link>
          </div>
        <div className={`item bg-white z-10 flex flex-col relative text-center [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]  p-4 xl:p-10 rounded-lg rounded-t-none w-full lg:w-[32%] 2xl:w-[30%]  ${activeIndex === 2 ? 'active' : ''}`} onClick={() => goToSlide(2)}>
        <div className="h-[120px] -mb-[50px]">
            <Image src={activeIndex === 2 && screenSize.width < 1023 ? '/media/images/sewage-active-mobile.gif' : activeIndex === 2 && screenSize.width > 1023  ? '/media/images/sewage-active.gif' : '/media/images/sewage-static.png'} width={80} height={80} alt="Sewage" className={`round-image ${activeIndex === 2 ? 'active' : ''} block m-auto -mt-[120px] p-[10px] w-[150px] bg-white rounded-full [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]`}/>
            </div>
          <h3 className="text-xl xl:text-3xl uppercase font-bold mb-2">Sewage</h3>
          <h4 className="text-lg xl:text-2xl text-[#5E5E5E] font-bold mb-4">ORP-WS1 & ORP-WS2</h4>
          <p className="text-base sm:text-base text-left sm:text-center xl:text-xl  flex-auto">Currently in development with very promising early results, ORP-WS1 addresses the growing concern of toxic waste water and sewage. Urban sprawl and population growth have put heavy demand on governments to treat and manage sewage. WS1 is a progressive formula that can be modified to match contamination types and help solve this contamination problem.</p>
          <Link href="/sewage" className="item-button block w-4/5 m-auto border-solid border-2 color-[#404041] rounded-full text-lg xl:text-2xl px-10 md:py-2 border-[#404041] mt-6 font-bold">Learn more...</Link>
          </div>
    </div>
    </>
  );
};