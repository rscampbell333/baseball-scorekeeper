import React, { useState, useEffect } from 'react';
import { Dropdown } from "./Dropdown";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import './DatePicker.css';

export const DatePicker = (props) => {

    const initDate = props.date ? new Date(props.date) : new Date();
    const [ date, setDate ] = useState(initDate);

    useEffect(() => {
        if(props.onChange) {
            props.onChange(date.toISOString());
        }
    })

    return (
        <div className="date-picker">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker value={date} 
                                    format='MMMM dd, yyyy'
                                    onChange={setDate}/>
            </MuiPickersUtilsProvider>
        </div>
    );
}