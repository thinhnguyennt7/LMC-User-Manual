import React, { Component, useState } from 'react';
import { Fade } from 'react-reveal';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TEXT from '../en_us.json';
import '../styles/FAQ.scss';

export default class FAQ extends Component {

    questionAndAnswerGenerator = (objects) => {
        const [expanded, setExpanded] = useState(false);

        const handleChange = (panel) => (_, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };

        let expansionList = [];
        for (let i = 0; i < objects.length; i++) {
            const { text, title } = objects[i];
            expansionList.push(<ExpansionPanel className='expansionItemColor' expanded={expanded === i} onChange={handleChange(i)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id={i}>
                        <Typography className='heading'>{title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography className='answerText'>{text}</Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>);
        };
        return expansionList;
    };

    expansionView = () => {
        return (
            <div className='expansionView'>
                {this.questionAndAnswerGenerator(questionsAndAnswers)}
            </div>
        );
    };

    render() {
        return (
            <div className='content'>
                <Fade bottom duration={2000}>
                    <h3 id='headerTitle'>{TEXT.FAQ.TITLE}</h3>
                    <this.expansionView />
                </Fade>
            </div>
        );
    }
};

const questionsAndAnswers = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        title: 'How the system operate?'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        title: 'What are costs effective?'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        title: 'Does it affect the nature?'
    },{
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        title: 'How long it takes build the system?'
    }, {
        text: 'To be updated',
        title: 'Need to add more Q&A questions'
    }
];