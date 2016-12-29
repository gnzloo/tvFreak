import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import Footer from './components/footer'

render(<App />,document.getElementById('app'));
render(<Footer />, document.getElementById('footer'));