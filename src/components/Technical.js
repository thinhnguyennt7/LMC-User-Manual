import React, {Component} from 'react';
import {Fade} from 'react-reveal';
import {Row, Col} from 'react-bootstrap';
import TEXT from '../en_us.json';
import '../styles/Technical.scss';
import '../index.scss';
import SketchModel from '../assets/model.png';
import SketchModel1 from '../assets/model1.png'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default class Technical extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        const vals = [
            7.31,
            898.46,
            0.56,
            1.68,
            19.33,
            0.78,
            14.34,
            0.7,
            280.67,
            180.95,
            0,
            9,
            26.73,
            927.97,
        ]
        const total = vals.reduce((prev, curr) => prev + curr)
        console.log(total)
        const names = [
            'Aluminum',
            'Cardboard',
            'Clothing and Household Goods',
            'Compost',
            'Confidentials (shredded documents)',
            'Electronics',
            'Glass',
            'Hardback Books',
            'Mixed Metal',
            'Mixed Office Paper',
            'Nonperishable Food',
            'Pallets',
            'Plastic',
            'Single Stream (mixed recyclables)'
        ]
        const d = []
        for (let i = 0; i < names.length; i++) {
            d.push(
                {
                    name: names[i],
                    y: vals[i] * 100 / total
                }
            )
        }
        this.pieOptions = {
            chart: {
                type: 'pie',
                backgroundColor: 'transparent',
                height: '700px'
            },
            credits: false,
            title: {
                text: 'Georgia Tech Garbage Proportion 2018',
                style: {
                    color: '#ffffff',
                    fontSize: 35
                }
            },
            xAxis: {
                labels: {
                    style: {
                        color: '#ffffff',
                    }
                },
                title: {
                    style: {
                        color: '#ffffff',
                    }
                }
            },
            yAxis: {
                min: 0,
                labels: {
                    style: {
                        color: '#ffffff',
                    }
                },
                title: {
                    text: 'Total Garbage Output (Tons)',
                    style: {
                        color: '#ffffff',
                    }
                }
            },
            legend: {
                style: {
                    color: '#ffffff'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },

            series: [
                {
                    name: "Garbage Output Proportion 2018",
                    dataLabels: {
                        style: {
                            fontSize: 18,
                            color: '#ffffff'
                        }
                    },
                    colorByPoint: true,
                    data: d
                }
            ],
        };
        this.options = {
            chart: {
                type: 'bar',
                backgroundColor: 'transparent',
                height: '700px'
            },
            credits: false,
            title: {
                text: 'Georgia Tech Garbage Output 2015 - 2018',
                style: {
                    color: '#ffffff',
                    fontSize: 35
                }
            },
            xAxis: {
                categories: [
                    'Aluminum',
                    'Cardboard',
                    'Clothing and Household Goods',
                    'Compost',
                    'Confidentials (shredded documents)',
                    'Electronics',
                    'Glass',
                    'Hardback Books',
                    'Mixed Metal',
                    'Mixed Office Paper',
                    'Nonperishable Food',
                    'Pallets',
                    'Plastic',
                    'Single Stream (mixed recyclables)'
                ],
                labels: {
                    style: {
                        color: '#ffffff',
                        fontSize: 16
                    }
                },
                title: {
                    style: {
                        color: '#ffffff',
                        fontSize: 16
                    }
                }
            },
            yAxis: {
                min: 0,
                labels: {
                    style: {
                        color: '#ffffff',
                        fontSize: 16
                    }
                },
                title: {
                    text: 'Total Garbage Output (Tons)',
                    style: {
                        color: '#ffffff',
                        fontSize: 16
                    }
                }
            },
            legend: {
                reversed: true,
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            tooltip: {
                pointFormat: '<b>Year {series.name}:</b> {point.y} (Tons) / <b>Total:</b> {point.stackTotal} (Tons)'
            },
            series: [
                {
                    name: '2018',
                    color: '#95b6ff',
                    data: [
                        7.31,
                        898.46,
                        0.56,
                        1.68,
                        19.33,
                        0.78,
                        14.34,
                        0.7,
                        280.67,
                        180.95,
                        0,
                        9,
                        26.73,
                        927.97,
                    ]
                },
                {
                    name: '2017',
                    color: '#fff447',
                    data: [
                        6.46,
                        449.17,
                        12.79,
                        0,
                        19.25,
                        0.43,
                        13.31,
                        5.93,
                        500.16,
                        201.63,
                        0.25,
                        9.21,
                        17.93,
                        406.16,
                    ]
                },
                {
                    name: '2016',
                    color: '#ffa04e',
                    data: [
                        7.62,
                        414.59,
                        14.39,
                        0,
                        17.3,
                        1.37,
                        10.51,
                        5.2,
                        293.08,
                        211.69,
                        0.29,
                        7.74,
                        22.23,
                        367.71,
                    ]
                },
                {
                    name: '2015',
                    color: '#71ff68',
                    data: [
                        6.27,
                        399.82,
                        0.92,
                        0,
                        16.99,
                        0.78,
                        10.85,
                        42.13,
                        105.53,
                        202.73,
                        0,
                        11.32,
                        25.6,
                        367.4,
                    ]
                },
            ]
        };
    }

    quoteTextView = () => (
        <div className='backgroundView'>
            <Fade bottom duration={2000}><h1 id='quote'>{TEXT.TECHNICAL.FIRST_QUOTE}</h1></Fade>
            <Fade bottom duration={2500}><h1 id='quote'>{TEXT.TECHNICAL.SECOND_QUOTE}</h1></Fade>
            <div className='garbage-charts'>
                <Fade bottom duration={2500}>
                    <this.trashData/>
                </Fade>
            </div>
        </div>

    );

    newSolutionView = () => (
        <div className='content'>
            <Fade bottom duration={2000}>
                <h3 id='headerTitle'>{TEXT.TECHNICAL.SECTION_TITLE}</h3>
                <p className='center' id='contentStyle'>{TEXT.TECHNICAL.APPROACH}</p>
                <Row className='sketchView'>
                    <Col sm={6}>
                        <img className='modelSketch' src={SketchModel} alt="SKETCH MODEL1"></img>
                    </Col>
                    <Col sm={6}>
                        <img className='modelSketch' src={SketchModel1} alt="SKETCH MODEL2"></img>
                    </Col>
                </Row>
            </Fade>
        </div>
    );

    trashData = () => (
        <div>
            <HighchartsReact highcharts={Highcharts} options={this.options}/>
            <HighchartsReact highcharts={Highcharts} options={this.pieOptions}/>
        </div>
    );

    chartView = () => (
        <div style={{marginTop: '10%'}}>
            <Fade bottom>
                <h3 style={{textAlign: 'center'}}>{'Chart will be insert here'}</h3>
            </Fade>
        </div>
    );

    render() {
        return (
            <div className='technicalView'>
                <this.quoteTextView/>
                <this.newSolutionView/>
            </div>
        );
    }
}
