import React, { Component, Fragment } from 'react';
import Contributor from './Contributor';
import Home from './Home';
import Intruction from './Instruction';
import Technical from './Technical';
import FAQ from './FAQ';
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import '../styles/App.scss';

export default class App extends Component {

  mainViewRender = () => (
    <div className='main'>
      <ScrollUpButton
        EasingType='linear'
        AnimationDuration={600}
        style={{backgroundColor: '#FFC58A'}}
      />
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
