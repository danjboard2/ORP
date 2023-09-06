"use client"
import FancySwiper from "../layout/fancyswiper";

export default function Soil() {

  const pages = [
    {
      name: 'soil',
      pagetitle: 'Soil Remediation',
      image1: 'url(/media/images/soil-remediation.jpg)',
      image2: 'url(/media/images/adding-value.jpg)',
      image3: 'url(/media/images/breathe-easy.jpg)',
      bg: '#F6F6F6',
      color: '#404041',
      smallimage1: '/media/images/soil-small1.png',
      smallimage2: '/media/images/soil-small2.png',
      smallimage3: '/media/images/soil-small3.png',
    sections: [
      {
        title: 'Soil Remediation',
        content: 'Due to the wide usage of petroleum products in our world every day, our land has become saturated with contaminates. Our products safely remove all signs of the contamination leaving you with lush, fertile soil.',
      },
      {
        title: 'Adding Value',
        content: 'Often contaminated sites remain untouched for years because of the elevated cost of remediation. The use of microorganisms is a fraction of the cost. These microorganisms feed off of the pollutants, break them down and eliminate them.',
      },
      {
        title: 'Breathe Easy',
        content: 'The soil will become usable land at the end of the treatment. This land can now be used for urban development without the risk of spreading contaminates. Our products are 100% non-toxic, safe to use and extremely effective.',
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