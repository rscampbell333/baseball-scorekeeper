import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export class Dropdown extends Component {
    
    state = { value: this.props.value ? this.props.value : this.props.options[0]}

    handleChange = event => {
        this.setState({value: event.target.value});

        if(this.props.onChange) {
            this.props.onChange(event.target.value);
        }
    }

    render = () => (
      <FormControl>
        <Select className={this.props.className} value={this.state.value} onChange={this.handleChange} displayEmpty disableUnderline>
          { this.props.options.map(option => <MenuItem value={option} id={option}>{option}</MenuItem>) }
        </Select>
      </FormControl>
    )
}