import React, { Component} from 'react';
import './EditableText.css';

export class EditableText extends Component {

    static defaultProps = {
        noValueClassName: 'noValue'
    }

    constructor(props) {
        super();
        this.state = {
            editable: false,
            textValue: props.value ? props.value : ''
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.editable && !this.state.editable) {
            this.props.onChange(this.state.textValue, this.props.id);
        }
    }

    onChange = (event) => {
        const {value} = event.target;
        this.setState({textValue: value});
    }

    toggleEditable = (event) => {
        this.setState(prevState => ({ ...prevState, editable: !prevState.editable}));
    }

    onEnter = (event) => {
        if(event.keyCode === 13) {
            this.toggleEditable(event);
        }
    }

    render = () => {
        let textTag;
        if(this.state.editable) {
            textTag = <input type="text" name="result" 
                                         onBlur={this.toggleEditable} 
                                         value={this.state.textValue} 
                                         onChange={this.onChange} 
                                         onSubmit={this.toggleEditable}
                                         onKeyUp={this.onEnter}
                                         autoFocus></input>
        } else {
            textTag = <div className={`notEditable ${this.state.textValue === '' ? this.props.noValueClassName : ''}`}>
                {this.state.textValue}
            </div>;
        }

        return <div className='editableText' onClick={this.toggleEditable}>
            <div className="stretch">
                {textTag}
            </div>
        </div>
    }
}