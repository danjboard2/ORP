import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
        <>
         <nav className="flex flex-row bg-black bg-opacity-75 absolute top-0 left-0 w-full z-10 border-b-8 border-[#5DA33D]">
            <div className="m-6 lg:m-[1.9rem] lg:ml-12"><Image src="/media/images/orp-logo.png" priority={true} width={271} height={78} alt="Logo"/></div>
            <div className="hamburger">=</div>
            <div id="menu">
                <Link href="/">Home</Link>
                <Link href="/soil/">Soil</Link>
                <Link href="/mold/">Mold</Link>
                <Link href="/sewage/">Sewage</Link>
                <Link href="/agriculture/">Agriculture</Link>
                <Link href="/projects/">Projects</Link>
                <Link href="/downloads/">Downloads</Link>
                <Link href="/contact/">Contact</Link>
            </div>
        </nav>
        </>
    )
  }