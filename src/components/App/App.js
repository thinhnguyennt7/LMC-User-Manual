import React, { Component, Fragment } from 'react';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import Model from '../3D-Model/Model';
import Chart from '../Chart/Chart';
import { Pager } from 'react-bootstrap';
import ReactPageScroller from 'react-page-scroller';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  // getPageNumbers = () => {
  //   const pageNumbers = [];
  //   for (let i = 1; i < 6; i++) {
  //     pageNumbers.push(
  //       <Pager.Item key={i} eventKey={i - 1} onSelect={() => this.handlePageChange}>
  //         {i}
  //       </Pager.Item>
  //     )
  //   }
  //   return [...pageNumbers];
  // };

  // return (
  //   <Fragment>
  //     <ReactPageScroller
  //       pageOnChange={() => this.handlePageChange}
  //       customPageNumber={this.state.currentPage}
  //     >
  //       <Intro />
  //       <Model />
  //       <Chart />
  //       <Footer />
  //     </ReactPageScroller>
  //   </Fragment>
  // );

  render() {
    return (
      <Fragment>
          <Intro />
      </Fragment>
    );
  }
}
