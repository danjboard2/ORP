"use client"
import HomepageSwiper from "./homepage/swiper";
import ContactBlock from "./layout/contactform";
import CTABlock from "./layout/ctablock";
import ORPStory from "./layout/orpstory";

export default function Home() {
  return (
    <>
      <HomepageSwiper/>
      <CTABlock/>
      <ORPStory/>
      <ContactBlock/>
    </>
  )
}
