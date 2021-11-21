import React from 'react';
import Title from '../Title/Title';
import ItemOffers from './ItemOffers/ItemOffers';
import styles from './Offers.module.scss';
import dish from '../../assets/dish.svg';
import truck from '../../assets/truck.svg';
import eco from '../../assets/eco.svg';



const Offers = () => {
    return (
        <section className={styles.wrapper}>
            <Title sbTitle='Offering' title='Our amazing services' />
            <div className={styles.items_container}>
                <ItemOffers image={dish} title='Excellent food' description='We offer our clients excellent quality services for many years, with the best and delicious food in the city.' />
                <ItemOffers image={truck} title='Fast deliver' description='We offer our clients excellent quality services for many years, with the best and delicious food in the city.' />
                <ItemOffers image={eco} title='Excellent food' description='We offer our clients excellent quality services for many years, with the best and delicious food in the city.' />
            </div>

        </section>
    );
}

export default Offers;