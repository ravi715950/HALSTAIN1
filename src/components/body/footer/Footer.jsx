import React from 'react'
import { Container } from 'react-bootstrap'

import Left from './Left'
import Right from './Right'

import './Footer.css'
function Footer() {
  return (
    <div className="bg-footer-img  white-color">

      <Container>
    <div className='padding-y-50px'>

      <div className="row">
        <div className="col-md-6">
      <Left/>
        </div>
        <div className="col-md-6">
      <Right/>
        </div>
      </div>
    </div>
      </Container>

    <div className="border-top">
    <Container>
       <div className="row p-3">
        <div className="col-md-9">
          <p>
          © 2022 
          
          , All Rights Reserved
          </p>
        </div>
        <div className="col-md-3"><p>Designed by : <a href="/"> Ravindra Raghav </a></p></div>
      </div>
    </Container>
        </div>
    </div>
  )
}

export default Footer;