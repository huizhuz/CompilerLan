import React, { Component } from 'react';
import Styles from './Console.module.css'
import withState from '../redux/stateProvider'

class Console extends Component {
    render() {
        let output = this.props.hasError ? this.props.errorMessages.map(error => (
            <div className={Styles.Console}>{error}</div>
        )) : this.props.output.map(log => (
            <div className={Styles.Console}>{log}</div >
        ))

        return (
            <div className={Styles.ConsoleWrapper}>
                <p>Console</p>
                {output}
            </div>
        );
    }
}

export default withState(Console);
