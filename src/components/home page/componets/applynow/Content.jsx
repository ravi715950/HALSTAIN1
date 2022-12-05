import React from "react";
import { Container } from "react-bootstrap";
import './Applynow.css'

const Content = () => {
  return (
    <div className=" content-background-img d-relative">
 
 <div className="max-width-100  visibility-hidden">

          <img src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h2-img-05.jpg" alt="girl" />
  </div>
  
<Container fluid>

  <div className="ontop">

      <div className="margin-y-30px" >
      <h4 className="mobile-size main1">
        What will investments look
        <br />
        like after the pandemic year?
      </h4>
      <p className="padding-y-10px mobile-size main2">
        Duis aute irure dolor in reprehenderit in voluptate velit
        <br />
        esse cillum dolore eu fugiat nulla pariatur.
      </p>
        </div>      
        </div>
<div className="row onBottom ">
    <div className="col-8">
        <h4 className="mobile-size main3">
            
Apply for online conference
<br />
"Investments of the future"	
        </h4>

    </div>
    <div className="col-4 padding-y-10px arrow d-flex justify-content-center py-5">
       <a href="/"><h1>|›</h1></a>
    </div>
  </div>


</Container>

    </div>
  );
};

export default Content;