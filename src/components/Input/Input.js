import React from 'react';
import styles from './Input.module.scss';

const Input = (props) => {
    return (

        <div className={styles.input}>
            <label>{props.label}</label>
            <input {...props.input} />
        </div>

    );
}

export default Input;