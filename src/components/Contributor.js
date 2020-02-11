import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import TEXT from '../en_us.json';
import '../styles/Contributor.scss';
import Profile from '../assets/images.png';

export default class Contributor extends Component {

    membersView = () => (
        <div className='membersView'>
            <Row className='row'>
                <Col className='styleColumn roundCorner' sm={3}>
                    <h1 id='name'>Thinh Nguyen</h1>
                    <img src={Profile}></img>
                    <h2 id='major'>Computer Science</h2>
                    <h2>Senior</h2>
                </Col>
                <Col sm={3}>
                    <h1 id='name'>Lan Le Tu</h1>
                    <img src={Profile}></img>
                    <h2 id='major'>Computer Science</h2>
                    <h2>Senior</h2>
                </Col>
                <Col className='styleColumn roundCorner' sm={3}>
                    <h1 id='name'>Trai Tran</h1>
                    <img src={Profile}></img>
                    <h2 id='major'>Computer Science</h2>
                    <h2>Senior</h2>
                </Col>
                <Col sm={3}>
                    <h1 id='name'>Mai Phan</h1>
                    <img src={Profile}></img>
                    <h2 id='major'>Computer Science</h2>
                    <h2>Senior</h2>
                </Col>
            </Row>
        </div>
    );

    titleView = () => (
        <div className='content'>
            <h3 id='headerTitle'>{TEXT.CONTRIBUTOR.CONTRIBUTORS}</h3>
        </div>
    );

    render() {
        return (
            <div className='contributorView'>
                <Fade bottom duration={2000}>
                    <this.titleView />
                    <this.membersView />
                </Fade>
            </div>
        );
    }
}