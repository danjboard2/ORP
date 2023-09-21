import Link from 'next/link'
import { SiDiscord, SiTwitter } from "react-icons/si";


export default function CTABlock() {
    return (
            <>
            <section className="w-full flex flex-row bg-[#73CD4A] py-10 mb-12">
                <div className="w-full flex-col lg:flex-row flex  max-w-[2000px] m-auto px-4 lg:px-32">
                    <div className="w-full lg:w-3/5 text-center lg:text-left mb-4 lg:mb-0">
                        <h3 className="text-xl lg:text-2xl xl:text-4xl font-bold uppercase mb-2">Call to action message title goes here</h3>
                        <p className="text-sm sm:text-lg xl:text-2xl">Call to action message subtitle or body goes here</p>
                    </div>
                    <div className="w-full lg:w-2/5 flex place-content-center self-center">
                        <Link href="/" className="inline-block rounded-full border-[#404041] border-solid border-4 p-2 px-10 w-auto text-sm sm:text-lg xl:text-2xl font-bold text-[#404041] hover:bg-[#404041] hover:text-white">Enquire now</Link>
                    </div>
                </div>
            </section>
            </>
    )
}