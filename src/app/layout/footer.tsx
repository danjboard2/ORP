import Image from 'next/image'
import Link from 'next/link'
import { SiDiscord, SiTwitter } from "react-icons/si";


export default function Footer() {
    return (
       <footer className="flex flex-row space-around bg-black w-full text-white px-10 py-8">
         <div className="w-full flex max-w-[2000px] m-auto">
         <div className="flex w-1/4 items-center justify-center border-r-[1px] border-[#404041]">
            <Image src="/media/images/orp-logo.png" width={200} height={100} alt="ORP Logo"/>
         </div>
         <div className="flex flex-row w-3/4">

            { /* col of footer */ }
            <div className="flex w-1/3 justify-center">
               <div className="flex flex-col">
               <h4 className=" text-xl mb-8 font-bold">Products</h4>
               <Link href="/soil" className="mb-4 hover:underline">Soil</Link>
               <Link href="/mold" className="mb-4 hover:underline">Mold</Link>
               <Link href="/sewage" className="mb-4 hover:underline">Sewage</Link>
               <Link href="/agriculture" className="mb-4 hover:underline">Agriculture</Link>
               </div>
            </div>
            { /* end col of footer */}

            { /* col of footer */ }
            <div className="flex w-1/3 justify-center">
               <div className="flex flex-col">
               <h4 className=" text-xl mb-8 font-bold">General</h4>
               <Link href="/soil" className="mb-4 hover:underline">About</Link>
               <Link href="/mold" className="mb-4 hover:underline">Projects</Link>
               <Link href="/sewage" className="mb-4 hover:underline">Documents</Link>
               <Link href="/agriculture" className="mb-4 hover:underline">Contact</Link>
               </div>
            </div>
            { /* endcol of footer */}
      
            { /* col of footer */ }
            <div className="flex w-1/3 justify-center">
               <div className="flex flex-col">
               <h4 className=" text-xl mb-8 font-bold">Social</h4>
               <Link href="https://twitter.com" className="mb-4"><SiTwitter size={25}/></Link>
               <Link href="https://discord.com" className="mb-4"><SiDiscord size={25}/></Link>
               </div>
            </div>
            { /* end col of footer */}

         </div>
         </div>
       </footer>
    )
  }