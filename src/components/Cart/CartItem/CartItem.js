import React from 'react';
import Button from '../../Button/Button';
import styles from './CartItem.module.scss';

const CartItem = ({ price, name, amount, onRemove, onAdd }) => {
    // const fixed_price = `$${price.toFixed(2)}`;
    return (
        <li className={styles.cart_item}>
            <div >
                <h2>{name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{price}</span>
                    <span className={styles.amount}>x {amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <Button clickFn={onRemove} type='button' small={true}>−</Button>
                <Button clickFn={onAdd} type='button' small={true}>+</Button>
            </div>
        </li>
    );
}

export default CartItem;