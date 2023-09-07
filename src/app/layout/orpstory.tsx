import Link from 'next/link'
import Image from 'next/image'
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Player, ControlBar, PlayToggle, BigPlayButton } from 'video-react';
import { useFadeIn } from './fadein'; // Import the custom hook

export default function ORPStory() {

    const { ref: ref1, fadeClass: fadeClass1 } = useFadeIn(); 
    const { ref: ref2, fadeClass: fadeClass2 } = useFadeIn();
    const { ref: ref3, fadeClass: fadeClass3 } = useFadeIn();
    // Add more as needed

    return (
        <>
        <section id="orpstory" className="w-full max-w-[2000px] m-auto flex flex-col">
            {/* header text */}
            <div className={`w-full text-center mb-12"`}>
                <h3 id="orpstory" className="relative text-5xl uppercase font-bold overflow-hidden">The ORP Story</h3>
                <h4 className="text-2xl text-[#404041]">Our journey and vision</h4>
            </div>

            {/* video section 1 */}
            <div className="video-container mb-4">
                <div className="video-wrapper w-full relative">
                    <div className={`fade-element ${fadeClass1} w-1/4 absolute flex flex-col h-full justify-center ml-32 z-10`} ref={ref1}>
                        <h5 className="text-5xl font-bold uppercase text-[#3AAA01]">Title</h5>
                        <p className="text-white text-2xl mt-8">ORP has developed a proprietary line of 100% Organic, Non-Toxic, All-Natural liquid solutions that target and eliminate 2 distinct categories of harmful occurring compounds:  MOLD & HYDROCARBONS</p>

                    </div>
                    <Player
                        autoPlay
                        muted
                        playsInline
                        src="/media/videos/Plants.mov"
                        fluid={false} // Disable fluid mode
                        width={2000} // Set a default width (adjust as needed)
                        height={600} // Set a default height (adjust as needed)
                        >
                        <ControlBar autoHide={true} disableDefaultControls></ControlBar>
                    </Player>
                </div>
            </div>

             {/* video section 2 */}
             <div className="video-container mb-4">
                <div className="video-wrapper w-full relative">
                    <Image src="/media/images/arrow-down.png" width={60} height={40} alt="Arrow Down" className="absolute top-0 z-10 right-[380px]"></Image>
                    <div className={`fade-element ${fadeClass2} w-1/4 absolute flex flex-col h-full justify-center mr-32 right-0 z-10`} ref={ref2}>
                        <h5 className="text-5xl font-bold uppercase text-[#3AAA01]">Title</h5>
                        <p className="text-white text-2xl mt-8">Founded in 2017, after several years of R&D, ORP has now come to market with this breakthrough technology and solidified itself as a leader in the field of Organic Bioremediation.</p>

                    </div>
                    <Player
                        autoPlay
                        muted
                        playsInline
                        src="/media/videos/Sky.mov"
                        fluid={false} // Disable fluid mode
                        width={2000} // Set a default width (adjust as needed)
                        height={600} // Set a default height (adjust as needed)
                        >
                        <ControlBar autoHide={true} disableDefaultControls></ControlBar>
                    </Player>
                </div>
            </div>     


             {/* video section 3 */}
             <div className="video-container mb-4">
                <div className="video-wrapper w-full relative">
                <Image src="/media/images/arrow-down.png" width={60} height={40} alt="Arrow Down" className="absolute top-0 z-10 left-[380px]"></Image>
                    <div className={`fade-element ${fadeClass3} w-1/4 absolute flex flex-col h-full justify-center ml-32 z-10`}  ref={ref3}>
                        <h5 className="text-5xl font-bold uppercase text-[#3AAA01]">Title</h5>
                        <p className="text-white text-2xl mt-8">Currently serving Commercial and Residential Property Owners, Governments, and Oil/Gas Industries, ORP is building an impressive early track record poised for rapid growth.</p>

                    </div>
                    <Player
                        autoPlay
                        muted
                        playsInline
                        src="/media/videos/Peas.mov"
                        fluid={false} // Disable fluid mode
                        width={2000} // Set a default width (adjust as needed)
                        height={600} // Set a default height (adjust as needed)
                        >
                        <ControlBar autoHide={true} disableDefaultControls></ControlBar>
                    </Player>
                </div>
            </div>        
        </section>
        </>
    )
}