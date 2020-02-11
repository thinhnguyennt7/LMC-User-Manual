import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import Cycle from '../assets/PReS-Cycle.png';
import TEXT from '../en_us.json';
import '../styles/Instruction.scss';

export default class Instruction extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    cycleDiagramView = () => (
        <img className='cycle-chart' src={Cycle} alt={TEXT.INSTRUCTION.ALT}></img>
    );

    threeDModelView = () => (
        <Fade bottom duration={1500}>
            <h3 id='headerTitle'>{TEXT.INSTRUCTION.THREE_D}</h3>
            <p id='contentStyle'>{'3D Model + Animation will insert here ....'}</p>
        </Fade>
    );

    instructionStepView = () => (
        <Fade bottom duration={1500}>
            <h3 id='headerTitle'>{TEXT.INSTRUCTION.PROCEDURE}</h3>
            <p id='contentStyle'>{'To be update full pdf file with step procedures'}</p>
        </Fade>
    );

    generateListOfSteps = () => {
        let lists = [];
        let currentItem = null;
        for (let i = 0; i < 6; i++) {
            let currentText = null;
            let currentImage = 'To be update 3D image';
            switch(i) {
                case 0:
                    currentText = TEXT.INSTRUCTION.COLLECT_TRASH;
                    break;
                case 1:
                    currentText = TEXT.INSTRUCTION.CLASSIFICATION;
                    break;
                case 2:
                    currentText = TEXT.INSTRUCTION.PRE_PROCESSING;
                    break;
                case 3:
                    currentText = TEXT.INSTRUCTION.TRANSPORTATION;
                    break;
                case 4:
                    currentText = TEXT.INSTRUCTION.FACILITY;
                    break;
                default:
                    currentText = TEXT.INSTRUCTION.FINAL_PRODUCT;
            }
            if (i % 2 === 0) {
                currentItem = <Fade bottom duration={2000}><Row className='rowView'><Col id='text' sm={6}>{currentText}</Col><Col sm={6}>{currentImage}</Col></Row></Fade>;
            } else {
                currentItem = <Fade bottom duration={2000}><Row className='rowView'><Col sm={6}>{currentImage}</Col><Col id='text' sm={6}>{currentText}</Col></Row></Fade>;
            }
            lists.push(currentItem);
        };
        return lists;
    };

    procedures = () => {
        return (
            <div className='proceduresView'>
                {this.generateListOfSteps()}
            </div>
        );
    };

    solutionView = () => (
        <Fade bottom duration={2000}>
            <h3 id='headerTitle'>{TEXT.INSTRUCTION.FIRST_TITLE}</h3>
            <p id='contentStyle'>{TEXT.INSTRUCTION.SOLUTION}</p>
        </Fade>
    );

    presOperationView = () => (
        <Fade bottom duration={2000}>
            <h3 id='headerTitle'>{TEXT.INSTRUCTION.PRES}</h3>
            <p id='contentStyle'>{TEXT.INSTRUCTION.PROGRESS}</p>
            <this.cycleDiagramView />
        </Fade>
    );

    render() {
        return (
            <div className='intructionView'>
                <div className='content'>
                    <this.solutionView />
                    <this.presOperationView />
                    <this.procedures />
                    <this.threeDModelView />
                    <this.instructionStepView />
                </div>
            </div>
        );
    }
}