import React,  { Component } from 'react';
import { Fade } from 'react-reveal';
import TEXT from '../en_us.json';
import '../styles/Technical.scss';

export default class Technical extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    quoteTextView = () => (
        <div>
            <Fade bottom duration={2000}><h1 id='quote'>{TEXT.TECHNICAL.FIRST_QUOTE}</h1></Fade>
            <Fade bottom duration={2500}><h1 id='quote'>{TEXT.TECHNICAL.SECOND_QUOTE}</h1></Fade>
        </div>
    );

    newSolutionView = () => (
        <div className='approachView'>
            <Fade bottom>
                <h3 id='titleSpec'>{TEXT.TECHNICAL.SECTION_TITLE}</h3>
                <p id='approachSpec'>{TEXT.TECHNICAL.APPROACH}</p>
            </Fade>
        </div>
    );

    chartView = () => (
        <div style={{marginTop: '10%'}}>
            <Fade bottom>
                <h3>{'Chart will be insert here'}</h3>
            </Fade>
        </div>
    );

    render() {
        return (
            <div className='technicalView'>
                <this.quoteTextView />
                <this.chartView />
                <this.newSolutionView />
            </div>
        );
    }
}