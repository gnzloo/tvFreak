import React from 'react';
import Imagen1 from './imagen-1';
import Imagen2 from './imagen-2';
import Imagen3 from './imagen-3';
require('../../public/sass/base.scss');

export default class S2 extends React.Component{
    render() {
        return (
            <div className="container-2">
                <div className="col-4-12">
                    <Imagen1 />
                </div> 
                <div className="col-4-12">
                    <Imagen2 />
                </div> 
                <div className="col-4-12">
                    <Imagen3 />
                </div>    
            </div>
        );
    }
}