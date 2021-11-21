import React, { useContext } from 'react';
import CartContext from '../../store/cart_context';
import Modal from '../Modal/Modal';
import CartItem from './CartItem/CartItem';
import styles from './Cart.module.scss';

const Cart = ({ hideCart }) => {
    const context = useContext(CartContext);
    const total = context.totalAmount.toFixed(2);

    const hasItems = context.items.length > 0;

    const removeItemHandler = (id) => {
        context.removeItem(id)
    }

    const addItemHandler = (item) => {
        context.addItem({ ...item, amount: 1 })
    }

    return (
        <Modal>
            <ul className={styles.cart_items}>
                {context.items.map((item => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        onRemove={() => removeItemHandler(item.id)}
                        onAdd={() => addItemHandler(item)} />
                )))}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span> $ {total}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.button__alt} onClick={hideCart}>Close</button>
                {hasItems && <button className={styles.button__alt}>Order</button>}

            </div>
        </Modal>
    );
}

export default Cart;