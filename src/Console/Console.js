import React from 'react';
import Styles from './Console.module.css'

const Console = (props) => {
    return (
        <div className={Styles.ConsoleWrapper}>
            <p>Console</p>
            <div className={Styles.Console}></div>
            {/* <div className={Styles.ClearButton}>Clear</div> */}
        </div>
    );
}

export default Console;
