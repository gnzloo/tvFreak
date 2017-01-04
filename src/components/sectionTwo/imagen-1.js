import React from 'react';
require('../../public/sass/base.scss');

export default class Imagen1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.imagen = '../../../src/public/images/kunga.png';
    }

    render() {
        return (
           <div> 
            <img src={this.imagen} className="img-1"/> 
            <p className="texto-img-1">KUNGA · Actitud Animal</p>
           </div> 
        );
    }
}