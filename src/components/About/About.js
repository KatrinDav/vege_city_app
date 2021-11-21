import React from 'react';
import Title from '../Title/Title';
import styles from './About.module.scss';
import image from '../../assets/about.jpg';

const About = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.image}>
                <img src={image} alt="about image" />
            </div>
            <div className={styles.description}>
                <Title sbTitle='About us' title='We cook the best green food in the city' />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet vero architecto temporibus numquam. Dolore perferendis iure tenetur suscipit distinctio cupiditate esse est omnis. Fuga nulla quia aliquid saepe quae?</p>
            </div>


        </section>
    );
}

export default About;