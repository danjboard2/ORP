import Link from 'next/link'
import { SiDiscord, SiTwitter } from "react-icons/si";


export default function CTABlock() {
    return (
            <>
            <section className="w-full flex flex-row bg-[#73CD4A] py-10 mb-12">
                <div className="w-full flex  max-w-[2000px] m-auto px-32">
                    <div className="w-3/4">
                        <h3 className="text-4xl font-bold uppercase mb-2">Call to action message title goes here</h3>
                        <p className="text-2xl">Call to action message subtitle or body goes here</p>
                    </div>
                    <div className="w-1/4 flex place-content-center self-center">
                        <Link href="/" className="inline-block rounded-full border-[#404041] border-solid border-4 p-2 px-20 w-auto text-2xl font-bold text-[#404041] hover:bg-[#404041] hover:text-white">Enquire now</Link>
                    </div>
                </div>
            </section>
            </>
    )
}