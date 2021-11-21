import React from 'react';
import styles from './Title.module.scss';

const Title = ({ sbTitle, title }) => {
    return (
        <div className={styles.section_title}>
            <h3 className={styles.subtitle}>{sbTitle}</h3>
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
}

export default Title;