import React from 'react';
import S1 from './sectionOne/section-one';
import S2 from './sectionTwo/section-two';
import S3 from './sectionThree/section-three';
import S4 from './sectionFour/section-four';
require('../public/sass/base.scss');

export default class App extends React.Component{
    render() {
        return (
            <div className="grid">
                <S1 />
                <S2 />
                <S3 />
                <S4 />
            </div>

        );
    }
}