import React, { useState, useEffect } from 'react';
import CartProvider from './store/CartProvider';
import About from './components/About/About';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Cart from './components/Cart/Cart';
import Offers from './components/Offers/Offers';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Aos from 'aos';
import "aos/dist/aos.css";


function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCart = () => {
    setIsCartVisible(true)
  }
  const hideCart = () => {
    setIsCartVisible(false)
  }

  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])


  return (
    <CartProvider>
      <Header showCart={showCart} />
      {isCartVisible && <Cart hideCart={hideCart} />}
      <div data-aos="fade-down" data-aos-delay="400">
        <Intro />
      </div>

      <div data-aos="fade-up">
        <About />
      </div>

      <div data-aos="fade-up">
        <Offers />
      </div>

      <div data-aos="fade-up">
        <Menu />
      </div>

      <div data-aos="fade-up" data-aos-delay="1100">
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
