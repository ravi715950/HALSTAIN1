import React from 'react';
import Box from './Box';
import boxItem from './featuesobj'

const Content = () => {
    return (
        <div>
 
            <div className="row margin-y-30px">
                {boxItem.map((boxItem)=>( <div className="col-md-6">
                    <Box id = {boxItem.id} title ={boxItem.title} para ={boxItem.para} />
                </div>))}
            </div>

        </div>
    );
}

export default Content;