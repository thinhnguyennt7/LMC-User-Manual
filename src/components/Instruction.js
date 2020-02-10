import React, { Component } from 'react';
import Cycle from '../assets/PReS-Cycle.png';
import TEXT from '../en_us.json';
import '../styles/Instruction.scss';
import '../styles/App.scss';

export default class Instruction extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    cycleDiagramView = () => (
        <img className='cycle-chart' src={Cycle} alt={TEXT.INSTRUCTION.ALT}></img>
    );

    // TODO: 3d model view
    threeDModelView = () => (
        <div></div>
    );

    solutionTextView = () => (
        <div className='intructionView'>
            <div className='topSolutionView'>
                <h3 id='titleSpec'>{TEXT.INSTRUCTION.FIRST_TITLE}</h3>
                <p id='quote'>{TEXT.INSTRUCTION.SOLUTION}</p>
                <h3 id='titleSpec'>PReS Operation</h3>
                <p id='quote'>{TEXT.INSTRUCTION.PROGRESS}</p>
                <this.cycleDiagramView />
                <h3 id='titleSpec'>{TEXT.INSTRUCTION.THREE_D}</h3>
                <p id='quote'>{'3D Model + Animation will insert here ....'}</p>
                <this.threeDModelView />
            </div>
        </div>
    );

    render() {
        return <this.solutionTextView />;
    }
}