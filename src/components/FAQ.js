import React, { Component } from 'react';
import TEXT from '../en_us.json';
import '../styles/FAQ.scss';

export default class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    QandAView = () => (
        <div className='qandAView'>
            <h3 id='titleSpec'>FAQ/Troubleshooting</h3>
        </div>
    );

    render() {
        return (
            <this.QandAView />
        );
    }
};