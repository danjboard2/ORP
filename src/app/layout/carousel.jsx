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
        <section className="w-full flex justify-end items-center flex-col mt-[147px] ">
        <h1 className="text-3xl xl:text-6xl mt-10 mb-10 text-[#3AAA01] font-bold uppercase">Partnerships</h1>

            <div className="w-full max-w-[2000px] flex flex-col lg:flex-row justify-between m-auto px-4 lg:px-12 xl:px-32 mt-10 lg:mt-20 !mb-12">
            <div className={`item bg-white z-10 relative text-center [box-shadow:_0_0px_7px_rgb(0_0_0_/_25%)] p-4 lg:p-8 xl:p-10 rounded-lg w-full mb-20 lg:mb-0 lg:w-[30%]`}>
              <div className="h-[120px] mb-4 lg:mb-14">
              <Image src="/media/images/government-static.png" alt="Government" width={200} height={200} className="round-image block m-auto -mt-[65px] lg:-mt-[120px] p-[10px] w-[100px] lg:w-[150px] bg-white rounded-full [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]"/>
                </div>
                <h3 className="text-2xl xl:text-3xl uppercase font-bold mb-2">Governments</h3>
                <ul className="text-md xl:text-lg text-center">
                            <li className="mt-4">ORP and our MT1 Mold Treatment Line has become registered and approved for natural disaster response teams.</li>
                            <li className="mt-4">Post flood/water event, MT1 is applied to effected homes and buildings to treat and prevent mold contamination.</li>
                            <li className="mt-4">ORP is working with multiple governments (UK, Australia, US, Canada) to be the main product used for mold treatment/prevention for social housing complexes.</li>
                        </ul>
            </div>

            <div className={`item bg-white z-10 relative text-center [box-shadow:_0_0px_7px_rgb(0_0_0_/_25%)] p-4 lg:p-8 xl:p-10 rounded-lg w-full mb-20 lg:mb-0 lg:w-[30%]`}>
            <div className="h-[120px] mb-4 lg:mb-14">
            <Image src="/media/images/commercial-static.png" alt="Commercial Real-estate" width={200} height={200} className="round-image block m-auto -mt-[65px] lg:-mt-[120px] p-[10px] w-[100px] lg:w-[150px] bg-white rounded-full [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]"/>
                </div>
              <h3 className="text-2xl xl:text-3xl uppercase font-bold mb-2">Commercial Real-estate</h3>
              <ul className="text-md xl:text-lg text-center">
                            <li className="mt-4">ORP is working with Canadian and Australian property developers to fully remediate and rehabilitate former industrial properties to be converted into commercial and residential areas.</li>
                            <li className="mt-4">ORP is working along-side insurance companies to enact a best-practices approach to onsite soil decontamination and remediation procedures.</li>
                        </ul>
              </div>
            <div className={`item bg-white z-10 relative text-center [box-shadow:_0_0px_7px_rgb(0_0_0_/_25%)] p-4 lg:p-8 xl:p-10 rounded-lg w-full mb-20 lg:mb-0 lg:w-[30%]`}>
            <div className="h-[120px] mb-4 lg:mb-14">
            <Image src="/media/images/global-static.png" alt="Global Distributors" width={200} height={200} className="round-image block m-auto -mt-[65px] lg:-mt-[120px] p-[10px] w-[100px] lg:w-[150px] bg-white rounded-full [box-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]"/>
                </div>
              <h3 className="text-2xl xl:text-3xl uppercase font-bold mb-2">Global Distributors</h3>
              <ul className="text-md xl:text-lg text-center">
                            <li className="mt-4">ORP has put into place a formal support and training division to activate service providers across North America and Internationally.</li>
                            <li className="mt-4">ORP manufactures product locally using a network of laboratories and fermentation facilities, and certified distributors perform onsite remediations according to guidelines.</li>
                        </ul>
              </div>
        </div>

        <h1 className="text-3xl xl:text-6xl mt-10 mb-16 text-[#3AAA01] font-bold uppercase">Projects</h1>
        <Swiper id="projects" className="w-full max-w-[2000px] !overflow-y-visible relative"
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
            modifier: 6,
            slideShadows: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 2
            },
            770: {
              slidesPerView: 5
            },
            // when window width is >= 770px
          }}
        centeredSlides={true}
        grabCursor={true}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
        pagination={false}
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        loop={true}
      >
        <SwiperSlide className="" data-text="Soil Remediation" data-text2="Our Soil Remediation product can remove the contamination in less that 120 days. Much cheaper than traditional remediation and 100% better for the environment." ><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/soil-circle.jpg" width={500} height={500} alt="Soil Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Sulphur Remediation" data-text2="Our team is working on our latest product that will remove sulphur contamination from the soil."><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/sulphur-circle.jpg" width={500} height={500} alt="Sulphur Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Flooding" data-text2="Have water in your house? Our mold product will stop mold from growing while you wait for the insurance adjuster to file your claim."><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/flooding-circle.jpg" width={500} height={500} alt="Flooding"/></SwiperSlide>
        <SwiperSlide className="" data-text="Mold Remediation" data-text2="Remediated black mold found in Montreal school. No traces of mold after our product was applied."><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/mold-circle.webp" width={500} height={500} alt="Mold Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Heating Oil" data-text2="Furnace oil tanks were often buried in the backyard of many older homes. This contamination was 15000 ppm, we reduced it to 400 ppm in 120 days."><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/heating-circle.webp" width={500} height={500} alt="Heating Oil"/></SwiperSlide>
        <SwiperSlide className="" data-text="Soil Remediation" data-text2="Our Soil Remediation product can remove the contamination in less that 120 days. Much cheaper than traditional remediation and 100% better for the environment." ><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/soil-circle.jpg" width={500} height={500} alt="Soil Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Sulphur Remediation" data-text2="Our team is working on our latest product that will remove sulphur contamination from the soil."><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/sulphur-circle.jpg" width={500} height={500} alt="Sulphur Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Flooding" data-text2="Have water in your house? Our mold product will stop mold from growing while you wait for the insurance adjuster to file your claim."><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/flooding-circle.jpg" width={500} height={500} alt="Flooding"/></SwiperSlide>
        <SwiperSlide className="" data-text="Mold Remediation" data-text2="Remediated black mold found in Montreal school. No traces of mold after our product was applied."><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/mold-circle.webp" width={500} height={500} alt="Mold Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Heating Oil" data-text2="Furnace oil tanks were often buried in the backyard of many older homes. This contamination was 15000 ppm, we reduced it to 400 ppm in 120 days."><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/heating-circle.webp" width={500} height={500} alt="Heating Oil"/></SwiperSlide>
        <SwiperSlide className="" data-text="Soil Remediation" data-text2="Our Soil Remediation product can remove the contamination in less that 120 days. Much cheaper than traditional remediation and 100% better for the environment." ><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/soil-circle.jpg" width={500} height={500} alt="Soil Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Sulphur Remediation" data-text2="Our team is working on our latest product that will remove sulphur contamination from the soil."><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/sulphur-circle.jpg" width={500} height={500} alt="Sulphur Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Flooding" data-text2="Have water in your house? Our mold product will stop mold from growing while you wait for the insurance adjuster to file your claim."><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/flooding-circle.jpg" width={500} height={500} alt="Flooding"/></SwiperSlide>
        <SwiperSlide className="" data-text="Mold Remediation" data-text2="Remediated black mold found in Montreal school. No traces of mold after our product was applied."><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/mold-circle.webp" width={500} height={500} alt="Mold Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Heating Oil" data-text2="Furnace oil tanks were often buried in the backyard of many older homes. This contamination was 15000 ppm, we reduced it to 400 ppm in 120 days."><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/heating-circle.webp" width={500} height={500} alt="Heating Oil"/></SwiperSlide>
          <Image className="hidden xl:block fade-left absolute -left-[5px] top-0 z-50" src="/media/images/fade-left.png" width={150} height={400} alt=""/>
          <Image className="hidden xl:block fade-right absolute -right-[5px] top-0 z-50" src="/media/images/fade-right.png" width={150} height={400} alt=""/>
        <div className={`custom-navigation mt-10 z-10 flex flex-row w-[180px] m-auto justify-between`} >
          <div className="swiper-button-prev"><FaCircleChevronLeft size={50} className="text-[#000]"/></div>
          <div className="swiper-button-next"><FaCircleChevronRight size={50} className="text-[#000]"/></div>
      </div>
      </Swiper>
      <div className="w-full z-20 mt-16 p-10 bg-[#73CD4A] border-8 border-[#3AAA01] border-l-0 border-r-0">
      <h2 className="text-2xl xl:text-4xl text-center text-[#404041] uppercase font-bold">{activeText}</h2>
      </div>
      <div className="bg-[#D9D9D9] z-20 flex w-full text-center justify-center items-center min-h-[200px]">
      <p className="text-lg xl:text-2xl px-4 md:px-0 w-full md:w-1/3">{activeText2}</p>
      </div>
      </section>
      </>
    )
}