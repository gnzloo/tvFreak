import React from 'react';
import NombreLogoS4 from './nombre-logo'
require('../../public/sass/base.scss');

export default class S1 extends React.Component{

    render() {
        console.log(this.imagen);
        return (
            <div className="container-4">
                <div className="col-1-12">
                     <NombreLogoS4 />
                </div>
           </div>          
        );
    }
}