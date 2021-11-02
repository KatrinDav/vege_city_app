import React from 'react';
import cart from '../../../assets/shopping-cart.png';
import styles from './HeaderCart.module.scss';

const HeaderCart = () => {
    return (
        <div className={styles.cart_wrapper}>
            <div className={styles.icon}>
                <img src={cart} alt="" />
            </div>
            <span>1</span>
        </div>
    );
}

export default HeaderCart;