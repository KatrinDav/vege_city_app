import React from 'react';
import styles from './Button.module.scss';


const Button = ({ children, clickFn, type, small }) => {
    const btn_styles = small ? styles.alt_button : styles.button;
    return (
        <button className={btn_styles} onClick={clickFn} type={type}>
            {children}
        </button>
    );
}

export default Button;