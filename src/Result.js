import React, { PureComponent } from 'react';
import { EditableText } from './base-components';
import { PitchCount } from './PitchCount';
import { BaseballField } from './BaseballField';
import './Result.css';

export class Result extends PureComponent {

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
            initResult.bases = JSON.parse(JSON.stringify(this.props.bases));

            if(initResult.farthestBase && initResult.farthestBase !== 'none') {
                for(let base of initResult.bases) {
                    base.reached = true;
                    if(base.name === initResult.farthestBase) {
                        break;
                    }
                }
            }

            this.state = initResult;
        } else {
            this.state = { 
                bases: JSON.parse(JSON.stringify(this.props.bases)) //have to do this to create a copy of the default prop
            };
        }
    }

    //componentDidMount = () => this.setState({svgHeight: this.svgRef.clientHeight});

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.bases !== this.state.bases || prevState.result !== this.state.result || prevState.count !== this.state.count) {
            this.props.onChange && this.props.onChange(this.getStats());
        } 
    };

    handleBaseClick = (e) => {
        let bases = [...this.state.bases];
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
        this.setState({bases});
    }

    handleCountChange = (count) => this.setState({count: count});

    handleResultChange = (result) => this.setState({result: result});

    getStats = () => {
        const stats = {
            inning: this.props.inning,
            result: this.state.result
        }

        if(this.state.result && this.state.result !== '') {
            let farthestBase;
            for(let i = 3; i >= 0; i--) {
                if(this.state.bases[i].reached) {
                    farthestBase = this.state.bases[i].name;
                    break;
                }
            }

            stats.farthestBase = farthestBase ? farthestBase : 'none';
            stats.count = this.state.count;
        } 
        console.log(stats);

        return stats;
    };
    
    render() {
        return <div className="wrapper">
            <div className="field">
                <BaseballField onBaseClick={this.handleBaseClick} bases={this.state.bases}/>
                <div className="count" /*style={{height: `${this.state.svgHeight}px`}}*/>
                    <PitchCount onChange={this.handleCountChange} {...this.state.count}/>
                </div>
            </div>
            <div className="result" >
                <EditableText onChange={this.handleResultChange} noValueClassName="dotted-border-top" value={this.state.result}/>
            </div>
        </div>;
    }
}