import React from 'react'
import { Container } from 'react-bootstrap'
import './About.css'
export default function About(props) {
  return (
  <div className="about-breif">
 <Container>
     <div className="about-content p-4 m-2">
      <h2 className='about-content-heading'>{" "} {props.title1} <span className="brown-color">{props.title2}</span>{props.title3}
      </h2>
      <h6 className="about-name">
      {props.ceo}
      </h6>
    </div>
    </Container>
  </div>
  )
}