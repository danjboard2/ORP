"use client"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  return (
    <>
    <section className="mt-[220px] xl:mt-[147px] mb-20">
      <div className="w-full flex xl:h-[100vh] xl:max-h-[1200px] max-w-[2000px] m-auto justify-center items-center gap-32 flex-col">

        <div className="w-[90%] lg:w-2/3 flex flex-col">
            <h1 className="text-3xl xl:text-6xl mb-10 text-[#3AAA01] font-bold uppercase">Downloads</h1>
            <p className="text-lg xl:text-3xl mb-20 md:w-1/2">Here you can download helpful documentation about our products and methods.</p>

                <div className="flex w-full flex-row gap-4 md:gap-20">
                    <Link href="/media/documents/sewage-remediation.pdf" className="w-[250px] md:w-full xl:w-[250px] flex flex-col text-center">
                      <div>
                        <Image src="/media/images/pdf-download.png" alt="Download PDF" width={300} height={300}  className="w-full"/>
                        <p className="text-md xl:text-xl font-bold mt-4">Sewage &amp; Remediation Download</p>
                      </div>
                      </Link>

                      <Link href="/media/documents/soil-remediation.pdf" className="w-[250px] md:w-full xl:w-[250px] flex flex-col text-center">
                      <div>
                        <Image src="/media/images/pdf-download.png" alt="Download PDF" width={300} height={300} className="w-full"/>
                        <p className="text-md xl:text-xl font-bold mt-4">Soil &amp; Sand Remediation Download</p>
                      </div>
                      </Link>

                      <Link href="/media/documents/mold-remediation.pdf" className="w-[250px] md:w-full xl:w-[250px] flex flex-col text-center">
                      <div>
                        <Image src="/media/images/pdf-download.png" alt="Download PDF" width={300} height={300} className="w-full" />
                        <p className="text-md xl:text-xl font-bold mt-4">Mold Remediation Download</p>
                      </div>
                      </Link>
                  </div>

        </div>
        </div>
    </section>
    </>
  )
}