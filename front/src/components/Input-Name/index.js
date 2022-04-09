/* INPUT-NAME - INDEX.JS */

/* Gestion de l'input - Name video */

import React from 'react';
import './style.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        alert( this.state.name);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name video :
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
            </form>
        );
    }
}

export default Input;
