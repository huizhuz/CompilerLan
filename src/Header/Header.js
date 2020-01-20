import React from 'react';
import Styles from './Header.module.css'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className={Styles.Header}>
            <div className={Styles.TitleWrapper}>
                <img src={logo} alt="LAN Logo"></img>
                <h1>LAN Compiler</h1>
            </div>
        </div>
    );
}

export default Header;
