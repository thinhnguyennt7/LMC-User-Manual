import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Row, Col } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import TEXT from '../en_us.json';
import recycleImage from '../assets/recycle.png';
import '../styles/Home.scss';

export default class Home extends Component {

    bannerView = () => <img className={'bannerSpec'} src={recycleImage}></img>

    welcomeMessage = () => (
        <div className='welcomeMessageView'>
            <Fade side delay={400}><h1 id='title'>{TEXT.HOME_PAGE.HEADER}</h1></Fade>
            <Fade side delay={600}><h2 id='subtitle'>{TEXT.HOME_PAGE.SUBTITLE}</h2></Fade>
            <this.typingMessageIntro />
        </div>
    );

    typingMessageIntro = () => (
        <Fade top delay={800}>
            <ReactTypingEffect
                className='solutionQuote'
                speed='200'
                eraseDelay='2000'
                typingDelay='1200'
                text={[TEXT.HOME_PAGE.FIRST_TEXT, TEXT.HOME_PAGE.SECOND_TEXT]}
            />
        </Fade>
    );

    render() {
        return (
            <div className='homeView'>
                <Row>
                    <Col sm={5}><this.welcomeMessage/></Col>
                    <Col sm={7}><this.bannerView/></Col>
                </Row>
            </div>
        );
    };
};