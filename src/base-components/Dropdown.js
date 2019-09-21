import React, { Component } from 'react'

export class Dropdown extends Component {
    
    state = { value: this.props.value ? this.props.value : this.props.options[0]}

    handleChange = event => {
        this.setState({value: event.target.value});

        if(this.props.onChange) {
            this.props.onChange(event.target.value);
        }
    }

    render = () => (
        <div className="select">
            <select className={this.props.className} value={this.state.value} onChange={this.handleChange}>
                { this.props.options.map((v, i) => <option value={v} key={i.toString()}>{v}</option>) }
            </select>
        </div>
    )
}