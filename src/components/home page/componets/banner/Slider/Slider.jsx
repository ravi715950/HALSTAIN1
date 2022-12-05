import React from "react";
// import { Link } from "react-router-dom";
import Appbtn from "../AppBtn/AppBtn"
import "./Slider.css";

const Slide = (props) => {
  const { title, subtitle,img,imgMd, imgSm, btntext } = props.slide;
  const { className } = props;

  return (
    <div className={className}>
      <div className="slidecont">
        <div className="slidetitles">
          <h1 className="font-Montserrat-14px">{subtitle}</h1>
          <h2 className="font-Marcellus-50px">{title}</h2>
        </div>
        <a href="/">
          <Appbtn text={btntext} icon="fal fa-chevron-right" />
        </a>
      </div>
      
      <img  className = "lg"src={img} alt="" />
      <img  className = "md"src={imgMd} alt="" />
      <img  className = "sm"src={imgSm} alt="" />
    </div>
  );
};
export default Slide;