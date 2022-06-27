import React, { useContext } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import SliderImg from '../ui/SliderImg'
import LangContext from '../../utils/store'

function Hero() {
  const { en } = useContext(LangContext)

  return (
    <div className="mt-24">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <SliderImg
          src="/images/slider/slide-22.jpg"
          heading1={en ? 'Get Your' : 'نقوم بتوفير'}
          heading2={en ? 'Heavy Equipements Now' : 'جميع المعدات المطلوية'}
          cta={en ? 'GET A QUOTE' : 'احصل على عرض سعر'}
        />
        <SliderImg
          src="/images/slider/slide-11.jpg"
          heading1={en ? 'Get Your' : 'نقوم بتوفير'}
          heading2={en ? 'Heavy Equipements Now' : 'جميع المعدات المطلوية'}
          cta={en ? 'GET A QUOTE' : 'احصل على عرض سعر'}
        />
        <SliderImg
          src="/images/slider/slide-33.jpg"
          heading1={en ? 'Get Your' : 'نقوم بتوفير'}
          heading2={en ? 'Heavy Equipements Now' : 'جميع المعدات المطلوية'}
          cta={en ? 'GET A QUOTE' : 'احصل على عرض سعر'}
        />
        <SliderImg
          src="/images/slider/slide-44.jpg"
          heading1={en ? 'Get Your' : 'نقوم بتوفير'}
          heading2={en ? 'Heavy Equipements Now' : 'جميع المعدات المطلوية'}
          cta={en ? 'GET A QUOTE' : 'احصل على عرض سعر'}
        />
      </Carousel>
    </div>
  )
}

export default Hero
