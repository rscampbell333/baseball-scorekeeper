import React, { Component } from 'react';
import { PitchBox } from './PitchBox';
import './PitchCount.css';

export class PitchCount extends Component {

    static defaultProps = {
        balls: 0,
        strikes: 0
    }

    constructor(props) {
        super(props);

        this.state = {
            balls: [false, false, false].fill(true, 0, this.props.balls),
            strikes: [false, false].fill(true, 0, this.props.strikes)
        };
    }

    generatePitches = (number, updateFunc) => {
        let pitches = [];
        
        for(let i = 0; i < number; i++) {
            pitches.push(<PitchBox key={i} updateCount={updateFunc(i)} reached={this.state.balls[i]}/>);
        }

        return pitches;
    }

    updatePitch = (type, i) => (reached) => {
        const newCount = this.state[type];
        newCount[i] = reached;
        const newState = {};
        newState[type] = newCount;
        this.setState(newState);
        console.log(this.getCount());

        //let parent know of change
        if(this.props.onChange) {
            this.props.onChange(this.getCount());
        }
    }

    updateBalls = (i) => this.updatePitch('balls', i);

    updateStrikes = (i) => this.updatePitch('strikes', i);

    getCount = () => (
        {  
            balls: this.state.balls.filter(val => val).length,
            strikes: this.state.strikes.filter(val => val).length
        }
    );

    render = () => {
        return <div className="pitchCount">
            <div className="balls flexbox">
                {this.generatePitches(3, this.updateBalls)}
            </div>
            <div className="strikes flexbox">
                {this.generatePitches(2, this.updateStrikes)}
            </div>
        </div>
    }
}