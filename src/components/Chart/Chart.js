import React,  { Component } from 'react';
import './Chart.scss';
import '../App/App.scss';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <div className="component chart">
                <h1>Chart Component</h1>
            </div>
        );
    }
}