import React, { useState } from 'react';
import Input from '../../Input/Input';
import styles from './ItemForm.module.scss';


const ItemForm = (props) => {
    const [enteredAmount, setEnteredAmount] = useState(0);

    const changeHandle = (e) => {
        setEnteredAmount(e.target.value * 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (enteredAmount === 0) {
            return
        }
        props.onAddToCart(enteredAmount)
    }

    return (

        <form className={styles.form} onSubmit={handleSubmit}>
            <Input
                label='Amount'
                type="number"
                input={{
                    type: "number",
                    min: '0',
                    max: '5',
                    value: enteredAmount,
                    amount: enteredAmount,
                    onChange: changeHandle,
                }}

            />
            <button>Add</button>
        </form>
    );
}

export default ItemForm;