import React from 'react';
import CountUp from 'react-countup';
const Box = (props) => {
    return (
        <div className="mx-5 my-5">

            <span className="digit trasparent-white-color">
            <CountUp end={props.digit} /></span>
            <h5 className="white-color">{props.title}</h5>
        </div>
    );
}

export default Box;