import React, { Component } from 'react';
import { EditableText } from './EditableText';
import { PitchCount } from './PitchCount';
import './BaseballField.css';

export class BaseballField extends Component {

    static defaultProps = {
        bases: [
            {
                name: 'first',
                reached: false
            }, 
            {
                name: 'second',
                reached: false
            },
            {
                name: 'third',
                reached: false
            },
            {
                name: 'home',
                reached: false
            },
        ],
        result: {
            count: {
                balls: 0,
                strikes: 0
            }
        }
    }

    constructor(props) {
        super(props);

        if(this.props.result) {
            const initResult = this.props.result;
            if(!initResult.bases) {
                initResult.bases = JSON.parse(JSON.stringify(this.props.bases));
            }

            this.state = initResult;
        } else {
            this.state = { 
                bases: JSON.parse(JSON.stringify(this.props.bases)) //have to do this to create a copy of the default prop
            };
        }
    }

    componentDidMount = () => this.setState({svgHeight: this.svgRef.clientHeight});

    componentDidUpdate = (prevProps, prevState) => this.props.onChange && this.props.onChange(this.getStats());

    baseClicked = (e) => {
        let bases = this.state.bases;
        let i = e.target.id - 1;

        if(bases[i].reached) {
            for(; i < bases.length; i++) {
                bases[i].reached = false;
            }
        } else {
            for(; i >= 0; i--) {
                bases[i].reached = true;
            }
        }
        this.setState(bases);
    }

    handleCountChange = (count) => this.setState({count: count});

    handleResultChange = (result) => this.setState({result: result});

    getBaseClass = (reached) => reached ? 'base reached' : 'base';

    getStats = () => {
        const stats = {
            inning: this.props.inning,
            result: this.state.result
        }

        if(this.state.result && this.state.result !== '') {
            stats.bases = this.state.bases;
            stats.count = this.state.count;
        } 

        return stats;
    };
    
    render() {
        return <div className="wrapper">
            <div className="field">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
                                   viewBox="0 0 230 180" 
                                   ref={(div) => this.svgRef = div}>
                    <g className="infield" transform="matrix(-0.7,-0.7,0.7,-0.7,115,180)">
                        <path d="M 0 0 L 160 0 A 160 140 45 0 1 0 160 L 0 0" fill="sienna"/>
                        <g className="bases">
                            <rect y="0" width="100px" height="100px" fill="green" x="0" />
                            { this.state.bases[0].reached && 
                                <line x1="2" y1="18" x2="2" y2="80" style={{stroke:'yellow',strokeWidth:4}}/>
                            }
                            { this.state.bases[1].reached && 
                                <line x1="20" y1="98" x2="80" y2="98" style={{stroke:'yellow',strokeWidth:4}}/>
                            }
                            { this.state.bases[2].reached &&
                                <line x1="98" y1="18" x2="98" y2="80" style={{stroke:'yellow',strokeWidth:4}}/>
                            }
                            { this.state.bases[3].reached &&
                                <line x1="80" y1="2" x2="18" y2="2" style={{stroke:'yellow',strokeWidth:4}}/>
                            }
                            <rect id="1" name={this.state.bases[0].name} className={this.getBaseClass(this.state.bases[0].reached)} x="0" y="80" width="20px" height="20px" fill="white" onClick={this.baseClicked}/>
                            <rect id="2" name={this.state.bases[1].name} className={this.getBaseClass(this.state.bases[1].reached)} x="80" y="80" width="20px" height="20px" fill="white" onClick={this.baseClicked}/>
                            <rect id="3" name={this.state.bases[2].name} className={this.getBaseClass(this.state.bases[2].reached)} x="80" y="0" width="20px" height="20px" fill="white" onClick={this.baseClicked}/>
                            <polygon id="4" name={this.state.bases[3].name} className={this.getBaseClass(this.state.bases[3].reached)} points="0,0 18,0 26,8 8,26 0,18 0,0" fill="white" onClick={this.baseClicked}/>
                        </g>
                    </g>
                </svg>
                <div className="count" style={{height: `${this.state.svgHeight}px`}}>
                    <PitchCount onChange={this.handleCountChange} {...this.props.result.count}/>
                </div>
            </div>
            <EditableText onChange={this.handleResultChange} noValueClassName="dotted-border-top" value={this.props.result.result}/>
        </div>;
    }
}