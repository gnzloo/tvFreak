import React from 'react';
require('../../public/sass/base.scss');

export default class Imagen1 extends React.Component{
    constructor(props){
        super(props);
        this.imagen = '../../../src/public/images/directtv.png';
    }
    render() {
        return (
            <div>
            <img src={this.imagen} className="img-3"/> 
            <p className="texto-img-3">DirectTV · TV Interactive</p>
            </div>
        );
    }
}