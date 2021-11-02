import React from 'react';
import styles from './Intro.module.scss';
import image from '../../assets/home.png';

const Intro = () => {
    return (
        <section className={styles.wrapper}>

            <div className={styles.title}>
                <h1>Vege City</h1>
                <h2>Try the best green <br />
                    food of the week
                </h2>
            </div>

            <div className={styles.image}>
                <img src={image} alt="main photo" />
            </div>

        </section>
    );
}

export default Intro;