import React, { Component } from 'react';
import './Model.scss';
import '../App/App.scss';

export default class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <div className="component model">
                <h1>Model Component</h1>
            </div>
        );
    }
}