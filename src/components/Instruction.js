import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import {OBJModel, MTLModel} from 'react-3d-viewer'
import { Player } from 'video-react';
import Cycle from '../assets/PReS-Cycle.png';
import TEXT from '../en_us.json';
import '../styles/Instruction.scss';
import manual from '../assets/user-manual.png';
import facility from '../assets/facility.obj';
import facilityPic from '../assets/facility1.png';
import trashBin from '../assets/trash_bin.png';
import boxPic from '../assets/box.png';
import visionPic from '../assets/vision.png';
import pipePic from '../assets/pipe.png';
import marketPlace0 from '../assets/marketplace0.png';
import marketPlace1 from '../assets/maketplace1.png';
import marketPlace2 from '../assets/maketplace2.png';

export default class Instruction extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    cycleDiagramView = () => (
        <img className='cycle-chart' src={Cycle} alt={TEXT.INSTRUCTION.ALT}></img>
    );

    handleFiles = filePath => {
        const parts = [new Blob([filePath], {type: 'file'}), new Uint16Array([33])];
        const file = new File(parts, 'test.STL', {type:"file"});
        const reader = new FileReader();
        return reader.readAsArrayBuffer(file);
    }

    // <STLViewer
    //     className='threedView'
    //     url='https://bohdanbirdie.github.io/stl-obj-demo/bottle.stl'
    //     modelColor="#FFC58A"
    //     width={600} height={600}
    //     backgroundColor='#121212'
    //     orbitControls={true}
    //     rotate={true}
    //     rotationSpeeds={[0.01, 0.01, 0]}
    // />

    threeDView = () => (
        <Row>
            <OBJModel src={facility} />
        </Row>
    );

    threeDModelView = () => (
        <Fade bottom duration={1500} >
            <h3 id='headerTitle'>{TEXT.INSTRUCTION.THREE_D}</h3>
            <this.threeDView />
        </Fade>
    );

    instructionStepView = () => (
        <Fade bottom duration={1500}>
            <h3 id='headerTitle'>{TEXT.INSTRUCTION.PROCEDURE}</h3>
            <Row>
                <img alt='userManual' className='manual' src={manual}></img>
            </Row>
        </Fade>
    );

    generateListOfSteps = () => {
        let lists = [];
        let currentItem = null;
        for (let i = 0; i < 5; i++) {
            let currentText = null;
            let currentImage = null;
            switch(i) {
                case 0:
                    currentText = TEXT.INSTRUCTION.COLLECT_TRASH;
                    currentImage = trashBin;
                    break;
                case 1:
                    currentText = TEXT.INSTRUCTION.CLASSIFICATION;
                    currentImage = visionPic;
                    break;
                case 2:
                    currentText = TEXT.INSTRUCTION.PRE_PROCESSING;
                    currentImage = boxPic;
                    break;
                case 3:
                    currentText = TEXT.INSTRUCTION.TRANSPORTATION;
                    currentImage = pipePic;
                    break;
                default:
                    currentText = TEXT.INSTRUCTION.FACILITY;
                    currentImage = facilityPic;
                    break;
            }
            if (i % 2 === 0) {
                currentItem = <Fade bottom duration={1800}>
                    <Row className='rowView'>
                        <Col id='text' sm={6}>{currentText}</Col>
                        <Col sm={6}>
                            <img alt='imageSpec' className='imageSpec' src={currentImage}></img>
                        </Col>
                    </Row>
                </Fade>;
            } else {
                currentItem = <Fade bottom duration={1800}>
                    <Row className='rowView'>
                        <Col sm={6}>
                            <img className='imageSpec' alt='images' src={currentImage}></img>
                        </Col>
                        <Col id='text' sm={6}>{currentText}</Col>
                    </Row>
                </Fade>;
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
        <Fade bottom duration={1800}>
            <h3 id='headerTitle'>{TEXT.INSTRUCTION.FIRST_TITLE}</h3>
            <p id='contentStyle'>{TEXT.INSTRUCTION.SOLUTION1}</p>

            <h3 id='headerTitle'>{TEXT.INSTRUCTION.SECOND_TITLE}</h3>
            <p id='contentStyle1'>{TEXT.INSTRUCTION.SOLUTION2}</p>
        </Fade>
    );

    presOperationView = () => (
        <Fade bottom duration={1800}>
            <h3 id='headerTitle'>{TEXT.INSTRUCTION.PRES}</h3>
            <p id='contentStyle'>{TEXT.INSTRUCTION.PROGRESS}</p>
            <this.cycleDiagramView />
        </Fade>
    );

    VideoAndMarketPlace = () => (
        <Fade bottom duration={1800}>
            <h3 id='headerTitle'>{TEXT.INSTRUCTION.MARKETPLACE}</h3>
            <Row className='marketPlace'>
                <Col sm={4}><img alt='Market Space Model 0' src={marketPlace0} className='imageSpec' /></Col>
                <Col sm={4}><img alt='Market Space Model 1' src={marketPlace1} className='imageSpec' /></Col>
                <Col sm={4}><img alt='Market Space Model 2' src={marketPlace2} className='imageSpec' /></Col>
            </Row>

            <h3 id='headerTitle' style={{marginTop: '-10%'}}>{TEXT.INSTRUCTION.VIDEO}</h3>
            <Player
                className='videoSpec'
                playsInline
                poster={marketPlace1}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
        </Fade>
    );

    render() {
        return (
            <div className='intructionView'>
                <div className='content'>
                    <this.solutionView />
                    <this.presOperationView />
                    <this.procedures />
                    <this.VideoAndMarketPlace />
                    <this.instructionStepView />
                </div>
            </div>
        );
    }
}