import React from 'react'
import img1 from '../../../../images/carosel/h1-rev-img-01.jpg'
import img2 from '../../../../images/carosel/h1-rev-img-02.jpg'
import img3 from '../../../../images/carosel/h1-rev-img-03.jpg'

import './Carousel.css'

function Carousel() {
  return (
    <>
    <div
  id="carouselExampleFade"
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" />
      <div className="slider-over">
        <h5>EXPERT GUIDANCE</h5>
        <h1>Lastest Strategies</h1>
        <a className="hero-btn" href="#">
          View More
        </a>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" />
      <div className="slider-over">
        <h5>INNOVATIVE IDEAS</h5>
        <h1>Marketing Plans</h1>
        <a className="hero-btn" href="#">
          View More
        </a>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" />
      <div className="slider-over">
        <h5>REAL PROFESSIONALS</h5>
        <h1>Field Expertise</h1>
        <a className="hero-btn" href="#">
          View More
        </a>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
    >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}


export default Carousel;


