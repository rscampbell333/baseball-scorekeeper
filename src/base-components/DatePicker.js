import React, { Component } from 'react';
import { Dropdown } from "./Dropdown";
import './DatePicker.css';

export class DatePicker extends Component {

    constructor(props) {
        super(props);
        if(props.date) {
            const date = new Date(props.date);
            this.state = { month: DatePicker.months[date.getMonth()].name, day: date.getDate(), year: date.getYear()};
        } else {
            this.state = { month: 'Jan', day: 1, year: 2019 };
        }
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
            const monthIndex = DatePicker.months.findIndex(month => month.name === this.state.month);
            const date = new Date(this.state.year, monthIndex, this.state.day );
            this.props.onChange(date.toISOString());
        }
    }

    render = () => {
        return (
            <div className="date-picker">
                <Dropdown className="date-dropdown" 
                        options={ DatePicker.months.map((month) => month.name) } 
                        onChange={ value => this.setState({ month: value}) }
                        value={ this.state.month }/>
                <Dropdown className="date-dropdown" 
                        options={ this.state && this.state.month ? [...Array(DatePicker.months.find(month => month.name === this.state.month).days).keys()].map((v, i) => i + 1) : [...Array(31).keys()].map((v, i) => i + 1)} 
                        onChange={ value => this.setState({ day: value}) }
                        value={ this.state.day }/>
                <Dropdown className="date-dropdown" 
                        options={ [...Array(30).keys()].map((v, i) => i + 2019) } 
                        onChange={ value => this.setState({ year: value}) }
                        value={ this.state.year }/>
            </div>
        )
    }
}