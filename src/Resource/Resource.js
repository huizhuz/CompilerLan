import React from 'react';
import Styles from './Resource.module.css';
import pdf from 'Lan_Compiler_HuizhuZhang.pdf';

const Resource = () => {
    return (
        <a href={pdf} download className={Styles.Resource}>
            See the syntax LAN supports
        </a>
    );
}

export default Resource;
