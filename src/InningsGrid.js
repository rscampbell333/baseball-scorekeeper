import React, {Component} from 'react';
import { Position } from './Position.js';
import './InningsGrid.css';
import { Header } from './Header'; 

export class InningsGrid extends Component {
    
    state = {
        positionStats: []
    }

    componentDidUpdate = () => {
        if(this.props.onChange) {
            this.props.onChange(this.state.positionStats);
        }
    }

    render = () => {
        let positions;

        if(this.defaultStats) {
            positions = this.defaultStats.map((position, i) => <Position number={i + 1} key={i} stats={position} onUpdate={this.onPositionUpdate}/>)
        } else {
            positions = Array.from({length: 9}, (e, i) => <Position number={i + 1} key={i} onUpdate={this.onPositionUpdate} />);
        }



        return <div className="inningsGrid">
            <Header/>
            <div className="grid">
                {positions}
            </div>
        </div>;
    }

    onPositionUpdate = (results) => {
        const positionStats = [...this.state.positionStats];
        positionStats[results.position - 1] = results;
        this.setState({ positionStats });
    }
}