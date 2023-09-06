import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Swiper as OriginalSwiper } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HomepageSwiper() {
    const [swiperInstance, setSwiperInstance] = useState<OriginalSwiper | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const numberOfSlides = 4;
  
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
    <Swiper
    onSwiper={(swiper: OriginalSwiper) => setSwiperInstance(swiper)}
    className="w-full h-[925px]"
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      autoplay={true}
      rewind={true}
      allowTouchMove={false}
      data-swiper-autoplay={5000}
      pagination={false}
    >
      <SwiperSlide className="!flex flex-col bg-[url('/media/images/soil.jpg')] bg-cover justify-center"><div className="flex flex-col ml-60"><h1 className="text-7xl font-bold uppercase text-white [text-shadow:_0_5px_6px_rgb(0_0_0_/_80%)]">Soil Message Title</h1><h2 className="text-4xl my-6 font-bold text-white [text-shadow:_0_5px_6px_rgb(0_0_0_/_80%)]">Message subtitle/body text goes here</h2><Link href="/soil">Learn more</Link></div></SwiperSlide>
      <SwiperSlide className="!flex flex-col bg-[url('/media/images/soil.jpg')] bg-cover justify-center"><div className="flex flex-col ml-60"><h1 className="text-7xl font-bold uppercase text-white [text-shadow:_0_5px_6px_rgb(0_0_0_/_80%)]">Mold Message Title</h1><h2 className="text-4xl my-6 font-bold text-white [text-shadow:_0_5px_6px_rgb(0_0_0_/_80%)]">Message subtitle/body text goes here</h2><Link href="/mold">Learn more</Link></div></SwiperSlide>
      <SwiperSlide className="!flex flex-col bg-[url('/media/images/soil.jpg')] bg-cover justify-center"><div className="flex flex-col ml-60"><h1 className="text-7xl font-bold uppercase text-white [text-shadow:_0_5px_6px_rgb(0_0_0_/_80%)]">Sewage Message Title</h1><h2 className="text-4xl my-6 font-bold text-white [text-shadow:_0_5px_6px_rgb(0_0_0_/_80%)]">Message subtitle/body text goes here</h2><Link href="/sewage">Learn more</Link></div></SwiperSlide>
      <SwiperSlide className="!flex flex-col bg-[url('/media/images/soil.jpg')] bg-cover justify-center"><div className="flex flex-col ml-60"><h1 className="text-7xl font-bold uppercase text-white [text-shadow:_0_5px_6px_rgb(0_0_0_/_80%)]">Agriculture Message Title</h1><h2 className="text-4xl my-6 font-bold text-white [text-shadow:_0_5px_6px_rgb(0_0_0_/_80%)]">Message subtitle/body text goes here</h2><Link href="/agriculture">Learn more</Link></div></SwiperSlide>
    </Swiper>
    <div className="navigate flex flex-row justify-around mx-20">
        <div className={`item bg-white z-10 relative text-center [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] p-10 rounded-lg rounded-t-none w-[20%] ${activeIndex === 0 ? 'active' : ''}`} onClick={() => goToSlide(0)}>
          <div className="h-[120px] mb-14">
            <Image src={activeIndex === 0 ? '/media/images/soil-icon-active.png' : '/media/images/soil-icon.png'} width={80} height={80} alt="Soil" className="round-image block m-auto -mt-[120px] p-[30px] w-[150px] bg-white rounded-full [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]"/>
            </div>
            <h3 className="text-3xl uppercase font-bold mb-4">Soil</h3>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <Link href="/soil" className="item-button block w-4/5 m-auto border-solid border-2 color-[#404041] rounded-full text-2xl px-10 py-2 border-[#404041] mt-6">Learn more</Link>
        </div>
        <div className={`item bg-white z-10 relative text-center [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] p-10 rounded-lg rounded-t-none w-[20%]  ${activeIndex === 1 ? 'active' : ''}`} onClick={() => goToSlide(1)}>
        <div className="h-[120px] mb-14">
            <Image src={activeIndex === 1 ? '/media/images/soil-icon-active.png' : '/media/images/soil-icon.png'} width={80} height={80} alt="Soil" className="round-image block m-auto -mt-[120px] p-[30px] w-[150px] bg-white rounded-full [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]"/>
            </div>
          <h3 className="text-3xl uppercase font-bold mb-4">Mold</h3><p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <Link href="/mold" className="item-button block w-4/5 m-auto border-solid border-2 color-[#404041] rounded-full text-2xl px-10 py-2 border-[#404041] mt-6">Learn more</Link>
          </div>
        <div className={`item bg-white z-10 relative text-center [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] p-10 rounded-lg rounded-t-none w-[20%]  ${activeIndex === 2 ? 'active' : ''}`} onClick={() => goToSlide(2)}>
        <div className="h-[120px] mb-14">
            <Image src={activeIndex === 2 ? '/media/images/soil-icon-active.png' : '/media/images/soil-icon.png'} width={80} height={80} alt="Soil" className="round-image block m-auto -mt-[120px] p-[30px] w-[150px] bg-white rounded-full [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]"/>
            </div>
          <h3 className="text-3xl uppercase font-bold mb-4">Sewage</h3><p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <Link href="/sewage" className="item-button block w-4/5 m-auto border-solid border-2 color-[#404041] rounded-full text-2xl px-10 py-2 border-[#404041] mt-6">Learn more</Link>
          </div>
        <div className={`item bg-white z-10 relative text-center [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] p-10 rounded-lg rounded-t-none w-[20%]  ${activeIndex === 3 ? 'active' : ''}`} onClick={() => goToSlide(3)}>
        <div className="h-[120px] mb-14">
            <Image src={activeIndex === 3 ? '/media/images/soil-icon-active.png' : '/media/images/soil-icon.png'} width={80} height={80} alt="Soil" className="round-image block m-auto -mt-[120px] p-[30px] w-[150px] bg-white rounded-full [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]"/>
            </div>
          <h3 className="text-3xl uppercase font-bold mb-4">Agriculture</h3><p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <Link href="/agriculture" className="item-button block w-4/5 m-auto border-solid border-2 color-[#404041] rounded-full text-2xl px-10 py-2 border-[#404041] mt-6">Learn more</Link>
          </div>
    </div>
    </>
  );
};