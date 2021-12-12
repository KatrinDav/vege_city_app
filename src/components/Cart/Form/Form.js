import React from 'react';
import Button from '../../Button/Button';
import useForm from '../../../hooks/useForm';
import styles from './Form.module.scss';

const isNotEmpty = (value) => value.trim() !== '';

const Form = ({ onClose, onConfirm }) => {

    const {
        enteredValue: nameValue,
        isValid: nameIsValid,
        hasError: nameHasError,
        handleInputChange: nameInputChange,
        handleBlurInput: nameInputBlur,
        reset: nameInputReset,
    } = useForm(isNotEmpty);

    const {
        enteredValue: streetValue,
        isValid: streetIsValid,
        hasError: streetHasError,
        handleInputChange: streetInputChange,
        handleBlurInput: streetInputBlur,
        reset: streetInputReset,
    } = useForm(isNotEmpty);

    const {
        enteredValue: codeValue,
        isValid: codeIsValid,
        hasError: codeHasError,
        handleInputChange: codeInputChange,
        handleBlurInput: codeInputBlur,
        reset: codeInputReset,
    } = useForm(isNotEmpty);

    const {
        enteredValue: cityValue,
        isValid: cityIsValid,
        hasError: cityHasError,
        handleInputChange: cityInputChange,
        handleBlurInput: cityInputBlur,
        reset: cityInputReset,
    } = useForm(isNotEmpty);


    let formIsValid = false;

    if (nameIsValid && streetIsValid && codeIsValid && cityIsValid) {
        formIsValid = true;
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (!formIsValid) {
            return
        }

        onConfirm({
            name: nameValue,
            street: streetValue,
            code: codeValue,
            city: cityValue,
        })

        nameInputReset();
        streetInputReset();
        codeInputReset();
        cityInputReset();
    }


    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={nameHasError ? [styles.control, styles.invalid].join(' ') : styles.control}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type="text"
                    id='name'
                    value={nameValue}
                    onChange={nameInputChange}
                    onBlur={nameInputBlur} />
                {nameHasError && <p className={styles.error_text}>Name must not be empty!</p>}
            </div>
            <div className={streetHasError ? [styles.control, styles.invalid].join(' ') : styles.control}>
                <label htmlFor='street'>Street</label>
                <input
                    type="text"
                    id='street'
                    value={streetValue}
                    onChange={streetInputChange}
                    onBlur={streetInputBlur} />
                {streetHasError && <p className={styles.error_text}>Street must not be empty!</p>}
            </div>
            <div className={codeHasError ? [styles.control, styles.invalid].join(' ') : styles.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input
                    type="text"
                    id='postal'
                    value={codeValue}
                    onChange={codeInputChange}
                    onBlur={codeInputBlur} />
                {codeHasError && <p className={styles.error_text}>Postal code must have 5 digits!</p>}
            </div>
            <div className={cityHasError ? [styles.control, styles.invalid].join(' ') : styles.control}>
                <label htmlFor='city'>City</label>
                <input
                    type="text"
                    id='city'
                    value={cityValue}
                    onChange={cityInputChange}
                    onBlur={cityInputBlur} />
                {cityHasError && <p className={styles.error_text}>City must not be empty!</p>}
            </div>
            <div className={styles.actions}>
                <Button type='submit'>Confirm</Button>
                <Button type='button' clickFn={onClose}>Cancel</Button>
            </div>

        </form>
    );
}

export default Form;