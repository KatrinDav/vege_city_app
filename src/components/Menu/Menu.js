import React, { useEffect, useState } from 'react';
import ItemMenu from './ItemMenu/ItemMenu';
import Title from '../Title/Title';
import Loader from '../Loader/Loader';
import styles from './Menu.module.scss';

// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Vege Ramen',
//         description: 'Creamy konbu ramen with shiitake mushrooms, edamame, pak choi, baked sweet potato, tofu, sprouts',
//         price: 12.99,
//     },
//     {
//         id: 'm2',
//         name: 'Hummus with tomatoes',
//         description: 'Our speciality with dried tomatoes',
//         price: 16.59,
//     },
//     {
//         id: 'm3',
//         name: 'Vegan Wrap',
//         description: 'Marinated seitan, lettuce, cucumber, tomato, and pepper',
//         price: 12.95,
//     },
//     {
//         id: 'm4',
//         name: 'Cream sweet potato',
//         description: 'Baked sweet potatoes, coconut milk and ginger',
//         price: 18.99,
//     },
//     {
//         id: 'm5',
//         name: 'Spaghetti Bolognese',
//         description: 'Soy spaghetti bolognese in tomato sauce with vegan parmesan and cherry tomatoes',
//         price: 15.25,
//     },
//     {
//         id: 'm6',
//         name: 'Noodle Teriyaki',
//         description: 'Udon noodles with sprouts, mun mushrooms, edamame, tofu, carrots, red onion, sugar peas and sesame',
//         price: 17.65,
//     },
// ];

const API_URL = 'https://vege-city-app-default-rtdb.europe-west1.firebasedatabase.app/meals.json';

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const loadedMeals = [];
                for (const key in data) {
                    loadedMeals.push({
                        id: key,
                        name: data[key].name,
                        description: data[key].description,
                        price: data[key].price
                    })
                }
                setMenu(loadedMeals);
            })
            .catch(error => {
                setError(error)
                setIsLoading(false)
                console.log(error.message)
            })
        setIsLoading(false)

    }, []);


    return (
        <>
            <Title sbTitle='Menu' title='Specials of the week' />

            <section className={styles.menu_container}>
                {error && <p>Something went wrong: {error.message}!</p>}
                {isLoading && <Loader />}
                {menu.map(item => (
                    <ItemMenu
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </section>
        </>
    );
}

export default Menu;