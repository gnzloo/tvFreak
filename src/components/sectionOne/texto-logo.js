import React from 'react';
require('../../public/sass/base.scss');

export default class TextoLogoS1 extends React.Component{
    render() {
        console.log(this.imagen);
        return (
            <p className="texto-logo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
        );
    }
}