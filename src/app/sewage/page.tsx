"use client"
import FancySwiper from "../layout/fancyswiper";

export default function Sewage() {
  const slidesToShow = 1;
  const pages = [
    {
      name: 'sewage',
      pagetitle: 'Sewage',
      image1: 'url(/media/images/sewage-slide.jpg)',
      image2: '',
      image3: '',
      bg: 'radial-gradient(44.05% 44.05% at 52.55% 50.02%, rgb(88 173 49) 51.56%, rgb(97, 189, 54) 100%)',
      color: '#fff',
      smallimage1: '',
      smallimage2: '',
      smallimage3: '',
    sections: [
      {
        title: '',
        content: '<ul><li>Sewage Sludge is especially prevalent in developing communities and represents a large health risk when not treated or disposed.</li><li>Sheer volume often prohibits disposal or safe transportation of materials.</li><li>ORP-SW1 converts toxic sewage through a multi-phase treatment into usable agricultural by product and fertilizers.</li><li>Simple application usually allows governments to utilize their existing holding facilities avoiding extra costs.</li></ul>',
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