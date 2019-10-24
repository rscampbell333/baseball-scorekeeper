import React, {Component} from 'react';
import { Position } from './Position.js';
import './InningsGrid.css';
import { Header } from './Header'; 

export class InningsGrid extends Component {
    
    constructor(props) {
        super(props);
        const innings = props.initStats && props.initStats[0] && props.initStats[0].results.length >= 9 ? props.initStats[0].results.length : 9;
        this.state = {
            stats: props.initStats || Array.from({length: 9}, (v, i) => ({})),
            innings
        }
    }

    componentDidUpdate = () => {
        if(this.props.onChange) {
            this.props.onChange(this.state.stats);
        }
    }

    render = () => {
        let positions;

        if(this.state.stats) {
            positions = this.state.stats.map((position, i) => <Position number={i + 1} innings={this.state.innings} key={i} stats={position} onUpdate={this.onPositionUpdate}/>)
        } else {
            positions = Array.from({length: 9}, (e, i) => <Position number={i + 1} innings={this.state.innings} key={i} onUpdate={this.onPositionUpdate} />);
        }



        return <div className="innings-grid">
            <Header innings={this.state.innings}/>
            <div className="grid">
                {positions}
            </div>
        </div>;
    }

    onPositionUpdate = (results) => {
        const stats = this.state.stats ? [...this.state.stats] : [];
        stats[results.position - 1] = results;
        this.setState({ stats });
    }
}