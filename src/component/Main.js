import React, { useState } from 'react'
import './Main.css'
import Header from './Header';
import BannerSection from './BannerSection';
import CategorySection from './CategorySection';
import OutdoorPlantSection from './OutdoorPlantSection';
import Seeds from './Seeds';
import Footer from './Footer';
import Cart from './Cart';

function Main() {

    const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
        <Header cart={cart}/>
      <BannerSection />
      <CategorySection />
      <OutdoorPlantSection  addToCart={addToCart}/>
      <Seeds/>
      <section className="cart" id="cart"></section>
      <Cart cartItems={cart} />
      <Footer/>
    </div>
  )
}

export default Main