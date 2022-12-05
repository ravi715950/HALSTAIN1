import React from 'react';
import About from '../body/about-breif/About';
import './AboutUs.css'

import Contnent from './componets/Contnent';
import Title from './componets/Title';


const AboutUs = () => {
    return (
        <div>
          <Title/>
          <About
          title1 = {"Launch your creative ideas. Whatever you "}
          title2 ={"imagine we"}
          title3 = {"will make it happen with our team of specialists."}
          ceo = {"ALEX LEE, CEO"}/>
         
          <Contnent/>

        </div>
    );
}

export default AboutUs;