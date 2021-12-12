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
                <p>Vege City is a vegetable restaurant-bar run by people who love health-friendly, fresh food. Opened in 2014, Vege City has been offering a tasty dishes inspired by local seasonal vegetables and global flavors.  Housed in the center of  Modern City Gallery is one of the main center of vegetable cooking.</p>
            </div>


        </section>
    );
}

export default About;