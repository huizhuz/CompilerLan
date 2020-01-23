import React from 'react';
import Styles from './Console.module.css'
import withState from '../redux/stateProvider'

const Console = (props) => {
    let hasError = !!props.errorMessages.length;
    let output = hasError ? props.errorMessages.map(error => (
        <div className={Styles.Console}>{error}</div>
    )) : props.output.map(log => (
        <div className={Styles.Console}>{log}</div >
    ))
    return (
        <div className={Styles.ConsoleWrapper}>
            <p>Console</p>
            {output}
        </div>
    );
}

export default withState(Console);
