import React from 'react';
require('../../public/sass/base.scss');

export default class IconLogoS1 extends React.Component{
    constructor(props){
        super(props);
        this.imagen = '../../../src/public/images/icon.png';
    }
    render() {
        console.log(this.imagen);
        return (
            <img src={this.imagen} className="logo"/> 
        );
    }
}