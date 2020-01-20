import React from 'react';
import Styles from './Resource.module.css'

const Resource = () => {
    return (
        <a href="../assets/LAN_Description.pdf" download className={Styles.Resource}>
            See the syntax LAN supports
        </a>
    );
}

export default Resource;
