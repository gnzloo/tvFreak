import React from 'react';
import IconLogoS1 from './icon-logo'
import NombreLogoS1 from './nombre-logo'
import TextoLogoS1 from './texto-logo'
require('../../public/sass/base.scss');

export default class S1 extends React.Component{

    render() {
        console.log(this.imagen);
        return (
            <div className="container-1">
                <div className="col-1-12">
                     <IconLogoS1 />
                     <NombreLogoS1 />
                     <TextoLogoS1 />
                </div>
           </div>          
        );
    }
}