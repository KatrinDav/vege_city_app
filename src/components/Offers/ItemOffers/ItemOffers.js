import React from 'react';
import styles from './ItemOffers.module.scss';

const ItemOffers = ({ image, title, description }) => {
    return (
        <div className={styles.item_content}>
            <img src={image} alt="" />
            <h3 className={styles.title}>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default ItemOffers;