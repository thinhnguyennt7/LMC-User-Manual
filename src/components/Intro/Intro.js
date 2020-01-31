import React, { Component } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import TEXT from '../../en_us.json';
import './Intro.scss';
import '../App/App.scss';

export default class Intro extends Component {

    Scroll = () => (
        <div className='scroll'>
            <p>{TEXT.INTRO.SCROLL_TEXT}</p>
            <Parallax y={[-20, 20]} x={[5, 0]} className='arrow-1'>
                <svg x='0px' y='0px' viewBox='0 0 167 299'>
                    <polygon
                        className='fill-1'
                        points='120,0 75.5,145.9 29.6,0 '
                    />
                </svg>
            </Parallax>
            <Parallax y={[-20, 20]} className='arrow-2'>
                <svg x='0px' y='0px' viewBox='0 0 167 299'>
                    <polygon
                        className='fill-2'
                        points='137.4,0 83.5,145.9 29.6,0 '
                    />
                </svg>
            </Parallax>
        </div>
    );

    ScrollSVGView = () => (
        <ParallaxProvider>
            <this.Scroll/>
        </ParallaxProvider>
    );

    render() {
        return (
            <div className='introView'>
                <h1 className='title'>{TEXT.INTRO.HEADER}</h1>
                <h2 className='subtitle'>{TEXT.INTRO.SUBTITLE}</h2>
                <this.ScrollSVGView/>
            </div>
        );
    };
};