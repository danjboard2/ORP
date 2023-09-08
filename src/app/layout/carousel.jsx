import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCoverflow, Autoplay } from 'swiper/modules';
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';


export default function Carousel() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeText, setActiveText] = useState('');
  const [activeText2, setActiveText2] = useState('');
  const numberOfSlides = 3;

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on('slideChange', function () {
        const activeSlide = swiperInstance.slides[swiperInstance.activeIndex]; // Use swiperInstance instead of swiper
        const text = activeSlide.getAttribute('data-text');
      const text2 = activeSlide.getAttribute('data-text2');
         // Check if text and text2 are not null before setting state
      if (text !== null && text2 !== null) {
        setActiveText(text);
        setActiveText2(text2);
      }
      });
    }
  }, [swiperInstance]);

  const handleSwiperInit = (swiper) => {
    setSwiperInstance(swiper);

    // Get initial values from the first slide after Swiper initialization
    if (swiper.slides.length > 0) {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const text = activeSlide.getAttribute('data-text');
      const text2 = activeSlide.getAttribute('data-text2');
      // Check if text and text2 are not null before setting state
      if (text !== null && text2 !== null) {
        setActiveText(text);
        setActiveText2(text2);
      }
    }
  };

    return (
        <>
        <section className="w-full flex h-[100vh] min-h-[1200px] justify-end items-center flex-col">
        <h1 className="text-6xl mb-10 text-[#3AAA01] font-bold uppercase">Projects</h1>
        <Swiper id="projects" className="w-full max-w-[2000px] !overflow-y-visible"
         onSwiper={(swiper) => setSwiperInstance(swiper)}
         onInit={handleSwiperInit}
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
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        loop={true}
      >
        <SwiperSlide className="" data-text="Soil Remediation" data-text2="Our Soil Remediation product can remove the contamination in less that 120 days. Much cheaper than traditional remediation and 100% better for the environment" ><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/soil-circle.jpg" width={500} height={500} alt="Soil Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Sulphur Remediation" data-text2="Our team is working on our latest product that will remove sulphur contamination from the soil."><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/sulphur-circle.jpg" width={500} height={500} alt="Sulphur Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Flooding" data-text2="Have water in your house? Our mold product will stop mold from growing while you wait for the insurance adjuster to file your claim."><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/flooding-circle.jpg" width={500} height={500} alt="Flooding"/></SwiperSlide>
        <SwiperSlide className="" data-text="Mold Remediation" data-text2="Remediated black mold found in Montreal school. No traces of mold after our product was applied."><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/mold-circle.webp" width={500} height={500} alt="Mold Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Heating Oil" data-text2="Furnace oil tanks were often buried in the backyard of many older homes. This contamination was 15000 ppm, we reduced it to 400 ppm in 120 days."><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/heating-circle.webp" width={500} height={500} alt="Heating Oil"/></SwiperSlide>
        <SwiperSlide className="" data-text="Soil Remediation" data-text2="Our Soil Remediation product can remove the contamination in less that 120 days. Much cheaper than traditional remediation and 100% better for the environment" ><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/soil-circle.jpg" width={500} height={500} alt="Soil Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Sulphur Remediation" data-text2="Our team is working on our latest product that will remove sulphur contamination from the soil."><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/sulphur-circle.jpg" width={500} height={500} alt="Sulphur Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Flooding" data-text2="Have water in your house? Our mold product will stop mold from growing while you wait for the insurance adjuster to file your claim."><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/flooding-circle.jpg" width={500} height={500} alt="Flooding"/></SwiperSlide>
        <SwiperSlide className="" data-text="Mold Remediation" data-text2="Remediated black mold found in Montreal school. No traces of mold after our product was applied."><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/mold-circle.webp" width={500} height={500} alt="Mold Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Heating Oil" data-text2="Furnace oil tanks were often buried in the backyard of many older homes. This contamination was 15000 ppm, we reduced it to 400 ppm in 120 days."><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/heating-circle.webp" width={500} height={500} alt="Heating Oil"/></SwiperSlide>
        <SwiperSlide className="" data-text="Soil Remediation" data-text2="Our Soil Remediation product can remove the contamination in less that 120 days. Much cheaper than traditional remediation and 100% better for the environment" ><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/soil-circle.jpg" width={500} height={500} alt="Soil Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Sulphur Remediation" data-text2="Our team is working on our latest product that will remove sulphur contamination from the soil."><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/sulphur-circle.jpg" width={500} height={500} alt="Sulphur Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Flooding" data-text2="Have water in your house? Our mold product will stop mold from growing while you wait for the insurance adjuster to file your claim."><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/flooding-circle.jpg" width={500} height={500} alt="Flooding"/></SwiperSlide>
        <SwiperSlide className="" data-text="Mold Remediation" data-text2="Remediated black mold found in Montreal school. No traces of mold after our product was applied."><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/mold-circle.webp" width={500} height={500} alt="Mold Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Heating Oil" data-text2="Furnace oil tanks were often buried in the backyard of many older homes. This contamination was 15000 ppm, we reduced it to 400 ppm in 120 days."><Image className="rounded-full border-8 border-[#73CD4A] overflow-hidden" src="/media/images/heating-circle.webp" width={500} height={500} alt="Heating Oil"/></SwiperSlide>

        <div className={`custom-navigation z-10 flex flex-row w-[180px] m-auto justify-between`} >
          <div className="swiper-button-prev"><FaCircleChevronLeft size={50} className="text-[#000]"/></div>
          <div className="swiper-button-next"><FaCircleChevronRight size={50} className="text-[#000]"/></div>
      </div>
      </Swiper>
      <div className="w-full mt-28 p-10 bg-[#73CD4A] border-4 border-[#3AAA01] border-l-0 border-r-0">
      <h2 className="text-4xl text-center text-[#404041] uppercase font-bold">{activeText}</h2>
      </div>
      <div className="bg-[#D9D9D9] flex w-full text-center justify-center items-center min-h-[250px]">
      <p className="text-2xl w-1/3">{activeText2}</p>
      </div>
      </section>
      </>
    )
}