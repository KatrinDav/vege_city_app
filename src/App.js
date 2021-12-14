import React, { useState } from 'react';
import CartProvider from './store/CartProvider';
import About from './components/About/About';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Cart from './components/Cart/Cart';
import Offers from './components/Offers/Offers';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';


function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCart = () => {
    setIsCartVisible(true)
  }
  const hideCart = () => {
    setIsCartVisible(false)
  }
  return (
    <CartProvider>
      <Header showCart={showCart} />
      {isCartVisible && <Cart hideCart={hideCart} />}
      <Intro />
      <About />
      <Offers />
      <Menu />
      <Footer />
    </CartProvider>
  );
}

export default App;
