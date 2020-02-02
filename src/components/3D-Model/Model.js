import React, { Component } from 'react';
import Cycle from '../../assets/PReS-Cycle.png';
import TEXT from '../../en_us.json';
import './Model.scss';
import '../App/App.scss';

export default class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    cycleDiagramView = () => (
        <img className='cycle-chart' src={Cycle} alt={TEXT.MODEL.ALT}></img>
    );

    // TODO: 3d model view
    threeDModelView = () => (
        <div></div>
    );

    solutionTextView = () => (
        <div className='modelView'>
            <div className='topSolutionView'>
                <h3 id='titleSpec'>{TEXT.MODEL.FIRST_TITLE}</h3>
                <p id='quote'>{TEXT.MODEL.SOLUTION}</p>
                <h3 id='titleSpec'>PReS Operation</h3>
                <p id='quote'>{TEXT.MODEL.PROGRESS}</p>
                <this.cycleDiagramView />
                <h3 id='titleSpec'>{TEXT.MODEL.THREE_D}</h3>
                <p id='quote'>{'3D Model + Animation will insert here ....'}</p>
                <this.threeDModelView />
            </div>
        </div>
    );

    render() {
        return <this.solutionTextView />;
    }
}