import React,  { Component } from 'react';
import TEXT from '../en_us.json';
import '../styles/Technical.scss';

export default class Technical extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    quoteTextView = () => (
        <div>
            <h1 id='quote'>{TEXT.TECHNICAL.FIRST_QUOTE}</h1>
            <h1 id='quote'>{TEXT.TECHNICAL.SECOND_QUOTE}</h1>
        </div>
    );

    chartView = () => (
        <div style={{marginTop: '7%'}}>
            <h3>{'Chart will be insert here'}</h3>
        </div>
    );

    render() {
        return (
            <div className='technicalView'>
                <this.quoteTextView />
                <this.chartView />
            </div>
        );
    }
}