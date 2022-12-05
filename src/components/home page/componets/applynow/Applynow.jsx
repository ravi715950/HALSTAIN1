import React from 'react'
import { Container } from 'react-bootstrap'
import Content from './Content'
import Picture from './Picture'
import './Applynow.css'

export default function Applynow() {
  return (
    <div >
        <Container fluid className='mainContainer'>

        <div className="row">
            <div className="col-lg-6 px-0 ">
              <Picture/>
              </div>
              <div className="col-lg-6 px-0 ">
                <Content/>
              </div>
        </div>
        </Container>
    </div>
  )
}