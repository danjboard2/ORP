import './globals.css'
import type { Metadata } from 'next'
import NavBar from './layout/navbar'
import Footer from './layout/footer'

export const metadata: Metadata = {
  title: 'Organic Remediation Products',
  description: 'Organic Remediation Products',
}

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html>
      <body>
        <NavBar/>
          {children}
        <Footer/>
      </body>
    </html>
    </>
  )
}
