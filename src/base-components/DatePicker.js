import React, { Component } from 'react';
import { Dropdown } from "./Dropdown";
import './DatePicker.css';

export class DatePicker extends Component {

    state = {
        month: 'Jan',
        day: 1,
        year: 2019
    }

    static months = [
                        { name: 'Jan', days: 31 },
                        { name: 'Feb', days: 29 },
                        { name: 'Mar', days: 31 },
                        { name: 'Apr', days: 30 },
                        { name: 'May', days: 31 },
                        { name: 'Jun', days: 30 },
                        { name: 'Jul', days: 31 },
                        { name: 'Aug', days: 31 },
                        { name: 'Sep', days: 30 },
                        { name: 'Oct', days: 31 },
                        { name: 'Nov', days: 30 },
                        { name: 'Dec', days: 31 }
                    ];

    componentDidUpdate = () => {
        if(this.props.onChange) {
            const day = this.state.day < 10 ? `0${this.state.day}` : this.state.day;
            this.props.onChange(`${this.state.month}-${day}-${this.state.year}`);
        }
    }

    render = () => {
        return <>
            <Dropdown className="date-dropdown" 
                      options={ DatePicker.months.map((month) => month.name) } 
                      onChange={ value => this.setState({ month: value}) }/>
            <Dropdown className="date-dropdown" 
                      options={ this.state && this.state.month ? [...Array(DatePicker.months.find(month => month.name === this.state.month).days).keys()].map((v, i) => i + 1) : [...Array(31).keys()].map((v, i) => i + 1)} 
                      onChange={ value => this.setState({ day: value}) }/>
            <Dropdown className="date-dropdown" 
                      options={ [...Array(30).keys()].map((v, i) => i + 2019) } 
                      onChange={ value => this.setState({ year: value}) }/>
        </>
    }
}