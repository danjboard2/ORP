"use client"
import FancySwiper from "../layout/fancyswiper";

export default function Agriculture() {

  const pages = [
    {
      name: 'agriculture',
      pagetitle: 'Agriculture',
      image1: 'url(/media/images/agri-pesticides.jpg)',
      image2: 'url(/media/images/agri-fertilizer.jpg)',
      image3: 'url(/media/images/agri-yield.jpg)',
      bg: '#F6F6F6',
      color: '#404041',
      smallimage1: '/media/images/soil-small1.png',
      smallimage2: '/media/images/soil-small2.png',
      smallimage3: '/media/images/soil-small3.png',
    sections: [
      {
        title: 'Less pesticides',
        content: 'Agricultural enzymes are bioactive proteins, which are used instead of chemicals for food production and protection. They are also used for crop fertility and protection against various pests & diseases. These factors improve crop efficiency and enhance crop growth.',
      },
      {
        title: 'Less Fertilizer',
        content: 'Agricultural enzymes are bioactive proteins, which are used instead of chemicals for food production and protection. They are also used for crop fertility and protection against various pests & diseases. These factors improve crop efficiency and enhance crop growth.',
      },
      {
        title: 'Greater Yield',
        content: 'Agricultural enzymes are bioactive proteins, which are used instead of chemicals for food production and protection. They are also used for crop fertility and protection against various pests & diseases. These factors improve crop efficiency and enhance crop growth.',
      },
    ]
  }
  ];

  return (
    <>
    <FancySwiper  pages={pages}/>
    </>
  )
}