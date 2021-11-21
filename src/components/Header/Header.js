import React from 'react';
import HeaderCart from './HeaderCart/HeaderCart';
import styles from './Header.module.scss';


const Header = ({ showCart }) => {
    return (
        <div className={styles.header_wrapper}>
            <div className={styles.logo}>
                <h3 >Vege <br /> City</h3>
            </div>
            <HeaderCart showCart={showCart} />

        </div>
    );
}

export default Header;