import React from 'react';
import { Container } from 'react-bootstrap';
import logosUrls from '../../../../images/logos/logourls';
import LogoBox from './LogoBox';

const Logos = () => {

    return (
        <Container> 
            <div className='row' >

{logosUrls.map((l) => (
<div className='col-md-4 my-3 col-sm-6 col-xs-12'>
<LogoBox logoUrls={l} />
</div>

))}
</div>
            
        </Container>

    )
};
export default Logos;