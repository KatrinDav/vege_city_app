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
                <ItemOffers image={dish} title='Excellent food' description='We prepare our dishes with the most demanding customers in mind, paying attention to the highest quality ingredients.' />
                <ItemOffers image={truck} title='Fast deliver' description='For those who cannot reach us, we offer the option of ordering meals with city-wide delivery - every day.' />
                <ItemOffers image={eco} title='Fresh&Eco' description='We obtain ingredients for our dishes from proven suppliers of organic food with a guarantee of the highest quality.' />
            </div>

        </section>
    );
}

export default Offers;