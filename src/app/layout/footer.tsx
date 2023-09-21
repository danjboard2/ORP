import Image from 'next/image'
import Link from 'next/link'
import { SiDiscord } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (
       <footer className="flex flex-row sm:flex-col space-around bg-black w-full text-white px-10 py-4">
         <div className="w-full flex flex-col  sm:flex-row max-w-[2000px] m-auto">
         <div className="flex flex-col min-w-[130px] w-full sm:w-1/4 items-center justify-center sm:border-r-[2px] border-[#404041]">
            <Image src="/media/images/orp-logo.png" width={200} height={100} alt="ORP Logo"className="mr-8 sm:mr-4 min-w-[120px]" />
            <p className="mt-6 sm:mt-10"><a href="tel:5144420231" className=" font-bold text-[#3AAA01]  underline hover:no-underline">(514) 442-0231</a></p>
         </div>
         { /* col of footer mobile */ }
            <div className="w-full flex sm:hidden justify-center">
               <div className="flex flex-row w-1/3 align-center justify-center mt-6">
               <Link href="https://twitter.com" className="flex self-center m-auto mt-0 mb-0 sm:ml-0"><FaXTwitter size={25}/></Link>
               <Link href="https://discord.com" className="flex self-center m-auto mt-0 mb-0 sm:ml-0"><SiDiscord size={25}/></Link>
               </div>
            </div>
            { /* end col of footer mobile */}
         <div className="flex flex-row sm:flex-row w-full sm:w-3/4">

            { /* col of footer */ }
            <div className="flex w-1/2 sm:w-1/3 justify-center sm:ml-20">
               <div className="flex flex-col w-full sm:pl-10 text-center sm:text-left">
               <h4 className=" text-xl mt-6 sm:mt-4 mb-2 sm:mb-6 font-bold">Products</h4>
               <Link href="/soil" className="text-base sm:text-lg mb-4 hover:underline">Soil</Link>
               <Link href="/mold" className="text-base sm:text-lg mb-4 hover:underline">Mold</Link>
               <Link href="/sewage" className="text-base sm:text-lg mb-4 hover:underline">Sewage</Link>
               </div>
            </div>
            { /* end col of footer */}

            { /* col of footer */ }
            <div className="flex w-1/2 sm:w-1/3 justify-center">
               <div className="flex flex-col w-full sm:pl-10 text-center sm:text-left">
               <h4 className=" text-xl mt-6 sm:mt-4 mb-2 sm:mb-6 font-bold">General</h4>
               <Link href="/about" className="text-base sm:text-lg mb-4 hover:underline">About</Link>
               <Link href="/projects" className="text-base sm:text-lg mb-4 hover:underline">Projects</Link>
               <Link href="/downloads" className="text-base sm:text-lg mb-4 hover:underline">Documents</Link>
               <Link href="/contact" className="text-base sm:text-lg mb-4 hover:underline">Contact</Link>
               </div>
            </div>
            { /* end col of footer */}
      
            { /* col of footer */ }
            <div className="w-full hidden sm:flex sm:w-1/3 justify-center">
               <div className="flex flex-col w-full sm:pl-10 text-center sm:text-left">
               <h4 className=" text-xl mt-6 sm:mt-4 mb-2 sm:mb-6 font-bold">Social</h4>
               <Link href="https://twitter.com" className="m-auto mt-0 mb-0 sm:ml-0"><FaXTwitter size={25}/></Link>
               <Link href="https://discord.com" className="m-auto mt-4 mb-0 sm:ml-0"><SiDiscord size={25}/></Link>
               </div>
            </div>
            { /* end col of footer */}

         </div>
         </div>
       </footer>
    )
  }