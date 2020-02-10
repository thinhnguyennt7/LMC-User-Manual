import React, { Component, Fragment } from 'react';
import Contributor from './Contributor';
import Home from './Home';
import Intruction from './Instruction';
import Technical from './Technical';
import FAQ from './FAQ';
import '../styles/App.scss';

export default class App extends Component {

  mainViewRender = () => (
    <div className='main'>
      <Home />
      <Technical />
      <Intruction />
      <FAQ />
      <Contributor />
    </div>
  );

  render() {
    return (
      <Fragment>
        <this.mainViewRender/>
      </Fragment>
    );
  }
}
