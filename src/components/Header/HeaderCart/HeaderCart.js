import React, { useContext } from 'react';
import CartContext from '../../../store/cart_context';
import cart from '../../../assets/shopping-cart.png';
import styles from './HeaderCart.module.scss';

const HeaderCart = ({ showCart }) => {
    const context = useContext(CartContext);
    const numberOfItems = context.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);
    return (
        <div className={styles.cart_wrapper} onClick={showCart}>
            <div className={styles.icon}>
                <img src={cart} alt="" />
            </div>
            <span className={styles.badge}>{numberOfItems}</span>
        </div>
    );
}

export default HeaderCart;