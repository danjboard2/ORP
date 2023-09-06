"use client"
import FancySwiper from "../layout/fancyswiper";

export default function Sewage() {

  const pages = [
    {
      name: 'sewage',
      pagetitle: 'Sewage Sludge Remediation',
      image1: 'url(/media/images/mold-remediation.jpg)',
      image2: 'url(/media/images/mold-natural.jpg)',
      image3: 'url(/media/images/mold-clean.jpg)',
      bg: 'radial-gradient(50% 50% at 50% 50%, #3B3B3D 0%, #606061 100%)',
      color: '#fff',
      smallimage1: '/media/images/soil-small1.png',
      smallimage2: '/media/images/soil-small2.png',
      smallimage3: '/media/images/soil-small3.png',
    sections: [
      {
        title: 'Mold Remediation',
        content: 'Our organic mold remediation solution kills mold and mold spores quickly and safely. When mold is not treated properly, it can release thousands of spores into the air which can be inhaled and are extremely harmful.',
      },
      {
        title: 'Natural and Non-Toxic',
        content: 'Man-made chemicals can be even more toxic than the mold they were meant to treat. If not handled carefully, chemical residue can remain after the mold is gone. This process can take weeks to remove all the mold.',
      },
      {
        title: 'Clean Living',
        content: 'Our mold product is composed of 17 naturally occurring microbes and is 100% organic. It cleans and removes mold in difficult to reach places without having to destroy property. It is safe and effective.',
      },
    ]
  }
  ];

  return (
    <>
    <FancySwiper pages={pages}/>
    </>
  )
}