import React from 'react';
import Styles from './TextEditor.module.css'

const TextEditor = (props) => {
    return (
        <div className={Styles.TextEditorWrapper}>
            <p>Write your code here: </p>
            <textarea />
            <div className={Styles.CompileButton}>Compile</div>
        </div>
    )
}

export default TextEditor