import Link from 'next/link'
import Image from 'next/image'
import React, {useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import { Player, ControlBar, PlayToggle, BigPlayButton } from 'video-react';
import { useFadeIn } from './fadein'; // Import the custom hook

let  vid_width:any = 2000;
let  vid_height:any = 600;

export default function ORPStory() {

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

    const { ref: ref1, fadeClass: fadeClass1 } = useFadeIn(); 
    const { ref: ref2, fadeClass: fadeClass2 } = useFadeIn();
    const { ref: ref3, fadeClass: fadeClass3 } = useFadeIn();

    // Add more as needed
    useEffect(() => {
        const updateDimension = () => {
          setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);
        if(screenSize.width < 640){
            vid_width=980;
            vid_height=350;
        }
        else {
            vid_width=2000;
            vid_height=600;
        }
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
      }, [screenSize])


    return (
        <>
        <section id="orpstory" className="w-full max-w-[2000px] m-auto flex flex-col">
            {/* header text */}
            <div className={`w-full text-center mb-12`}>
                <h3 id="orpstory" className="relative text-xl md:text-3xl xl:text-5xl uppercase font-bold overflow-hidden">The ORP Story</h3>
                <h4 className="text-base md:text-lg xl:text-2xl text-[#404041]">Our journey and vision</h4>
            </div>

            {/* video section 1 */}
            <div className="video-container mb-2 sm:mb-4">
                <div className="video-wrapper w-full relative">
                    <div className={`fade-element ${fadeClass1} w-full px-10 sm:px-0 text-left sm:w-1/2 lg:w-1/4 absolute flex flex-col h-full pb-10 sm:pb-0 justify-end sm:justify-center ml-0 sm:ml-32 z-10`} ref={ref1}>
                        <h5 className="[text-shadow:_0_1px_5px_rgb(0_0_0)] sm:[text-shadow:none] text-xl sm:text-3xl xl:text-5xl font-bold uppercase text-[#3AAA01] lg:text-[#3AAA01]">Organic by Design</h5>
                        <p className="[text-shadow:_0_1px_5px_rgb(0_0_0)] sm:[text-shadow:none] text-white text-base sm:text-lg xl:text-2xl sm:mt-8">ORP has developed a proprietary line of 100% Organic, Non-Toxic, All-Natural liquid solutions that target and eliminate 2 distinct categories of harmful occurring compounds:  MOLD & HYDROCARBONS</p>

                    </div>
                    <div className="-ml-[435px] sm:-ml-[1280px]">
                    <Player
                        autoPlay
                        muted
                        src="/media/videos/Plants.mov"
                        fluid={false} // Disable fluid mode
                        width={vid_width} // Set a default width (adjust as needed)
                        height={vid_height} // Set a default height (adjust as needed)
                        >
                        <ControlBar autoHide={true} disableDefaultControls></ControlBar>
                    </Player>
                    </div>
                </div>
            </div>

             {/* video section 2 */}
             <div className="video-container mb-2 sm:mb-4">
                <div className="video-wrapper w-full relative">
                    <Image src="/media/images/arrow-down.png" width={60} height={40} alt="Arrow Down" className="block w-[30px] sm:w-[60px] absolute top-0 z-10 right-[30%] sm:right-[380px]"></Image>
                    <div className={`fade-element ${fadeClass2} w-full px-10 sm:px-0 text-left sm:w-1/2 lg:w-1/4 absolute flex flex-col h-full pb-10 sm:pb-0 justify-end sm:justify-center mr-0 sm:mr-32 right-0 z-10`} ref={ref2}>
                        <h5 className="[text-shadow:_0_1px_5px_rgb(0_0_0)]  sm:[text-shadow:none] text-xl sm:text-3xl xl:text-5xl font-bold uppercase text-[#3AAA01]">Protecting our Planet</h5>
                        <p className="[text-shadow:_0_1px_5px_rgb(0_0_0)] sm:[text-shadow:none] text-white text-base sm:text-lg xl:text-2xl sm:mt-8">Founded in 2017, after several years of R&D, ORP has now come to market with this breakthrough technology and solidified itself as a leader in the field of Organic Bioremediation.</p>

                    </div>
                    <div className="-ml-[350px] sm:-ml-[1200px]">
                    <Player
                        autoPlay
                        muted
                        playsInline
                        src="/media/videos/Sky.mov"
                        fluid={false} // Disable fluid mode
                        width={vid_width} // Set a default width (adjust as needed)
                        height={vid_height} // Set a default height (adjust as needed)
                        >
                        <ControlBar autoHide={true} disableDefaultControls></ControlBar>
                    </Player>
                    </div>
                </div>
            </div>     


             {/* video section 3 */}
             <div className="video-container mb-2 sm:mb-4">
                <div className="video-wrapper w-full relative">
                <Image src="/media/images/arrow-down.png" width={60} height={40} alt="Arrow Down" className="block w-[30px] sm:w-[60px] absolute top-0 z-10 left-[30%] sm:left-[380px]"></Image>
                    <div className={`fade-element ${fadeClass3} w-full  px-10 sm:px-0 text-left sm:w-1/2 lg:w-1/4 absolute flex flex-col h-full pb-10 sm:pb-0 justify-end sm:justify-center ml-0 sm:ml-32 z-10`}  ref={ref3}>
                        <h5 className="[text-shadow:_0_1px_5px_rgb(0_0_0)]  sm:[text-shadow:none] text-xl sm:text-3xl xl:text-5xl font-bold uppercase text-[#3AAA01]">Reducing Financial Waste</h5>
                        <p className="[text-shadow:_0_1px_5px_rgb(0_0_0)] sm:[text-shadow:none] text-white text-base sm:text-lg xl:text-2xl sm:mt-8">Currently serving Commercial and Residential Property Owners, Governments, and Oil/Gas Industries, ORP is building an impressive early track record poised for rapid growth.</p>

                    </div>
                    <div className="-ml-[380px] sm:-ml-[530px]">
                    <Player
                        autoPlay
                        muted
                        playsInline
                        src="/media/videos/Peas.mov"
                        fluid={false} // Disable fluid mode
                        width={vid_width} // Set a default width (adjust as needed)
                        height={vid_height} // Set a default height (adjust as needed)
                        >
                        <ControlBar autoHide={true} disableDefaultControls></ControlBar>
                    </Player>
                    </div>
                </div>
            </div>        
        </section>
        </>
    )
}