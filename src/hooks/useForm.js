import { useState } from 'react';


const useForm = (validateFn) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const isValid = validateFn(enteredValue);
    const hasError = !enteredValue && isTouched;

    const handleInputChange = (e) => {
        setEnteredValue(e.target.value);
    }

    const handleBlurInput = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        enteredValue,
        isTouched,
        isValid,
        hasError,
        handleInputChange,
        handleBlurInput,
        reset,
    }
}

export default useForm;