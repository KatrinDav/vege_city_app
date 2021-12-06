import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart_context';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import CartItem from './CartItem/CartItem';
import Form from './Form/Form';
import styles from './Cart.module.scss';

const Cart = ({ hideCart }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const context = useContext(CartContext);
    const total = context.totalAmount.toFixed(2);

    const hasItems = context.items.length > 0;

    const removeItemHandler = (id) => {
        context.removeItem(id)
    }

    const addItemHandler = (item) => {
        context.addItem({ ...item, amount: 1 })
    }

    const showForm = () => {
        setIsFormVisible(true)
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
            {isFormVisible && <Form onClose={hideCart} />}

            {!isFormVisible && (
                <div className={styles.actions}>
                    <Button clickFn={hideCart} type='button'>Close</Button>
                    {hasItems && <Button clickFn={showForm} type='button'>Order</Button>}
                </div>
            )}


        </Modal>
    );
}

export default Cart;