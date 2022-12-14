import React from 'react'
import Title from '../aboutUs/componets/Title'
import About from '../body/about-breif/About'
import Applynow from '../home page/componets/applynow/Applynow'

function ContactUS() {
  return (
    <div>
        <Title
        cName="back-div3"
        title="Contact Us"
        />
        <About title1= "From strategy to delivery, we are here"
      title2 ="to make sure your business"
      title3 = " endeavor succeeds. Trust our experts."
      ceo="ALEX LEE, CEO"
      />
        <Applynow/>
    </div>
  )
}

export default ContactUS