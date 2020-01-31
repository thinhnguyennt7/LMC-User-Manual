import React, { Component } from 'react';
import './Footer.scss';
import '../App/App.scss';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "Hello Footer" };
    }

    render() {
        return (
            <div className="component footer">
                <p>{this.state.text}</p>
            </div>
        );
    }
}