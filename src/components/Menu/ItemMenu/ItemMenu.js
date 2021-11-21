import React, { useContext } from 'react';
import CartContext from '../../../store/cart_context';
import ItemForm from '../ItemForm/ItemForm';
import styles from './ItemMenu.module.scss';

const ItemMenu = ({ name, description, price, id }) => {
    const context = useContext(CartContext);

    const addToCartHandler = (amount) => {
        context.addItem({
            id: id,
            name: name,
            price: price,
            amount: amount,
        })
    }
    return (
        <div className={styles.item_wrapper}>
            <div className={styles.name_wrapper}>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>$ {price}</div>
            </div>
            <div className={styles.form} >
                <ItemForm onAddToCart={addToCartHandler} />
            </div>

        </div>
    );
}

export default ItemMenu;