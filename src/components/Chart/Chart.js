import React,  { Component } from 'react';
import TEXT from '../../en_us.json';
import './Chart.scss';
import '../App/App.scss';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    quoteTextView = () => (
        <div>
            <h1 id='quote'>{TEXT.CHART.FIRST_QUOTE}</h1>
            <h1 id='quote'>{TEXT.CHART.SECOND_QUOTE}</h1>
        </div>
    );

    chartView = () => (
        <div style={{marginTop: '7%'}}>
            <h3>{'Chart will be insert here'}</h3>
        </div>
    );

    render() {
        return (
            <div className='chartView'>
                <this.quoteTextView />
                <this.chartView />
            </div>
        );
    }
}