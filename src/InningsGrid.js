import React, {Component} from 'react';
import { Position } from './Position.js';
import './InningsGrid.css';
import { Header } from './Header'; 

export class InningsGrid extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            stats: props.initStats || Array.from({length: 9}, (v, i) => ({}))
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
            positions = this.state.stats.map((position, i) => <Position number={i + 1} key={i} stats={position} onUpdate={this.onPositionUpdate}/>)
        } else {
            positions = Array.from({length: 9}, (e, i) => <Position number={i + 1} key={i} onUpdate={this.onPositionUpdate} />);
        }



        return <div className="innings-grid">
            <Header/>
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