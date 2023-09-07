"use client"
import FancySwiper from "../layout/fancyswiper";

export default function Mold() {
  const slidesToShow = 3;
  const pages = [
    {
      name: 'mold',
      pagetitle: 'Mold Remediation',
      image1: 'url(/media/images/mold-remediation.jpg)',
      image2: 'url(/media/images/mold-natural.jpg)',
      image3: 'url(/media/images/mold-clean.jpg)',
      bg: 'radial-gradient(50% 50% at 50% 50%, #3B3B3D 0%, #606061 100%)',
      color: '#fff',
      smallimage1: '/media/images/mold-small1.png',
      smallimage2: '/media/images/mold-small2.png',
      smallimage3: '/media/images/mold-small3.png',
    sections: [
      {
        title: 'Mold Remediation',
        content: '<ul><li>Water events are becoming more frequent and harder to manage globally.</li><li>Flooding and Natural Disasters are degrading communities consistently.</li></ul>',
      },
      {
        title: 'Natural and Non-Toxic',
        content: '<ul><li>Post infiltration, property owners have had limited methods to triage structures:</li><ol><li>Demo and rebuild = very costly and time consuming.</li> <li>Chemical fogging = displaced people, time consuming and variable results.</li><ol><ul>',
      },
      {
        title: 'Clean Living',
        content: '<ul><li>ORP-MT1 is applied to moldy surfaces using a simple sprayer avoiding specialized labor.</li><li>Resulting in reduced costs, safer conditions, and effective mold treatment.</li></ul>',
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