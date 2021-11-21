import React from 'react';
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
                <button onClick={onRemove}>−</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    );
}

export default CartItem;