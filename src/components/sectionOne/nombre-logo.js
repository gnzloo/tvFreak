import React from 'react';
require('../../public/sass/base.scss');

export default class NombreLogoS1 extends React.Component{
    constructor(props){
        super(props);
        this.imagen = '../../../src/public/images/NuncheeInteractive.png';
    }
    render() {
        console.log(this.imagen);
        return (
            <img src={this.imagen} className="nombre-logo"/> 
        );
    }
}