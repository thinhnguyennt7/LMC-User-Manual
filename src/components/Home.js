import React, { Component } from 'react';
import TEXT from '../en_us.json';
import recycleImage from '../assets/recycle.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Home.scss';
import '../styles/App.scss';

export default class Home extends Component {

    bannerView = () => <img className={'bannerSpec'} src={recycleImage}></img>

    welcomeMessage = () => (
        <div className='welcomeMessageView'>
            <h1 id='title'>{TEXT.HOME_PAGE.HEADER}</h1>
            <h2 id='subtitle'>{TEXT.HOME_PAGE.SUBTITLE}</h2>
            <h3 id='solutionQuote'>{'Need a Short Solution Quote'}</h3>
        </div>
    );

    render() {
        return (
            <div className='homeView'>
                <Row>
                    <Col sm={7}>
                        <this.welcomeMessage />
                    </Col>
                    <Col sm={5}>
                        <this.bannerView />
                    </Col>
                </Row>
            </div>
        );
    };
};