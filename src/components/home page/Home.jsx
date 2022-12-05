import React from 'react'
// import Carousel from './componets/Carousel';
import About from '../body/about-breif/About';
import Features from './componets/features/Features';
import BusinessServies from './componets/businessServies/BusinessServies';
import Applynow from './componets/applynow/Applynow';
import Slider from './componets/banner/Carousel';

function Home() {
  return (
    <>
    <Slider/>
    <About title1= "From strategy to delivery, we are here"
      title2 ="to make sure your business"
      title3 = " endeavor succeeds. Trust our experts."
      ceo="ALEX LEE, CEO"
      />
      <Features/>
      <BusinessServies/>
      <Applynow/>
      
    </>
  )
}

export default Home;