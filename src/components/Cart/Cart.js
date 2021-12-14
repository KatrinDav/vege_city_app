import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart_context';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import CartItem from './CartItem/CartItem';
import Form from './Form/Form';
import styles from './Cart.module.scss';


const ORDERS_API = 'https://vege-city-app-default-rtdb.europe-west1.firebasedatabase.app/orders.json';

const Cart = ({ hideCart }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
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

    const confirmOrder = async (userData) => {
        await fetch(ORDERS_API, {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                order: context.items
            })
        })
        context.clearCart()
        setIsFormVisible(false)
        setDidSubmit(true)
    }

    const SubmitMessage = () => {
        return (
            <>
                <h2 className={styles.message}>Your order has been send! :)</h2>
                <div className={styles.actions}>
                    <Button clickFn={hideCart} type='button'>Close</Button>

                </div>
            </>
        )
    }


    const ModalContent = () => {
        return (
            <>
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
                {isFormVisible && <Form onClose={hideCart} onConfirm={confirmOrder} />}

                {!isFormVisible && (
                    <div className={styles.actions}>
                        <Button clickFn={hideCart} type='button'>Close</Button>
                        {hasItems && <Button clickFn={showForm} type='button'>Order</Button>}
                    </div>
                )}

            </>
        )
    }

    return (
        <Modal>
            {didSubmit && <SubmitMessage />}
            {!didSubmit && <ModalContent />}
        </Modal>
    );
}

export default Cart;