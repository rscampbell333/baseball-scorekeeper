import React, { Component } from 'react';
import './PitchCount.css';

export class PitchBox extends Component {
    static defaultProps = {
        reached: false
    };

    constructor(props) {
        super(props);

        this.state = { reached:  this.props.reached };
    }
    
    toggleReached = (event) => {
        const reached = !this.state.reached;
        this.setState({ reached: reached });
        this.props.updateCount(reached);
    }

    render = () => {
        const className = `pitchBox ${this.state.reached ? 'reached' : ''}`
        return <div className={className} onClick={this.toggleReached}></div>;
    }
}