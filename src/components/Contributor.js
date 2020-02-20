import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import TEXT from '../en_us.json';
import '../styles/Contributor.scss';

export default class Contributor extends Component {

    membersView = () => (
        <div className='membersView'>
            <Row className='row'>
                <Col className='styleColumn roundCorner' sm={3}>
                    <h1 id='name'>Thinh Nguyen</h1>
                    <img alt='Thinh' id='profilePic' src='https://media-exp1.licdn.com/dms/image/C4E03AQF8uEw_uH_L7w/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=rwv-F6oHUS0CXduCsWGFXzhEEyZvlFBfu1HzCK2dMbE'></img>
                    <h2 id='major'>Computer Science</h2>
                    <h2 id='year'>Senior</h2>
                </Col>
                <Col sm={3}>
                    <h1 id='name'>Lan Le Tu</h1>
                    <img alt='Lan' id='profilePic' src='https://avatars2.githubusercontent.com/u/35468473?s=460&v=4'></img>
                    <h2 id='major'>Computer Science</h2>
                    <h2 id='year'>Senior</h2>
                </Col>
                <Col className='styleColumn roundCorner' sm={3}>
                    <h1 id='name'>Trai Tran</h1>
                    <img alt='Trai' id='profilePic' src='https://media-exp1.licdn.com/dms/image/C5603AQFxRChQSPuK5A/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=7aRh9pz2A1hdhdyPMSZ2J8TUOZIH54evrWMJerEmG6g'></img>
                    <h2 id='major'>Computer Science</h2>
                    <h2 id='year'>Senior</h2>
                </Col>
                <Col sm={3}>
                    <h1 id='name'>Mai Pham</h1>
                    <img alt='Mai' id='profilePic' src='https://media-exp1.licdn.com/dms/image/C4E03AQFkAnnkzVYGYA/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=CBIopoImIb2BH02h0-Tp58ECXRan0sjdGutyRDpyv4Q'></img>
                    <h2 id='major'>Computer Science</h2>
                    <h2 id='year'>Senior</h2>
                </Col>
            </Row>
        </div>
    );

    titleView = () => (
        <Fade bottom duration={2000}>
            <div className='content'>
                <h3 id='headerTitle'>{TEXT.CONTRIBUTOR.CONTRIBUTORS}</h3>
            </div>
        </Fade>
    );

    render() {
        return (
            <div className='contributorView'>
                <this.titleView />
                <this.membersView />
            </div>
        );
    }
}