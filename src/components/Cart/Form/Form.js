import React from 'react';
import Button from '../../Button/Button';
import styles from './Form.module.scss';


const Form = ({ onClose }) => {
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.control}>
                <label htmlFor='name'>Your Name</label>
                <input type="text" id='name' />
            </div>
            <div className={styles.control}>
                <label htmlFor='street'>Street</label>
                <input type="text" id='street' />
            </div>
            <div className={styles.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type="text" id='postal' />
            </div>
            <div className={styles.control}>
                <label htmlFor='city'>City</label>
                <input type="text" id='city' />
            </div>
            <div className={styles.actions}>
                <Button type='submit'>Confirm</Button>
                <Button type='button' clickFn={onClose}>Cancel</Button>
            </div>

        </form>
    );
}

export default Form;