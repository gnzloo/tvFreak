import React from 'react';
import ImagenThree from './image-three'
require('../../public/sass/base.scss');

export default class S3 extends React.Component{
    render() {
        return (
            <div className="container-3">
                <div className="col-13-12">
                    <ImagenThree />
                </div> 
            </div>
        );
    }
}