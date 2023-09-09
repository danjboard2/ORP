"use client"
import './globals.css'
import type { Metadata } from 'next'
import './homepage/home-swiper.css'
import NavBar from './layout/navbar'
import Footer from './layout/footer'
import React, { useRef } from 'react';

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const menuRef = useRef(null); // Initialize menuRef
  return (
    <>
    <html>
      <body>
        <NavBar menuRef={menuRef} />
          {children}
        <Footer/>
      </body>
    </html>
    </>
  )
}
