import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <section className={styles.wrapper}>
            <h3>Vege City</h3>
            <div>
                <p>Hunimgton 22 Str, New York</p>
                <p>vegecity@gmail.com</p>
                <p>555 021 877</p>

            </div>
        </section>
    );
}

export default Footer;