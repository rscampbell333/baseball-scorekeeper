import React, { Component } from 'react';
import { EditableText } from './EditableText';
import { Dropdown } from './Dropdown';

export class PlayerName extends Component {

    static defaultProps = {
        name: "",
        since: 1
    }

    state = {
        name: this.props.name,
        since: this.props.since
    }

    componentDidUpdate = () => {
        if(this.props.onChange) {
            this.props.onChange(this.state);
        }
    }

    handleChange = (stateProp) => (value) => this.setState({[stateProp]: value});
    
    handleNameChange = this.handleChange('name');
    handleInningChange = this.handleChange('since');


    render = () => (
        <div className="player dotted-border-bottom">
            <EditableText value={this.props.name} onChange={this.handleNameChange} noValueClassName=""/>
            { this.props.showInningSelection && <Dropdown onChange={this.handleInningChange} options={Array.from({length: 9}, (v, k) => k+1)}/> }
        </div>
    )
}