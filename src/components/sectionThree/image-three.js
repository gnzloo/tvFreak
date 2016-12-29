import React from 'react';
require('../../public/sass/base.scss');

export default class ImagenThree extends React.Component{
    constructor(props){
        super(props);
        this.imagen = '../../../src/public/images/parallax.jpg';
    }
    render() {
        console.log(this.imagen);
        return (
            <img src={this.imagen} className="paralax"/> 
        );
    }
}