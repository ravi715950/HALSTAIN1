import React from 'react'
import img1 from '../../../../../images/carosel/h1-rev-img-01.jpg'
import img2 from '../../../../../images/carosel/h1-rev-img-02.jpg'
import img3 from '../../../../../images/carosel/h1-rev-img-03.jpg'
import img4 from '../../../../../images/carosel/h1-rev-img-01-md.jpg'
import img5 from '../../../../../images/carosel/h1-rev-img-02-md.jpg'
import img6 from '../../../../../images/carosel/h1-rev-img-03-md.jpg'
import img7 from '../../../../../images/carosel/h1-rev-img-01-sm.jpg'
import img8 from '../../../../../images/carosel/h1-rev-img-02-sm.jpg'
import img9 from '../../../../../images/carosel/h1-rev-img-03-sm.jpg'


import './Slider.css'

function Slider() {
  return (
    <>
    <div className="div1">
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
</div>
    <div className="div2">
    <div
  id="carouselExampleFade"
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img4} className="d-block w-100" />
      <div className="slider-over-div2">
        <h5>EXPERT GUIDANCE</h5>
        <h1>Lastest Strategies</h1>
        <a className="hero-btn" href="#">
          View More
        </a>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img5} className="d-block w-100" />
      <div className="slider-over-div2">
        <h5>INNOVATIVE IDEAS</h5>
        <h1>Marketing Plans</h1>
        <a className="hero-btn" href="#">
          View More
        </a>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img6} className="d-block w-100" />
      <div className="slider-over-div2">
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
</div>
    <div className="div3">
    <div
  id="carouselExampleFade"
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img7} className="d-block w-100" />
      <div className="slider-over-div3">
        <h5>EXPERT GUIDANCE</h5>
        <h1>Lastest Strategies</h1>
        <a className="hero-btn" href="#">
          View More
        </a>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img8} className="d-block w-100" />
      <div className="slider-over-div3">
        <h5>INNOVATIVE IDEAS</h5>
        <h1>Marketing Plans</h1>
        <a className="hero-btn" href="#">
          View More
        </a>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img9} className="d-block w-100" />
      <div className="slider-over-div3">
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
</div>

    </>
  )
}


export default Slider;
