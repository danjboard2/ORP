"use client"
import FancySwiper from "../layout/fancyswiper";

export default function Soil() {
  const slidesToShow = 3;
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
        content: '<ul><li>Industrial practices of the past have caught up to us. Natural resource extractions, transportation, and chemical handling have caused massive amounts of pollution.</li><li>Evolving regulations are forcing entities to address and remediate polluted soil in many countries.</li>',
      },
      {
        title: 'Adding Value',
        content: '<ul><li>Traditional approach has been to “dig and dump” (relocate polluted materials offsite to chemical dumps).</li><li>This practice is very expensive, disruptive to communities and only moves the problem.</li></ul>',
      },
      {
        title: 'Breathe Easy',
        content: '<ul><li>ORP-SR1 allows treatment on-site, is highly effective and represents a massive carbon offset at remediation completion.</li><li>Reduced liability for polluters and property owners.</li>',
      },
    ]
  }
  ];

  return (
    <>
    <FancySwiper pages={pages} numberSlides={slidesToShow}/>
    </>
  )
}