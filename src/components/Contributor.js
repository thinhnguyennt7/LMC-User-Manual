import React, { Component } from 'react';
import TEXT from '../en_us.json';
import '../styles/Contributor.scss';

export default class Contributor extends Component {

    membersView = () => (
        <div className='membersView'>
        
        </div>
    );

    titleView = () => (
        <h3 id='titleSpec'>{TEXT.CONTRIBUTOR.CONTRIBUTORS}</h3>
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