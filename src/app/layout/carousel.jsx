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
  const [activeURL1, setActiveURL1] = useState('');
  const [activeItem, setActiveItem] = useState(0);
  const [activeItemTitle, setActiveItemTitle] = useState('Governments');

  const scrollToSwiper = () => {
    const swiperElement = document.getElementById('projects'); // Use ID
    const offset = 180;

    if (swiperElement) {
      const topPosition = swiperElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topPosition - offset, behavior: 'smooth' });
    }
  };

  const setActive = (index, title) => {
    setActiveItem(index);
    setActiveItemTitle(title);
    scrollToSwiper(); // Scroll to the swiper element when an item is clicked.
  };
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on('slideChange', function () {
        const activeSlide = swiperInstance.slides[swiperInstance.activeIndex]; // Use swiperInstance instead of swiper
        const text = activeSlide.getAttribute('data-text');
      const text2 = activeSlide.getAttribute('data-text2');
      const url1 = activeSlide.getAttribute('data-url1');
         // Check if text and text2 are not null before setting state
      if (text !== null && text2 !== null && url1 !== null) {
        setActiveText(text);
        setActiveText2(text2);
        setActiveURL1(url1);
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
      const url1 = activeSlide.getAttribute('data-url1');
      // Check if text and text2 are not null before setting state
      if (text !== null && text2 !== null && url1 !== null) {
        setActiveText(text);
        setActiveText2(text2);
        setActiveURL1(url1);
      }
    }
  };

    return (
        <>
        <section className="w-full flex justify-end items-center flex-col mt-[147px] ">
        <h1 className="text-3xl xl:text-6xl mt-10 text-[#3AAA01] font-bold uppercase w-[90%] lg:w-2/3 mb-20">Projects</h1>

            <div className="w-full max-w-[1000px] flex  flex-wrap justify-center flex-row lg:justify-between m-auto px-4 lg:px-12 xl:px-32 mt-10 lg:mt-20 sm:!mb-12">
            <div className={`item z-10 relative text-center p-[5px] sm:p-4 lg:p-8 xl:p-10 rounded-lg w-1/3 mb-20 lg:mb-0 lg:w-[30%] ${activeItem === 0 ? 'active' : ''}`} onClick={() => setActive(0, "Governments")}>
              <div className="round-icon h-[120px] mb-4 lg:mb-14">
              <Image src="/media/images/government-static.png" alt="Government" width={200} height={200} className="round-image block m-auto -mt-[65px] lg:-mt-[120px] p-[10px] w-[100px] lg:w-[150px] bg-white rounded-full [box-shadow:_0_4px_20px_rgb(0_0_0_/_25%)]"/>
                </div>
                <h3 className="text-xs sm:text-lg xl:text-xl uppercase font-bold mb-2">Governments</h3>
            </div>

            <div className={`item  z-10 relative text-center p-[5px] sm:p-4 lg:p-8 xl:p-10 rounded-lg w-1/3 mb-20 lg:mb-0 lg:w-[30%] ${activeItem === 1 ? 'active' : ''}`} onClick={() => setActive(1, "Commercial Real-estate")}>
            <div className="round-icon h-[120px] mb-4 lg:mb-14">
            <Image src="/media/images/commercial-static.png" alt="Commercial Real-estate" width={200} height={200} className="round-image block m-auto -mt-[65px] lg:-mt-[120px] p-[10px] w-[100px] lg:w-[150px] bg-white rounded-full [box-shadow:_0_4px_20px_rgb(0_0_0_/_25%)]"/>
                </div>
              <h3 className="text-xs sm:text-lg xl:text-xl uppercase font-bold mb-2">Commercial Real-estate</h3>
              </div>
            <div className={`item z-10 relative text-center p-[5px] sm:p-4 lg:p-8 xl:p-10 rounded-lg w-1/3 mb-20 lg:mb-0 lg:w-[30%] ${activeItem === 2 ? 'active' : ''}`} onClick={() => setActive(2, "Global distributors")}>
            <div className="round-icon h-[120px] mb-4 lg:mb-14">
            <Image src="/media/images/global-static.png" alt="Global Distributors" width={200} height={200} className="round-image block m-auto -mt-[65px] lg:-mt-[120px] p-[10px] w-[100px] lg:w-[150px] bg-white rounded-full [box-shadow:_0_4px_20px_rgb(0_0_0_/_25%)]"/>
                </div>
              <h3 className="text-xs sm:text-lg xl:text-xl uppercase font-bold mb-2">Global Distributors</h3>
              </div>
        </div>

        <Swiper id="projects" className="w-[100%] max-w-[1400px] relative !overflow-y-visible"
         onSwiper={(swiper) => setSwiperInstance(swiper)}
         onInit={handleSwiperInit}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, EffectFade]}
        effect={"coverflow"}
        spaceBetween={-80}
        initialSlide="2"
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 5,
            slideShadows: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 5,
              spaceBetween:-70,
              coverflowEffect: {
                modifier: 20,
                depth: 70,
              },
            },
            640: {
              slidesPerView: 5,
              coverflowEffect: {
                modifier: 12,
                depth: 50,
              },
              },
            }}

        centeredSlides={true}
        grabCursor={true}
        navigation={{
            nextEl: '.nav-projects.right',
            prevEl: '.nav-projects.left'
          }}
        pagination={false}
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        loop={false}
      >
        <SwiperSlide className="" data-text="Soil Remediation" data-text2="Our Soil Remediation product can remove the contamination in less that 120 days. Much cheaper than traditional remediation and 100% better for the environment." data-url1="/project-page-goes-here" ><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/soil-circle.jpg" width={500} height={500} alt="Soil Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Sulphur Remediation" data-text2="Our team is working on our latest product that will remove sulphur contamination from the soil." data-url1="/another-project-page-goes-here"><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/sulphur-circle.jpg" width={500} height={500} alt="Sulphur Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Flooding" data-text2="Have water in your house? Our mold product will stop mold from growing while you wait for the insurance adjuster to file your claim." data-url1="/project-page-goes-here"><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/flooding-circle.jpg" width={500} height={500} alt="Flooding"/></SwiperSlide>
        <SwiperSlide className="" data-text="Mold Remediation" data-text2="Remediated black mold found in Montreal school. No traces of mold after our product was applied." data-url1="/project-page-goes-here"><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/mold-circle.webp" width={500} height={500} alt="Mold Remediation"/></SwiperSlide>
        <SwiperSlide className="" data-text="Heating Oil" data-text2="Furnace oil tanks were often buried in the backyard of many older homes. This contamination was 15000 ppm, we reduced it to 400 ppm in 120 days." data-url1="/project-page-goes-here"><Image className="rounded-full border-4 lg:border-8 border-[#73CD4A] overflow-hidden" src="/media/images/heating-circle.webp" width={500} height={500} alt="Heating Oil"/></SwiperSlide>
          <div className="nav-projects left absolute left-0 sm:left-4 bottom-0 top-0 z-50 "><FaCircleChevronLeft className="text-[#000] !w-[30px] !h-[30px] sm:!w-[50px] sm:!h-[50px]"/></div>
          <div className="nav-projects right absolute right-0 sm:right-4 bottom-0 top-0  z-50 "><FaCircleChevronRight className="text-[#000] !w-[30px] !h-[30px] sm:!w-[50px] sm:!h-[50px]"/></div>
      </Swiper>
      <div className="w-full z-20 mt-24 sm:mt-16 p-6 bg-[#73CD4A] border-8 border-[#3AAA01] border-l-0 border-r-0">
      <h2 className="text-2xl xl:text-3xl text-center text-[#404041] uppercase font-bold">{activeItemTitle}</h2>
      </div>
      <div className="bg-[#D9D9D9] z-20 flex flex-col w-full text-left justify-center items-center">
      <p className="text-base md:text-lg xl:text-xl px-4 pt-20 md:px-0 w-full md:w-1/2 min-h-[230px] md:min-h-[200px]">{/* activeText */}{activeText2}<br/><br/>
      <a href={activeURL1} className=" rounded-full text-[#404041] border-2 font-bold border-[#404041] px-6 py-[3px] hover:bg-[#404041] hover:text-white">Learn more...</a></p>
      
      { /* governments */}
      <ul className={`industry-text text-base md:text-lg xl:text-xl border-t-2 border-[#A0A0A0] w-full md:w-1/2 mt-20 pt-4 pb-10 list-disc  ${activeItem === 0 ? 'active' : ''}`}><li className="ml-[30px] mr-[30px]">ORP and our MT1 Mold Treatment Line has become registered and approved for natural disaster response teams.</li>
      <li className="ml-[30px] mr-[30px] pt-4">Post flood/water event, MT1 is applied to effected homes and buildings to treat and prevent mold contamination.</li>
      <li className="ml-[30px] mr-[30px] pt-4">ORP is working with multiple governments (UK, Australia, US, Canada) to be the main product used for mold treatment/prevention for social housing complexes.</li></ul>

      { /* real-estate */} 
      <ul className={`industry-text text-base md:text-lg xl:text-xl border-t-2 border-[#A0A0A0] w-full md:w-1/2 mt-20 pt-4 pb-10 list-disc  ${activeItem === 1 ? 'active' : ''}`}><li className="ml-[30px] mr-[30px]">ORP is working with Canadian and Australian property developers to fully remediate and rehabilitate former industrial properties to be converted into commercial and residential areas.</li>
      <li className="ml-[30px] mr-[30px] pt-4">ORP is working along-side insurance companies to enact a best-practices approach to onsite soil decontamination and remediation procedures.</li></ul>
      
      { /* global distributors */}
      <ul className={`industry-text text-base md:text-lg xl:text-xl border-t-2 border-[#A0A0A0] w-full md:w-1/2 mt-20 pt-4 pb-10 list-disc  ${activeItem === 2 ? 'active' : ''}`}><li className="ml-[30px] mr-[30px]">ORP has put into place a formal support and training division to activate service providers across North America and Internationally.</li>
      <li className="ml-[30px] mr-[30px] pt-4">ORP manufactures product locally using a network of laboratories and fermentation facilities, and certified distributors perform onsite remediations according to guidelines.</li></ul>
  
      </div>
      </section>
      </>
    )
}