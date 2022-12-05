import React from 'react';
import { Container } from 'react-bootstrap';

const ContentWithBtn = (props) => {
    return (
        
        <Container>
            <div className="padding-y-150px">
        <div className="content-box">
            <h6 >ALWAYS PROFESSIONAL</h6>
            <h2 className={`${props.titleColor}-color`} >Well make sure your hard work succeeds.</h2>
            <p className='white-color margin-y-30px'>Duis sid elicit deus, venitas lorem ipsum dolor sit amet credula non postero elam.</p>
            <button className='golden-btn'> view more</button>
                      
        </div>
        </div>
        </Container>

    );
}

export default ContentWithBtn;