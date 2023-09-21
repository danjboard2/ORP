import Link from 'next/link'
import Image from 'next/image'


export default function ContactBlock() {
    return (
            <>
            <section className="w-full flex flex-row">
                <div className="w-full flex flex-col lg:flex-row max-w-[2000px] m-auto justify-center items-center my-12 gap-6">
                    <div className="w-1/2 lg:w-1/5"><Image src="/media/images/contact-leaf.png" alt="Contact ORP" width={400} height={500}></Image></div>
                    <div className="w-2/3 text-center lg:text-left lg:w-1/5">
                        <h3 className="text-xl sm:text-3xl xl:text-5xl font-bold text-[#73CD4A] mb-8">Stay in the loop</h3>
                        <p className="text-base sm:text-xl xl:text-3xl font-bold text-[#404041]">Sign up to keep updated with our latest news, products and services</p>
                        <Link href="/contact" className="inline-block w-fit text-base sm:text-lg xl:text-2xl rounded-full border-[1px] md:border-4 border-[#3AAA01] px-10 xl:px-12 md:py-2 font-bold text-[#3AAA01] mt-10 lg:mt-24 hover:bg-[#3AAA01] hover:text-white">Enquire now</Link>
                    </div>
                </div>
            </section>
            </>
    )
}