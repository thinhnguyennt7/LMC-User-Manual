import React, { Component } from 'react';
import TEXT from '../../en_us.json';
import './Footer.scss';
import '../App/App.scss';

export default class Footer extends Component {

    membersView = () => (
        <div className='membersView'>
        
        </div>
    );

    titleView = () => (
        <h3 id='titleSpec'>{TEXT.FOOTER.CONTRIBUTORS}</h3>
    );

    render() {
        return (
            <div className='footerView'>
                <this.titleView />
                <this.membersView />
            </div>
        );
    }
}