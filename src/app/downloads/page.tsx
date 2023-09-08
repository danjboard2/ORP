"use client"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  return (
    <>
    <section>
      <div className="w-full flex h-[100vh] max-h-[1200px] max-w-[2000px] m-auto justify-center items-center gap-32 flex-col">

        <div className="w-2/3 flex flex-col">
            <h1 className="text-6xl mb-10 text-[#3AAA01] font-bold uppercase">Downloads</h1>
            <p className="text-3xl mb-20 w-1/2">Here you can download helpful documentation about our products and methods.</p>

                <div className="flex flex-row gap-20">
                    <Link href="/media/documents/sewage-remediation.pdf">
                      <div className="w-[250px] flex flex-col text-center">
                        <Image src="/media/images/pdf-download.png" alt="Download PDF" width={300} height={300} />
                        <p className="text-xl font-bold mt-4">Sewage &amp; Remediation Download</p>
                      </div>
                      </Link>

                      <Link href="/media/documents/soil-remediation.pdf">
                      <div className="w-[250px] flex flex-col text-center">
                        <Image src="/media/images/pdf-download.png" alt="Download PDF" width={300} height={300} />
                        <p className="text-xl font-bold mt-4">Soil &amp; Sand Remediation Download</p>
                      </div>
                      </Link>

                      <Link href="/media/documents/mold-remediation.pdf">
                      <div className="w-[250px] flex flex-col text-center">
                        <Image src="/media/images/pdf-download.png" alt="Download PDF" width={300} height={300} />
                        <p className="text-xl font-bold mt-4">Mold Remediation Download</p>
                      </div>
                      </Link>
                  </div>

        </div>
        </div>
    </section>
    </>
  )
}