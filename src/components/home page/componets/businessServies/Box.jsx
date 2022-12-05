import React from 'react';
import './Business.css'

const Box = (props) => {
    return (

        <div className='position-relative m-auto'  >

            <span className='digit brown-color position-absolute zIndex--1' style={{ "opacity": "0.2" }}>{props.id}</span>

            <div className="padding-y-10px">

                <h4> {props.title}t</h4>
                <p>{props.para}</p>
            </div>
        </div>
    );
}

export default Box;