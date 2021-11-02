import React from 'react';
import HeaderCart from './HeaderCart/HeaderCart';
import styles from './Header.module.scss';


const Header = () => {
    return (
        <div className={styles.header_wrapper}>
            <div className={styles.logo}>
                <h3 >Vege <br /> City</h3>
            </div>
            <HeaderCart />

        </div>
    );
}

export default Header;