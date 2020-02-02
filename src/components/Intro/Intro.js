import React, { Component } from 'react';
import TEXT from '../../en_us.json';
import './Intro.scss';
import '../App/App.scss';
import recycleImage from '../../assets/recycle.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Intro extends Component {

    bannerView = () => <img className={'bannerSpec'} src={recycleImage}></img>

    welcomeMessage = () => (
        <div className='welcomeMessageView'>
            <h1 id='title'>{TEXT.INTRO.HEADER}</h1>
            <h2 id='subtitle'>{TEXT.INTRO.SUBTITLE}</h2>
            <h3 id='solutionQuote'>{'Need a Short Solution Quote'}</h3>
        </div>
    );

    render() {
        return (
            <div className='introView'>
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