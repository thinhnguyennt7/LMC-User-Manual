import React, { Component, Fragment } from 'react';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import Model from '../3D-Model/Model';
import Chart from '../Chart/Chart';
import './App.scss';

export default class App extends Component {

  mainViewRender = () => (
    <div className='main'>
      <Intro />
      <Chart />
      <Model />
      <Footer />
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
